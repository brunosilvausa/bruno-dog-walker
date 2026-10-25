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
