import { ActionLink } from "@/design-system/components/action";

export function FoundationDetails() {
  return <div className="ds-guide-subsection ds-stack" id="measurements">
    <h3 className="ds-title-small">Focus that stands on its own</h3>
    <p>Use Tab to reach this link. A 3 px outline with 4 px offset communicates focus without relying on a glow.</p>
    <ActionLink href="#social" variant="secondary">Explore social compositions</ActionLink>
    <h3 className="ds-title-small">A consistent shape language</h3>
    <div className="ds-grid w-full">
      {([['field', '8 / Fields'], ['card', '16 / Cards'], ['block', '24 / Blocks'], ['pill', 'Pill / Actions']] as const).map(([radius, label]) =>
        <div className="ds-radius-specimen" data-radius={radius} key={radius}>{label}<code>--ds-radius-{radius}</code></div>)}
    </div>
    <h3 className="ds-title-small">Spacing / a 4 px base</h3>
    <ul className="ds-spacing-scale" aria-label="Spacing tokens in pixels">
      {([[1, 4], [2, 8], [3, 12], [4, 16], [6, 24], [8, 32], [12, 48], [16, 64], [24, 96]] as const).map(([step, pixels]) =>
        <li key={step}><span data-space={step} aria-hidden="true" /><strong>{pixels}</strong><code>space-{step}</code></li>)}
    </ul>
    <p className="ds-brand-note">Field shape is a visual token specimen. This guide adds no enquiry form.</p>
  </div>;
}
