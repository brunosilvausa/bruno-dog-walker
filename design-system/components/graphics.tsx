import { cn } from "@/lib/utils";

export function Wave({ className, variant = "hill" }: { className?: string; variant?: "hill" | "swoop" }) {
  const swoop = variant === "swoop";
  return <svg className={cn("ds-wave", className)} viewBox={swoop ? "0 0 400 60" : "0 0 1080 180"}
    preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <path d={swoop ? "M0 0H400V10C260 60 150 5 0 40Z" : "M0 90C240 10 410 160 670 90S950 30 1080 55V180H0Z"} className="ds-wave-fill" />
    <path d={swoop ? "M0 40C150 5 260 60 400 10" : "M0 90C240 10 410 160 670 90S950 30 1080 55"} className="ds-wave-edge" />
  </svg>;
}

export function Spark({ className, tone = "blue", glow = false }: { className?: string; tone?: "blue" | "cream"; glow?: boolean }) {
  return <svg className={cn("ds-spark", className)} data-tone={tone} data-glow={glow || undefined} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
    <path d="M50 0C54 31 69 46 100 50C69 54 54 69 50 100C46 69 31 54 0 50C31 46 46 31 50 0Z" />
  </svg>;
}
