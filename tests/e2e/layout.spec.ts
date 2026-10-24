import { test, expect, openLanding } from "./fixtures";

async function expectUsableLayout(page: Parameters<typeof openLanding>[0]) {
  const result = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth > innerWidth,
    clipped: [...document.querySelectorAll("a,button,input,textarea,summary")].filter(element => {
      const rect = element.getBoundingClientRect();
      const style = getComputedStyle(element);
      return element.checkVisibility({ checkVisibilityCSS: true }) && style.visibility !== "hidden" && rect.width > 0
        && (rect.left < -1 || rect.right > innerWidth + 1);
    }).length,
  }));
  expect(result, "Reading and visible controls must fit the viewport").toEqual({ overflow: false, clipped: 0 });
}

test("@critical current viewport has readable landmarks and unclipped controls", async ({ page }) => {
  await openLanding(page);
  await expect(page.getByRole("main")).toHaveCount(1);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expectUsableLayout(page);
});

for (const width of [320, 390, 768, 800, 1024, 1440]) {
  test(`@extended layout fits ${width} CSS pixels`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-desktop", "The width matrix runs once; critical journeys cover the browser projects.");
    await page.setViewportSize({ width, height: 900 });
    await openLanding(page);
    await expectUsableLayout(page);
  });
}

test("@extended 200 percent text enlargement retains content and controls", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium-desktop", "Text enlargement is a declared Chromium check, not physical browser zoom qualification.");
  await page.setViewportSize({ width: 390, height: 844 });
  await openLanding(page);
  await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
  await expectUsableLayout(page);
  await page.locator(".lp-mobile-menu summary").click();
  await page.locator(".lp-mobile-menu").getByRole("link", { name: "Let’s meet your dog" }).click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(page.getByRole("button", { name: "Review request" })).toBeEnabled();
});

for (const width of [1023, 1024, 1025]) {
  test(`@extended navigation is available around its breakpoint at ${width}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "chromium-desktop", "Run the breakpoint matrix once; browser-critical journeys remain separate.");
    await page.setViewportSize({ width, height: 900 });
    await openLanding(page);
    const mobile = await page.locator(".lp-mobile-menu").isVisible();
    const desktop = await page.locator(".lp-nav-link").first().isVisible();
    expect(mobile !== desktop, "Exactly one navigation presentation must be available").toBe(true);
    await expectUsableLayout(page);
  });
}
