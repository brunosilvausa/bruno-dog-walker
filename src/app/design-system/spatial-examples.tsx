"use client";

import { useState, type ReactNode } from "react";
import { Button, ActionLink } from "@/design-system/components/action";
import { Card, Tag } from "@/design-system/components/content";
import { Spark } from "@/design-system/components/graphics";
import { SpatialCard } from "@/design-system/components/spatial-card";
import { AmbientGlow, FloatingElement, GlassSurface, SpatialLayer } from "@/design-system/components/surfaces";
import { calibrationDefaults, calibrationStyle } from "@/design-system/components/calibration";
import { CalibrationControls } from "@/app/design-system/calibration-controls";

export function SpatialExamples({ children }: { children?: ReactNode }) {
  const [enabled, setEnabled] = useState(false);
  const [settings, setSettings] = useState(calibrationDefaults);
  const paused = !enabled || settings.reduced;
  const [replay, setReplay] = useState(0);
  const [resetVersion, setResetVersion] = useState(0);
  const reset = () => { setSettings(calibrationDefaults); setEnabled(false); setReplay(0); setResetVersion(resetVersion + 1); };
  return <div className="ds-lab" style={calibrationStyle(settings)} data-reduced-motion={settings.reduced || undefined}>
    <section id="spatial" className="ds-section ds-stack" aria-labelledby="spatial-title">
      <h2 id="spatial-title" className="ds-heading">07 / A little depth, thoughtfully</h2>
      <p className="ds-guide-intro">Move the mouse across the card to explore light and depth. Tab into its link for a clear focus state. Touch keeps the surface steady.</p>
      <CalibrationControls settings={settings} onChange={setSettings} onReset={reset} />
      <Button variant="secondary" aria-pressed={enabled} onClick={() => setEnabled(!enabled)}>Spatial effects</Button>
      <p role="status">{settings.reduced ? "Reduced-motion simulation is active." : paused ? "Spatial motion paused. Toggle Spatial effects to explore." : "Spatial motion enabled. Toggle Spatial effects again to pause."} OS reduced-motion preferences always take priority.</p>
      <div className="ds-spatial-stage w-full">
        <AmbientGlow />
        <div className="ds-grid">
          <SpatialCard paused={paused}>
            <Card eyebrow="Interactive surface" title="A familiar face. A new dimension."
              footer={<ActionLink href="#identity" variant="secondary" tactile arrow>Explore the identity</ActionLink>}>
              <SpatialLayer depth="near"><p>Small changes in light and perspective give the content room to stand out.</p></SpatialLayer>
              <SpatialLayer depth="far"><Tag>Neighborhood spirit</Tag></SpatialLayer>
            </Card>
          </SpatialCard>
          <div className="ds-stack">
            <div className="ds-row"><ActionLink href="#actions" tactile arrow>Try a tactile link</ActionLink><Button variant="secondary" tactile disabled>Unavailable</Button></div>
            <FloatingElement paused={paused}><GlassSurface elevation={2} className="ds-stack"><Tag variant="plain">A little lift</Tag>
              <ActionLink href="#grammar" variant="secondary" size="sm">Read the label guide</ActionLink>
            </GlassSurface></FloatingElement>
            <GlassSurface tone="cocoa" elevation={1} className="ds-stack">
              <p className="ds-label">Cocoa glass</p><p>A quiet contextual panel with readable cream text.</p>
              <ActionLink href="#foundations" variant="secondary">Review contrast</ActionLink>
            </GlassSurface>
            <GlassSurface fallback elevation={0}><p>Opaque fallback keeps the message clear when blur is unavailable.</p></GlassSurface>
            <Spark />
          </div>
        </div>
      </div>
      <p className="ds-brand-note">Tilt stays within four degrees. Floating motion pauses while a child has keyboard focus. Calibration affects this laboratory only.</p>
    </section>
    <section id="motion" className="ds-section ds-stack" aria-labelledby="motion-title">
      <h2 id="motion-title" className="ds-heading">08 / An entrance with rhythm</h2>
      <p className="ds-guide-intro">A short rise and fade, with an 80 ms step between items. Content is visible before JavaScript loads; replay is an explicit action.</p>
      <div key={replay} className="ds-grid ds-entrance-grid w-full" data-replay={replay ? "true" : undefined}>
        <Card eyebrow="First" title="A simple hello." />
        <Card eyebrow="Then" title="A little sunshine." />
        <Card eyebrow="Together" title="A familiar rhythm." />
      </div>
      <Button variant="secondary" onClick={() => setReplay(replay + 1)}>Replay entrance</Button>
      <p className="ds-brand-note">400 ms base entrance · 0 / 80 / 160 ms stagger · duration follows calibration · no entrance animation under reduced motion.</p>
    </section>
    <div key={resetVersion}>{children}</div>
  </div>;
}
