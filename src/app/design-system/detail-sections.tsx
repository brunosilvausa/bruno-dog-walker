import { Card } from "@/design-system/components/content";
import { Wave, Spark } from "@/design-system/components/graphics";
import { BrandPhoto } from "@/design-system/components/photo";
import { CaptionBlock, CaptionWord, NameCaption } from "@/design-system/components/overlays";
import walkingGroup from "@/design-system/assets/photos/walking-group.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export function StatePalette() {
  return <div className="ds-guide-subsection w-full">
    <h3 className="ds-title-small">Action & border tokens</h3>
    <div className="ds-palette">
      {([['sunshine', 'Default'], ['hover', 'Hover'], ['pressed', 'Pressed'], ['disabled', 'Disabled'],
        ['field-border', 'Field border'], ['card-border', 'Card border']] as const).map(([color, label]) =>
        <div key={color} className="ds-stack"><div className="ds-swatch w-full" data-color={color} aria-hidden="true" /><p><strong>{label}</strong></p></div>)}
    </div>
    <h3 className="ds-title-small ds-guide-subsection">Supporting tones</h3>
    <div className="ds-palette">
      {([['tint', 'Blue tint'], ['muted', 'Cocoa soft'], ['strong', 'Cocoa deep'], ['white', 'White'], ['focus', 'Focus']] as const).map(([color, label]) =>
        <div key={color} className="ds-stack"><div className="ds-swatch w-full" data-color={color} aria-hidden="true" /><p><strong>{label}</strong></p></div>)}
    </div>
    <p className="ds-brand-note">Control borders communicate boundaries; card borders are decorative. The focus outline stays visible independently of glow.</p>
  </div>;
}

export function DetailSections() {
  return <>
    <section className="ds-section" aria-labelledby="graphic-variants-title">
      <h2 id="graphic-variants-title" className="ds-heading">12 / Graphic variations</h2>
      <div className="ds-brand-grid">
        <div><div className="ds-brand-tile"><Wave /></div><h3 className="ds-brand-caption">Hill</h3></div>
        <div><div className="ds-brand-tile"><Wave variant="swoop" /></div><h3 className="ds-brand-caption">Swoop</h3></div>
        <div><div className="ds-brand-tile"><Spark /></div><h3 className="ds-brand-caption">Deep Walk spark</h3></div>
        <div><div className="ds-brand-tile" data-tone="blue"><Spark tone="cream" glow /></div><h3 className="ds-brand-caption">Cream with a warm glow</h3></div>
      </div>
      <p className="ds-brand-note">These are separate specimens. In a composition, choose one wave and one accent.</p>
    </section>
    <section id="overlays" className="ds-section" aria-labelledby="overlay-title">
      <h2 id="overlay-title" className="ds-heading">13 / Words over real moments</h2>
      <p className="ds-guide-intro">Solid text backings keep captions readable. Reserve space for text rather than covering eyes or snouts.</p>
      <div className="ds-grid">
        <div className="ds-overlay-demo"><BrandPhoto src={walkingGroup} alt="Dogs on leashes together on a park path" />
          <div className="ds-overlay-content"><CaptionBlock>Every walk has its own <CaptionWord>rhythm.</CaptionWord></CaptionBlock></div>
        </div>
        <div className="ds-overlay-demo"><BrandPhoto src={brownDog} position="top" alt="Brown and white dog beside green leaves" />
          <div className="ds-overlay-content"><NameCaption name="Dog name" context="Example identification" /></div>
        </div>
      </div>
      <p className="ds-brand-note">Static overlay specimens. Confirm a dog’s identity before replacing the placeholder. The photo and reserved caption band form one composition.</p>
    </section>
    <section className="ds-section" aria-labelledby="elevation-title">
      <h2 id="elevation-title" className="ds-heading">14 / Four levels of elevation</h2>
      <div className="ds-brand-grid">
        {([[0, 'Flat', 'Decorative boundary'], [1, 'Resting', 'Everyday content'], [2, 'Lifted', 'Interaction and focus'], [3, 'Floating', 'Small contextual panels']] as const).map(([level, title, use]) =>
          <Card key={level} title={`Level ${level} / ${title}`} className="ds-elevation" elevation={level}><p>{use}</p></Card>)}
      </div>
    </section>
  </>;
}
