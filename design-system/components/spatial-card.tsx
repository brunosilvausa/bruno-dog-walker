"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { attachSpatial } from "@/design-system/components/spatial-controller";

export function SpatialCard({ children, paused = false, className }: {
  children: ReactNode; paused?: boolean; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !paused) return attachSpatial(ref.current);
  }, [paused]);
  return <div ref={ref} className={cn("ds-spatial", className)} data-paused={paused || undefined}>
    <div className="ds-spatial-surface">{children}<span className="ds-spatial-light" aria-hidden="true" /></div>
  </div>;
}
