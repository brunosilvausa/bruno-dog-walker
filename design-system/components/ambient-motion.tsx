"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { attachAmbient } from "@/design-system/components/ambient-controller";

export function AmbientMotion({ paused, kind = "float", children }: {
  paused: boolean; kind?: "float" | "accent"; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !paused) return attachAmbient(ref.current);
  }, [paused]);
  return <div ref={ref} className="ds-ambient-motion" data-kind={kind}>
    <div className="ds-ambient-motion-content">{children}</div>
  </div>;
}
