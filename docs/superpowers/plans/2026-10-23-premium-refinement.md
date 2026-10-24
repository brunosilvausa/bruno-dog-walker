# Playful Premium Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Finish missing refinements while preserving the existing brand and component stack.
**Architecture:** Existing shared tokens and CSS own visual behavior. Server TextField and gallery/comparison content use small client state only for an explicit treatment toggle.
**Tech Stack:** Installed Next16.4.3/React19.3/Tailwind4.3.3; no new dependency.
**Spec:** docs/superpowers/specs/2026-10-23-premium-refinement-design.md

## Global Constraints

Preserve canonical colors, IA, real content/assets and dirty baseline. No production form, contact destination, new services, persistence or publication. Respect350-line source limit.

## Review Focus

Sticky focus/anchors stay visible on narrow screens. Translucent captions retain contrast over worst-case photos and remain accessible on touch/noJS. Fields associate helper/error/caller descriptions and block loading edits. Scoped comparison must not change root tokens or reset typed state. OS/lab reduction stops all decorative motion; floating must not loop.

### Task 1 — Shared treatments
- [x] Adjust tokens and shared styling for premium ease/glow, translucent borders, CTA/hero elevation and interaction-only floating.
- [x] Add optional sticky SiteHeader within the bounded website specimen; check clearance and keyboard scroll.

### Task 2 — Input and comparisons
- [x] Add components/field.tsx and meaningful SSR association/availability tests; run tests.
- [x] Add premium-sections.tsx server specimens and treatment-comparison.tsx small toggle; CSS comparisons and image glass captions.
- [x] Integrate showcase navigation; document canonical values and explicit scope decisions.

### Task 3 — Verification
- [x] pnpm check, four-width/browser/reduced-motion/contrast checks and prior relevant interaction regressions.
- [x] Fresh independent read-only review; fix material issues and rerun affected checks.

Completed:59 tests/full gates; all browser checks and Button/Card/Spatial regressions pass. Independent review found invalid hover border precedence, fixed and exercised. Native nested anchor scrolling needed responsive destination/focus-target scroll-margin rather than container scroll-padding; verified header, target and focused footer links at all four widths. Evidence in .local-evidence/design-system-premium/. No external execution or asset changes.
