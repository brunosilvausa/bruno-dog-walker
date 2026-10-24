import assert from "node:assert/strict";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import { selectBrowserSuite } from "./quality-scope.mjs";

test("selects full compatibility for application, browser tests and configuration", () => {
  for (const path of [
    "src/app/page.tsx", "src/lib/utils.ts", "design-system/tokens.css",
    "design-system/components/action.tsx", "design-system/README.md", "tests/e2e/contact.spec.ts",
    "playwright.config.ts", "next.config.ts", "package.json", "pnpm-lock.yaml", "eslint.config.mjs",
    "eslint.typed.config.mjs", "tsconfig.json", "vitest.config.mts", ".github/workflows/quality.yml",
  ]) assert.equal(selectBrowserSuite([path]), "full", path);
  assert.equal(selectBrowserSuite(["docs/quality.md", "./src/app/page.tsx"]), "full");
  assert.equal(selectBrowserSuite(["src\\app\\page.tsx"]), "full");
});

test("keeps critical coverage for documentation, historical references and other scripts", () => {
  for (const paths of [[], ["README.md"], ["docs/quality.md"], ["scripts/check-docs.mjs"],
    ["design-system/references/example.html"], ["unknown/path.txt"]]) {
    assert.equal(selectBrowserSuite(paths), "critical", paths.join(", "));
  }
});

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "bdw-quality-scope-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const git = (...args) => execFileSync("git", [
    "-c", `core.hooksPath=${join(root, "no-hooks")}`, "-c", "commit.gpgsign=false",
    "-c", "user.name=BDW QA", "-c", "user.email=qa@example.invalid", ...args,
  ], { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  const write = (path, content) => {
    const file = join(root, path); mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, content);
  };
  const commit = () => { git("add", "--all"); git("commit", "-m", "Synthetic fixture"); return git("rev-parse", "HEAD"); };
  git("init", "--quiet");
  write("README.md", "# Fixture"); write("src/example.ts", "export const value = 1;\n");
  const base = commit();
  const script = fileURLToPath(new URL("./quality-scope.mjs", import.meta.url));
  const run = baseSha => spawnSync(process.execPath, [script], {
    cwd: root, encoding: "utf8", env: { ...process.env, QUALITY_BASE_SHA: baseSha ?? "" },
  });
  return { root, base, write, commit, run };
}

function expectSuite(result, suite) {
  assert.equal(result.status, 0);
  assert.equal(result.stdout, `${suite}\n`);
  assert.equal(result.stderr, "");
}

test("CLI compares valid commit bases and selects documentation versus source changes", t => {
  const f = fixture(t);
  f.write("docs/guide.md", "# Guide"); f.commit();
  expectSuite(f.run(f.base), "critical");
  f.write("src/example.ts", "export const value = 2;\n"); f.commit();
  expectSuite(f.run(f.base), "full");
});

test("CLI sees removed source paths even when Git could classify a rename to docs", t => {
  const f = fixture(t);
  mkdirSync(join(f.root, "docs"));
  renameSync(join(f.root, "src/example.ts"), join(f.root, "docs/example.ts")); f.commit();
  expectSuite(f.run(f.base), "full");
});

test("CLI falls back to full for missing, new-branch, malformed and unavailable bases", t => {
  const f = fixture(t);
  for (const base of [undefined, "0".repeat(40), "not-a-sha", "--output=unsafe", "f".repeat(40)]) {
    expectSuite(f.run(base), "full");
  }
});
