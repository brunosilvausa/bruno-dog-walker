import { Button, ActionLink } from "@/design-system/components/action";
import { Card } from "@/design-system/components/content";
import { GlassSurface } from "@/design-system/components/surfaces";
import { TextField } from "@/design-system/components/field";
import { BrandPhoto } from "@/design-system/components/photo";
import { TreatmentComparison } from "@/app/design-system/treatment-comparison";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export function PremiumSections() {
  return <>
    <section id="refinement" className="ds-section" aria-labelledby="refinement-title">
      <h2 id="refinement-title" className="ds-heading">17 / A quieter kind of premium</h2>
      <p className="ds-guide-intro">The same warm palette, with a softer sense of depth. Compare the previous treatment with the refined tokens on real components.</p>
      <TreatmentComparison>
        <Card interactive eyebrow="Solid service-card pattern" title="One idea. Room to breathe."
          footer={<ActionLink href="#content" arrow>Explore composition</ActionLink>}>
          <p>Keep substantial content on a solid surface. Use elevation to clarify interaction, rather than adding glass everywhere.</p>
        </Card>
        <div className="ds-stack">
          <GlassSurface elevation={3}><p className="ds-label">Compact context</p><p>Warm glass belongs in small panels, captions and navigation.</p></GlassSurface>
          <TextField id="comparison-copy" label="Example copy" helper="Local specimen text; nothing is submitted." placeholder="Try a short phrase" />
          <div className="ds-row"><Button arrow>Primary CTA specimen</Button><Button variant="secondary">Secondary specimen</Button></div>
        </div>
      </TreatmentComparison>
    </section>
    <section id="context-gallery" className="ds-section" aria-labelledby="context-gallery-title">
      <h2 id="context-gallery-title" className="ds-heading">18 / Context, gently layered</h2>
      <p className="ds-guide-intro">Captions stay readable at rest. Hover or focus a photograph for warm glass and a little depth. The text overlaps only the lower edge; eyes and snouts stay clear.</p>
      <div className="ds-grid">
        <BrandPhoto src={parkDog} alt="Black and white dog looking up from a park path" caption="You said walk. I heard adventure." captionTreatment="glass" />
        <BrandPhoto src={brownDog} position="top" alt="Brown and white dog beside green leaves" caption="One more sniff stop." captionTreatment="glass" />
      </div>
      <p className="ds-brand-note">Captions remain present on touch and without JavaScript. Browsers without backdrop blur keep an opaque cream backing.</p>
    </section>
    <section id="inputs" className="ds-section" aria-labelledby="inputs-title">
      <h2 id="inputs-title" className="ds-heading">19 / Clear input states</h2>
      <p className="ds-guide-intro">Library specimens only. Labels, descriptions and error text remain associated with each control. This page has no enquiry form or submission.</p>
      <div className="ds-grid">
        <TextField id="input-example" label="Example text" helper="Type to check focus and readability." placeholder="A short example" />
        <TextField id="input-error" label="Required example" helper="This demonstrates an invalid value." error="Enter example text to continue." required defaultValue="" />
        <TextField id="input-disabled" label="Disabled example" helper="This control is unavailable." disabled defaultValue="Unavailable" />
        <TextField id="input-loading" label="Loading example" helper="Editing is paused while busy." loading defaultValue="Preparing…" />
      </div>
    </section>
  </>;
}
