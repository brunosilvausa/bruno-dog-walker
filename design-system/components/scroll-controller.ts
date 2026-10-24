export function attachScrollScene(element: HTMLElement) {
  if (typeof IntersectionObserver === "undefined") return () => {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reveals = [...element.querySelectorAll<HTMLElement>("[data-reveal]")];
  const seen = new Set<Element>();
  let disposed = false;
  let visible = false;
  let focused = false;
  let frame = 0;

  const reset = (entrances = false) => {
    cancelAnimationFrame(frame); frame = 0;
    element.style.removeProperty("--ds-scroll-progress");
    if (entrances) reveals.forEach(node => { delete node.dataset.scrollRevealed; });
  };
  const available = () => !disposed && visible && !focused && !document.hidden && !reduced.matches && fine.matches;
  const update = () => {
    frame = 0;
    if (!available()) return reset();
    const rect = element.getBoundingClientRect();
    if (rect.height <= 0 || window.innerHeight <= 0) return reset();
    const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / ((window.innerHeight + rect.height) / 2);
    element.style.setProperty("--ds-scroll-progress", Math.min(1, Math.max(-1, progress)).toFixed(3));
  };
  const schedule = () => { if (available() && !frame) frame = requestAnimationFrame(update); };
  const observer = new IntersectionObserver(entries => {
    if (disposed) return;
    for (const entry of entries) {
      if (entry.target === element) {
        visible = entry.isIntersecting;
        if (visible) schedule(); else reset(true);
      } else if (entry.isIntersecting && !seen.has(entry.target) && !reduced.matches && !focused && !document.hidden) {
        (entry.target as HTMLElement).dataset.scrollRevealed = "true";
        seen.add(entry.target); observer.unobserve(entry.target);
      }
    }
  });
  observer.observe(element); reveals.forEach(node => observer.observe(node));
  const media = () => { reset(true); schedule(); };
  const focus = () => { focused = true; reset(true); };
  const blur = () => { focused = false; schedule(); };
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  document.addEventListener("visibilitychange", media);
  element.addEventListener("focusin", focus); element.addEventListener("focusout", blur);
  reduced.addEventListener("change", media); fine.addEventListener("change", media);
  return () => {
    disposed = true; observer.disconnect(); reset(true);
    window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule);
    document.removeEventListener("visibilitychange", media);
    element.removeEventListener("focusin", focus); element.removeEventListener("focusout", blur);
    reduced.removeEventListener("change", media); fine.removeEventListener("change", media);
  };
}
