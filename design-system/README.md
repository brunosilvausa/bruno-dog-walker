# Design system

The contract is [DESIGN.md](../DESIGN.md). This folder contains the working library and isolated historical references.

| Path | Purpose |
|---|---|
| `tokens.css` | Runtime values implementing the root visual contract |
| `styles.css`, `brand.css`, `showcase.css`, `spatial.css` | Component/layout/accessibility styles, brand and spatial primitives, guide presentation |
| `components/action.tsx` | Button and ActionLink |
| `components/content.tsx` | Card, Tag, Highlight and CtaStrip |
| `components/logo.tsx` | Original logos and blue/cream mascot signatures through Next Image |
| `components/graphics.tsx` | Token-colored decorative Wave and Spark SVGs |
| `components/photo.tsx` | Responsive local BrandPhoto with crop and caption |
| `components/spatial-card.tsx`, `spatial-controller.ts` | Opt-in client tilt/light wrapper and native pointer lifecycle |
| `components/surfaces.tsx` | GlassSurface, FloatingElement, AmbientGlow and SpatialLayer |
| `components/ambient-motion.tsx`, `ambient-controller.ts`, `reveal.tsx`, `phase-three.css` | Observed decorative ambient motion and public reveal/stagger wrappers for Stage A |
| `components/scroll-scene.tsx`, `scroll-controller.ts`, `animated-mascot.tsx`, `motion.css` | Controlled scroll entrances/parallax lifecycle, original mascot motion and dedicated showcase |
| `components/field.tsx`, `premium.css` | TextField, selective refinements and comparison specimens |
| `components/website.tsx`, `website.css` | SiteHeader, WebsiteHero and SiteFooter compositions |
| `components/social-piece.tsx`, `editorial.css` | SocialPiece feed/story/landscape compositions and foundation specimens |
| `components/overlays.tsx` | CaptionBlock, CaptionWord and NameCaption |
| `components/calibration.ts`, `laboratory.css` | Bounded showcase settings, scoped token overrides and guide comparison styles |
| `assets/fonts`, `assets/logos`, `assets/photos` | Local fonts/licenses, unchanged logos and four supplied showcase photos with provenance |
| `references` | 37 preserved HTMLs, their runtime/assets, source Markdown and source lint config |

Example:

```tsx
import { ActionLink } from "@/design-system/components/action";
import { Card } from "@/design-system/components/content";

<Card title="Reference" footer={<ActionLink href="/design-system">Explore components</ActionLink>}>
  <p>Use existing components and semantic tokens.</p>
</Card>
```

Open `/design-system` in the running Next app. It uses the actual library. The home consumes the same tokens, fonts, Logo and Tag while preserving its confirmed identity-only content.

The evolved library has 30 components. Use `MascotSignature` for compact identity, `Tag expressive` for an editorial label, and `Wave`/`Spark` for sparse decoration. Put `BrandPhoto` in Card's `media` slot when appropriate, choose `headingLevel` for the surrounding outline, and check the actual crop. The brown-dog gallery image uses top alignment; the park-dog card uses a square crop so faces remain visible. The optional `sizes` attribute is an image resource hint that should match the layout. No client animation framework or additional dependency is used.

For spatial composition, wrap a semantic Card in SpatialCard and optionally use SpatialLayer for depth. Existing Button/ActionLink accept `tactile`. GlassSurface has cream/cocoa tones and an opaque fallback; FloatingElement requires an explicit `paused` state and a usable pause control. Render floating paused initially; the showcase’s “Spatial effects” toggle enables or pauses motion. Mouse effects are gated to a fine pointer and no reduced motion. Keyboard/touch preserve normal controls; reduced motion stays static. CaptionBlock/CaptionWord/NameCaption provide solid-backed static overlay text; keep faces clear and confirm names. Read root DESIGN.md for limits and contextual contrast rules.

The native Calibration controls panel adjusts only the showcase laboratory. Reset pauses effects and restores settings plus neon/timing/entrance previews. All values are temporary. Standard glass stays conservative; `treatment="reference"` explicitly selects the supplied 78%/72% profiles with 16 px blur. The glass, glow and timing sections demonstrate the differences. The calibration work adds no application component; the guide controls are not a second application component library.

Historical references are intentionally outside `public` and excluded from application lint, types and Tailwind scanning. Serve them separately, from the repository root:

```sh
python3 -m http.server 4319 --bind 127.0.0.1 --directory design-system/references
```

Open http://127.0.0.1:4319/catalog.html. This archive includes unapproved service/booking copy and low-resolution photo stand-ins; none is a product requirement. Original uploads have their exact matching local v2.1 assets restored. The reference-only React 18/Babel scripts were localized and checked against the supplied SRI; they are not app dependencies. `provenance.json` records retained-source hashes and restoration provenance.

All 37 source HTMLs remain in their relative folders. The original adherence configuration is preserved as `_adherence.oxlintrc.json`; useful rules are adapted to the existing ESLint setup rather than installing Oxlint. Raw JSX/typings/prompts not needed by a reference, scratch crops, thumbnail metadata and export discovery manifests were discarded. The bundle remains because live HTML specimens require it.

Use `SocialPiece` with `title`, `series`, a local static `photo` and required `alt`. `format` selects `feed` (default), `story` or `landscape`; `guides` adds decorative editorial clearance guides. Keep titles short. This is a server component with no editor or publishing integration. The story reserves top/bottom 20% clearance; always confirm the actual destination preview. Ratios are responsive HTML previews, not generated export dimensions. Long copy can exceed the intended composition: shorten it after checking the smallest preview.

Social photo regions use `object-fit: contain` over Blue Tint. These original portrait photographs cannot fill short landscape bands without cutting dogs out; preserve the full frame rather than impose an unsafe crop.

Website compositions: `SiteHeader` takes `homeHref`, `navigationLabel` and native links as children. `WebsiteHero` takes `title`, `eyebrow`, body children, an `action` slot and `headingLevel` (2 by default, 3 inside the guide). `SiteFooter` takes `navigationLabel` and link children. Header/footer titles do not introduce headings. The components render on the server; native links work without JavaScript. Keep navigation labels distinct, destinations real and hero headings consistent with the surrounding outline. The guide composes existing Card, BrandPhoto and CtaStrip; it adds no booking page or service catalogue. SiteHeader stays in normal flow by default; sticky is opt-in inside a scroll container. Captions remain visible.

Actions accept `glow="none"` to omit the warm halo while retaining depth. `arrow` adds a decorative motion cue. Hover/press use bounded scale tokens; motion reduction includes the arrow. Loading removes the arrow and blocks activation. Use native focus/hover/disabled/pressed states, never a synthetic state prop.

Use `<Card interactive ... footer={<ActionLink ... />}>` for contextual hover/focus elevation and subtle media zoom. The native CTA owns activation and keyboard focus. Leave `interactive` false for static specimens. Reuse `<SpatialCard>` for cursor tilt/light; direct child Cards do not add another lift/shadow. Motion reduction covers Card and image transforms. Media remains a React slot, so reuse BrandPhoto rather than creating a second image API.

Current premium refinement: shared ease(.22,1,.36,1), exact warm light255/206/45 at22%, softer level2 shadows and translucent decorative borders preserve the approved brand fills. FloatingElement now lifts only on enabled hover and never loops. SiteHeader accepts `sticky`; the showcase bounds its scroll region and reserves responsive anchor/focus clearance. BrandPhoto accepts `captionTreatment="glass"` for a labelled-by-content figure with visible captions and hover/focus glass enhancement; provide short captions and check actual photos.

TextField usage: `<TextField id="unique-example" label="Example" helper="Help text" error="Error text" />`. Forward native props such as required, readOnly and disabled. `loading` disables editing and supplies a busy description. Existing aria-describedby IDs are preserved alongside generated helper/error/loading IDs; callers own uniqueness and the external target. Error specimens are static examples, not an implemented validation service. Comparison and input states are local, with no form/submission/persistence.

Phase2: open `/design-system/motion`. `<AnimatedMascot paused={paused} />` preserves the original asset; the demo resets its decorative greeting on pause. `<ScrollScene paused={paused}>` observes children marked data-reveal and emits --ds-scroll-progress only when safe. Pair it with the documented motion CSS; never pre-hide essential content. Keep data-reveal wrappers outside the tilting element so observer geometry stays stable. Use decorative aria-hidden planes for parallax. A controlled pause UI, static initial render and OS motion reduction are required. This adds no timeline/3D dependency. See DESIGN.md for exact motion/depth limits and lifecycle guarantees.

Phase3 review foundation: `/design-system/phase-3`. Stage A is implemented/validated for review; Stage B integration is explicitly pending that review. Use TactileButton instead of duplicating action styles. Nest `<StaggerContainer><ScrollReveal>…</ScrollReveal></StaggerContainer>` under ScrollScene for visible-by-default, observed entrances. The initial child set is observed; remount the scene if a dynamic list changes.

AmbientMotion requires a controlled paused prop and accepts kind=float or accent. It is for decoration only: original mascot containers, stars and similar elements. Native observation/media/visibility/focus/hover gates control CSS playback; no animation loop runs JavaScript per frame. AnimatedMascot ambient=false remains the default. Explicitly opt in with a pause control, and never wrap important text/controls in ambient movement. Stage A duration controls clamp ambient to5–8s while other role durations scale normally.
