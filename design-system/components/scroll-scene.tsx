"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { attachScrollScene } from "@/design-system/components/scroll-controller";

export function ScrollScene({ paused, children }: { paused: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  // shortcut: observes the initial child set; remount the scene when that set changes.
  useEffect(() => {
    if (ref.current && !paused) return attachScrollScene(ref.current);
  }, [paused]);
  return <div ref={ref} className="ds-scroll-scene" data-paused={paused || undefined}>{children}</div>;
}
