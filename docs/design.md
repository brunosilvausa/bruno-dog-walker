# Design and accessibility

## Current interface

As of 2026-10-24, `/` is the requested premium landing page, with the “Big adventures. Little paws.” hero, editorial walk moments, care enquiries, neighborhood illustration, native FAQ and a Meet & Greet contact form. The user explicitly chose a form; the recipient is confirmed as `hello@brunodogwalker.com`, while delivery is explicitly deferred, so it remains an honest unsent preview. See [PRODUCT.md](../PRODUCT.md).

Root [DESIGN.md](../DESIGN.md) owns the visual contract. Local Nunito Sans/Barlow Condensed, original logos, tokens and established components are reused. The light theme, visible keyboard focus, reduced motion, pause control and no-JS reading fallback are retained. The photo composition is adapted from the supplied references and awaits final asset approval. The following library history describes earlier stages, not the current home.

## Library evolution history

All descriptions in this history refer to their respective stages; they do not override the current interface or the planning-only direction below.

The subsequent library evolution adds Wave, Spark, MascotSignature and BrandPhoto, expressive labels and Card media/heading composition. The guide now presents the supplied identity and photographic direction alongside measured contrast and real component states. Hover adds restrained lift and warmth; disabled and selected states keep their intended colors. Decorative transforms honor reduced motion. The supplied photographs are used only as showcase specimens, with explicit crop choices and source hashes.

The user then selected the interactive spatial layer. SpatialCard adds bounded mouse tilt and directional light; SpatialLayer, controlled FloatingElement, GlassSurface and static AmbientGlow provide depth composition. Existing actions have an opt-in tactile edge. The showcase adds graphic variants, four elevations, support/border tokens, replayable entrances and solid-backed caption/name compositions. Spatial motion starts paused, supports a stable-label toggle, and stays static on coarse pointers or reduced motion. The home still consumes no spatial component.

The next approved improvement adds an in-flow collapsible calibration panel with bounded native ranges and a reduced-motion simulator. Scoped values are temporary; Reset restores defaults and all laboratory previews. Glass is compared over actual supplied photos, retaining conservative standard backings plus explicit reference profiles and opaque fallback. Warm/strong/experimental glow and 150/250/400 ms timing specimens share the same laboratory controls. The OS motion setting always takes priority.

## Accessibility

Use a single main landmark, a descriptive h1, document language and accurate metadata. Body copy must remain readable on narrow viewports. Future links require descriptive names and visible keyboard focus; the base focus style already exists. Honor reduced motion for all landing animations.

The historical identity-only home had no interactive controls. The current landing adds contact anchors, a pause toggle, native FAQ and a validated form preview. The showcase adds native buttons and links, disabled/loading semantics, pressed selection and reduced-motion handling. This does not certify future contact links or forms. Current checks are recorded in [setup](setup.md).

## Historical bootstrap review

On 2026-10-23, Chromium smoke checks at 375×900 and 1440×900 found one main landmark, the expected h1 and English language, with no horizontal overflow. Both screenshots were visually inspected. Console reported zero errors/warnings and all observed application requests returned HTTP 200. Keyboard Tab was exercised; no application controls exist.

Physical devices, screen readers and other browser engines were not tested. Final brand, assets, page composition and contact journey remain a separate product design task; offer visual mockups during that discussion.

The social guide now adapts three formats through `SocialPiece`: feed, story and landscape, without an editor or export pipeline. Full portrait photos remain visible in tinted image regions. Foundation specimens expose every type role, radius and spacing step plus real keyboard focus. See the root contract and `/design-system#social`.

The website kit adds reusable SiteHeader, WebsiteHero and SiteFooter compositions, presented under `/design-system#website`. The guide uses local anchors and generic composition copy. A bounded scroll region contains the optional sticky glass header, preserving the surrounding showcase; visible photo captions work without hover. Cocoa footer focus uses Sunshine. The identity-only home and deferred direct-contact product are unchanged.

The Playful Premium refinement preserves canonical brand fills, unifies premium easing, softens level2 shadows and adds translucent decorative borders. Hero/CTA reuse levels1/2. A scoped established/refined toggle demonstrates differences on real components while preserving input text. Glass captions remain visible and become translucent on fine-pointer hover/focus; touch/unsupported blur keep solid backing. TextField provides labelled default/error/disabled/loading specimens with no enquiry form or submission. Enabled floating elements now respond to hover rather than loop autonomously.

Phase2 adds `/design-system/motion`, a dedicated opt-in spatial showcase. It reuses the original mascot as a rigid layered frame, three illustrative Card patterns, tactile/glow actions and sticky glass navigation. Once-per-session observer entrances, bounded decorative parallax and cursor-responsive warm shadows remain separate from essential content. Pause/local reduction/OS reduction and no-JS static rendering are preserved. The mascot is not articulated or replaced with a generated asset. No heavy animation/3D runtime, autonomous loop or website product launch is introduced.

Phase3 Stage A is isolated at `/design-system/phase-3` for the review required in the user's latest brief. Proposed6px lift/3px press/40px plane and bounded optional ambient movement do not replace established production defaults. The original mascot container and a separate star can move after explicit opt-in; copy, labels and targets stay still. New public reveal/stagger and tactile aliases reuse existing behavior. Stage B and integration-specific Stage C remain pending foundation approval.

## Mobile-first UX continuation, 2026-10-24

The user deferred email delivery and selected the complete experience, starting with mobile. The first UX pass restores section navigation through a native mobile/tablet disclosure, moves motion controls out of the floating overlay, reserves sticky-header space during scrolling/focus, and corrects stale form validation feedback. The optional note is progressively disclosed. These changes preserve the established brand and the explicit unsent preview.

## Planned MVP experience — 2026-10-24, not implemented

The user approved documenting an evolution of the existing landing. The visitor's task is to understand the offer, trust the person and reach contact. The mode is persuasive but factual; dog-first branding must also welcome enquiries about the confirmed cat visits.

- Retain one page, existing landmarks/anchors and visual identity. Make dog walking, daycare, boarding and cat visits distinct in the care section. The service names are approved; descriptive promises still depend on PRODUCT pending inputs.
- Add a concise owner-approved introduction near the care section, reusing existing typography and surfaces. Personal portraits and testimonials are optional. Do not assign reference faces to Bruno or imply pictured animals are clients.
- Keep Upper East Side guidance, native FAQ and a common contact destination. Shared navigation, enquiry instructions and field labels must work for cat owners; retain dog-specific editorial content and accurate image alt text where it describes dogs.
- Separate Meet & Greet from the service list until its role is confirmed. Use neutral contact language rather than imply a mandatory appointment.
- Preserve four required fields plus the optional note. Plan `Pet’s name` consistently with the architecture contract. Do not add a service selector, calendar or species-dependent form without a new need.
- Keep preview wording coherent in FAQ, CTA surroundings and form feedback. “Review request” validates locally; it does not send. Public delivery wording belongs to the deferred delivery task.

### UI/UX acceptance for future execution

1. At 320 CSS px and enlarged text, content and controls remain usable without horizontal page scrolling. Inspect phone, tablet and desktop compositions, not only overflow metrics.
2. Tab/Shift+Tab reach menu, links, FAQ and fields; Escape closes the enhanced menu and restores focus. Sticky UI must not obscure focused content or anchor destinations.
3. Invalid submissions keep input, associate errors, announce status and focus the first error. An invalid collapsed note opens before focus. Edits clear stale checked status.
4. A valid preview explicitly states nothing was sent. No delivery request, browser storage or personal data in a GET URL is introduced. No-JS retains reading/navigation and disabled preview controls.
5. Touch does not require hover; reduced motion and pause preserve essential content. Stage B and new ambient animation are excluded.
6. Review dog walking and cat-visit journeys separately. A cat owner can recognize the service and complete the same preview without dog-only shared instructions.

Technical results, visual approval, physical-device checks and screen-reader checks must be recorded separately. Relevant references: [W3C reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), and [form notifications](https://www.w3.org/WAI/tutorials/forms/notifications/). No fresh browser or assistive-technology verification was performed for this document update.
