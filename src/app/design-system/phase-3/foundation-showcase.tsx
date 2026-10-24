"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/design-system/components/action";
import { AnimatedMascot } from "@/design-system/components/animated-mascot";
import { SpatialCard } from "@/design-system/components/spatial-card";
import { ScrollScene } from "@/design-system/components/scroll-scene";
import { ScrollReveal, StaggerContainer } from "@/design-system/components/reveal";
import { SiteHeader } from "@/design-system/components/website";
import { calibrationDefaults, calibrationStyle, type Calibration } from "@/design-system/components/calibration";
import { CalibrationControls } from "@/app/design-system/calibration-controls";

const defaults = Object.freeze({ ...calibrationDefaults, lift: 6 });

export function FoundationShowcase({ cards, narrative, examples }: { cards: ReactNode[]; narrative: ReactNode; examples: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [ambient, setAmbient] = useState(false);
  const [settings, setSettings] = useState<Calibration>(defaults);
  const [version, setVersion] = useState(0);
  const paused = !enabled || settings.reduced;
  const reset = () => { setEnabled(false); setAmbient(false); setSettings(defaults); setVersion(value => value + 1); };
  const pause = () => { setEnabled(false); setAmbient(false); };
  return <div className="ds-motion ds-lab ds-phase-three" style={calibrationStyle(settings)} data-paused={paused || undefined} data-reduced-motion={settings.reduced || undefined}>
    <CalibrationControls settings={settings} onChange={setSettings} onReset={reset} />
    <div className="ds-section ds-stack">
      <div className="ds-row"><Button aria-pressed={enabled} onClick={() => { setEnabled(!enabled); setAmbient(false); }}>Enable spatial motion</Button>
        <Button variant="secondary" aria-pressed={ambient} disabled={paused} onClick={() => setAmbient(!ambient)}>Ambient motion</Button></div>
      <p role="status">{paused ? "Motion is paused. The foundation remains fully readable." : ambient ? "Spatial and optional ambient motion enabled. Hover, focus, leaving the viewport or OS reduction stops ambient movement." : "Spatial motion enabled. Ambient movement remains off."} OS reduced motion always takes priority.</p>
    </div>
    <SiteHeader sticky homeHref="/design-system" navigationLabel="Stage A foundation">
      <a href="#foundation-mascot">Mascot</a><a href="#foundation-cards">Cards</a><a href="#foundation-narrative">Narrative</a><a href="#foundation-states">States</a>
      <Button size="sm" variant="secondary" disabled={!enabled} onClick={pause}>Pause motion</Button>
    </SiteHeader>
    <section id="foundation-mascot" className="ds-section ds-guide-hero" aria-labelledby="foundation-mascot-title">
      <div className="ds-stack"><p className="ds-label">Original artwork / new possibilities</p><h2 id="foundation-mascot-title" className="ds-heading">A familiar face.<br />A softer rhythm.</h2>
        <p className="ds-intro">Enable motion, then optionally add the ambient rhythm. The original mascot floats as one rigid container; only its floor shadow breathes.</p>
        <p className="ds-brand-note">No head articulation or image deformation. A separate star moves asynchronously while the label and reading areas stay still.</p></div>
      <AnimatedMascot key={`${paused}-${version}`} paused={paused} ambient={ambient} />
    </section>
    <ScrollScene paused={paused}>
      <section id="foundation-cards" className="ds-section ds-stack" aria-labelledby="foundation-cards-title">
        <h2 id="foundation-cards-title" className="ds-heading">Calibrated depth.</h2><p>Four-degree tilt, a six-pixel lift and directional warm light. Adjust the controls, then try the same card again.</p>
        <StaggerContainer className="w-full">{cards.map((card, index) => <ScrollReveal key={index}><SpatialCard paused={paused}>{card}</SpatialCard></ScrollReveal>)}</StaggerContainer>
        <p className="ds-brand-note">Touch uses the real CTA’s three-pixel press feedback. Cards never become extra buttons.</p>
      </section>
      <section id="foundation-narrative" className="ds-section ds-stack" aria-labelledby="foundation-narrative-title">
        <h2 id="foundation-narrative-title" className="ds-heading">A short visual story.</h2><p>Image, message and next step reveal once, with the same observer and no scroll interception.</p>
        {narrative}
      </section>
    </ScrollScene>
    <div key={version}>{examples}</div>
  </div>;
}
