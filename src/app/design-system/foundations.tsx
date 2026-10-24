import { FoundationDetails } from "@/app/design-system/foundation-details";
import { Tag } from "@/design-system/components/content";

export function Foundations() {
  return <section id="foundations" className="ds-section" aria-labelledby="foundations-title">
    <h2 id="foundations-title" className="ds-heading">04 / Color, type & voice</h2>
    <p className="ds-guide-intro">Cream gives us space. Blue provides structure. Sunshine brings the energy. Cocoa keeps it readable.</p>
    <div className="ds-palette">
      {([['blue', 'Walk Blue', 'Brand surfaces'], ['sunshine', 'Sunshine', 'Actions and highlights'],
        ['cream', 'Warm Cream', 'Base and breathing room'], ['cocoa', 'Cocoa', 'Text and signature'],
        ['deep-blue', 'Deep Walk', 'Links and readable blue']] as const).map(([color, name, use]) =>
        <div className="ds-swatch" data-color={color} key={color}>
          <h3 className="ds-title-small">{name}</h3><p>{use}</p><code>--ds-{color}</code>
        </div>)}
    </div>
    <div className="ds-guide-subsection">
      <h3 className="ds-title-small">Pair colors with purpose</h3>
      <div className="ds-grid">
        {([['body', 'Cocoa / Cream', '13.30:1'], ['link', 'Deep Walk / Cream', '6.43:1'],
          ['action', 'Cocoa / Sunshine', '9.66:1'], ['inverse', 'Sunshine / Deep Walk', '4.67:1']] as const).map(([pair, label, ratio]) =>
          <div key={pair} className="ds-contrast">
            <span className="ds-contrast-sample" data-pair={pair} aria-hidden="true">Aa</span>
            <div><p><strong>{label}</strong></p><p className="ds-brand-note">{ratio} · normal text</p></div>
          </div>)}
      </div>
      <p className="ds-brand-note">Cream on Walk Blue is for large headings only. Do not use yellow text on Walk Blue. Check text over each actual photo.</p>
    </div>
    <div className="ds-guide-subsection">
      <h3 className="ds-title-small">Type with character</h3>
      {([['display', 'Display / 80 · 900', 'Good walks.'], ['h1', 'H1 / 56 · 900', 'Happy dogs.'],
        ['h2', 'H2 / 40 · 900', 'More than a walk.'], ['h3', 'H3 / 24 · 900', 'A clear next step.'],
        ['intro', 'Intro / 20 · 600 · 1.5', 'Real dogs, local stories and a familiar neighborhood.'],
        ['body', 'Body / 16 · 400 · 1.6', 'Every walk has a story. Familiar streets, curious noses and a little more joy along the way.'],
        ['support', 'Support / 14 · 600 · 1.4', 'Upper East Side · Manhattan']] as const).map(([role, label, text]) =>
        <div className="ds-type-specimen" key={role}><p className="ds-brand-note">Nunito Sans / {label}</p>
          <p className="ds-type-role" data-role={role}>{text}</p></div>)}
      <p className="ds-brand-note">Display and H1 scale down on small screens. Specimen text does not change the page heading hierarchy.</p>
      <div className="ds-type-specimen ds-stack"><p className="ds-label">Barlow Condensed / 700 / Label</p><div className="ds-row"><Tag size="sm">Small label</Tag><Tag>Upper East Side / NYC</Tag><Tag size="lg" variant="plain">Walk diaries</Tag></div><p className="ds-muted">Condensed uppercase belongs in short labels, not paragraphs.</p></div>
    </div>
    <FoundationDetails />
    <div className="ds-guide-subsection ds-guide-voice ds-stack">
      <h3 className="ds-label">Warm, playful and clear</h3>
      <blockquote className="ds-heading">“You said walk.<br />I heard adventure.”</blockquote>
      <p>Dog-perspective humor for editorial stories. Plain, precise language for service information.</p>
      <p className="ds-brand-note">Example copy only. Avoid unverified promises, availability and superlatives.</p>
    </div>
  </section>;
}
