# Quality Automation Implementation Plan

> **For agentic workers:** Use phased implementation with distinct writable files, coordinated manifests and a review gate after each phase. User authorization to implement is already present; do not request it again. No automatic commits, pushes or deployments.

**Goal:** Make current landing regressions reproducible locally and prepare automatic GitHub checks.

**Architecture:** Preserve Vitest Node tests and `pnpm check`; add independent Playwright journeys sharing axe and a production server, a tested local Markdown validator, and a minimal read-only CI job. Keep application behavior and historical evidence intact.

**Tech Stack:** Existing Next.js/React/TypeScript/pnpm; version-checked Playwright Test and axe development dependencies; Node built-ins for documents.

**Spec:** [Quality automation design](../specs/2026-10-24-quality-automation-design.md).

## Global constraints

- Follow the spec's scope, current `dog` contract, no delivery/database/new product features and existing Stage B approval gate.
- Coordinator owns package/lock/configuration/docs; specialists receive distinct source/test files. Never modify historical browser evidence.
- Retain ignored raw evidence; do not upload contact bodies, secrets, traces or HAR. No remote activation claims without observed execution.
- Reuse the same production build for check → E2E, with zero retries and no unknown-server reuse.

## Review focus

- Same-origin requests can leak data despite zero external requests: assert synthetic sentinels in all observed requests/storage.
- Null focus targets can close a mobile menu before activation: preserve the navigation regression.
- Hidden optional notes with invalid content must open before focus while retaining the draft.
- No-JS and reduced motion must preserve reading/navigation and prevent native form submission.
- Independent tests, server collisions, failure exit status and cleanup must remain correct on repeated runs.

## E0 — Baseline and traceability

**Files:** this plan/spec, docs/quality.md and docs/setup.md.
**Owner:** coordinator; prerequisite: current clean Git state and canonical documents read.
- [x] Record current SHA/runtime and run existing `pnpm check` into private evidence.
- [x] Link current invariants to tests and distinguish future PRODUCT targets.
- [x] Review scope and baseline before adding dependencies.
**Gate:** all existing required checks pass; missing capabilities remain identified.

## E1 — Portable local verification

**Files:** src/lib/contact-schema.test.ts; scripts/check-docs.mjs and scripts/check-docs.test.mjs; tests/e2e/*.spec.ts and shared fixture; playwright.config.ts; package.json/pnpm-lock.yaml; lint/types as needed.
**Owners:** QA owns contract/docs tests; UX owns browser specs; coordinator owns dependencies/configuration.
- [x] Test contract maxima and excess values, including syntactically valid email254/255; preserve validation behavior.
- [x] Write document-validator regressions (valid target, missing file/anchor, duplicates/Unicode/encoded paths as needed), observe failure before implementation, then pass.
- [x] Consult compatible official docs; add pinned development dependencies only.
- [x] Port navigation/contact/motion/layout cases and shared four-state axe checks into independently runnable tests.
- [x] Prove network/storage privacy including same-origin attempts; keep normal assets permitted.
- [x] Verify production runner, meaningful failure detection, occupied-port refusal and cleanup; run required gates after corrections.
**Gate:** check/docs/Chromium mobile+desktop pass against the same production build; no session MCP dependency.

## E2 — CI configuration and evidence policy

**Files:** .github/workflows/quality.yml, docs/quality.md/onboarding.md/setup.md and README.md/AGENTS.md command index.
**Owner:** coordinator with DevOps review; prerequisite: E1 local PASS.
- [x] Configure one read-only job, pinned action revisions, frozen lockfile install, check/docs then Chromium on the same build.
- [x] Add manual impact-driven compatibility selection, finite timeout/concurrency and no schedules, secrets, bots, deployment or branch blockers.
- [x] Upload only allowlisted synthetic summaries on failure, seven-day proposed retention; raw traces/HAR remain off.
- [x] Validate workflow structure/actions and local command parity. Record remote run/quota checks separately if unavailable or not authorized.
**Gate:** workflow and failure/evidence policy reviewed; configured is not equivalent to active/observed.

## E3 — Expanded and integrated verification

**Files:** existing browser tests/config and canonical evidence documents only.
**Owners:** QA/UX; prerequisite: E1 and E2 checks passed locally.
- [x] Run relevant Firefox/WebKit, six-width layout, zoom/reflow, no-JS/reduced/touch and axe states.
- [x] Review screenshots and measured performance under recorded conditions; do not invent budgets or auto-approve baselines.
- [x] Run all required checks and obtain a fresh independent final diff review; fix material findings and rerun affected checks plus integrated gate.
**Gate:** selected automated criteria pass; physical devices/screen reader/human brand acceptance and remote CI remain separately scoped results.

## E4 — Integration/harness maintenance

**Files:** docs/quality.md/setup.md; any temporary fixtures outside the application.
**Owner:** coordinator; trigger: relevant tooling/instruction changes.
- [x] Verify actual skill discovery, Context7 execution, RTK nonduplication and relevant local graph capability without semantic inference.
- [x] Use bounded disposable harness checks for changed instructions; preserve current native client/model/authentication and evaluator integrity.
- [x] Toolkit revision validation only for relevant upstream/template changes; do not import its fixture database or install its framework into this app.
**Gate:** record PASS/FAIL/NOT RUN/N/A per selected capability. Unselected experiments are not missing product features.

## Completion status

E0–E4 local implementation and selected verification completed. After explicit user authorization, commit f45b7d4 was pushed and the full Ubuntu CI run passed; see docs/setup.md for exact results and limits. Physical devices, screen readers, real delivery and final owner asset acceptance remain explicitly NOT RUN. The documentation receipt is synchronized separately from the verified implementation commit.
