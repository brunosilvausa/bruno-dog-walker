import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ActionStyle = {
  variant?: "primary" | "secondary" | "cream";
  size?: "md" | "sm";
  block?: boolean;
  arrow?: boolean;
  loading?: boolean;
  loadingLabel?: string;
  tactile?: boolean;
  glow?: "warm" | "none";
};

function ActionContent({ children, loading, loadingLabel, arrow }: ActionStyle & { children: ReactNode }) {
  return <>
    {loading ? <span className="ds-spinner" aria-hidden="true" /> : null}
    <span>{loading ? loadingLabel ?? children : children}</span>
    {arrow && !loading ? <span className="ds-action-arrow" aria-hidden="true">↗</span> : null}
  </>;
}

export function Button({
  variant = "primary", size = "md", block = false, tactile = false, glow = "warm", arrow, loading = false,
  loadingLabel, disabled, type = "button", className, children, ...props
}: ComponentProps<"button"> & ActionStyle) {
  return <button {...props} type={type} disabled={disabled || loading}
    aria-busy={loading || undefined} data-variant={variant} data-size={size} data-tactile={tactile || undefined} data-glow={glow}
    className={cn("ds-action", block && "ds-action-block", className)}>
    <ActionContent loading={loading} loadingLabel={loadingLabel} arrow={arrow}>{children}</ActionContent>
  </button>;
}

export function ActionLink({
  variant = "primary", size = "md", block = false, tactile = false, glow = "warm", arrow, loading = false,
  loadingLabel, disabled = false, className, children, href, ...props
}: ComponentProps<"a"> & ActionStyle & { href: string; disabled?: boolean }) {
  const unavailable = disabled || loading;
  return <a {...props} href={unavailable ? undefined : href}
    role={unavailable ? "link" : props.role}
    tabIndex={unavailable ? -1 : props.tabIndex}
    onClick={unavailable ? undefined : props.onClick}
    onAuxClick={unavailable ? undefined : props.onAuxClick}
    onKeyDown={unavailable ? undefined : props.onKeyDown}
    aria-disabled={unavailable || undefined} aria-busy={loading || undefined}
    data-variant={variant} data-size={size} data-tactile={tactile || undefined} data-glow={glow}
    className={cn("ds-action", block && "ds-action-block", className)}>
    <ActionContent loading={loading} loadingLabel={loadingLabel} arrow={arrow}>{children}</ActionContent>
  </a>;
}

export function TactileButton(props: Omit<ComponentProps<typeof Button>, "tactile">) {
  return <Button {...props} tactile />;
}
