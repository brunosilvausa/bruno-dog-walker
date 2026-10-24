import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function ScrollReveal({ className, ...props }: ComponentProps<"div">) {
  return <div {...props} className={cn("ds-scroll-reveal", className)} data-reveal />;
}

export function StaggerContainer({ className, ...props }: ComponentProps<"div">) {
  return <div {...props} className={cn("ds-grid", "ds-scroll-stagger", className)} />;
}
