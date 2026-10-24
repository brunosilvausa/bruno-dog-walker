import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassSurface({ tone = "cream", treatment = "standard", elevation = 3, fallback = false, className, ...props }:
  ComponentProps<"div"> & { tone?: "cream" | "cocoa"; treatment?: "standard" | "reference"; elevation?: 0 | 1 | 2 | 3; fallback?: boolean }) {
  return <div {...props} className={cn("ds-glass", className)} data-tone={tone} data-treatment={treatment} data-elevation={elevation} data-fallback={fallback || undefined} />;
}

export function FloatingElement({ children, paused, className }: { children: ReactNode; paused: boolean; className?: string }) {
  return <div className={cn("ds-floating", className)} data-paused={paused || undefined}>{children}</div>;
}

export function AmbientGlow({ tone = "warm" }: { tone?: "warm" | "blue" }) {
  return <span className="ds-ambient" data-tone={tone} aria-hidden="true" />;
}

export function SpatialLayer({ depth = "near", children }: { depth?: "base" | "near" | "far" | "float"; children: ReactNode }) {
  return <div className="ds-spatial-layer" data-depth={depth}>{children}</div>;
}
