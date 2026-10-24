# Design system integration plan

**Goal:** Adapt the supplied Claude Design export into a small, usable local library and preserve independent HTML references.
**Architecture:** Existing Next 16.4.3 / React 19.3 / Tailwind 4.3.3. Typed components and CSS tokens in root `design-system`; `@/design-system/*` resolves there. The home keeps its verified identity-only content. `/design-system` demonstrates the library. No new runtime dependencies.
**Spec:** The user's five-part integration request, `PRODUCT.md`, and the visual contract in root `DESIGN.md` delivered with this work. Execution explicitly authorized without intermediate confirmations.

## Approach and decisions

Full export adoption would introduce bookings, unverified facts, a second React runtime and unnecessary animation. Tokens alone would not deliver reusable components. Select the useful content/action primitives, adapt them to SSR and native HTML, keep the full visual examples as isolated references. This selection is the implementer's decision under the user's ambiguity instruction.

Keep the existing single light theme. Blue is a contrasting composition surface, not a fabricated dark theme. Restore missing assets from the local YT DOGS v2.1 package only after byte-identical HTML/spec comparisons. Keep original logos and fonts with licenses. Stand-in photos and spatial/social kits stay in references, outside application compilation.

## Tasks

- [x] Preserve all 37 HTML references and their dependency closure. Archive the export adherence configuration; port compatible rules to ESLint. Record hashes, repair only paths/resource loading, verify references over loopback HTTP.
- [x] Add regression tests for action semantics (default button type, loading prevents activation, disabled links cannot navigate, pressed state forwarding). Build Button, ActionLink, Card, Tag, Highlight, Logo and CtaStrip with token CSS; use existing `cn`.
- [x] Connect root fonts/styles and home identity to the library; create responsive `/design-system` with variants, loading/disabled/pressed states and visible focus. No enquiry form or made-up contact destination.
- [x] Add token adherence checks, boundary tests and documentation. Update only affected sections in canonical docs and agent instructions. Keep prior dated evidence as historical.
- [x] Run `pnpm check`, Chromium desktop/mobile, keyboard, reduced motion, dark preference, all reference pages/assets, and one fresh independent review. Remove the export only after hash verification and no remaining code dependency; rerun affected checks after deletion.

## Review focus

Loading/disabled links must never retain navigation; long labels must wrap; cream/deep-blue surfaces need correct focus/text contrast; reference CDNs and missing assets must not survive as dependencies; imported raw demos must never become site services or contact facts.

## Execution record

Baseline: export is untracked; no tracked user changes. 2026-10-23 installed package versions checked. Export contains no DESIGN.md; `uploads/brand-guidelines.md` and `component-specs.md` carry the source visual contract. Original v2.1 three HTMLs and two specifications match SHA-256. No commit, remote action or stack update is needed.

Integration completed locally. Full gates passed, Chromium checked six responsive layouts and native interactions, references loaded offline, and the independent reviewer found no Critical/Important issues. Export hashes were unchanged before authorized removal. Source HTMLs differed only in localized script URLs. Final post-removal checks recorded in docs/setup.md. No commits or publication.
