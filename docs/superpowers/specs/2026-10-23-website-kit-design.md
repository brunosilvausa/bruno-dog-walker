# Website kit adaptation

Intent: turn the supplied website reference into reusable website composition patterns, demonstrated locally in the existing design-system guide.

Approaches considered: copy the complete marketing/booking app (conflicts with PRODUCT.md and duplicates existing primitives); adapt three missing compositions and reuse Card/BrandPhoto/CtaStrip (selected by the implementer under the user's question opt-out); show historical HTML only (would not evolve the working library).

Add SiteHeader with real native anchor navigation and descriptive navigation label, WebsiteHero with semantic configurable h2/h3 heading, and solid Cocoa SiteFooter. Compose a scoped website specimen with section anchors, existing cards and always-visible photo captions. Preserve original photos and use explicit crop choices. Reuse typography, spacing, focus and glass tokens. Keep the preview header in normal flow so a nested showcase header cannot obscure other examples; scroll-driven elevation and sticky behavior are deferred to a real website requirement. Spatial motion remains in the existing opt-in laboratory.

No bookings, forms, fake availability, contact destination, account handles, new service claims, dependencies or home-page changes. Example links navigate only within the local guide. Hero headings preserve one page h1. No new dark theme: Cocoa is a local inverse surface with contrasting focus. No hidden hover-only text. Server-compatible components need no new browser state.

Acceptance: full required checks; real native navigation and keyboard focus; four widths without horizontal overflow or clipped copy; gallery captions available without hover/JavaScript; inverse text/focus contrast; independent final review.
