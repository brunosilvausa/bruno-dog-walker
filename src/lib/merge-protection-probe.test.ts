import { expect, test } from "vitest";

test("synthetic merge protection probe intentionally fails; never merge", () => {
  expect("blocked", "SYNTHETIC_MERGE_PROTECTION_PROBE").toBe("allowed");
});
