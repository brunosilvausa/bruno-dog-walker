# Phase 2 Motion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver the dedicated dimensional/motion showcase using the existing library.
**Architecture:** Native ScrollScene lifecycle controller and small AnimatedMascot client island reuse SpatialCard. Static cards/photos/token table remain server-owned children. CSS owns bounded transforms, shadows and finite animations.
**Tech Stack:** Installed Next16.4.3/React19.3/Tailwind4.3.3; no new dependency.
**Spec:** docs/superpowers/specs/2026-10-23-phase2-motion-design.md

## Global Constraints

Preserve brand assets/colors, identity-only home, working components and dirty baseline. No new business facts, form, publication, geometry, persistence or loop. Source under350lines.

## Review Focus

Observer absence/offscreen/hidden documents must be static and leak-free. OS reduction and hybrid pointer changes cancel queued work. Focused CTAs cannot be moved/obscured. Essential SSR/noJS content remains visible. Static server assets/content should not become a large client graph.

### Task 1 — Native scroll lifecycle
- [x] Write failing deterministic tests for intersection/reveal once, clamped/coalesced RAF, coarse/reduced/offscreen/hidden/focus cancellation and cleanup/fallback.
- [x] Implement components/scroll-controller.ts and ScrollScene paused wrapper; run tests.

### Task 2 — Motion composition
- [x] Add AnimatedMascot rigid-frame greeting, phase2 tokens/CSS and dynamic warm shadow composition; reuse existing SpatialCard.
- [x] Add route page.tsx server cards/gallery/table and motion-showcase.tsx explicit controls; add guide link and sticky clearance.
- [x] Validate build/types/lint/tests and browser motion/pause/keyboard/noJS/touch/four-width behavior.

### Task 3 — Documentation and independent review
- [x] Update root contract/library docs/code map/quality and dated evidence.
- [x] Fresh independent source review; fix material findings and run affected gates.

Complete:68 tests/full gates, dedicated browser checks and existing guide regressions pass. Added a disposed guard for late observer callbacks after a failing regression. Native focus targets share sticky clearance; Tab/Shift+Tab verified at four widths. Sticky Pause motion is available without returning to the top controls. Server card/photo/table ownership remains intact. Independent source review had no material findings. Evidence in .local-evidence/design-system-phase2/. No commit/publication or new dependency.
