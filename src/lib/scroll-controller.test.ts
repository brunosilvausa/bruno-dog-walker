import { afterEach, describe, expect, it, vi } from "vitest";
import { attachScrollScene } from "@/design-system/components/scroll-controller";

function fixture() {
  const dataset: Record<string, string> = {};
  const reveal = { dataset: {} as Record<string, string> };
  const style = new Map<string, string>();
  const rect = { top: 0, height: 100 };
  const readRect = vi.fn(() => rect);
  const element = Object.assign(new EventTarget(), { dataset, querySelectorAll: () => [reveal],
    getBoundingClientRect: readRect, style: {
      setProperty: (key: string, value: string) => style.set(key, value),
      removeProperty: (key: string) => style.delete(key),
    } });
  const reduced = Object.assign(new EventTarget(), { matches: false });
  const fine = Object.assign(new EventTarget(), { matches: true });
  const win = Object.assign(new EventTarget(), { innerHeight: 100,
    matchMedia: (query: string) => query.includes("reduced") ? reduced : fine });
  const doc = Object.assign(new EventTarget(), { hidden: false });
  const frames = new Map<number, FrameRequestCallback>();
  let sequence = 0;
  let callback: IntersectionObserverCallback;
  const observer = { observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn() };
  vi.stubGlobal("window", win); vi.stubGlobal("document", doc);
  vi.stubGlobal("requestAnimationFrame", (fn: FrameRequestCallback) => { frames.set(++sequence, fn); return sequence; });
  vi.stubGlobal("cancelAnimationFrame", (id: number) => frames.delete(id));
  vi.stubGlobal("IntersectionObserver", class { constructor(fn: IntersectionObserverCallback) { callback = fn; return observer; } });
  const intersect = (target = element as unknown as object, visible = true) => callback([
    { target, isIntersecting: visible } as unknown as IntersectionObserverEntry,
  ], observer as unknown as IntersectionObserver);
  const flush = () => { const pending = [...frames.values()]; frames.clear(); pending.forEach(fn => fn(0)); };
  const start = () => attachScrollScene(element as unknown as HTMLElement);
  return { element, reveal, style, rect, readRect, reduced, fine, win, doc, frames, observer, intersect, flush, start };
}
afterEach(() => vi.unstubAllGlobals());

describe("scroll scene lifecycle", () => {
  it("keeps static fallback when observation is unavailable", () => {
    const f = fixture(); vi.stubGlobal("IntersectionObserver", undefined); const stop = f.start();
    f.win.dispatchEvent(new Event("scroll")); expect(f.frames.size).toBe(0); expect(f.reveal.dataset).toEqual({}); stop();
  });
  it("coalesces work, reads one rect and clamps progress", () => {
    const f = fixture(); const stop = f.start(); f.intersect();
    f.win.dispatchEvent(new Event("scroll")); f.win.dispatchEvent(new Event("resize"));
    expect(f.frames.size).toBe(1); f.rect.top = 1000; f.flush();
    expect(f.readRect).toHaveBeenCalledTimes(1); expect(f.style.get("--ds-scroll-progress")).toBe("1.000");
    f.rect.top = -1000; f.win.dispatchEvent(new Event("scroll")); f.flush();
    expect(f.style.get("--ds-scroll-progress")).toBe("-1.000"); stop();
  });
  it("reveals each intersecting target once and leaves offscreen content unmodified", () => {
    const f = fixture(); const stop = f.start(); f.intersect(f.reveal, false);
    expect(f.reveal.dataset).toEqual({}); f.intersect(f.reveal);
    expect(f.reveal.dataset.scrollRevealed).toBe("true"); expect(f.observer.unobserve).toHaveBeenCalledWith(f.reveal);
    delete f.reveal.dataset.scrollRevealed; f.intersect(f.reveal); expect(f.reveal.dataset).toEqual({}); stop();
  });
  it("cancels offscreen and coarse-pointer parallax without suppressing reveals", () => {
    const f = fixture(); const stop = f.start(); f.intersect(); f.intersect(f.element, false);
    expect(f.frames.size).toBe(0); f.fine.matches = false; f.intersect();
    expect(f.frames.size).toBe(0); f.intersect(f.reveal); expect(f.reveal.dataset.scrollRevealed).toBe("true");
    f.fine.matches = true; f.fine.dispatchEvent(new Event("change")); expect(f.frames.size).toBe(1); stop();
  });
  it("stops pending work and entrances on live motion reduction", () => {
    const f = fixture(); const stop = f.start(); f.intersect(); f.intersect(f.reveal);
    f.reduced.matches = true; f.reduced.dispatchEvent(new Event("change"));
    expect(f.frames.size).toBe(0); expect(f.reveal.dataset).toEqual({}); expect(f.style.size).toBe(0);
    f.win.dispatchEvent(new Event("scroll")); expect(f.frames.size).toBe(0); stop();
  });
  it("keeps focused content still until focus leaves", () => {
    const f = fixture(); const stop = f.start(); f.intersect(); f.element.dispatchEvent(new Event("focusin"));
    f.win.dispatchEvent(new Event("scroll")); expect(f.frames.size).toBe(0);
    f.element.dispatchEvent(new Event("focusout")); expect(f.frames.size).toBe(1); stop();
  });
  it("resets a hidden document and removes observers/listeners/styles on cleanup", () => {
    const f = fixture(); const stop = f.start(); f.intersect(); f.flush();
    f.doc.hidden = true; f.doc.dispatchEvent(new Event("visibilitychange")); expect(f.style.size).toBe(0);
    f.doc.hidden = false; f.doc.dispatchEvent(new Event("visibilitychange")); expect(f.frames.size).toBe(1);
    stop(); f.intersect(f.reveal); f.intersect();
    expect(f.reveal.dataset).toEqual({}); expect(f.observer.disconnect).toHaveBeenCalledOnce(); expect(f.frames.size).toBe(0);
    f.win.dispatchEvent(new Event("scroll")); f.flush(); expect(f.style.size).toBe(0);
  });
  it("does not produce invalid progress for collapsed geometry", () => {
    const f = fixture(); const stop = f.start(); f.rect.height = 0; f.intersect(); f.flush();
    expect(f.style.size).toBe(0); stop();
  });
});
