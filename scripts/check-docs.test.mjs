import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { validateDocs } from "./check-docs.mjs";

function fixture(t, files) {
  const root = mkdtempSync(join(tmpdir(), "bdw-docs-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const [name, content] of Object.entries(files)) {
    const path = join(root, name);
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, content);
  }
  return root;
}

test("accepts owned document links, images, root paths, code lines and explicit IDs", t => {
  const root = fixture(t, {
    "README.md": "[Guide](/docs/guide.md#café--pets) ![Logo](assets/logo.svg) [code](src/a.ts:12) [ID](docs/guide.md#custom)",
    "docs/guide.md": "# Café & Pets\n<a id=\"custom\"></a>\n[Home](../README.md)",
    "design-system/README.md": "[Guide](../docs/guide.md)",
    "assets/logo.svg": "<svg/>", "src/a.ts": "export {};",
  });
  assert.deepEqual(validateDocs(root), []);
});

test("reports missing files and fragments with their source", t => {
  const root = fixture(t, {
    "README.md": "[missing](docs/missing.md)\n[fragment](docs/guide.md#absent)",
    "docs/guide.md": "# Present",
  });
  const errors = validateDocs(root);
  assert.equal(errors.length, 2);
  assert.match(errors[0], /README\.md:1.*missing/);
  assert.match(errors[1], /README\.md:2.*absent/);
});

test("handles duplicate heading slugs and encoded destinations", t => {
  const root = fixture(t, {
    "README.md": "[first](<docs/Pet Guide.md#hello>) [second](docs/Pet%20Guide.md#hello-1) [third](docs/Pet%20Guide.md#hello-2) [Unicode](docs/Pet%20Guide.md#ol%C3%A1)",
    "docs/Pet Guide.md": "# Hello\n## Hello\n# Hello\n# Olá",
  });
  assert.deepEqual(validateDocs(root), []);
});

test("preserves literal underscores, Setext headings and balanced parentheses in paths", t => {
  const root = fixture(t, {
    "README.md": "[code](docs/a(b).md#pet_name) [Setext](docs/a(b).md#setext-title) [formatted](docs/a(b).md#simple-emphasis)",
    "docs/a(b).md": "# pet_name\nSetext title\n============\n# Simple _emphasis_",
  });
  assert.deepEqual(validateDocs(root), []);
});

test("does not mistake prose or inline code IDs for HTML anchors", t => {
  const root = fixture(t, { "README.md": "# Intro\n`<span id=\"fake\">`\nid=prose\n[x](#fake) [y](#prose)" });
  assert.equal(validateDocs(root).length, 2);
});

test("ignores code examples, external links, private evidence and unowned vendor documents", t => {
  const root = fixture(t, {
    "README.md": "```md\n[bad](missing.md)\n```\n~~~md\n[bad](missing2.md)\n~~~\n`[bad](inline.md)`\n[web](https://example.com/nope) [mail](mailto:a@example.com) [evidence](.local-evidence/past/result.json)\n`historical-name.ts`",
    ".agents/skills/demo.md": "[bad](missing.md)",
    "design-system/references/demo.md": "[bad](missing.md)",
    "docs/generated/example.md": "[bad](missing.md)",
    "docs/ignored/example.md": "[bad](missing.md)",
  });
  assert.deepEqual(validateDocs(root), []);
});

test("does not resolve personal absolute paths or escaping paths against the host", t => {
  const root = fixture(t, { "README.md": "[host](/etc/hosts) [escape](../outside.md)" });
  assert.equal(validateDocs(root).length, 2);
});

test("reports malformed URL encoding instead of crashing", t => {
  const root = fixture(t, { "README.md": "[broken](docs/%zz.md)" });
  assert.match(validateDocs(root)[0], /invalid URL encoding/);
});

test("CLI returns failure for a missing local link and success after repair", t => {
  const root = fixture(t, { "README.md": "[guide](docs/guide.md)" });
  const script = fileURLToPath(new URL("./check-docs.mjs", import.meta.url));
  const run = () => spawnSync(process.execPath, [script], { cwd: root, encoding: "utf8" });
  assert.equal(run().status, 1);
  mkdirSync(join(root, "docs"));
  writeFileSync(join(root, "docs/guide.md"), "# Guide");
  assert.equal(run().status, 0);
});
