import { test, expect, contact, openLanding, fillContact, expectFocusClearOfHeader } from "./fixtures";
import { applicationStorageCounts, containsContactMarker, guardContactData } from "./observations";

test("@critical invalid contact input preserves drafts and exposes linked errors", async ({ page }) => {
  await openLanding(page);
  await page.getByRole("button", { name: "Review request" }).click();
  await expect(page.getByLabel("Your name", { exact: false })).toBeFocused();
  await expect(page.locator('input[aria-invalid="true"]')).toHaveCount(4);
  await expectFocusClearOfHeader(page);
  const descriptions = await page.locator('input[aria-invalid="true"]').evaluateAll(inputs => inputs.every(input => {
    const errorId = `${input.id}-error`;
    return input.getAttribute("aria-invalid") === "true"
      && (input.getAttribute("aria-describedby") ?? "").split(/\s+/).includes(errorId)
      && Boolean(document.getElementById(errorId)?.textContent?.trim());
  }));
  expect(descriptions, "Every invalid control must reference a readable error").toBe(true);

  await fillContact(page);
  await page.getByLabel("Email address", { exact: false }).fill("invalid-email");
  await page.getByRole("button", { name: "Review request" }).click();
  await expect(page.getByLabel("Email address", { exact: false })).toBeFocused();
  await expect(page.getByLabel("Your name", { exact: false })).toHaveValue(contact.owner);
  await page.getByLabel("Email address", { exact: false }).fill(contact.email);
  await expect(page.getByLabel("Email address", { exact: false })).not.toHaveAttribute("aria-invalid", "true");
  await page.getByRole("button", { name: "Review request" }).click();
  await expect(page.getByRole("status")).toContainText("Nothing was sent");
  await page.getByLabel("Your name", { exact: false }).fill(`${contact.owner} edited`);
  await expect(page.locator('[role="status"]')).toHaveText("");
});

test("@critical invalid collapsed optional note opens before focusing and retains its draft", async ({ page }) => {
  await openLanding(page);
  await fillContact(page);
  const extra = page.locator(".lp-form-extra");
  await extra.locator("summary").click();
  const note = page.getByLabel("Anything else?", { exact: false });
  await note.fill(contact.message);
  await extra.locator("summary").click();
  await page.getByRole("button", { name: "Review request" }).click();
  await expect(page.getByRole("status")).toContainText("Nothing was sent");
  await extra.locator("summary").click();
  await expect(note).toHaveValue(contact.message);

  // Programmatic input bypasses the browser maxlength to exercise the actual validation boundary.
  await note.evaluate(element => {
    (element as HTMLTextAreaElement).value = "x".repeat(1501);
    element.dispatchEvent(new Event("input", { bubbles: true }));
  });
  await extra.locator("summary").click();
  await page.getByRole("button", { name: "Review request" }).click();
  await expect(extra).toHaveAttribute("open", "");
  await expect(note).toBeFocused();
  await expect(note).toHaveAttribute("aria-invalid", "true");
  await expect(note).toHaveValue("x".repeat(1501));
  await expectFocusClearOfHeader(page);
});

test("@critical valid preview attempts no transmission or application persistence", async ({ page, context, baseURL }) => {
  const markers = Object.values(contact);
  const guard = await guardContactData(context, markers, new URL(baseURL!).origin);
  try {
    await openLanding(page);
    await fillContact(page);
    await page.locator(".lp-form-extra summary").click();
    await page.getByLabel("Anything else?", { exact: false }).fill(contact.message);
    await page.getByRole("button", { name: "Review request" }).click();
    await expect(page.getByRole("status")).toContainText("Nothing was sent");
    expect(containsContactMarker(page.url(), markers), "Contact values must not enter the URL").toBe(false);
    const storage = await applicationStorageCounts(context);
    expect(storage.cookies).toBe(0);
    expect(storage.local).toBe(0);
    expect(storage.session).toBe(0);
    if (storage.databases !== null) expect(storage.databases).toBe(0);
    if (storage.caches !== null) expect(storage.caches).toBe(0);
    expect(guard.attempts(), "Blocked transmission attempts still fail the privacy contract").toBe(0);
    await page.reload();
    await expect(page.getByLabel("Your name", { exact: false })).toBeEnabled();
    // Native browser form restoration is separate from application persistence.
    await expect(page.locator('[role="status"]')).toHaveText("");
    expect(await applicationStorageCounts(context), "Reload must not introduce application persistence").toEqual(storage);
    expect(guard.attempts(), "Reload/pagehide transmission attempts still fail the privacy contract").toBe(0);
  } finally { await guard.stop(); }
});

test("@critical privacy observer rejects same-origin, cross-origin and unload attempts before transmission", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, serviceWorkers: "block" });
  const guard = await guardContactData(context, Object.values(contact), new URL(baseURL!).origin);
  try {
    const page = await context.newPage();
    await page.goto("/");
    await page.evaluate(async marker => {
      for (const [url, options] of [
        [`/qa-observer-control?value=${encodeURIComponent(marker)}`, undefined],
        ["/qa-observer-control", { method: "POST", body: JSON.stringify({ value: marker }) }],
        [`https://example.invalid/qa-observer-control?value=${encodeURIComponent(marker)}`, undefined],
      ] as const) {
        await fetch(url, options).catch(() => undefined);
      }
    }, contact.owner);
    await page.evaluate(marker => addEventListener("beforeunload", () => navigator.sendBeacon("/qa-observer-control", marker)), contact.owner);
    await page.reload();
    await expect.poll(guard.attempts, { message: "All four deliberate attempts, including unload, must be detected and blocked" }).toBe(4);
  } finally { await guard.stop(); await context.close(); }
});
