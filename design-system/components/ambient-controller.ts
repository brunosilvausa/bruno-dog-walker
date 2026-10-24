export function attachAmbient(element: HTMLElement) {
  if (typeof IntersectionObserver === "undefined") return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  let disposed = false;
  let visible = false;
  let focused = element.contains(document.activeElement);
  let hovered = element.matches(":hover");
  const update = () => {
    if (!disposed && visible && !focused && !hovered && !document.hidden && !reduced.matches && fine.matches) element.dataset.moving = "true";
    else delete element.dataset.moving;
  };
  const observer = new IntersectionObserver(entries => {
    if (disposed) return;
    visible = entries.some(entry => entry.isIntersecting); update();
  });
  const focus = () => { focused = true; update(); };
  const blur = () => { focused = false; update(); };
  const enter = () => { hovered = true; update(); };
  const leave = () => { hovered = false; update(); };
  observer.observe(element);
  document.addEventListener("visibilitychange", update);
  reduced.addEventListener("change", update); fine.addEventListener("change", update);
  element.addEventListener("focusin", focus); element.addEventListener("focusout", blur);
  element.addEventListener("pointerenter", enter); element.addEventListener("pointerleave", leave);
  return () => {
    disposed = true; observer.disconnect(); delete element.dataset.moving;
    document.removeEventListener("visibilitychange", update);
    reduced.removeEventListener("change", update); fine.removeEventListener("change", update);
    element.removeEventListener("focusin", focus); element.removeEventListener("focusout", blur);
    element.removeEventListener("pointerenter", enter); element.removeEventListener("pointerleave", leave);
  };
}
