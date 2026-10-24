import { test, expect, openLanding, observeBrowserHealth } from "./fixtures";

test("@critical reveal motion preserves reading opacity throughout its entrance", async ({ page }) => {
  await openLanding(page);
  const reveal = page.locator("#walks .lp-section-heading");
  await reveal.scrollIntoViewIfNeeded();
  await expect(reveal).toHaveAttribute("data-scroll-revealed", "true");
  const opacity = await reveal.evaluate(element => {
    const entrance = element.getAnimations().find(animation => animation instanceof CSSAnimation && animation.animationName === "ds-entrance");
    if (!entrance) throw new Error("Expected an actual finite reveal animation");
    entrance.pause(); entrance.currentTime = 80;
    return getComputedStyle(element).opacity;
  });
  expect(opacity, "Essential text must retain its normal contrast during decorative motion").toBe("1");
});

test("@critical motion pause stops pointer depth and leaves content usable", async ({ page }) => {
  await openLanding(page);
  const finePointer = await page.evaluate(() => matchMedia("(hover: hover) and (pointer: fine)").matches);
  const surface = page.locator(".lp-hero-spatial");
  if (finePointer) {
    await surface.hover({ position: { x: 50, y: 80 } });
    await expect(surface).toHaveAttribute("data-tracking", "true");
  }
  const pause = page.getByRole("button", { name: "Pause motion" });
  await pause.click();
  await expect(pause).toHaveAttribute("aria-pressed", "true");
  await expect(surface).not.toHaveAttribute("data-tracking");
  await expect(page.locator(".ds-scroll-scene[data-paused]")).toHaveCount(2);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("button", { name: "Review request" })).toBeEnabled();
  await pause.click();
  await expect(pause).toHaveAttribute("aria-pressed", "false");
});

test("@critical OS reduced motion overrides pointer effects and preserves reading", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await openLanding(page);
  const surface = page.locator(".lp-hero-spatial");
  await surface.hover();
  await expect(surface).not.toHaveAttribute("data-tracking");
  await expect(page.getByRole("button", { name: "Pause motion" })).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByRole("button", { name: "Review request" })).toBeEnabled();
  const animatedContent = await page.locator("[data-reveal]").evaluateAll(elements => elements.filter(element => {
    const style = getComputedStyle(element);
    return style.visibility === "hidden" || style.opacity === "0" || style.animationName !== "none";
  }).length);
  expect(animatedContent, "Reduced-motion content must be visible without reveal animation").toBe(0);
});

test("@critical touch interaction does not activate pointer depth", async ({ browser, baseURL }) => {
  const context = await browser.newContext({ baseURL, hasTouch: true, viewport: { width: 390, height: 844 } });
  let health: ReturnType<typeof observeBrowserHealth> | undefined;
  try {
    const page = await context.newPage();
    health = observeBrowserHealth(page);
    await openLanding(page);
    await page.locator(".lp-hero-spatial").tap();
    await expect(page.locator(".lp-hero-spatial")).not.toHaveAttribute("data-tracking");
  } finally {
    try { health?.stop(); health?.assertHealthy(); } finally { await context.close(); }
  }
});
