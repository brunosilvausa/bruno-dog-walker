export function attachSpatial(element: HTMLElement) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  let frame = 0;
  let focused = false;
  let x = 0;
  let y = 0;

  const reset = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    delete element.dataset.tracking;
    element.style.removeProperty("--ds-pointer-x");
    element.style.removeProperty("--ds-pointer-y");
  };
  const update = () => {
    frame = 0;
    if (focused || reduced.matches || !fine.matches) return reset();
    const rect = element.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return reset();
    const normalize = (value: number) => (Math.min(1, Math.max(0, value)) * 2 - 1).toFixed(3);
    element.style.setProperty("--ds-pointer-x", normalize((x - rect.left) / rect.width));
    element.style.setProperty("--ds-pointer-y", normalize((y - rect.top) / rect.height));
    element.dataset.tracking = "true";
  };
  const move = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return reset();
    if (focused || reduced.matches || !fine.matches) return;
    x = event.clientX; y = event.clientY;
    if (!frame) frame = requestAnimationFrame(update);
  };
  const focus = () => { focused = true; reset(); };
  const blur = () => { focused = false; };
  element.addEventListener("pointermove", move, { passive: true });
  element.addEventListener("pointerdown", reset, { passive: true });
  element.addEventListener("pointerleave", reset);
  element.addEventListener("pointercancel", reset);
  element.addEventListener("focusin", focus);
  element.addEventListener("focusout", blur);
  window.addEventListener("blur", reset);
  reduced.addEventListener("change", reset);
  fine.addEventListener("change", reset);
  return () => {
    reset();
    element.removeEventListener("pointermove", move);
    element.removeEventListener("pointerdown", reset);
    element.removeEventListener("pointerleave", reset);
    element.removeEventListener("pointercancel", reset);
    element.removeEventListener("focusin", focus);
    element.removeEventListener("focusout", blur);
    window.removeEventListener("blur", reset);
    reduced.removeEventListener("change", reset);
    fine.removeEventListener("change", reset);
  };
}
