import { SiteHeader, SiteFooter, WebsiteHero } from "@/design-system/components/website";
import { ActionLink } from "@/design-system/components/action";
import { Card, CtaStrip, Highlight } from "@/design-system/components/content";
import { BrandPhoto } from "@/design-system/components/photo";
import parkDog from "@/design-system/assets/photos/park-dog.jpg";
import brownDog from "@/design-system/assets/photos/brown-dog.jpg";

export function WebsiteSection() {
  return <section id="website" className="ds-section" aria-labelledby="website-title">
    <h2 id="website-title" className="ds-heading">16 / A website, composed</h2>
    <p className="ds-guide-intro">A glass header, a welcoming hero, clear content and a solid Cocoa footer. This specimen demonstrates composition; its links explore the guide.</p>
    <div className="ds-site-preview" data-scrollable="true" role="region" aria-label="Scrollable website specimen" tabIndex={0}>
      <SiteHeader sticky homeHref="#website-overview" navigationLabel="Website specimen">
        <a href="#website-patterns">Patterns</a><a href="#website-gallery">Gallery</a>
        <ActionLink href="#website-next" size="sm">Explore the guide</ActionLink>
      </SiteHeader>
      <div className="ds-site-body" id="website-overview">
        <WebsiteHero title={<>Good walks.<br /><Highlight tone="text">Happy dogs.</Highlight></>}
          eyebrow="Upper East Side / Manhattan" headingLevel={3}
          action={<><ActionLink href="#website-patterns" tactile arrow>Explore patterns</ActionLink>
            <ActionLink href="#website-gallery" variant="secondary">View gallery</ActionLink></>}>
          <p>A familiar identity, real photographs and room for a clear next step.</p>
        </WebsiteHero>
        <section id="website-patterns" className="ds-stack" aria-labelledby="website-patterns-title">
          <h3 id="website-patterns-title" className="ds-heading">Clear content. Thoughtful structure.</h3>
          <p>Composition examples for future verified content, rather than a service catalogue.</p>
          <div className="ds-grid w-full">
            <Card title="Start with one idea." headingLevel={4} eyebrow="Content pattern">
              <p>A short heading and a useful sentence make the message easy to scan.</p></Card>
            <Card title="Make the next step clear." headingLevel={4} eyebrow="Action pattern" tone="tint"
              footer={<ActionLink href="#website-next" variant="secondary" size="sm">See the next step</ActionLink>}>
              <p>Use descriptive links and only offer destinations that actually exist.</p></Card>
          </div>
        </section>
        <section id="website-gallery" className="ds-stack" aria-labelledby="website-gallery-title">
          <h3 id="website-gallery-title" className="ds-heading">Real dogs. Local stories.</h3>
          <div className="ds-grid w-full">
            <BrandPhoto src={parkDog} alt="Black and white dog looking up from a park path" caption="You said walk. I heard adventure." />
            <BrandPhoto src={brownDog} position="top" alt="Brown and white dog beside green leaves" caption="One more sniff stop." />
          </div>
          <p className="ds-brand-note">Captions remain visible on mouse, touch and keyboard. Supplied archive photographs are design examples.</p>
        </section>
        <CtaStrip id="website-next" eyebrow="One clear next step" title="Bring the pieces together."
          text="Reuse the same components, tokens and accessibility rules across the page."
          action={<ActionLink href="#content" arrow>Explore composition</ActionLink>} />
      </div>
      <SiteFooter navigationLabel="Website specimen footer"><a href="#website-overview">Overview</a>
        <a href="#website-patterns">Patterns</a><a href="#website-gallery">Gallery</a></SiteFooter>
    </div>
    <p className="ds-brand-note">The glass header sticks inside this keyboard-scrollable preview. Booking, contact details and unconfirmed service copy from the historical kit are not part of this specimen.</p>
  </section>;
}
