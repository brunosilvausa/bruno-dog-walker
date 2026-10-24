import { test as base, expect, type Page } from "@playwright/test";

export const contact = {
  owner: "BDW-QA-Owner-73c2",
  email: "bdw-qa-email-73c2@example.com",
  dog: "BDW-QA-Dog-73c2",
  location: "BDW-QA-Cross-Streets-73c2",
  message: "BDW-QA-Note-73c2",
};

export function observeBrowserHealth(page: Page) {
  let errors = 0;
  const onPageError = () => { errors += 1; };
  const onConsole = (message: { type(): string }) => { if (message.type() === "error") errors += 1; };
  page.on("pageerror", onPageError);
  page.on("console", onConsole);
  return {
    stop: () => { page.off("pageerror", onPageError); page.off("console", onConsole); },
    assertHealthy: () => expect(errors, "Unexpected browser errors; inspect locally without recording contact data").toBe(0),
  };
}

export const test = base.extend<{ browserHealth: void }>({
  browserHealth: [async ({ page }, run) => {
    const health = observeBrowserHealth(page);
    try { await run(); } finally { health.stop(); health.assertHealthy(); }
  }, { auto: true }],
});

export { expect };

export async function openLanding(page: Page) {
  await page.goto("/");
  await expect(page.getByLabel("Your name", { exact: false })).toBeEnabled();
}

export async function fillContact(page: Page) {
  await page.getByLabel("Your name", { exact: false }).fill(contact.owner);
  await page.getByLabel("Email address", { exact: false }).fill(contact.email);
  await page.getByLabel("Dog’s name", { exact: false }).fill(contact.dog);
  await page.getByLabel("Cross streets", { exact: false }).fill(contact.location);
}

export async function expectFocusClearOfHeader(page: Page) {
  // Native anchor/focus scrolling can settle asynchronously, especially in WebKit.
  await expect.poll(() => page.locator(":focus").evaluate(element => {
    const target = element.getBoundingClientRect();
    const header = document.querySelector("header")?.getBoundingClientRect();
    return target.top >= (header?.bottom ?? 0) && target.bottom <= innerHeight;
  }), { message: "Focused control must remain visible below the sticky header" }).toBe(true);
}
