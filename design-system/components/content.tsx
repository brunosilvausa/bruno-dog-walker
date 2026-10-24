import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({ variant = "sunshine", size = "md", expressive = false, className, ...props }:
  ComponentProps<"span"> & { variant?: "sunshine" | "cream" | "plain"; size?: "sm" | "md" | "lg"; expressive?: boolean }) {
  return <span {...props} className={cn("ds-tag", className)} data-variant={variant} data-size={size} data-expressive={expressive || undefined} />;
}

export function Highlight({ tone = "sunshine", className, ...props }:
  ComponentProps<"span"> & { tone?: "sunshine" | "text" }) {
  return <span {...props} className={cn("ds-highlight", className)} data-tone={tone} />;
}

export function Card({ title, eyebrow, footer, media, headingLevel = 3, children, tone = "white", elevation = 1, interactive = false, className, ...props }:
  Omit<ComponentProps<"article">, "title"> & {
    title: ReactNode; eyebrow?: string; footer?: ReactNode;
    media?: ReactNode; headingLevel?: 2 | 3 | 4;
    tone?: "white" | "tint" | "cream"; elevation?: 0 | 1 | 2 | 3; interactive?: boolean;
  }) {
  const Heading = `h${headingLevel}` as "h2" | "h3" | "h4";
  return <article {...props} className={cn("ds-card", className)} data-tone={tone} data-elevation={elevation} data-interactive={interactive || undefined}>
    {media ? <div className="ds-card-media">{media}</div> : null}
    {eyebrow ? <p className="ds-label">{eyebrow}</p> : null}
    <Heading className="ds-title-small">{title}</Heading>
    <div>{children}</div>
    {footer ? <div className="ds-card-footer">{footer}</div> : null}
  </article>;
}

export function CtaStrip({ title, text, eyebrow, action, className, ...props }:
  Omit<ComponentProps<"section">, "title"> & {
    title: string; text?: string; eyebrow?: string; action: ReactNode;
  }) {
  return <section {...props} className={cn("ds-cta", className)}>
    <div className="ds-stack">
      {eyebrow ? <p className="ds-label">{eyebrow}</p> : null}
      <h3 className="ds-title-small">{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
    {action}
  </section>;
}
