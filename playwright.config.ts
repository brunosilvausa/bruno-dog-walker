import { defineConfig } from "@playwright/test";
import { execFileSync } from "node:child_process";
import { createHash, randomUUID } from "node:crypto";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const output = resolve(".local-evidence/e2e", `${Date.now()}-${randomUUID()}`);
const baseURL = "http://127.0.0.1:3100";
const commit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8" }).trim();
const sourceDirty = Boolean(execFileSync("git", ["status", "--porcelain"], { encoding: "utf8" }).trim());
const lockHash = createHash("sha256").update(readFileSync("pnpm-lock.yaml")).digest("hex");

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  workers: 2,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  outputDir: resolve(output, "private"),
  preserveOutput: "failures-only",
  reporter: [["list"], [resolve("scripts/e2e-summary-reporter.mjs"), { outputFile: resolve(output, "summary.json"), commit, sourceDirty, lockHash }]],
  use: {
    baseURL, serviceWorkers: "block", reducedMotion: "no-preference",
    trace: "off", video: "off", screenshot: "off",
  },
  projects: (["chromium", "firefox", "webkit"] as const).flatMap(browserName => [
    { name: `${browserName}-desktop`, use: { browserName, viewport: { width: 1440, height: 1000 } } },
    { name: `${browserName}-mobile`, use: { browserName, viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: browserName !== "firefox" } },
  ]),
  webServer: {
    command: "pnpm start --port 3100",
    url: baseURL,
    reuseExistingServer: false,
    timeout: 30_000,
    gracefulShutdown: { signal: "SIGTERM", timeout: 5_000 },
    stdout: "ignore", stderr: "pipe",
  },
});
