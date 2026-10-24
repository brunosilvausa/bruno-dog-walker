# Website kit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Integrate the useful website compositions without launching the marketing MVP.
**Architecture:** Three server components reuse local brand and action primitives. A guide section composes those with existing cards, photos and CTA.
**Tech Stack:** Installed Next16.4.3 / React19.3 / Tailwind4.3.3, no new dependency.
**Spec:** docs/superpowers/specs/2026-10-23-website-kit-design.md

## Global Constraints

Preserve identity-only home, tokens, reference archive and all user edits. No booking/contact flow, service claims, commits or publication. Source files under350 lines.

## Review Focus

Narrow screens: no clipped nav/hero. Duplicate landmarks/headings: one page h1/main and named navs. Anchor links: valid target IDs. Inverse footer: readable links and independent focus. No-JS/touch: captions and navigation remain available.

### Task 1: Components and specimen

Files: design-system/components/website.tsx; design-system/website.css; tokens.css and styles.css imports; src/app/design-system/website-section.tsx and page.tsx.
- [x] Add SiteHeader, WebsiteHero and SiteFooter, native semantics and no client state.
- [x] Compose local overview/pattern/gallery anchors with existing Card/BrandPhoto/CtaStrip.
- [x] Validate all five review conditions through assert-based browser checks; fix findings.

### Task 2: Documentation and validation

Files: DESIGN.md, design-system/README.md, docs/design.md, docs/setup.md.
- [x] Document selection, normal-flow header decision, reusable interfaces and deferred booking MVP.
- [x] Run pnpm check, browser widths320/375/768/1440 and no-JS, inspect screenshots.
- [x] Fresh independent read-only review; correct material issues and rerun affected checks.

Completed with no material review findings. Evidence: .local-evidence/design-system-website/. Native server rendering avoids added client state. No source reference files changed.
