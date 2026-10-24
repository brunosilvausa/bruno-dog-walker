# Bruno Dog Walker — visual contract

Planning update, 2026-10-24: the user approved documentation for evolving the existing landing to explain dog walking, daycare, boarding and cat visits. This does not change tokens, components, production layouts or the Stage B approval boundary. [UI/UX planning](docs/design.md#planned-mvp-experience--2026-10-24-not-implemented) owns the proposed composition and behavior; [PRODUCT.md](PRODUCT.md) owns service facts and pending commercial information. Existing dog-first branding remains authoritative; future shared enquiry language must also include cat owners. No rebranding or new visual asset is approved by this planning update.

This is the project's visual source of truth. Implemented values live in `design-system/tokens.css`; change this contract and those values together. Historical exports never override this contract or `PRODUCT.md`.

## Direction and scope

Warm, joyful neighborhood identity: cream canvas, Cocoa text, blue structure and restrained yellow accents. Preserve the four original logos. Public copy stays in clear English. Do not infer services, prices, testimonials, availability or contact details from reference examples.

The application supports **one light theme**. Deep Walk sections are contrasting surfaces within it; they are not a dark theme. Respect the OS reduced-motion preference. The user selected an opt-in interactive spatial library layer: cursor tilt/light, depth layers, controlled floating and glass. The 2026-10-24 landing request enables established spatial/scroll effects on the home with an accessible pause control; the Phase 3 foundation remains separate. Experimental neon is an explicitly enabled laboratory specimen only. Scroll-jacking and fabricated mascot head animation are outside this direction.

## Tokens

All application colors, fonts, spacing and radii must use the tokens below or their semantic aliases. Zero, percentages for structural layout, intrinsic image dimensions and CSS layout keywords are not design-scale values.

| Color token | Value | Role |
|---|---|---|
| `--ds-blue` | `#008BD2` | Brand accents; not a small-text background |
| `--ds-sunshine` | `#FFD233` | Primary actions and highlights with Cocoa text |
| `--ds-cream` | `#FFF9EA` | Page canvas; text on Deep Walk |
| `--ds-cocoa` | `#4A200D` | Body text |
| `--ds-cocoa-deep` | `#261408` | Small text on bright blue brand surfaces |
| `--ds-deep-blue` | `#006095` | Links and contrasting sections |
| `--ds-blue-tint` | `#E4F4FB` | Quiet supporting surfaces |
| `--ds-muted` | `#775B4A` | Secondary text |
| `--ds-white` | `#FFFFFF` | Cards |
| `--ds-focus` | `#004B75` | Focus on light surfaces; Sunshine inside CTA strips |
| `--ds-yellow-hover` / `--ds-yellow-pressed` | `#F4BF16` / `#E5AB08` | Primary hover / active |
| `--ds-disabled` / `--ds-border` | `#E9E1D2` / `#D9CBB5` | Disabled / decorative border |
| `--ds-border-field` | `#927C69` | Functional control boundary; available token, no enquiry form |
| `--ds-success` / `--ds-error` | `#24634A` / `#A12C26` | Functional feedback with explicit text |

Semantic aliases: `--ds-page`, `--ds-text`, `--ds-link`, `--ds-surface`. Do not use yellow text on Walk Blue. Cream text on Walk Blue is for large headings only. Deep Walk supports cream body text. Text over photography needs a solid backing or a measured contrast check.

Typography: locally hosted **Nunito Sans**, variable weight 200–900; use 400 body, 600 support, 800 actions, 900 headings. **Barlow Condensed 700** is for short uppercase labels only. `--ds-font-body` and `--ds-font-label` include system fallbacks; Next's local-font loader provides the actual font variables. Fonts and OFL licenses are in `design-system/assets/fonts`.

Type tokens at the default browser size: small 14, body 16, intro 20, h3 24, h2 40, h1 56 and display 80 px. Display scales from 46 px on narrow screens through a tokenized 6vw value. Body line height 1.6; heading 1.08; heading tracking −0.03em; label tracking 0.02em. Body measure is 65ch. Values use rem so browser text settings remain meaningful.

Spacing uses a 4 px base: `--ds-space-{1,2,3,4,6,8,12,16,24}` = 4, 8, 12, 16, 24, 32, 48, 64, 96 px. Radius tokens: field 8, card 16, block 24 px, pill 999 px, circle 50%. Default actions have a 48 px minimum height; compact actions 40 px. Logos use 120/144/192 px containers with preserved aspect ratio and transparent margins. Mascot signatures use 48/80/144 px circles in blue or cream. Never crop or recolor the logo files.

Focus: 3 px outline, 4 px offset. Borders: 1 px decorative, 2 px controls. Elevations 0/1/2/3 are flat/resting/lifted/floating, with warm two-layer shadows. Role-based timing is fast 150 ms, normal 250 ms and slow 400 ms; the compatibility `--ds-duration` alias uses normal. Pointer following remains 90 ms, explicit entrances use slow with 80 ms stagger, loading uses 700 ms and controlled floating uses 6 s. All design values live in `tokens.css`; dynamic pointer coordinates and temporary laboratory overrides do not create a second permanent design scale.

Action hover adds a 1 px lift and a small warm shadow; primary actions can add a restrained Sunshine glow. No glow at rest. Disabled actions never lift or change background, including secondary/cream variants. Pressed selection retains Deep Walk/Cream contrast while hovered. Reduced motion removes hover/press transforms, label tilt and spinner rotation. The existing outline remains the focus indicator.

## Components and composition

Import from `@/design-system/components/action`, `/content`, `/logo`, `/graphics`, `/photo`, `/spatial-card`, `/surfaces` or `/overlays`. There is no shadcn/ui installation, second component framework or global client provider.

- **Button:** actual actions; primary/secondary/cream, md/sm, full-width, decorative arrow, native focus/hover/active, disabled and loading. Default `type="button"`; use `type="submit"` deliberately. Loading disables activation and exposes `aria-busy` plus a readable label. Selection uses native `aria-pressed` with state owned by the caller.
- **Tactile treatment:** `tactile` on Button/ActionLink adds a 3 px tokenized lower edge. Native semantics and disabled/loading/selection rules remain the same; do not create a parallel action library.
- **ActionLink:** navigation with the same visual variants. Disabled/loading links omit `href` and activation handlers, expose `aria-disabled`, and leave the tab sequence. Never use fake `href="#"` destinations.
- **Card:** white/tint/cream, elevations 0–3, optional media slot, eyebrow, heading, body and footer. It is an article, not an interactive container. Put a real named link in the footer. The default title is h3; set `headingLevel={2|3|4}` to match the surrounding outline. Tint stays flat by default; explicit elevations 2/3 opt into depth.
- **Tag:** sunshine/cream/plain, sm/md/lg; a label, never a selection control. `expressive` adds a restrained −3° editorial tilt and larger padding; use sparingly.
- **Highlight:** sunshine backing or Deep Walk text; keep sentences readable without color.
- **Logo:** primary/alternate/wordmark/mascot, three token sizes, optional avatar backing and decorative alt. Original PNGs remain unchanged.
- **MascotSignature:** mascot in a blue or cream circle, sm/md/lg. Use the 48 px minimum signature instead of shrinking full logos until their names are unreadable.
- **Wave / Spark:** server-rendered decorative SVGs adapted from the supplied paths, colored through tokens and hidden from assistive technology. Wave has hill/swoop variants; Spark has blue/cream tones and optional warm glow. One dominant curve and at most one spark per composition; do not use them as interactive icons.
- **BrandPhoto:** static local image, required descriptive `alt`, optional caption, square/portrait/landscape ratio and top/center/bottom crop alignment. Uses Next Image dimensions, responsive resource hints and native lazy loading. The caller can tune `sizes` to the actual column count; these HTML resource hints do not set the visual size. Keep eyes and snouts visible at every breakpoint; change the composition when a crop cannot preserve them.
- **CtaStrip:** Deep Walk section with eyebrow, h3, optional text and an action slot. Keep one message and one primary action; provide a confirmed destination before adding a contact CTA.
- **SpatialCard:** client wrapper around semantic server-rendered children. Mouse-only tilt is bounded to ±4°, with warm directional light and a 4 px lift; it reads the untransformed wrapper once per scheduled frame, using the latest coordinates. The light paints over the background but below all text/images/controls so it cannot wash out their foreground. The wrapper owns resting/lifted shadows rather than stacking them over Card shadows. Focus stays on actual nested controls, with a focus-within elevation cue and no extra tab stop. `paused` detaches pointer behavior. Touch/pen/coarse pointers stay static. Exit, cancel, pointer-down, focus-in, blur, preference changes and unmount reset pending work.
- **SpatialLayer:** optional base/near/far content layers within SpatialCard, with 0/12/24 px pointer depth. Do not put essential information outside the readable surface or make motion necessary for interaction.
- **GlassSurface:** cream/cocoa contextual panel, elevations 0–3, standard 14 px blur and opaque `fallback`. Standard cream uses 88% backing; cocoa uses 92% with cream text. Explicit `treatment="reference"` uses 78% cream / 72% cocoa and 16 px blur. Fallback stays opaque for either treatment, including unsupported blur. Keep panels short, keep faces clear and test the actual background. Inverse secondary hover preserves readable selected/disabled states. Write the standard backdrop-filter declaration and let the existing CSS compiler handle prefixes.
- **FloatingElement:** CSS hover-lift wrapper with a required controlled `paused` prop; no perpetual animation. Provide an accessible pause control, render paused for progressive enhancement, and keep content semantic. Focused descendants, coarse pointers and reduced motion stop floating. The showcase’s stable-label “Spatial effects” toggle starts off and controls floating plus pointer tracking.
- **AmbientGlow:** static, decorative warm/blue light field; pointer events pass through. It never replaces focus or conveys status.
- **CaptionBlock / CaptionWord / NameCaption:** solid-backed caption and identification primitives. Reserve a caption band, keep eyes/snouts clear and confirm identities before replacing placeholders. The showcase has static compositions; no video rendering or platform-safe-area guarantee is implied.

Use `ds-shell`, `ds-stack`, `ds-row`, `ds-grid` and the typography classes for composition. Grid collapses intrinsically; labels and controls wrap. Tailwind 4 utilities remain available through a CSS-first `@theme inline` mapping in `src/app/globals.css`. Its default color/font/radius/type palettes are cleared so they cannot silently compete with this system. Source scanning excludes historical references.

`brand.css` holds brand primitives; `spatial.css` holds spatial/surface/overlay treatments and the new guide specimens; `showcase.css` holds the guide layout. The guide includes states/borders/support tones, graphic variants, four elevations and replayable entrances. Entrances run only after an explicit replay action so SSR/no-JS content never starts hidden. Under reduced motion, content remains visible without transforms or entrance animation. Photo examples remain demonstrative; original reference HTMLs stay preserved independently.

## Calibration laboratory

`laboratory.css` and the showcase controls provide ephemeral calibration: tilt 0–4°, lift 0–6 px, glow 0–100%, duration ×0.5–2 and local reduced-motion simulation. Native ranges expose labels, units, keyboard input and visible focus. Input values are finite, clamped and snapped to their supported steps. The collapsible panel stays in document flow so it cannot cover content or focus on mobile.

Overrides apply only inside `.ds-lab`, never to root tokens, the home or external state. Reset restores default values, pauses spatial effects and resets entrance/timing/neon previews. Reload also restores defaults. The local simulator can add motion reduction; it never overrides the OS preference. The duration multiplier scales laboratory motion lengths; the entrance stagger remains 0/80/160 ms.

Glow comparisons distinguish resting, warm hover, strong decorative and opt-in experimental neon. Warm uses the 18 px / 22% token; strong uses 24 px / 38%; neon uses 18 px / 22% of its experimental color. The intensity slider scales halos and directional/ambient light, without modifying text or focus outlines. The real action default still has no permanent halo. Glass comparisons use supplied photographs and primary text colors, with reference and opaque variants shown together. Timing tracks are decorative, start through a native button, run once and remain still under either motion-reduction setting.

## Extension and checks

Reuse an existing component before adding one. New components belong in `design-system/components`, use native semantics and `cn`, and remain server-compatible unless they own interaction. Do not inject styles from effects. Add stateful controls only for a real product requirement, preserving focus, disabled, loading, error and selection states where applicable. Errors need explicit text and association with their control. This library includes no enquiry form.

`pnpm check` covers compilation, strict types, regular/typed lint, rule checks and regression tests. ESLint ports useful token/import restrictions from the export; TypeScript replaces generated prop allowlists. Presentation-literal restrictions apply to runtime source; unit fixtures may contain expected CSS strings. A focused CSS guard rejects literal design values in application declarations; it is not a general CSS parser or proof against every dynamic styling expression. Review still checks contrast, keyboard behavior and responsive layout.

See `/design-system` for live specimens, `design-system/README.md` for structure and reference access, and `docs/setup.md` for dated evidence and limitations.

## Editorial compositions and foundation specimens

`SocialPiece` reuses local photography, Tag and MascotSignature in three formats: feed 4:5, story 9:16, landscape 16:9. Separate solid copy/photo regions protect contrast and faces. Story reserves top/bottom 20% clearance, with 6% left and 15% right editorial guides. These are review aids, not platform guarantees or export functionality. The six historical layout families and three video frames remain in `references/ui_kits/social`; the app adapts three canonical compositions and the existing caption primitives. No account handle or dog identity is inferred.

`editorial.css` contains foundation specimens and editorial layouts. `/design-system#measurements` shows real keyboard focus (3 px outline / 4 px offset), field/card/block/pill radii and all nine spacing steps. Type specimens cover display/H1/H2/H3, intro 20/600/1.5, body 16/400/1.6 and support 14/600/1.4; their paragraphs preserve the guide's semantic heading outline. Intro/support leading tokens supplement the existing type scale without changing established component typography.

## Website compositions

`components/website.tsx` and `website.css` provide SiteHeader, WebsiteHero and SiteFooter. The header reuses conservative GlassSurface with opaque fallback and native wrapping navigation. SiteHeader stays in flow by default. Its optional sticky prop is demonstrated inside a labelled, bounded scroll region with responsive anchor clearance; no scroll listener is added. The hero combines one message/action group with the original mascot and expressive label. Use headingLevel2 or3 to preserve the page outline. The footer is solid Cocoa with Cream links and Sunshine keyboard focus; it is an inverse surface, not a second theme.

`/design-system#website` combines these with existing cards, photo captions and CTA. Captions are always visible, including touch/no-JS. Anchors stay inside the guide. Historical booking/confirmation, placeholders, account handles and unconfirmed service copy remain reference-only; PRODUCT.md still governs future product scope. Spatial effects remain opt-in in the existing laboratory.

## Action refinement

Button and ActionLink support `glow="warm"` (default) or `glow="none"`; none suppresses the halo while retaining elevation/tactile depth. Hover scales to1.01 and nudges a decorative arrow2px; press scales to0.99. All values are tokens. Hover movement requires a fine hovering pointer; reduced motion and the laboratory simulator remove transforms, including the arrow. Disabled/loading controls never move or glow. No forced visual-state API or effect-injected CSS is introduced. Native button/link semantics remain separate; neon remains laboratory-only.

## Card interaction

Card accepts `interactive` (defaultfalse) when its content includes a meaningful native CTA. The article gets contextual elevation on hover/focus-within; it does not become a link/button or gain a tab stop. Fine-pointer motion lifts4px and zooms media1.04 using tokens; image overflow stays within its existing media frame. OS and laboratory reduced motion stop both transforms and transitions. Static cards retain their chosen tone/elevation. SpatialCard remains the single tilt/light controller; a direct child Card never adds a second lift/shadow, including when interactive is supplied. Choose headingLevel for the surrounding outline and give photos accurate alt text through BrandPhoto. No forced-state or inline-CSS injection API is copied from the attachment.

## Playful Premium refinement — current treatment

Canonical brand colors remain unchanged. The supplied illustrative #FFCE2D/#006A9F/#45200F/#FFF9E9 swatches do not replace the established identity. Warm illumination now uses `rgb(255 206 45 / 22%)`,18px, matching the requested glow without changing CTA fills. Experimental neon remains opt-in laboratory content. Shared easing is `cubic-bezier(.22,1,.36,1)`; durations remain150/250/400ms.

Depth has three raised levels plus flat0: resting1 uses the established two-part ambient shadow; hover2 softens to 0 8px 20px Cocoa6% + 0 22px 48px Cocoa10%; floating3 remains stronger. `--ds-border-soft`/`--ds-border-soft-strong` use Cocoa12%/20% for decorative card/hero boundaries. Flat/tinted cards retain solid decorative borders. Fields always use the stronger `--ds-border-field` or error/focus color. CTA banners use level2, hero illustration surfaces level1. Substantial cards and footer remain solid.

Glass stays selective: standard88%Cream/92%Cocoa+14px, explicit reference78%/72%+16px, white55%border and opaque fallback. `BrandPhoto captionTreatment="glass"` adds a keyboard-focusable figure and a short lower-edge caption band. Text is always visible; fine-pointer hover or keyboard focus refines the opaque Cream backing into78% glass only where supported. Touch and unsupported browsers retain opaque Cream. Check crop and actual composite contrast.

`SiteHeader sticky` uses level3 within its scroll container; provide enough scroll-margin on destinations and focus targets for wrapped navigation. In a nested scroll area, avoid combining container scroll-padding with anchor margin: the browser may scroll the outer page past its sticky header. The guide's scroll region is keyboard focusable and labelled. Normal SiteHeader remains in flow. FloatingElement now moves only on enabled pointer hover and returns to rest; no autonomous floating loop remains. Focused children, coarse pointers, OS/local reduced motion stop that movement. Spinner animation is functional busy feedback; experimental/motion specimens run only on explicit action.

`TextField` requires a unique valid id and visible label. Native text/email/tel props support required, readonly, disabled and focus; helper/error/caller descriptions are combined without dangling ids. Error text sets aria-invalid; loading sets busy and disables edits. These examples submit/store nothing. No enquiry form, validation workflow, booking or new business claims are introduced.

`/design-system#refinement` compares established and refined tokens through one scoped toggle. Previous ease/glow/hover-shadow are preserved only as comparison tokens; they never alter the root or reset typed specimen values. `/design-system#inputs` demonstrates actual native states.

## Phase 2 — motion and depth showcase

`/design-system/motion` is the dedicated spatial playground. It reuses the same identity, photographs, Card/SpatialCard, tactile actions, selective glass and focus rules. The home remains identity-only. Service-card text is explicitly a layout specimen, not a service catalogue.

Enable spatial motion starts off; a sticky Pause motion action remains accessible while scrolling, and a separate local reduction toggle only adds reduction. OS reduction always wins. Essential SSR/no-JS content is visible; entrance markers are applied only when an enabled element intersects. All effects are decorative enhancements, with no scroll interception or pinned timeline. Coarse/touch pointers disable tracking and decorative parallax. No new runtime animation dependency or 3D geometry is required.

Additional tokens: `--ds-duration-reset`300ms, `--ds-duration-section`550ms, `--ds-duration-greeting`600ms; shared micro/hover/decorative150/250/400ms stay intact elsewhere. `--ds-ease-spring` is cubic-bezier(.22,1.12,.36,1), a restrained spring-inspired timing curve rather than a physical stiffness/damping solver. Perspective remains1000px, pointer endpoints±4°, lift4px, button scales.99/1.01, optional image zoom1.04. The curve may modestly overshoot on reset; no greater-than5° target or6px card lift is exposed. No permanent will-change or ambient loop is added.

AnimatedMascot preserves the original PNG inside a rigid frame, using SpatialCard for cursor depth and SpatialLayer for decorative separation. Say hello restarts one finite600ms rigid-frame gesture, maximum±2° keyframes. This does not articulate a head/limb, simulate breathing through image distortion or create a new3D asset. The demo remounts this decorative state on pause so re-enabling starts at rest.

Dynamic warm shadows use `--ds-shadow-travel`6px, near/far offsets8/22px, blurs20/48px and Cocoa6%/10%. Horizontal and vertical offsets move opposite the light/cursor. Surface reset uses300ms spring-inspired easing; live tracking remains90ms linear. Highlights remain behind text, not over glyphs. Focused cards stop tracking until focus leaves and stay on the resting plane in the dedicated showcase.

ScrollScene requires a controlled paused prop. Mark entrance wrappers with data-reveal; the dedicated CSS uses550ms plus0/80/160ms stagger. The native controller observes the root and reveal targets, unobserves each revealed target once, and never pre-hides content. Its single passive scroll/resize subscriber schedules at most one RAF, reads one untransformed root rectangle, and writes bounded progress−1…1. Offscreen/hidden/coarse/reduced/focused states skip parallax; pause/unmount clears markers, observers, listeners and queued frames. A disposed guard ignores late observer callbacks. Missing IntersectionObserver leaves the scene static.

Decorative parallax planes use `--ds-parallax-back`−12px and `--ds-parallax-front`20px, with essential text/photos kept on the base plane. CSS applies transforms only to aria-hidden decoration. Short image reveals and contextual glass retain readable alternatives. The sticky glass navigation reserves responsive destination/focus margins; test real Tab/Shift+Tab as well as anchors. Animated underlines and directional arrows supplement, never replace, visible focus.

No autonomous ambient loops are enabled. The existing loading spinner remains functional busy feedback; mascot/reveal animations are finite and explicitly enabled. Pause, local reduction, OS reduction, native links and static content remain available. Structural performance checks and local Chromium behavior do not establish hosted Core Web Vitals.

## Phase3 — Stage A review foundation

The latest user brief explicitly requires review of Stage A before Stage B. `/design-system/phase-3` is the concrete foundation for that review; it does not apply the proposed defaults to production layouts or replace existing branding. Stage B and its integration-specific Stage C remain pending approval. Existing guide/Phase2 defaults stay intact.

The new review scope starts at perspective1000px with `--ds-perspective-origin`50%50%, tilt±4°, lift6px, button press3px, decorative planes12/24/40px and elevations0–3. Native calibration ranges reuse finite/clamped input and temporary CSS overrides. Reset/reload restore Stage A4/6/100/1, motion off, ambient off. The previous laboratory retains4px lift. Phase3 micro/fast/standard/reveal roles are150/200/250/550ms, with80ms stagger. Duration tuning scales hover/arrow, surface reset, greeting and entrances; immediate color feedback remains150ms and shared image zoom keeps its400ms role. Ambient remains bounded5–8s. All values live in tokens rather than component literals.

TactileButton composes the existing Button with tactile=true and preserves native disabled/loading/focus/variant semantics. ScrollReveal and StaggerContainer are server-rendered structural wrappers; use them under a controlled ScrollScene. Entrance CSS is now scoped to that primitive, not one route. Essential content is never pre-hidden. ScrollScene observes the initial static child set; remount it if a future dynamic list changes. No mutation observer or new timeline library is added for a requirement this project does not have.

AmbientMotion is an explicit decorative opt-in. Its float variant moves only a rigid container6px over7s, with a floor-shadow opacity rhythm; accent uses an independent8s star movement and1.2s offset. A visible label and reading areas stay static. Duration calibration clamps ambient playback to5–8s. AnimatedMascot accepts ambient (defaultfalse), preserves the original PNG, and pauses its ambient wrappers during a finite greeting. No head articulation, image warp, new model, paw icon library or aggressive neon is introduced.

Ambient movement starts only when observed on a fine hovering pointer and stops offscreen, on document hide, local/OS reduction, hover, descendant focus or explicit pause. Initial hover/focus is checked before activation. Cleanup disconnects observation, removes media/visibility/focus/pointer listeners and ignores late callbacks. The controller schedules no RAF/scroll listener or React render per animation frame. CSS animates transforms/opacity only; the floor shadow itself remains static. Missing IntersectionObserver keeps the component still. Do not wrap important reading content or interactive targets in AmbientMotion.

The new Stage A scope permits these optional loops only after explicit activation, with an always-reachable sticky pause control. Previous no-loop defaults remain unchanged. Touch has no cursor-dependent tilt/parallax/ambient loop and uses physical feedback on the actual CTA. Glow remains warm by default; experimental neon stays a separate opt-in specimen, never a persistent border or text treatment. Independent focus rings and essential contrast are preserved.

## 2026-10-24 landing composition

The latest explicit request authorizes the landing at `/` using the two supplied ZIPs as references. It does not approve Phase 3 Stage B or the archive's suggested backend. Home-only `lp-` styles retain Cream/Cocoa/Deep Walk/Sunshine, the original mascot and the established 4px spatial lift. No ambient loops or new dependencies are introduced.

The editorial hero uses a responsive 104px maximum display, 0.99 leading and -0.065em tracking; section titles reach 64px. The 1408px shell has a fluid 24–80px gutter and 64–128px section spacing. These values and the 6/-5 degree photo rotations are `--ds-lp-*` tokens. The neighborhood illustration adds two decorative supporting fills (`--ds-lp-park`, `--ds-lp-river`) and a tokenized grid; it is not a coverage map. All interface values remain in `tokens.css`.

Existing ScrollScene provides finite reveals and bounded parallax; SpatialCard handles the hero's pointer depth. Motion starts enabled for this explicit motion request, can be paused, and respects OS reduction. The progress line uses a CSS scroll timeline where supported. No scroll-jacking, continuous animation, artificial mascot articulation or new animation runtime is used. Content is server-rendered and visible without animation.

The sticky glass header uses a native disclosure menu on mobile/tablet; it exposes every section, contact and motion settings. Desktop keeps the direct section links and contact CTA. Native details/summary provide the FAQ. The contact section uses existing TextField and Button components, a labelled native textarea, explicit validation messages and first-error focus. Until delivery is configured, the notice and result clearly say nothing is sent. No-JS controls are disabled. Photos remain review assets, not evidence of client identities or service promises.

## Mobile-first UX refinement, 2026-10-24

The user chose a complete UX pass starting with mobile and explicitly deferred delivery setup. The menu closes after same-tab navigation; Escape closes it and restores focus to its summary. Native disclosure remains usable without JavaScript. Section targets are programmatically focusable, and root scroll padding reserves room for the sticky header.

The motion toggle now lives in the hero utilities row instead of floating over reading/form content. Mobile menu and footer links lead to it. This is appropriate for the existing finite/scroll-driven effects; any future autonomous loop would need its own always-visible pause mechanism. Existing OS reduction and controller cleanup remain unchanged.

The contact preview keeps four required fields visible and puts the optional note in native details. Validation expands an invalid optional field before focusing it. Editing removes the previous checked status and the edited field's stale error; a live region reports the remaining errors. Email input uses an email keyboard without automatic capitalization or spell checking. No submission, persistence, backend or external integration is added.
