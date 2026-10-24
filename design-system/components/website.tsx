import type { ReactNode } from "react";
import { MascotSignature } from "@/design-system/components/logo";
import { Tag } from "@/design-system/components/content";
import { GlassSurface } from "@/design-system/components/surfaces";

export function SiteHeader({ homeHref, navigationLabel, sticky = false, children }: {
  homeHref: string; navigationLabel: string; sticky?: boolean; children: ReactNode;
}) {
  return <header className="ds-site-header" data-sticky={sticky || undefined}><GlassSurface elevation={sticky ? 3 : 1} className="ds-site-bar">
    <a className="ds-site-brand" href={homeHref}><MascotSignature size="sm" base="cream" decorative />
      <span>Bruno Dog Walker</span></a>
    <nav className="ds-site-nav" aria-label={navigationLabel}>{children}</nav>
  </GlassSurface></header>;
}

export function WebsiteHero({ title, eyebrow, children, action, headingLevel = 2 }: {
  title: ReactNode; eyebrow: string; children: ReactNode; action: ReactNode; headingLevel?: 2 | 3;
}) {
  const Heading = `h${headingLevel}` as "h2" | "h3";
  return <div className="ds-site-hero">
    <div className="ds-stack"><Tag>{eyebrow}</Tag><Heading className="ds-display">{title}</Heading>
      <div className="ds-intro">{children}</div><div className="ds-row">{action}</div></div>
    <div className="ds-site-art"><MascotSignature size="lg" decorative />
      <Tag expressive>More than a walk.</Tag></div>
  </div>;
}

export function SiteFooter({ navigationLabel, children }: { navigationLabel: string; children: ReactNode }) {
  return <footer className="ds-site-footer"><div className="ds-row">
    <MascotSignature base="cream" size="sm" decorative /><p className="ds-title-small">Bruno Dog Walker</p>
  </div><nav className="ds-site-nav" aria-label={navigationLabel}>{children}</nav>
    <p className="ds-site-footer-note">Dog walking &amp; pet care · Upper East Side, Manhattan</p>
  </footer>;
}
