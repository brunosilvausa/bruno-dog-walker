import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

const workflow = readFileSync(new URL("../.github/workflows/quality.yml", import.meta.url), "utf8");
// shortcut: literal indentation only; update extraction if this step's YAML shape changes.
const match = workflow.match(/      - name: Select impact-driven browser coverage\n([\s\S]*?)(?=      - name:)/);
assert.ok(match, "Expected named coverage step");
const block = match[1].match(/        run: \|\n((?:          .*\n)+)$/);
assert.ok(block, "Expected literal run block with ten-space indentation");
const script = block[1].replace(/^ {10}/gm, "");

const group = workflow.match(/^  group: (.+)$/m)?.[1];
assert.ok(group, "Expected concurrency group");
// shortcut: string paths and fallback only; extend explicitly if the workflow uses other expressions.
function concurrencyGroup(context) {
  return group.replace(/\$\{\{ (.*?) \}\}/g, (_, expression) => {
    const keys = expression.split(" || ");
    for (const key of keys) assert.ok(Object.hasOwn(context, key), `Unsupported context: ${key}`);
    return keys.map(key => context[key]).find(Boolean) ?? "";
  });
}

function context(event, repository = "owner/repo", branch = "feature") {
  return {
    "github.workflow": "Quality", "github.event_name": event,
    "github.repository": repository,
    "github.event.pull_request.head.repo.full_name": event === "pull_request" ? repository : "",
    "github.head_ref": event === "pull_request" ? branch : "",
    "github.ref_name": event === "pull_request" ? "2/merge" : branch,
  };
}

test("concurrency isolates events on the same source branch", () => {
  const groups = ["push", "pull_request", "workflow_dispatch"].map(event => concurrencyGroup(context(event)));
  assert.equal(new Set(groups).size, 3);
});

test("concurrency stays stable for repeated same-event source revisions", () => {
  for (const event of ["push", "pull_request", "workflow_dispatch"]) {
    assert.equal(concurrencyGroup(context(event)), concurrencyGroup({ ...context(event), "github.ref_name":
      event === "pull_request" ? "3/merge" : "feature" }));
  }
  assert.match(workflow, /^  cancel-in-progress: true$/m);
});

test("concurrency isolates source branches and repositories including forks", () => {
  for (const event of ["push", "pull_request", "workflow_dispatch"]) {
    const original = concurrencyGroup(context(event));
    assert.notEqual(original, concurrencyGroup(context(event, "owner/repo", "other")));
    assert.notEqual(original, concurrencyGroup(context(event, "fork/repo")));
  }
  assert.notEqual(concurrencyGroup(context("pull_request")), concurrencyGroup({
    ...context("pull_request"), "github.event.pull_request.head.repo.full_name": "fork/repo",
  }));
});

function run(t, { event = "push", manual = "", output = "critical\n", exit = 0 } = {}) {
  const root = mkdtempSync(join(tmpdir(), "bdw-workflow-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const executable = join(root, "node");
  writeFileSync(executable, '#!/bin/bash\nprintf "%s" "$PROBE_OUTPUT"\nexit "$PROBE_EXIT"\n');
  chmodSync(executable, 0o700);
  const destination = join(root, "output");
  writeFileSync(destination, "");
  const result = spawnSync("/bin/bash", ["-e", "-o", "pipefail", "-c", script], {
    encoding: "utf8", timeout: 5000,
    env: { ...process.env, PATH: `${root}:${process.env.PATH}`, GITHUB_OUTPUT: destination,
      QUALITY_EVENT: event, QUALITY_MANUAL_SUITE: manual, PROBE_OUTPUT: output, PROBE_EXIT: String(exit) },
  });
  assert.ifError(result.error);
  return { status: result.status, output: readFileSync(destination, "utf8") };
}

for (const suite of ["critical", "full"]) {
  test(`automatic ${suite} publishes exact suite`, t => {
    assert.deepEqual(run(t, { output: `${suite}\n` }), { status: 0, output: `suite=${suite}\n` });
  });
  test(`manual ${suite} bypasses selector and publishes exact suite`, t => {
    assert.deepEqual(run(t, { event: "workflow_dispatch", manual: suite, exit: 42 }),
      { status: 0, output: `suite=${suite}\n` });
  });
}

for (const output of ["", "unknown\n", "critical\nfull\n"]) {
  test(`invalid automatic output ${JSON.stringify(output)} fails without publication`, t => {
    const result = run(t, { output });
    assert.notEqual(result.status, 0);
    assert.equal(result.output, "");
  });
}
for (const manual of ["", "unknown", "critical\nfull"]) {
  test(`invalid manual input ${JSON.stringify(manual)} fails without publication`, t => {
    const result = run(t, { event: "workflow_dispatch", manual });
    assert.notEqual(result.status, 0);
    assert.equal(result.output, "");
  });
}
for (const output of ["", "critical\n"]) {
  test(`selector failure with output ${JSON.stringify(output)} fails without publication`, t => {
    const result = run(t, { output, exit: 42 });
    assert.equal(result.status, 42);
    assert.equal(result.output, "");
  });
}
