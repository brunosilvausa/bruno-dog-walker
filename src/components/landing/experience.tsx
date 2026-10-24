"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/design-system/components/action";
import { ScrollScene } from "@/design-system/components/scroll-scene";
import { SpatialCard } from "@/design-system/components/spatial-card";

export function LandingExperience({ heroCopy, heroArt, children }: {
  heroCopy: ReactNode; heroArt: ReactNode; children: ReactNode;
}) {
  const [paused, setPaused] = useState(false);
  return <div className="lp-experience ds-motion" data-paused={paused || undefined}>
    <div className="lp-reading-progress" aria-hidden="true" />
    <ScrollScene paused={paused}>
      <section className="lp-hero lp-shell" aria-labelledby="hero-heading">
        {heroCopy}
        <SpatialCard paused={paused} className="lp-hero-spatial">{heroArt}</SpatialCard>
        <div className="lp-hero-utilities" id="motion-settings" tabIndex={-1}>
          <a href="#walks" className="lp-scroll-cue"><span aria-hidden="true">↓</span> Start exploring</a>
          <Button className="lp-motion-toggle" variant="cream" size="sm" glow="none"
            aria-pressed={paused} onClick={() => setPaused(value => !value)}>
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span> Pause motion
          </Button>
        </div>
      </section>
    </ScrollScene>
    <ScrollScene paused={paused}>{children}</ScrollScene>
  </div>;
}
