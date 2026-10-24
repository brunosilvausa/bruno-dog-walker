import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink, Button } from "@/design-system/components/action";
import { CtaStrip, Tag } from "@/design-system/components/content";
import { Logo, MascotSignature } from "@/design-system/components/logo";
import { Wave } from "@/design-system/components/graphics";
import { ActionExamples } from "@/app/design-system/action-examples";
import { BrandSections, CompositionSection } from "@/app/design-system/brand-sections";
import { PremiumSections } from "@/app/design-system/premium-sections";
import { WebsiteSection } from "@/app/design-system/website-section";
import { SocialSection } from "@/app/design-system/social-section";
import { Foundations } from "@/app/design-system/foundations";
import { SpatialExamples } from "@/app/design-system/spatial-examples";
import { DetailSections, StatePalette } from "@/app/design-system/detail-sections";
import { FinishingSections } from "@/app/design-system/finishing-sections";

export const metadata: Metadata = {
  title: "Design system | Bruno Dog Walker",
  description: "The brand, components and visual grammar of Bruno Dog Walker.",
  robots: { index: false, follow: false },
};

export default function DesignSystem() {
  return <>
    <a className="ds-skip" href="#main">Skip to components</a>
    <main id="main" className="ds-shell">
      <header className="ds-header">
        <Logo size="sm" />
        <nav className="ds-row" aria-label="Design system">
          <a href="#identity">Identity</a><a href="#grammar">Grammar</a>
          <a href="#photography">Photography</a><a href="#foundations">Foundations</a>
          <a href="#refinement">Refinements</a><a href="#inputs">Inputs</a><a href="#website">Website</a><a href="#social">Social</a><a href="#actions">Actions</a><a href="#content">Composition</a><a href="#spatial">Depth & motion</a>
          <Link href="/design-system/phase-3">Phase 3 foundation</Link><Link href="/design-system/motion">Motion &amp; depth</Link><Link href="/">Home</Link>
        </nav>
      </header>
      <section className="ds-section ds-guide-hero" aria-labelledby="page-title">
        <div className="ds-stack">
          <Tag>Bruno Dog Walker / Brand guide</Tag>
          <h1 id="page-title" className="ds-display ds-guide-title">Neighborhood spirit.<br />A familiar face.</h1>
          <p className="ds-intro">A little sunshine, real moments and thoughtful details. The building blocks of a warm neighborhood brand.</p>
          <p className="ds-muted">A practical guide to identity, composition and accessible components.</p>
          <ActionLink href="#identity" variant="secondary" arrow>Explore the system</ActionLink>
        </div>
        <div className="ds-guide-cover"><MascotSignature size="lg" base="cream" decorative /><Wave /></div>
      </section>
      <BrandSections />
      <Foundations />
      <section id="actions" className="ds-section ds-stack" aria-labelledby="actions-title">
        <h2 id="actions-title" className="ds-heading">05 / Every state, considered</h2>
        <p className="ds-guide-intro">One primary action per group. Links navigate; buttons act. Use Tab for focus, hover for feedback and press to feel the response.</p>
        <div className="ds-row">
          <ActionLink href="#content" arrow>Primary link</ActionLink>
          <ActionLink href="#content" variant="secondary">Secondary link</ActionLink>
          <ActionLink href="#content" variant="cream">Cream link</ActionLink>
          <ActionLink href="#content" size="sm">Compact link</ActionLink>
        </div>
        <ActionExamples />
        <div className="ds-row">
          <ActionLink href="/" disabled>Disabled link</ActionLink>
          <ActionLink href="/" loading loadingLabel="Loading link…">Home</ActionLink>
          <Button variant="secondary" disabled>Disabled secondary</Button>
          <Button variant="cream" disabled>Disabled cream</Button>
        </div>
        <Button block disabled>Full-width unavailable action</Button>
        <p className="ds-brand-note">Hover adds a subtle lift and warm emphasis. Disabled controls stay still; loading blocks activation. Reduced motion removes decorative movement.</p>
        <div className="ds-grid w-full">
          <p className="ds-feedback" data-tone="error">Error example: an action could not be completed. Try again.</p>
          <p className="ds-feedback" data-tone="success">Success example: the action is complete.</p>
        </div>
        <p className="ds-muted">Feedback includes words, not color alone. These specimens do not represent service or booking results.</p>
        <StatePalette />
      </section>
      <CompositionSection />
      <SpatialExamples><FinishingSections /></SpatialExamples>
      <DetailSections />
      <SocialSection />
      <WebsiteSection />
      <PremiumSections />
      <CtaStrip eyebrow="A clear next step" title="Keep the message simple."
        text="One message, one primary action and enough room to read. A contrasting surface gives the next step a clear place."
        action={<ActionLink href="#main" arrow>Back to the guide</ActionLink>} />
      <footer className="ds-section ds-guide-divider ds-row">
        <MascotSignature base="cream" size="sm" decorative />
        <div><p className="ds-label">Bruno Dog Walker / Design system</p><p className="ds-brand-note">Light theme · local fonts · responsive components · reduced-motion support</p></div>
      </footer>
    </main>
  </>;
}
