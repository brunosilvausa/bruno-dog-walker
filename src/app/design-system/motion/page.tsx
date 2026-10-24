import type { Metadata } from "next";
import Link from "next/link";
import { ActionLink } from "@/design-system/components/action";
import { Card, Tag } from "@/design-system/components/content";
import { BrandPhoto } from "@/design-system/components/photo";
import { Logo } from "@/design-system/components/logo";
import { Wave, Spark } from "@/design-system/components/graphics";
import { GlassSurface } from "@/design-system/components/surfaces";
import { MotionShowcase } from "@/app/design-system/motion/motion-showcase";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";
import walkingGroup from "@/design-system/assets/photos/walking-group.jpg";

export const metadata: Metadata = {
  title: "Motion & depth | Bruno Dog Walker",
  description: "A controlled, accessible spatial and motion showcase for the Bruno Dog Walker design system.",
  robots: { index: false, follow: false },
};

export default function MotionPage() {
  const cards = ([
    [parkDog, "A familiar route.", "Black and white dog looking up on a park path", "center"],
    [brownDog, "Room to explore.", "Brown and white dog beside green leaves", "top"],
    [walkingGroup, "A shared rhythm.", "Dogs walking together on a neighborhood path", "center"],
  ] as const).map(([photo, title, alt, position], index) =>
    <Card interactive key={title} title={title} eyebrow={`Service pattern / 0${index + 1}`}
      media={<BrandPhoto src={photo} alt={alt} ratio="portrait" position={position} />}
      footer={<ActionLink href="/design-system#content" tactile arrow variant={index === 1 ? "secondary" : "primary"}>Explore this pattern</ActionLink>}>
      <p>One photograph, one message and a clear next step. Replace example copy with verified service information before product use.</p>
    </Card>);
  return <>
    <a className="ds-skip" href="#main">Skip to motion examples</a>
    <main id="main" className="ds-shell ds-motion-page">
      <header className="ds-row"><Logo size="sm" /><Link href="/design-system">Back to the design system</Link></header>
      <div className="ds-section ds-stack"><Tag>Phase 2 / Motion &amp; depth</Tag>
        <h1 className="ds-display">A little more alive.</h1>
        <p className="ds-intro">Playful depth, thoughtful motion and the same neighborhood warmth. Enable the effects to explore; pause them whenever you like.</p>
      </div>
      <MotionShowcase cards={cards} scene={<div className="ds-parallax-stage w-full">
        <div className="ds-parallax-back" aria-hidden="true"><Wave variant="swoop" /></div>
        <div className="ds-parallax-front" aria-hidden="true"><Spark /></div>
        <div className="ds-grid ds-scroll-stagger ds-parallax-content">
          <div data-reveal><BrandPhoto src={brownDog} position="top" alt="Brown and white dog beside green leaves" caption="One more sniff stop." captionTreatment="glass" /></div>
          <div data-reveal className="ds-stack"><GlassSurface elevation={3}><p className="ds-label">A floating thought</p><p>Small contextual panels carry a little depth. Long content stays on a solid surface.</p></GlassSurface>
            <p>Background plane: up to 12 px. Foreground accent: up to 20 px. Essential content stays on its base plane.</p>
            <ActionLink href="#motion-tokens" variant="secondary" arrow>Read the motion tokens</ActionLink>
          </div>
        </div>
      </div>} tokens={<section id="motion-tokens" className="ds-section ds-stack" aria-labelledby="motion-tokens-title">
        <p className="ds-label">04 / A shared rhythm</p><h2 id="motion-tokens-title" className="ds-heading">Expressive, within limits.</h2>
        <div className="ds-motion-table w-full" role="region" aria-label="Scrollable motion token table" tabIndex={0}><table><caption>Motion and depth tokens</caption><thead><tr><th scope="col">Role</th><th scope="col">Value</th><th scope="col">Purpose</th></tr></thead><tbody>
          {([['Micro', '150 ms', 'Color and direct feedback'], ['Hover', '250 ms', 'Shadow, arrow and glow'], ['Reset', '300 ms', 'Gentle spring-inspired return'], ['Section', '550 ms + 80 ms stagger', 'Once-per-session entrances'], ['Hello', '600 ms / ±2°', 'One explicit mascot greeting'], ['Perspective', '1000 px', 'Shared spatial frame'], ['Tilt / lift', '±4° / 4 px', 'Controlled cursor depth'], ['Button scale', '0.99 / 1.01', 'Physical press and hover'], ['Image scale', '1.04', 'Gentle fine-pointer hover'], ['Parallax', '−12 px / 20 px', 'Decorative planes only']] as const).map(([role, value, purpose]) =>
            <tr key={role}><th scope="row">{role}</th><td>{value}</td><td>{purpose}</td></tr>)}
        </tbody></table></div>
        <p>Reduced-motion alternative: static mascot, no tilt, parallax, transforms or reveals. Native links, focus indicators, readable photos and all essential content remain available.</p>
        <p className="ds-brand-note">Spring-inspired CSS easing is a visual timing curve, not a physics simulation. No autonomous ambient loops, heavy 3D engine or production performance claim.</p>
        <ActionLink href="/design-system#glow" variant="secondary">Compare glow treatments</ActionLink>
      </section>} />
      <footer className="ds-section ds-guide-divider"><Link href="/design-system">Return to the component library</Link></footer>
    </main>
  </>;
}
