import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The CI allowlist publishes this bounded summary, never test bodies or traces.
export default class SummaryReporter {
  counts = {};
  criticalIncomplete = 0;
  projects = [];
  scope = [];
  selectedTests = 0;
  constructor({ outputFile, commit = null, sourceDirty = null, lockHash = null }) {
    this.outputFile = outputFile;
    this.commit = commit;
    this.sourceDirty = sourceDirty;
    this.lockHash = lockHash;
  }
  onBegin(_config, suite) {
    this.projects = suite.suites.map(project => project.project()?.name ?? "other")
      .map(name => /^(chromium|firefox|webkit)-(desktop|mobile)$/.test(name) ? name : "other");
    const tests = suite.allTests();
    this.selectedTests = tests.length;
    this.scope = ["critical", "extended"].filter(tag => tests.some(test => test.tags.includes(`@${tag}`)));
  }
  onTestEnd(test, result) {
    const status = ["passed", "failed", "timedOut", "skipped", "interrupted"].includes(result.status) ? result.status : "failed";
    this.counts[status] = (this.counts[status] ?? 0) + 1;
    if (test.tags?.includes("@critical") && ["skipped", "interrupted"].includes(status)) this.criticalIncomplete++;
  }
  async onEnd(result) {
    const status = this.criticalIncomplete ? "failed"
      : ["passed", "failed", "timedout", "interrupted"].includes(result.status) ? result.status : "failed";
    mkdirSync(dirname(this.outputFile), { recursive: true });
    writeFileSync(this.outputFile, JSON.stringify({
      status, criticalIncomplete: this.criticalIncomplete, projects: this.projects, scope: this.scope, selectedTests: this.selectedTests,
      counts: this.counts, durationMs: result.duration, startedAt: result.startTime.toISOString(),
      commit: this.commit, sourceDirty: this.sourceDirty, lockHash: this.lockHash, node: process.version,
    }, null, 2) + "\n");
    return { status };
  }
}
