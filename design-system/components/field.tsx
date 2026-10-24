import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function TextField({ id, label, helper, error, loading = false, disabled,
  type = "text", className, "aria-describedby": describedBy, "aria-invalid": invalid, ...props }: {
  id: string; label: string; helper?: string; error?: string; loading?: boolean;
  type?: "text" | "email" | "tel";
} & Omit<ComponentProps<"input">, "id" | "type">) {
  const description = [describedBy, helper && `${id}-help`, error && `${id}-error`, loading && `${id}-loading`]
    .filter(Boolean).join(" ") || undefined;
  return <div className="ds-field">
    <label htmlFor={id}>{label}{props.required ? <span> (required)</span> : null}</label>
    <input {...props} id={id} type={type} className={cn("ds-input", className)}
      disabled={disabled || loading} aria-busy={loading || undefined}
      aria-invalid={error ? true : invalid} aria-describedby={description} />
    {helper ? <p className="ds-field-help" id={`${id}-help`}>{helper}</p> : null}
    {error ? <p className="ds-field-error" id={`${id}-error`}>{error}</p> : null}
    {loading ? <p className="ds-field-help" id={`${id}-loading`} role="status">Loading…</p> : null}
  </div>;
}
