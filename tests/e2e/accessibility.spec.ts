import AxeBuilder from "@axe-core/playwright";
import { test, expect, openLanding, fillContact } from "./fixtures";

for (const state of ["initial", "menu", "invalid", "checked"] as const) {
  test(`@critical accessible landing state: ${state}`, async ({ page }) => {
    if (state === "menu") await page.setViewportSize({ width: 390, height: 844 });
    await openLanding(page);
    if (state === "menu") await page.locator(".lp-mobile-menu summary").click();
    if (state === "checked") await fillContact(page);
    if (state === "invalid" || state === "checked") await page.getByRole("button", { name: "Review request" }).click();
    if (state === "invalid") await expect(page.locator('input[aria-invalid="true"]')).toHaveCount(4);
    if (state === "checked") await expect(page.getByRole("status")).toContainText("Nothing was sent");
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (let frame = 0; frame < 2; frame++) await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      await Promise.all(document.getAnimations()
        .filter(animation => animation instanceof CSSAnimation && animation.animationName === "ds-entrance"
          && Number.isFinite(animation.effect?.getTiming().iterations))
        .map(animation => animation.finished.catch(() => undefined)));
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
    });
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    const summary = results.violations.map(violation => ({ id: violation.id, impact: violation.impact, affected: violation.nodes.length }));
    expect(summary, "Accessibility violations require review; report contains rule IDs/counts only").toEqual([]);
  });
}
