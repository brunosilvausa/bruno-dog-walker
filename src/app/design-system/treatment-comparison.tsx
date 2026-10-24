"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/design-system/components/action";

export function TreatmentComparison({ children }: { children: ReactNode }) {
  const [refined, setRefined] = useState(true);
  return <div className="ds-stack">
    <Button variant="secondary" aria-pressed={refined} aria-controls="treatment-preview"
      onClick={() => setRefined(!refined)}>Refined treatment</Button>
    <p role="status">{refined ? "Refined: softer hover elevation, translucent borders and premium easing." : "Established: previous borders, hover shadow and easing."}</p>
    <div id="treatment-preview" className="ds-treatment ds-grid w-full" data-treatment={refined ? "refined" : "established"}>
      {children}
    </div>
    <p className="ds-brand-note">Hover the card and CTA, then toggle to compare. Values apply only to this preview. The brand palette and your example text stay the same.</p>
  </div>;
}
