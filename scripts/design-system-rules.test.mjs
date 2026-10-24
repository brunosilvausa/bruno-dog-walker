import { test } from "node:test";
import assert from "node:assert/strict";
import { checkCss } from "./check-design-system.mjs";

test("reject raw color, spacing, font and radius values outside tokens", () => {
  for (const css of ["a{color:#fff}", "a{padding:12px}", "a{font-family:Arial}", "a{border-radius:8px}", "a{margin:1rem}"]) {
    assert.ok(checkCss(css).length > 0, css);
  }
});
test("accept token references, structural zero and inherited color", () => {
  assert.deepEqual(checkCss("a{padding:var(--ds-space-4);color:var(--ds-text);margin:0;border:var(--ds-border-width) solid currentColor;border-radius:var(--ds-radius-card)}"), []);
});
