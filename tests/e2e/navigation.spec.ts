import { test, expect, openLanding, expectFocusClearOfHeader, observeBrowserHealth } from "./fixtures";

test("@critical keyboard skip link, anchors and contact destination remain usable", async ({ page, browserName }) => {
  await openLanding(page);
  await page.keyboard.press(browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  const missing = await page.locator('a[href^="#"]').evaluateAll(links => links
    .map(link => link.getAttribute("href") ?? "")
    .filter(href => href.length < 2 || !document.getElementById(href.slice(1))));
  expect(missing.length, "Every local link must have a destination").toBe(0);

  const menu = page.locator(".lp-mobile-menu");
  if (await menu.isVisible()) {
    await menu.locator("summary").click();
    await menu.getByRole("link", { name: "Let’s meet your dog" }).click();
  } else await page.locator("header").getByRole("link", { name: "Let’s meet", exact: true }).click();
  await expect(page).toHaveURL(/#contact$/);
  await page.getByLabel("Your name", { exact: false }).focus();
  await expectFocusClearOfHeader(page);
  await page.keyboard.press("Tab");
  await expect(page.getByLabel("Email address", { exact: false })).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.getByLabel("Your name", { exact: false })).toBeFocused();
});

test("@critical mobile disclosure preserves activation, Escape and focus transitions", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await openLanding(page);
  const menu = page.locator(".lp-mobile-menu");
  const summary = menu.locator("summary");
  await summary.click();
  await expect(menu).toHaveAttribute("open", "");
  await summary.dispatchEvent("focusout", { relatedTarget: null });
  await expect(menu).toHaveAttribute("open", "");
  await menu.getByRole("link", { name: "Good questions" }).click();
  await expect(page).toHaveURL(/#faq$/);
  await expect(menu).not.toHaveAttribute("open");

  await summary.click();
  await menu.getByRole("link", { name: "The walks" }).focus();
  await page.keyboard.press("Escape");
  await expect(menu).not.toHaveAttribute("open");
  await expect(summary).toBeFocused();
  await summary.click();
  await page.locator(".lp-motion-toggle").focus();
  await expect(menu).not.toHaveAttribute("open");
});

test("@critical reading, navigation and FAQ work without JavaScript; preview cannot submit", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, baseURL, viewport: { width: 390, height: 844 } });
  let health: ReturnType<typeof observeBrowserHealth> | undefined;
  try {
    const page = await context.newPage();
    health = observeBrowserHealth(page);
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByLabel("Your name", { exact: false })).toBeDisabled();
    await expect(page.getByRole("button", { name: "Review request" })).toBeDisabled();
    const menu = page.locator(".lp-mobile-menu");
    await menu.locator("summary").click();
    await menu.getByRole("link", { name: "The walks" }).click();
    await expect(page).toHaveURL(/#walks$/);
    await page.locator("#faq summary").first().click();
    await expect(page.locator("#faq details").first()).toHaveAttribute("open", "");
  } finally {
    try { health?.stop(); health?.assertHealthy(); } finally { await context.close(); }
  }
});
