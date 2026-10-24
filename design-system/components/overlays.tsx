import type { ReactNode } from "react";

export function CaptionBlock({ children }: { children: ReactNode }) {
  return <p className="ds-caption-block">{children}</p>;
}

export function CaptionWord({ children }: { children: ReactNode }) {
  return <span className="ds-caption-word">{children}</span>;
}

export function NameCaption({ name, context }: { name: string; context?: string }) {
  return <div className="ds-name-caption"><p className="ds-title-small">{name}</p>
    {context ? <p className="ds-label">{context}</p> : null}
  </div>;
}
