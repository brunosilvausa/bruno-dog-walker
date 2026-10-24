import { afterEach, describe, expect, it, vi } from "vitest";
import { attachAmbient } from "@/design-system/components/ambient-controller";

function fixture() {
  const element = Object.assign(new EventTarget(), { contains: () => false, matches: () => false, dataset: {} as Record<string, string> });
  const reduced = Object.assign(new EventTarget(), { matches: false });
  const fine = Object.assign(new EventTarget(), { matches: true });
  const doc = Object.assign(new EventTarget(), { hidden: false });
  vi.stubGlobal("window", { matchMedia: (q: string) => q.includes("reduced") ? reduced : fine });
  vi.stubGlobal("document", doc);
  let callback: IntersectionObserverCallback;
  const observer = { observe: vi.fn(), disconnect: vi.fn() };
  vi.stubGlobal("IntersectionObserver", class { constructor(fn: IntersectionObserverCallback) { callback = fn; return observer; } });
  const intersect = (visible: boolean) => callback([{ isIntersecting: visible } as IntersectionObserverEntry], observer as unknown as IntersectionObserver);
  const start = () => attachAmbient(element as unknown as HTMLElement);
  return { element, reduced, fine, doc, observer, intersect, start };
}
afterEach(() => vi.unstubAllGlobals());

describe("ambient lifecycle", () => {
  it("starts only when observed, and stops when offscreen", () => {
    const f = fixture(); const stop = f.start(); expect(f.element.dataset.moving).toBeUndefined();
    f.intersect(true); expect(f.element.dataset.moving).toBe("true");
    f.intersect(false); expect(f.element.dataset.moving).toBeUndefined(); stop();
  });
  it.each(["reduced", "coarse", "hidden"])("stops for %s and resumes only when safe", state => {
    const f = fixture(); const stop = f.start(); f.intersect(true);
    if (state === "reduced") { f.reduced.matches = true; f.reduced.dispatchEvent(new Event("change")); }
    if (state === "coarse") { f.fine.matches = false; f.fine.dispatchEvent(new Event("change")); }
    if (state === "hidden") { f.doc.hidden = true; f.doc.dispatchEvent(new Event("visibilitychange")); }
    expect(f.element.dataset.moving).toBeUndefined();
    f.reduced.matches = false; f.fine.matches = true; f.doc.hidden = false;
    f.doc.dispatchEvent(new Event("visibilitychange")); expect(f.element.dataset.moving).toBe("true"); stop();
  });
  it.each([["focusin", "focusout"], ["pointerenter", "pointerleave"]])("pauses on %s", (enter, leave) => {
    const f = fixture(); const stop = f.start(); f.intersect(true); f.element.dispatchEvent(new Event(enter));
    expect(f.element.dataset.moving).toBeUndefined(); f.element.dispatchEvent(new Event(leave));
    expect(f.element.dataset.moving).toBe("true"); stop();
  });
  it.each(["hover", "focus"])("does not start under an existing %s", state => {
    const f = fixture();
    Object.assign(f.element, state === "hover" ? { matches: () => true } : { contains: () => true });
    const stop = f.start(); f.intersect(true); expect(f.element.dataset.moving).toBeUndefined();
    f.element.dispatchEvent(new Event(state === "hover" ? "pointerleave" : "focusout"));
    expect(f.element.dataset.moving).toBe("true"); stop();
  });

  it("disconnects and ignores late callbacks and media changes after disposal", () => {
    const f = fixture(); const stop = f.start(); f.intersect(true); stop(); f.intersect(true);
    f.reduced.dispatchEvent(new Event("change")); expect(f.element.dataset.moving).toBeUndefined();
    expect(f.observer.disconnect).toHaveBeenCalledOnce();
  });
  it("keeps static output when observation is unavailable", () => {
    const f = fixture(); vi.stubGlobal("IntersectionObserver", undefined); const stop = f.start();
    expect(f.element.dataset).toEqual({}); stop();
  });
});
