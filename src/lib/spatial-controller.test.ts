import { afterEach, describe, expect, it, vi } from "vitest";
import { attachSpatial } from "@/design-system/components/spatial-controller";

function fixture() {
  const element = new EventTarget();
  const style = new Map<string, string>();
  const dataset: Record<string, string> = {};
  Object.assign(element, { dataset, style: {
    setProperty: (key: string, value: string) => style.set(key, value),
    removeProperty: (key: string) => style.delete(key),
  }, getBoundingClientRect: () => ({ left: 0, top: 0, width: 100, height: 100 }) });
  const reduced = Object.assign(new EventTarget(), { matches: false });
  const fine = Object.assign(new EventTarget(), { matches: true });
  const windowTarget = Object.assign(new EventTarget(), {
    matchMedia: (query: string) => query.includes("reduced") ? reduced : fine,
  });
  const frames = new Map<number, FrameRequestCallback>();
  let sequence = 0;
  vi.stubGlobal("window", windowTarget);
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => { frames.set(++sequence, callback); return sequence; });
  vi.stubGlobal("cancelAnimationFrame", (id: number) => frames.delete(id));
  const move = (x: number, y: number, pointerType = "mouse") => element.dispatchEvent(
    Object.assign(new Event("pointermove"), { clientX: x, clientY: y, pointerType }));
  const flush = () => { const pending = [...frames.values()]; frames.clear(); pending.forEach((callback) => callback(0)); };
  const cleanup = attachSpatial(element as unknown as HTMLElement);
  return { element, style, dataset, reduced, fine, windowTarget, frames, move, flush, cleanup };
}

afterEach(() => vi.unstubAllGlobals());

describe("spatial pointer lifecycle", () => {
  it("coalesces movement and uses the latest clamped sample", () => {
    const f = fixture();
    f.move(25, 25); f.move(200, -20);
    expect(f.frames.size).toBe(1);
    f.flush();
    expect(f.style.get("--ds-pointer-x")).toBe("1.000");
    expect(f.style.get("--ds-pointer-y")).toBe("-1.000");
    expect(f.dataset.tracking).toBe("true");
    f.cleanup();
  });

  it.each(["touch", "pen"])("does not track %s pointers", (type) => {
    const f = fixture(); f.move(75, 75, type);
    expect(f.frames.size).toBe(0);
    expect(f.dataset.tracking).toBeUndefined();
    f.cleanup();
  });

  it("resets pending motion when reduced motion or pointer capability changes", () => {
    const f = fixture(); f.move(75, 75); f.flush(); f.move(20, 20);
    f.reduced.matches = true; f.reduced.dispatchEvent(new Event("change"));
    expect(f.frames.size).toBe(0); expect(f.style.size).toBe(0);
    f.move(75, 75); expect(f.frames.size).toBe(0);
    f.reduced.matches = false; f.fine.matches = false;
    f.fine.dispatchEvent(new Event("change")); f.move(75, 75);
    expect(f.frames.size).toBe(0); f.cleanup();
  });

  it.each(["pointerleave", "pointercancel", "pointerdown", "focusin"])("cancels queued updates on %s", (event) => {
    const f = fixture(); f.move(80, 80); f.element.dispatchEvent(new Event(event)); f.flush();
    expect(f.style.size).toBe(0); expect(f.dataset.tracking).toBeUndefined(); f.cleanup();
  });

  it("clears an existing mouse tilt when a hybrid device switches to touch", () => {
    const f = fixture(); f.move(80, 80); f.flush();
    expect(f.style.size).toBe(2);
    f.move(80, 80, "touch");
    expect(f.style.size).toBe(0); expect(f.dataset.tracking).toBeUndefined(); f.cleanup();
  });

  it("does not resume tracking over a keyboard-focused card until focus leaves", () => {
    const f = fixture(); f.element.dispatchEvent(new Event("focusin")); f.move(80, 80);
    expect(f.frames.size).toBe(0);
    f.element.dispatchEvent(new Event("focusout")); f.move(80, 80); f.flush();
    expect(f.dataset.tracking).toBe("true"); f.cleanup();
  });

  it("ignores a collapsed surface rather than producing invalid transforms", () => {
    const f = fixture();
    Object.assign(f.element, { getBoundingClientRect: () => ({ left: 0, top: 0, width: 0, height: 0 }) });
    f.move(80, 80); f.flush();
    expect(f.style.size).toBe(0); f.cleanup();
  });

  it("cleans up pending frames/listeners on blur and unmount", () => {
    const f = fixture(); f.move(80, 80); f.windowTarget.dispatchEvent(new Event("blur"));
    expect(f.frames.size).toBe(0);
    f.move(80, 80); f.cleanup(); f.flush(); f.move(90, 90);
    expect(f.style.size).toBe(0); expect(f.frames.size).toBe(0);
  });
});
