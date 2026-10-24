"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/design-system/components/action";
import { AnimatedMascot } from "@/design-system/components/animated-mascot";
import { SpatialCard } from "@/design-system/components/spatial-card";
import { ScrollScene } from "@/design-system/components/scroll-scene";
import { SiteHeader } from "@/design-system/components/website";

export function MotionShowcase({ cards, scene, tokens }: { cards: ReactNode[]; scene: ReactNode; tokens: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);
  const paused = !enabled || reduced;
  return <div className="ds-motion" data-paused={paused || undefined} data-reduced-motion={reduced || undefined}>
    <div className="ds-stack ds-motion-controls">
      <div className="ds-row">
        <Button aria-pressed={enabled} onClick={() => setEnabled(value => !value)}>Enable spatial motion</Button>
        <Button variant="secondary" aria-pressed={reduced} onClick={() => setReduced(value => !value)}>Simulate reduced motion</Button>
      </div>
      <p role="status">{reduced ? "Reduced-motion simulation is active." : enabled ? "Motion enabled. Toggle again to pause and restore static content." : "Motion is paused. All content remains available."} Your OS preference always takes priority.</p>
    </div>
    <SiteHeader sticky homeHref="/design-system" navigationLabel="Motion showcase">
      <a href="#motion-mascot">Mascot</a><a href="#motion-cards">Cards</a><a href="#motion-scroll">Scroll</a><a href="#motion-tokens">Tokens</a>
      <Button size="sm" variant="secondary" disabled={!enabled} onClick={() => setEnabled(false)}>Pause motion</Button>
    </SiteHeader>
    <section id="motion-mascot" className="ds-section ds-guide-hero" aria-labelledby="motion-mascot-title">
      <div className="ds-stack"><p className="ds-label">01 / Familiar character</p>
        <h2 id="motion-mascot-title" className="ds-heading">A little hello.<br />A familiar face.</h2>
        <p className="ds-intro">The original mascot in a rigid, layered frame. Move the cursor to explore perspective, or use the button for one small greeting.</p>
        <p className="ds-brand-note">No facial articulation, new asset or image distortion. Keyboard, touch and reduced motion keep the frame steady.</p>
        <a className="ds-motion-link" href="#motion-cards">Discover the depth patterns</a>
      </div>
      <AnimatedMascot key={paused ? "static" : "active"} paused={paused} />
    </section>
    <ScrollScene paused={paused}>
      <section id="motion-cards" className="ds-section ds-stack" aria-labelledby="motion-cards-title">
        <p className="ds-label">02 / Tactile patterns</p><h2 id="motion-cards-title" className="ds-heading">Light follows the moment.</h2>
        <p className="ds-guide-intro">Warm shadows shift opposite the cursor. Four degrees of tilt, a small lift and solid surfaces keep the message clear.</p>
        <div className="ds-grid ds-scroll-stagger w-full">
          {cards.map((card, index) => <div key={index} data-reveal><SpatialCard paused={paused}>{card}</SpatialCard></div>)}
        </div>
        <p className="ds-brand-note">Illustrative service-card layouts, not a verified service catalogue. The CTA owns focus and activation. Reveal runs once per enabled session, with an 80 ms stagger.</p>
      </section>
      <section id="motion-scroll" className="ds-section ds-stack" aria-labelledby="motion-scroll-title">
        <p className="ds-label">03 / A gentle change in perspective</p><h2 id="motion-scroll-title" className="ds-heading">Depth without taking over.</h2>
        <p className="ds-guide-intro">Scroll naturally. Two decorative planes move at different speeds while text and photographs stay readable. No scroll interception or pinned timeline.</p>
        {scene}
      </section>
    </ScrollScene>
    {tokens}
  </div>;
}
