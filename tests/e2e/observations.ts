import type { BrowserContext, Request, Route } from "@playwright/test";

export function containsContactMarker(value: string, markers: string[]) {
  let decoded = value;
  try { decoded = decodeURIComponent(value.replaceAll("+", " ")); } catch { /* Invalid URI escapes still receive the raw check. */ }
  return markers.some(marker => value.includes(marker) || decoded.includes(marker));
}

export async function guardContactData(context: BrowserContext, markers: string[], origin: string) {
  let attempts = 0;
  const inspect = (request: Request) => {
    const values = [request.url(), request.postData() ?? "", ...Object.values(request.headers())];
    return values.some(value => containsContactMarker(value, markers))
      || new URL(request.url()).origin !== origin
      || !["GET", "HEAD"].includes(request.method());
  };
  const intercept = async (route: Route) => {
    if (inspect(route.request())) {
      attempts += 1;
      await route.abort();
    } else await route.continue();
  };
  await context.route("**/*", intercept);
  return {
    attempts: () => attempts,
    stop: () => context.unroute("**/*", intercept),
  };
}

export async function applicationStorageCounts(context: BrowserContext) {
  const cookies = (await context.cookies()).length;
  const page = context.pages()[0];
  const storage = await page.evaluate(async () => ({
    local: localStorage.length,
    session: sessionStorage.length,
    databases: typeof indexedDB.databases === "function" ? (await indexedDB.databases()).length : null,
    caches: "caches" in window ? (await caches.keys()).length : null,
  }));
  return { cookies, ...storage };
}
