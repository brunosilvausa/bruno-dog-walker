import { ActionLink } from "@/design-system/components/action";
import { Card, Highlight, Tag } from "@/design-system/components/content";
import { Logo, MascotSignature } from "@/design-system/components/logo";
import { Wave, Spark } from "@/design-system/components/graphics";
import { BrandPhoto } from "@/design-system/components/photo";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import parkCrew from "@/design-system/assets/photos/park-crew.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";
import walkingGroup from "@/design-system/assets/photos/walking-group.jpg";

const gallerySizes = "(max-width: 29rem) calc(100vw - 3rem), (max-width: 45rem) 50vw, (max-width: 55rem) 33vw, 25vw";

export function BrandSections() {
  return <>
    <section id="identity" className="ds-section" aria-labelledby="identity-title">
      <h2 id="identity-title" className="ds-heading">01 / A familiar face</h2>
      <p className="ds-guide-intro">Four original signatures. Give each one room to breathe; keep the proportions and colors intact.</p>
      <div className="ds-brand-grid">
        {([['primary', 'Primary', 'The complete brand signature.'], ['alternate', 'Alternate', 'The same familiar face, without the blue disc.'],
          ['wordmark', 'Wordmark', 'Use when the name needs to lead.'], ['mascot', 'Mascot', 'A compact, recognizable signature.']] as const).map(([variant, title, note]) =>
          <div key={variant}>
            <div className="ds-brand-tile"><Logo variant={variant} size="lg" /></div>
            <h3 className="ds-brand-caption">{title}</h3><p className="ds-brand-note">{note}</p>
          </div>)}
      </div>
      <div className="ds-guide-subsection ds-stack">
        <h3 className="ds-title-small">Small signature. Same character.</h3>
        <div className="ds-row">
          <MascotSignature size="lg" /><MascotSignature base="cream" />
          <MascotSignature size="sm" /><MascotSignature base="cream" size="sm" />
        </div>
        <p className="ds-muted">Use the mascot for compact spaces, starting at 48 px. Keep full logos at least 120 px wide.</p>
      </div>
    </section>
    <section id="grammar" className="ds-section" aria-labelledby="grammar-title">
      <h2 id="grammar-title" className="ds-heading">02 / The visual grammar</h2>
      <p className="ds-guide-intro">A walk has its own rhythm. A curve, a label and a small spark make the brand feel connected.</p>
      <div className="ds-grid">
        <div><div className="ds-brand-tile"><Wave /></div><h3 className="ds-brand-caption">One dominant curve</h3><p className="ds-brand-note">Use a wave to divide a composition. Keep faces and text clear.</p></div>
        <div><div className="ds-brand-tile"><Tag expressive size="lg">Walk diaries / NYC</Tag></div><h3 className="ds-brand-caption">An editorial label</h3><p className="ds-brand-note">Short context, condensed type, Sunshine and Cocoa.</p></div>
        <div><div className="ds-brand-tile"><Spark /></div><h3 className="ds-brand-caption">A little energy</h3><p className="ds-brand-note">One spark is enough. Decoration never replaces an icon or label.</p></div>
      </div>
    </section>
    <section id="photography" className="ds-section" aria-labelledby="photography-title">
      <h2 id="photography-title" className="ds-heading">03 / Real moments, naturally</h2>
      <p className="ds-guide-intro">Use real photographs in natural light. Keep eyes and snouts visible, preserve leashes and choose the crop for the picture.</p>
      <div className="ds-brand-grid">
        <BrandPhoto src={parkDog} sizes={gallerySizes} alt="Black and white dog looking toward the camera on a park path" caption="Expression first. Leave the face clear." />
        <BrandPhoto src={parkCrew} sizes={gallerySizes} alt="Dogs on leashes together on a park path" caption="Show the setting and the dogs together." />
        <BrandPhoto src={brownDog} sizes={gallerySizes} position="top" alt="Brown and white dog photographed beside green foliage" caption="Natural color, without decorative filters." />
        <BrandPhoto src={walkingGroup} sizes={gallerySizes} alt="A group of dogs on leashes walking along a park path" caption="Keep the context visible in a wider frame." />
      </div>
      <p className="ds-brand-note">Supplied archive photographs, shown as design specimens. These examples do not identify dogs or establish services.</p>
    </section>
  </>;
}

export function CompositionSection() {
  return <section id="content" className="ds-section" aria-labelledby="content-title">
    <h2 id="content-title" className="ds-heading">06 / Bring the pieces together</h2>
    <p className="ds-guide-intro">Combine a clear title, a real image and one next step. The photo card lifts on hover or CTA focus; Tab reaches its link, not an extra card target.</p>
    <div className="ds-grid">
      <Card interactive title="A moment in the park." eyebrow="Photo + story"
        media={<BrandPhoto src={parkDog} alt="Black and white dog looking up from a park path" />}
        footer={<ActionLink href="#photography" size="sm" arrow>Explore photography</ActionLink>}>
        <p>Keep the photo natural and the message short. Give one <Highlight>bright idea</Highlight> the spotlight.</p>
      </Card>
      <Card title="Room for a little joy." tone="tint" elevation={0} eyebrow="Supporting content"
        footer={<Tag expressive>Small paws / Big city</Tag>}>
        <p>Use the blue tint for quiet supporting content. The label brings character without competing with the heading.</p>
      </Card>
      <Card title="Clear words. Familiar voice." tone="cream" elevation={0} eyebrow="Simple content"
        footer={<div className="ds-row"><MascotSignature size="sm" base="cream" decorative /><span className="ds-label">Bruno Dog Walker</span></div>}>
        <p>A compact signature and generous spacing can be enough. Every card does not need an effect.</p>
      </Card>
    </div>
  </section>;
}
