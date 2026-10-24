"use client";

import { useState } from "react";
import { AmbientMotion } from "@/design-system/components/ambient-motion";
import { Button } from "@/design-system/components/action";
import { MascotSignature } from "@/design-system/components/logo";
import { Tag } from "@/design-system/components/content";
import { Spark } from "@/design-system/components/graphics";
import { SpatialCard } from "@/design-system/components/spatial-card";
import { SpatialLayer } from "@/design-system/components/surfaces";

export function AnimatedMascot({ paused, ambient = false }: { paused: boolean; ambient?: boolean }) {
  const [greeting, setGreeting] = useState(0);
  const [greetingActive, setGreetingActive] = useState(false);
  return <div className="ds-animated-mascot ds-stack">
    <SpatialCard paused={paused} className="w-full">
      <div className="ds-mascot-stage">
        <div key={greeting} className="ds-mascot-greeting" data-hello={greeting && !paused ? "true" : undefined}
          onAnimationEnd={event => { if (event.target === event.currentTarget) setGreetingActive(false); }}>
          {ambient ? <AmbientMotion paused={paused || greetingActive}><MascotSignature size="lg" decorative /></AmbientMotion> : <MascotSignature size="lg" decorative />}
        </div>
        <SpatialLayer depth="near"><Tag expressive>Neighborhood spirit</Tag></SpatialLayer>
        <SpatialLayer depth={ambient ? "float" : "far"}>{ambient ? <AmbientMotion kind="accent" paused={paused || greetingActive}><Spark /></AmbientMotion> : <Spark />}</SpatialLayer>
      </div>
    </SpatialCard>
    <Button disabled={paused} onClick={() => { setGreeting(value => value + 1); setGreetingActive(true); }} arrow>Say hello</Button>
    <p role="status" className="ds-brand-note">{greeting ? "A little hello from the mascot." : "Enable motion, move the cursor, or try a small hello."}</p>
  </div>;
}
