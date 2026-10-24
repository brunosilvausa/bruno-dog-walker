# Bruno Dog Walker — Design System

**Bruno Dog Walker** is a premium dog walking and pet care company on the Upper East Side of Manhattan, NYC: small-group walks, private walks, puppy visits and attentive pet care. The brand is warm, trustworthy and playful — "the joy of neighborhood walks" (*a alegria dos passeios no bairro*), the internal concept approved for v2.1.

Surfaces covered: **website + booking** (ui_kits/website), **Instagram / YouTube / video** editorial pieces (ui_kits/social), client communications.

## Sources

- Uploaded v2.1 brand package (2026-10-14): `uploads/brand-guidelines.md`, `uploads/component-specs.md`, `uploads/README.md`, `uploads/v2-change-notes.md`, `uploads/v2.1-change-notes.md`, `uploads/index.html` (guide), `uploads/templates.html` (studio), `uploads/brand-board.html`, `uploads/overview.png`, `uploads/hero.png`, four logo PNGs. Internal docs are in Portuguese; public copy in English.
- GitHub: https://github.com/brunosilvausa/bruno-dog-walker — **empty at the time of build** (no commits readable). Explore it later if code is pushed; it should become the source of truth for web UI.
- Not supplied: `assets/system.css`, `editorial.css`, `design-tokens.json`, font binaries, original photos. Token values were taken from the written specs; photos in `assets/photos/` are low-res crops of `overview.png`.

## Index

- `styles.css`: entry point (@imports only) → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (v2.2 elevation/glass/glow/motion), `base.css`, `surfaces.css` (glass/elevation/reveal utility classes)
- `guidelines/evolution.html`: interactive v2.1 vs v2.2 side-by-side comparison
- `ui_kits/motion/`: v2.3 interactive motion & depth showcase (mascot, 3D cards, tactile controls, glass nav, reveals, parallax, light, glow, tokens, reduced motion)
- `tokens/spatial-motion.css`: v3 spatial + motion tokens (`--spatial-*`, `--shadow-ambient/hover/pressed`, `--glow-intensity`, `--motion-*`, `--ease-default`, `--ease-spring-physical`) and the reveal / float / glow utilities
- `ui_kits/spatial/`: v3 showcase with live controls (tilt, elevation, glow, duration, reduced motion)
- `tokens/spatial.css`: v2.3 perspective, depth, lighting, transform and motion tokens + `.bdw-link`, `.bdw-icon`, `.bdw-float` utilities
- `assets/logos/` — bdw-primary, bdw-alternate, bdw-wordmark, bdw-mascot (originals, untouched)
- `assets/photos/` — park-dog, fluffy-dog, brown-dog, walking-group, park-crew-portrait (stand-ins)
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (below)
- `ui_kits/website/` — marketing site + meet & greet booking
- `ui_kits/social/` — editorial studio: 6 layout families + 3 video frames
- `SKILL.md`, `github.md`, `thumbnail.html`

## Components

- **actions/** Button (primary Sunshine, secondary outline, cream; md/sm; ↗ arrow; hover/active/focus/disabled/loading; glow warm|neon|none)
- **forms/** Field (input/textarea + help/error/success), Select, Checkbox, ThemeSwitch (aria-pressed segmented)
- **content/** Tag (editorial label), Highlight, Card (elevation 0/1, interactive, media), CtaStrip, Logo
- **surfaces/** GlassPanel, ImageTile
- **motion/** Reveal (rise / fade / image), Mascot (layered animated mascot), Parallax (decorative scroll depth)
- **spatial/** (v3 primitives) SpatialCard + SpatialLayer, TactileButton, FloatingElement, ScrollReveal, StaggerContainer, GlassSurface, AmbientGlow, AnimatedMascot
- **graphics/** Wave (hill, swoop), Spark (✦)
- **video/** CaptionBlock + CaptionWord, NameCaption (lower third)

Intentional additions: **Logo** (wraps the four PNGs with min sizes / avatar circle), **ThemeSwitch** (the source's cream/blue toggle), **Spark** (the ✦ accent glyph), and from v2.2 **GlassPanel** (the only sanctioned glass surface), **ImageTile** (gallery hover treatment) and **Reveal** (the one entrance pattern). No Toast/Tabs/Dialog etc. — the source doesn't define them.

## Content fundamentals

- **Language:** public copy in clear **English** (NYC context); internal guidelines in Portuguese.
- **Voice:** close, joyful, confident. On social, short humor **from the dog's perspective** ("You said walk. I heard adventure.", "One more sniff stop."). On services, precise and plain ("Book a meet & greet", "Explore services").
- **Person:** "we" for the company, "you/your dog" for the client; the dog speaks as "I" on social.
- **Casing:** sentence case for headlines and buttons, ending with a period on editorial lines ("Better together.", "Small paws. Big city."). UPPERCASE only for Barlow labels ("WALK DIARIES / NYC", "UPPER EAST SIDE / MANHATTAN") — series / location separated by " / ".
- **Length:** one idea per piece; titles ≤ 3 lines (YouTube: 3–6 words, 2 lines). Body ≈ 65 characters/line.
- **Avoid:** superlatives, "24/7" availability, discounts, testimonials, or behavior/safety promises without proof. Don't name a dog until identity is confirmed — use "Dog name".
- **Emoji:** not used. The ↗ arrow appends to CTAs/links; ✦ is the single sparkle accent.
- Example lines: "Good walks. Happy dogs." · "Good care starts with a hello." · "Neighborhood walks. Everyday joy." · "See you on the next walk." · "More than a walk." (suggestion, not an adopted slogan).

## Visual foundations

- **Color:** Walk Blue `#008BD2` (brand surfaces), Sunshine `#FFD233` (actions, labels, the highlighted word), Warm Cream `#FFF9EA` (page base, text on blue), Cocoa `#4A200D` (text; from logo outlines), Deep Walk `#006095` (links, small blue text, CTA bands). Support: `#E4F4FB` tint, `#775B4A` muted text, `#261408`, white. Green `#24634A` / red `#A12C26` feedback only. Light base = cream dominant, blue structure, yellow accents; expressive base = blue dominant. **Never yellow text on Walk Blue**; cream on Walk Blue only at headline size; yellow highlights sit on their own yellow base with Cocoa letters.
- **Type:** Nunito Sans 900 headlines (tracking −0.025 to −0.035em, line-height 1.0–1.1), 800 actions/captions, 600 intro/support, 400 body. Barlow Condensed 700 uppercase only for short labels. Scale: 80/56/40/24/20/16/14. Mobile display 44–48, H2 30–32. Left-aligned headlines.
- **Spacing:** 4px base — 8, 12, 16, 24, 32, 48, 64, 96. Generous whitespace; gutters \~80px desktop.
- **Radii:** 8 fields · 16 cards · 24 large blocks · pill for buttons/labels. Photo frames \~12–16.
- **Cards:** white, 16px radius, 24px padding. v2.2 cards rest at **elevation 1** with a translucent hairline (`--border-translucent`, Cocoa 8%). Interactive cards lift 4px to elevation 2, and their media zooms to 1.04. `elevation={0}` keeps the flat v2.1 `#D9CBB5` look. Tint panels (`#E4F4FB`) are flat. Not every card is clickable.
- **Elevation (v2.2):** four levels, all warm Cocoa-tinted, two-layer ambient shadows.
  - L0 flat (`--elevation-0`).
  - L1 resting card (`0 4px 12px / .04, 0 14px 32px / .06`).
  - L2 hovered interactive (`0 8px 20px / .06, 0 22px 48px / .10`).
  - L3 floating overlays and nav (`0 10px 24px / .08, 0 30px 64px / .14`).
  - Never stack more than one level change per interaction. There are no inner shadows except a 1px white highlight on the hero disc.
- **Glass (v2.2, selective):** `.bdw-glass` / `GlassPanel` is cream at 78% (`rgba(255,249,233,.78)`) with a 16px blur, a 1.15 saturate and a 55% white border, at elevation 3. The cocoa variant (72%) carries cream text over light photos.
  - Use it only for the sticky nav, floating decorative chips, image hover captions and small contextual panels.
  - Never use it on service cards, text-heavy content or the footer.
  - Fallback: `@supports not (backdrop-filter)` switches to 97% opaque cream / 94% cocoa.
- **Glow (v2.2, sparing):** `--glow-warm` (`0 0 18px rgba(255,206,45,.22)`) is for primary CTA hover, selected toggles, focus enhancement and the hero halo. `--glow-warm-strong` (.38) is decorative only. `--glow-neon` (`rgba(239,255,0,.22)`) is **experimental**, opt-in via `glow="neon"`. Nothing glows at rest, and glow never replaces the focus outline.
- **Backgrounds:** flat solid fields (cream / blue / Deep Walk) — no gradients, textures or patterns. One dominant **wave** curve per composition (walk-path metaphor), optionally with a constant-width Sunshine edge. Full-bleed real photography on social pieces.
- **Imagery:** real NYC walks — Central Park paths, leashes, autumn leaves; natural light, warm, true-to-life color, no filters. Eyes and snout always free of text/graphics.
- **Motion (v2.2):** easing is `--ease-premium` `cubic-bezier(0.22,1,0.36,1)`.
  - **Fast 150ms:** color, background, press.
  - **Normal 250ms:** shadow, lift, glow, caption reveal.
  - **Slow 400ms:** image zoom, mascot lift, `Reveal` entrances (fade + 12px rise, ≤60–80ms stagger).
  - No bounce, loops, parallax or scroll-jacking. The only continuous motion is the loading spinner, which goes static under reduced motion.
  - `prefers-reduced-motion` removes lifts, zooms and reveals.
  - Video: discreet caption entries; names 2.5–4s, end card 2–3s.
- **Hover/press:**
  - Primary hover goes to `#F4BF16` with a 1px lift and the warm glow. Pressed is `#E5AB08`, shifted 1px down, with no glow.
  - Secondary hover fills `#E4F4FB` with a 1px lift.
  - Nav links get a pill hover (Deep Walk at 8%). The active page has a 2px underline.
  - Field hover darkens the border to `#775B4A`.
  - Loading shows a spinner and sets `aria-busy`.
  - Disabled is `#E9E1D2` / `#775B4A`.
- **Focus:** always a 3px `#004B75` outline, offset 4px (2px on fields), plus an optional warm glow. On the Cocoa footer the outline turns Sunshine.
- **Transparency/blur:** limited to the glass surfaces above. Editorial/social artwork stays solid: text over photos sits on solid bases (cream card, Cocoa caption, blue band).
- **Layout:** 48px min touch targets; one primary action per block; editorial safe margin 6%; video text guide 13% top / 20% bottom / 6% left / 15% right; YouTube bottom-right corner kept clear.

## Iconography

- No icon font or SVG icon set exists in the source. The brand relies on the **mascot**, **Barlow labels**, the **wave**, and two Unicode glyphs: **↗** (CTA/link arrow) and **✦** (energy accent, max one per piece).
- The v2.1 lower-third used a simple paw SVG created only as a demo — not an original asset, so it was not copied.
- No emoji. If functional UI icons become necessary, use a simple rounded-stroke CDN set (e.g. Lucide, 2px stroke) and flag it as a substitution.

## Logos

Four original PNGs (raster only — no vector). Preserve proportion, colours, outlines; no rotation, filters or new shadows. Clear space 15% of visible width per side. Min 120px (full logo) / 48px (mascot). Avatar: mascot centred on a blue or cream circle. The wordmark PNG has large transparent margins — size by its visible letters.

## Fonts

Nunito Sans and Barlow Condensed (OFL) are loaded from **Google Fonts** — the original package's local font files were not uploaded.

## Changelog

- **v3.0 Stage B: Integration** (2026-10-22). Stage A approved, including the paw accent and button lip. Website now uses GlassSurface nav, TactileButton everywhere, AnimatedMascot hero with FloatingElement chips, SpatialCard service cards in a StaggerContainer (80ms), image-unmask gallery with gentler parallax (max 20px), and a coordinated CTA stagger. Phase 2 `ui_kits/motion/` removed (superseded by `ui_kits/spatial/`).
- **v3.0 Stage A: Spatial foundation** (2026-10-22, for review). Adds `tokens/spatial-motion.css`: perspective 1000px, tilt ±4°, lift 6px, press 3px, depth 12/24/40px, ambient/hover/pressed shadows, directional highlight, border illumination, a `--glow-intensity` multiplier, and motion tokens of 150/200/250/550ms with 5–8s ambient. The default easing is `cubic-bezier(0.22,1,0.36,1)`, plus a `linear()` spring with a cubic fallback. Adds the eight primitives in `components/spatial/`. Mascot gains `headTilt` and `intensity`. AnimatedMascot turns head tilt off because no separate head layer exists. There are no new dependencies (no Motion, GSAP or Three.js), only CSS plus small hooks, with one shared IntersectionObserver and one shared pointer listener. **Production pages are unchanged in this stage.** Open questions: the CSS paw accent is new and needs approval, and TactileButton's lip is new to the button language.
- **v2.3: Spatial & expressive motion** (2026-10-22). Adds `tokens/spatial.css` (perspective 900/1100/1400, depth planes, parallax ratios, key light, elevation 4, tilt ≤4°, card lift 5px, button scale 0.98–1.02, durations 150/260/560/650ms + 6–8s ambient, spring easings). Card gains `tilt` (cursor tilt, directional highlight, dynamic shadow, spring reset). Button gains spring hover/press scale and animated arrow. Reveal gains `variant` (rise/fade/image), 20px/560ms. New Mascot and Parallax. The website hero uses the animated mascot, service cards tilt, the gallery reveals with layered parallax. All cursor effects are mouse-only; everything is static under reduced motion or `html[data-reduce-motion]`. This supersedes v2.2's "no loops / no parallax" motion rule for the mascot, floating chips and decorative layers only. No new libraries: CSS transforms + small hooks.
- **v2.2: Playful Premium** (2026-10-22). Adds the elevation, glass, glow and motion tokens (`tokens/effects.css`), plus GlassPanel, ImageTile and Reveal. Button gains glow and loading states, Field gains hover/focus/disabled states, Card gains elevation, interactive and media options, and the CTA band gains depth. The website kit is refined (glass nav, hero halo, gallery, footer). Palette, type, IA and copy are unchanged. The brief's `--brand-*` values (#FFCE2D, #006A9F, #45200F, #FFF9E9) are aliased to the existing v2.1 tokens rather than replacing them. See `guidelines/evolution.html`.
