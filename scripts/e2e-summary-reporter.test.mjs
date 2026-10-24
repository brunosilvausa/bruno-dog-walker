import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import SummaryReporter from "./e2e-summary-reporter.mjs";

test("public summary counts failures without copying inputs, error bodies or attachments", async () => {
  const folder = mkdtempSync(join(tmpdir(), "bdw-summary-"));
  try {
    const outputFile = join(folder, "nested", "summary.json");
    const reporter = new SummaryReporter({ outputFile });
    const privateValue = "NEVER_COPY_CONTACT_BODY";
    reporter.onTestEnd({ title: privateValue }, { status: "passed", stdout: [privateValue] });
    reporter.onTestEnd({}, { status: "failed", error: { message: privateValue }, attachments: [privateValue] });
    await reporter.onEnd({ status: "failed", duration: 123, startTime: new Date("2026-10-24T00:00:00Z") });
    const raw = readFileSync(outputFile, "utf8");
    const summary = JSON.parse(raw);
    assert.deepEqual(summary.counts, { passed: 1, failed: 1 });
    assert.equal(summary.status, "failed");
    assert.equal(summary.durationMs, 123);
    assert.equal(raw.includes(privateValue), false);
  } finally { rmSync(folder, { recursive: true, force: true }); }
});

test("a selected critical skip fails the gate while a declared extended skip remains visible", async () => {
  const folder = mkdtempSync(join(tmpdir(), "bdw-skip-"));
  try {
    const result = { status: "passed", duration: 1, startTime: new Date() };
    const critical = new SummaryReporter({ outputFile: join(folder, "critical.json") });
    critical.onTestEnd({ tags: ["@critical"] }, { status: "skipped" });
    assert.equal((await critical.onEnd(result)).status, "failed");
    const extended = new SummaryReporter({ outputFile: join(folder, "extended.json") });
    extended.onTestEnd({ tags: ["@extended"] }, { status: "skipped" });
    assert.equal((await extended.onEnd(result)).status, "passed");
  } finally { rmSync(folder, { recursive: true, force: true }); }
});

test("summary identifies only allowlisted browser projects and scope tags", async () => {
  const folder = mkdtempSync(join(tmpdir(), "bdw-scope-"));
  try {
    const outputFile = join(folder, "summary.json");
    const reporter = new SummaryReporter({ outputFile });
    reporter.onBegin({}, { suites: [
      { project: () => ({ name: "webkit-mobile" }) }, { project: () => ({ name: "PRIVATE_PROJECT" }) },
    ], allTests: () => [{ tags: ["@critical", "PRIVATE_TAG"] }] });
    await reporter.onEnd({ status: "passed", duration: 1, startTime: new Date() });
    const raw = readFileSync(outputFile, "utf8");
    const summary = JSON.parse(raw);
    assert.deepEqual(summary.projects, ["webkit-mobile", "other"]);
    assert.deepEqual(summary.scope, ["critical"]);
    assert.equal(summary.selectedTests, 1);
    assert.equal(raw.includes("PRIVATE_"), false);
  } finally { rmSync(folder, { recursive: true, force: true }); }
});
