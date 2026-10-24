import { GlassSurface } from "@/design-system/components/surfaces";
import { BrandPhoto } from "@/design-system/components/photo";
import parkCrew from "@/design-system/assets/photos/park-crew.jpg";
import walkingGroup from "@/design-system/assets/photos/walking-group.jpg";
import { GlowExamples, TimingExamples } from "@/app/design-system/finishing-examples";

export function FinishingSections() {
  return <>
    <section id="glass" className="ds-section" aria-labelledby="glass-title">
      <h2 id="glass-title" className="ds-heading">09 / Glass, with a purpose</h2>
      <p className="ds-guide-intro">Compare the reference treatment against real photography. Keep panels short, keep faces clear, and use an opaque fallback whenever blur is unavailable.</p>
      <div className="ds-grid">
        <div className="ds-glass-scene">
          <BrandPhoto src={parkCrew} ratio="portrait" alt="Two dogs on leashes on a park path" />
          <GlassSurface treatment="reference" elevation={1}><h3 className="ds-title-small">Cream / 78%</h3><p className="ds-brand-note">16 px blur · reference profile</p></GlassSurface>
        </div>
        <div className="ds-glass-scene">
          <BrandPhoto src={walkingGroup} ratio="portrait" alt="Dogs on leashes walking together on a park path" />
          <GlassSurface treatment="reference" tone="cocoa" elevation={1}><h3 className="ds-title-small">Cocoa / 72%</h3><p>16 px blur · light-photo profile</p></GlassSurface>
        </div>
        <div className="ds-glass-scene">
          <BrandPhoto src={parkCrew} ratio="portrait" alt="The same two dogs on a park path behind an opaque example panel" />
          <GlassSurface treatment="reference" fallback elevation={0}><h3 className="ds-title-small">Opaque fallback</h3><p className="ds-brand-note">Readability without blur.</p></GlassSurface>
        </div>
      </div>
      <p className="ds-brand-note">The standard component keeps its 88% cream / 92% cocoa backing and 14 px blur. Reference profiles are explicit choices. Reserve glass for compact context, floating labels or navigation.</p>
    </section>
    <section id="glow" className="ds-section" aria-labelledby="glow-title">
      <h2 id="glow-title" className="ds-heading">10 / Warmth, in moderation</h2>
      <p className="ds-guide-intro">Warm is the default light. Strong emphasis stays decorative. Experimental neon is an opt-in specimen.</p>
      <GlowExamples />
    </section>
    <section id="timing" className="ds-section" aria-labelledby="timing-title">
      <h2 id="timing-title" className="ds-heading">11 / One rhythm, clear roles</h2>
      <p className="ds-guide-intro">A short, consistent scale makes interaction feel intentional. Compare the roles, then tune the laboratory’s duration multiplier.</p>
      <TimingExamples />
    </section>
  </>;
}
