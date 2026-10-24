# Phase3 Stage A Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Complete and validate the reviewable Stage A foundation, preserving the explicit Stage B approval gate.
**Architecture:** Existing pointer/scroll/calibration primitives plus a small observed ambient CSS lifecycle. A dedicated route passes static specimens into controlled client state.
**Tech Stack:** Installed Next16.4.3/React19.3/Tailwind4.3.3; no new dependencies.
**Spec:** docs/superpowers/specs/2026-10-23-phase3-foundation-design.md

## Global Constraints

No Stage B/production layout or brand changes before review approval. Preserve original assets/dirty tree/native semantics. Ambient off initially, OS reduction wins. Native controls and visible SSR/noJS content. Source under350lines.

## Review Focus

Late observer callbacks/cleanup cannot restart ambient. Offscreen/hidden/reduced/coarse/focus/hover must be still. Calibrations must not change other routes. Ambient must not move text/targets or warp artwork. Scroll public wrappers must remain visible without JavaScript.

### Task 1 — Primitives
- [x] Failing lifecycle tests, then AmbientMotion/controller implementation and bounded CSS.
- [x] Add typed TactileButton and ScrollReveal/StaggerContainer; meaningful semantics tests.
- [x] Add opt-in AnimatedMascot ambient; preserve default output/behavior.

### Task 2 — Stage A showcase
- [x] New route, existing calibration with lift6 default, sticky pause/reduction, shared specimens and scoped tokens.
- [x] Document scope/architecture/current tokens and pending Stage B review gate.

### Task 3 — Validate and present
- [x] Full pnpm check; new browser lifecycle/calibration/keyboard/touch/noJS/four-width checks; Phase2 regression; local performance limits.
- [x] Fresh independent review and fixes, final evidence/report.
- [x] Present Stage A for review. Stage B and its integration-specific Stage C remain pending by the user's latest brief.

Stage A complete and validated:80 tests/full gates, new browser checks, Phase2 regression and local performance probe. Independent review reports no material issues. Ambient bounds/offscreen/focus and coarse press styles verified. Native held-touch :active was not exposed by CDP; physical devices remain untested. The final deliverable presents Stage A for the user review required in the source brief; B/integration-C remain pending and were not silently executed. Evidence: .local-evidence/design-system-phase3/.
