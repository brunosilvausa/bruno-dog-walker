# Design-system evolution plan

**Goal:** Implement the library evolution selected by the user.
**Spec:** `docs/superpowers/specs/2026-10-23-design-system-evolution-design.md`.
**Architecture:** Existing Next 16.4.3 / React 19.3 / Tailwind 4.3.3; server primitives and token CSS, existing tiny client demo only. No dependency change.

- [x] Add semantic regression tests for decorative graphics and Card heading/media, and assertions for approved contrast pairs.
- [x] Add Wave, Spark, BrandPhoto and mascot signatures; refine Tag, Card and action styles. Copy only four supplied showcase photos into canonical assets, retaining originals and source hashes.
- [x] Reorganize the showcase by identity, grammar, photography, foundations, actions and composition; all reference styling remains independent.
- [x] Update visual contract and library usage guidance, run pnpm check and Chrome responsive/keyboard/reduced-motion/resource checks.
- [x] Fresh independent read-only review, fix material findings, record evidence and leave showcase available locally.

Review focus: compact logo legibility, meaningful photo alt/captions, heading hierarchy, contextual contrast, reduced motion, no reference imports, no additional client runtime/dependency.

Completed locally. Full gates and four-width browser checks passed. Independent review identified one Important contextual CTA contrast bug; reproduced before the selector fix, then validated with the full gate and a focused selected/disabled browser regression. No outstanding material finding. See docs/setup.md for evidence and limitations.
