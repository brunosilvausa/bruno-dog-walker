import type { Metadata } from "next";
import Link from "next/link";
import { TactileButton, ActionLink } from "@/design-system/components/action";
import { Card, CtaStrip, Tag } from "@/design-system/components/content";
import { BrandPhoto } from "@/design-system/components/photo";
import { ScrollReveal, StaggerContainer } from "@/design-system/components/reveal";
import { FoundationShowcase } from "@/app/design-system/phase-3/foundation-showcase";
import { GlowExamples, TimingExamples } from "@/app/design-system/finishing-examples";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export const metadata: Metadata = { title: "Stage A foundation | Bruno Dog Walker", description: "Phase 3 spatial foundation for review before component integration.", robots: { index: false, follow: false } };

export default function FoundationPage() {
  const cards = ([['A clear next step.', parkDog, 'Black and white dog looking up from a park path', 'center'],
    ['Room for a little joy.', brownDog, 'Brown and white dog beside green leaves', 'top']] as const).map(([title, photo, alt, position]) =>
    <Card key={title} title={title} interactive eyebrow="Service-card specimen"
      media={<BrandPhoto src={photo} alt={alt} position={position} />}
      footer={<ActionLink href="#foundation-states" tactile arrow>Explore the states</ActionLink>}>
      <p>A solid content surface with controlled perspective, a decorative border reflection and a native CTA. Example copy only.</p>
    </Card>);
  return <><a className="ds-skip" href="#main">Skip to foundation examples</a><main id="main" className="ds-shell">
    <header className="ds-row"><Link href="/design-system">Component library</Link><Link href="/design-system/motion">Phase 2 showcase</Link></header>
    <div className="ds-section ds-stack"><Tag>Phase 3 / Stage A</Tag><h1 className="ds-display">Expressive, within reach.</h1>
      <p className="ds-intro">An adjustable foundation for review. The original artwork, palette, typography and existing website remain intact.</p>
      <p className="ds-feedback">Stage A is ready to explore. Component integration in Stage B follows foundation approval.</p></div>
    <FoundationShowcase cards={cards} narrative={<StaggerContainer className="w-full">
      <ScrollReveal><BrandPhoto src={brownDog} position="top" alt="Brown and white dog beside green leaves" caption="One more sniff stop." captionTreatment="glass" /></ScrollReveal>
      <ScrollReveal className="ds-stack"><p className="ds-label">Same voice / same identity</p><p className="ds-intro">One image. One idea. A natural rhythm.</p>
        <CtaStrip title="Bring the pieces together." text="A compact CTA example, revealed as a single readable unit." action={<ActionLink href="#foundation-states" arrow>See the next step</ActionLink>} />
      </ScrollReveal>
    </StaggerContainer>} examples={<>
      <section id="foundation-states" className="ds-section ds-stack" aria-labelledby="foundation-states-title">
        <h2 id="foundation-states-title" className="ds-heading">Tactile, in every state.</h2><div className="ds-row">
          <TactileButton arrow>Primary specimen</TactileButton><TactileButton variant="secondary">Secondary specimen</TactileButton><TactileButton variant="cream">Cream specimen</TactileButton>
          <TactileButton disabled>Unavailable specimen</TactileButton><TactileButton loading loadingLabel="Preparing specimen…">Example</TactileButton>
        </div><p className="ds-brand-note">Buttons are inert design examples. Navigation examples use actual guide anchors. Focus stays visible independently of glow.</p>
        <GlowExamples /><TimingExamples />
      </section>
      <section className="ds-section ds-stack" aria-labelledby="foundation-tokens-title"><h2 id="foundation-tokens-title" className="ds-heading">One spatial vocabulary.</h2>
        <div className="ds-grid w-full">{([[0, 'Flat'], [1, 'Resting'], [2, 'Hovered'], [3, 'Floating']] as const).map(([elevation, title]) => <Card key={elevation} title={`Level ${elevation} / ${title}`} elevation={elevation} />)}</div>
        <dl className="ds-stack"><div><dt><strong>Perspective / tilt / lift / press</strong></dt><dd>1000 px, centered / ±4° / 6 px / 3 px</dd></div>
          <div><dt><strong>Decorative depth</strong></dt><dd>12 / 24 / 40 px</dd></div><div><dt><strong>Micro / fast / standard / reveal</strong></dt><dd>150 / 200 / 250 / 550 ms, plus 80 ms stagger</dd></div>
          <div><dt><strong>Optional ambient</strong></dt><dd>7 s mascot, 8 s accent; duration calibration stays within 5–8 s.</dd></div></dl>
        <p>Pausing or reducing motion restores static surfaces. Original colors, legible text and native navigation remain available without JavaScript.</p>
      </section>
    </>} />
    <footer className="ds-section ds-guide-divider"><Link href="/design-system">Return to the design system</Link></footer>
  </main></>;
}
