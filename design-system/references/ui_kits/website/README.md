# Website kit
Marketing site + meet & greet booking, composed from the DS primitives (Button, Card, CtaStrip, Field, Select, Checkbox, Tag, Highlight).
- `SiteChrome.jsx` — SiteHeader (mascot + nav + Book), SiteFooter
- `HomePage.jsx` — Hero (mascot in ring, ✦, rotated "MORE THAN A WALK." label), blue banner, Services cards, photo strip, CTA strip
- `BookPage.jsx` — booking form with validation → confirmation (demo, nothing sent)

**Disclaimer:** no website source code was supplied (the GitHub repo is empty). Layout follows the v2.1 guide's hero, web-components section (§06) and brand-board panel 07 ("brunodogwalker.com — Good care starts with a hello."). Service names come from the company brief; service copy is placeholder and should be replaced with real offerings. No prices, availability or testimonials are invented.

## v2.2 refinements (Playful Premium)
- Header: sticky glass bar (cream 78%, 16px blur, fallback) that rises to elevation 3 on scroll. Nav links use pill hover and an underline for the active page.
- Hero: mascot disc with a soft warm halo; floating glass spark + chip; the label rests at elevation 1; the mascot lifts 6px on hover.
- Services: interactive Cards with photos (elevation 1 → 2, 4px lift, 1.04 image zoom) and staggered Reveal.
- Gallery: ImageTile with glass captions on hover/focus.
- CTA: 24px radius, elevation 2. Footer: solid Cocoa (no glass), pill link hovers, divider.
- Booking: submit shows the Button loading state before confirmation.
