"use client";

import { useState } from "react";
import { Button } from "@/design-system/components/action";

export function GlowExamples() {
  const [neon, setNeon] = useState(false);
  return <div className="ds-stack">
    <div className="ds-brand-grid w-full">
      <div className="ds-glow-specimen" data-glow="none"><span className="ds-glow-chip">Resting</span><p>No glow at rest.</p></div>
      <div className="ds-glow-specimen" data-glow="warm"><span className="ds-glow-chip">Warm</span><p>Primary hover emphasis.</p></div>
      <div className="ds-glow-specimen" data-glow="strong"><span className="ds-glow-chip">Strong</span><p>Decorative emphasis only.</p></div>
      <div className="ds-glow-specimen" data-glow="neon" data-neon={neon || undefined}><span className="ds-glow-chip">Experimental</span><p>{neon ? "Neon preview enabled." : "Neon preview is off."}</p></div>
    </div>
    <Button variant="secondary" aria-pressed={neon} onClick={() => setNeon(!neon)}>Preview experimental neon</Button>
    <p className="ds-brand-note">Static intensity specimens, not action states. Calibration scales these halos. Glow stays outside the content and never replaces the focus outline.</p>
  </div>;
}

export function TimingExamples() {
  const [play, setPlay] = useState(0);
  return <div className="ds-stack">
    <div key={play} className="ds-stack w-full ds-timing" data-play={play ? "true" : undefined}>
      {([['fast', 'Fast / 150 ms', 'Color and press'], ['normal', 'Normal / 250 ms', 'Lift, shadow and glow'], ['slow', 'Slow / 400 ms', 'Entrances and image transitions']] as const).map(([speed, label, use]) =>
        <div key={speed} className="ds-timing-row" data-speed={speed}>
          <div><p className="ds-label">{label}</p><p className="ds-brand-note">{use}</p></div>
          <div className="ds-timing-track" aria-hidden="true"><div className="ds-timing-motion"><span /></div></div>
        </div>)}
    </div>
    <Button variant="secondary" onClick={() => setPlay(play + 1)}>Play timing comparison</Button>
    <p className="ds-brand-note">Base durations follow the laboratory multiplier. Each preview runs once; local and OS reduced motion keep the dots still.</p>
  </div>;
}
