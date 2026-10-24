# Existing Project and Contact MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task, only after explicit implementation authorization. Steps use checkbox (`- [ ]`) syntax for tracking. The current task authorizes documents only; do not enter an execution workflow, commit or publish now.

**Goal:** Prepare an incremental evolution of the existing landing for dog walking, daycare, boarding and cat visits, preserving the brand and honest local contact preview.

**Architecture:** Reuse the current Next.js Server Component landing and existing client islands. Keep the design system authoritative, generalize only the shared enquiry contract for dogs and cats, and introduce no persistence or delivery service. Email delivery and publication remain separate deferred phases.

**Tech Stack:** Existing Next.js 16.4.3, React 19.3.0, TypeScript, Tailwind, Zod, Pino and Vitest; Node.js 24/pnpm 12 with the current lockfile. Versions are repository observations, not a recommendation to upgrade.

**Spec:** [PRODUCT.md](../../../PRODUCT.md) is the PRD and main-flow specification; [architecture](../../architecture.md#trd-extension--planning-approval-2026-10-24) is the TRD/backend contract; [UI/UX](../../design.md#planned-mvp-experience--2026-10-24-not-implemented) defines interaction acceptance; [DESIGN.md](../../../DESIGN.md) owns visual values. Read these together before execution.

## Authority and status

- 2026-10-24: three specialist brainstorming rounds completed: current-state diagnosis; cross-review of alternatives; critical review of dependencies and acceptance.
- The user approved the incremental single-page direction and creating documents/this plan, explicitly keeping implementation stopped.
- The same approval confirmed a dog-first business offering dog walking, daycare, boarding and cat visits. Commercial details not supplied remain PRODUCT P-01–P-07.
- Documentation is complete for review. All application/tooling work below remains unstarted. An unchecked task is not permission to execute it.
- Previous landing/mobile test results in `docs/setup.md` remain dated evidence; they do not validate this future plan or the proposed contract.

## Alternatives and decisions

Selected direction: refine the existing landing and reuse the toolkit foundation. A multipage site would require more content and maintenance without a current user need, so it is outside this MVP. Rebuilding the stack or replacing the identity would discard useful existing work and is not selected.

The specialist rounds found that useful service information and a real introduction to Bruno matter more than adding effects. Testimonials and personal photography are optional; missing facts must never be replaced with fictional claims. Stage B remains review-gated. The confirmed cat visits resolve the audience question and justify a planned shared pet-name field, not a new pet-profile system.

## Global constraints

- No database, authentication, reservations, payments, analytics, external service provisioning or deployment is included in the local milestone.
- Use Node.js 24/pnpm 12 and the lockfile. No global installations, new Git hooks or branch/worktree requirements.
- Reuse `@/design-system/components/*`, existing tokens and Tailwind aliases. Light theme only; preserve original logos and Nunito Sans/Barlow Condensed.
- Stage B and its integration-specific validation remain outside this plan's executable local scope.
- The local form must clearly report that nothing is sent; no browser storage, personal data in URLs, network submission or receipt/reservation claim.
- Public copy remains clear English. Preserve supplied assets and historical work; do not infer identity, licensing or commercial facts from references.
- Read version-matched Next guides in `node_modules/next/dist/docs/` before future code changes; Context7 is supplementary and may return canary guidance.
- Preserve the current native client/model/authentication. No semantic Graphify inference, new billing, automated refresh or remote activity.
- Shared files have one writer. Commit/push/merge and finishing-a-development-branch actions require their own authorized scope; no automatic commit steps are included.

## Review focus

1. A cat-visit visitor must find their service and use the common contact journey without dog-only labels; T3/T4 verify this.
2. Renaming the schema key must not disconnect validation errors from DOM input names and focus; T4 covers missing/legacy inputs and browser focus.
3. An invalid optional note inside collapsed details must remain recoverable, with draft retention and visible focus; T4 verifies this in the browser.
4. A valid preview, FAQ or CTA must never imply a real request was delivered; T3/T4 check language and absence of submission/storage.
5. At 320 CSS px, with keyboard, touch, reduced motion or JavaScript disabled, reading/navigation remain usable and contact remains safe; T5 verifies these states separately.

## Phase map and dependencies

| Phase | Tasks / owner | Dependency | Exit criterion |
|---|---|---|---|
| 0. Research | Coordinator + product/architecture, UX and brand specialists | Read-only access | Three rounds and observed-state gaps; completed in planning |
| 1. Documents | Coordinator | User approval to write | PRD, TRD, flow, UI/UX, contract and plan linked; implementation still stopped |
| 2. Content | T1 / Bruno + content owner | Implementation kickoff; P-01–P-06 as needed | Approved usable copy and asset decisions, or explicit blockers |
| 3. Toolkit reconciliation | T2 / coordinator | Implementation authorization | Every catalog item classified; only justified gaps addressed |
| 4. Local experience | T3 content/UI; T4 contract/form | T1 for final copy; T2 for reliable baseline | Four services discoverable and dog/cat preview coherent |
| 5. Verification | T5 / coordinator + independent reviewer | T3 and T4 complete | Technical and human evidence recorded without overstating readiness |
| 6. Delivery | Deferred / separate task | Explicit resumption of delivery and provider decisions | Server boundary, failure behavior and real receipt verified |
| 7. Publication | Deferred / separate task | Operational contact + explicit publication authorization | Hosted journey and recovery verified |

T1 and T2 can proceed independently after authorization. T3 and T4 may overlap only with disjoint file ownership; both touch shared contact wording, so serialize `contact.tsx` and document edits. A missing biography blocks final FR-02 acceptance, not technical inventory. Delivery and publication are not prerequisites for the local review milestone.

## T1 — Confirm the minimum commercial content

**Files:** update `PRODUCT.md` pending-input status and approved factual copy there; update `docs/design.md` only for an approved composition decision. Do not create a competing content source.

**Interfaces:** consumes FR-01–FR-03 and P-01–P-06; produces owner-approved service/introduction wording and explicit asset approval or exclusion decisions for T3.

- [ ] Confirm descriptions for the four named services; omit unconfirmed duration, group size, premises, capacity, transport, medication and availability claims.
- [ ] Obtain a short factual introduction from Bruno. If unavailable, mark FR-02 blocked; do not write a fictional substitute.
- [ ] Resolve whether Meet & Greet has a defined role. If unresolved, keep it out of service categorization and use neutral contact language.
- [ ] Review chosen image permissions/identities. Exclude unapproved images from any public candidate; retain originals. A personal portrait and testimonials are not mandatory.
- [ ] Review the resulting copy against PRODUCT facts. Record what Bruno approved and which omissions are intentional. No new tests for copy-only wording.

**Acceptance:** four categories are accurate; no unverified promise; introduction approved or explicitly blocked; selected assets have a decision. Rates and exact coverage can remain under consultation without invented values.

## T2 — Reconcile the existing toolkit, not reinstall it

**Files:** `docs/setup.md`, `docs/quality.md`, `docs/onboarding.md`, `AGENTS.md` and `README.md` only where a real current gap requires a documentation change. Manifest/lockfile or tool changes need a concrete approved gap; no package change is preselected.

**Interfaces:** consumes the pinned source and coverage matrix below; produces capability states with evidence/date, a reliable local baseline and a bounded list of required adjustments for T3–T5.

- [ ] Recheck Git state and existing processes, preserving dirty work and avoiding shared `.next` conflicts. Record a recoverable local baseline before authorized edits; never copy secrets into evidence.
- [ ] Revalidate the toolkit revision and inspect relevant changes before adopting an update. The planning source is `790a895304e0c08b70a5b215c9d334f1c86b816c`; there is no automatic latest-version update.
- [ ] Reconcile every matrix row using distinct states: present, configured, discovered, exercised, deferred or not applicable. Historical success is not a fresh test.
- [ ] With execution authorized and mutable processes isolated, run `pnpm check`; distinguish existing failures from later regressions. Run advisory audits if needed for the approved tooling scope.
- [ ] Address only justified applicable gaps; preserve working equivalents. Record blockers and recovery conditions. This task may finish without any new tool installation.

**Acceptance:** complete justified matrix, reproducible baseline and clear limitations; no scope expansion disguised as setup.

### Catalog coverage (23 guides)

Source: [tool catalog](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/tools/README.md). States below are planning classifications, not fresh runtime qualification. T2 records source/revision, scope, evidence/date, owner, action, prerequisites/risk and acceptance for any actual change.

| Guide | Planning decision | Verification or resumption condition |
|---|---|---|
| 01 Superpowers | Reuse proportionally | Scope, approval and completion traceable |
| 02 Subagents | Native delegation by need | Minimal brief, file ownership, independent review; no fixed permanent roster |
| 03 RTK | Reuse existing hook | Supported output usable; no double wrappers/proxy |
| 04 Ponytail | Reuse full | Smallest complete scoped change with required checks |
| 05 Caveman | Reuse | Concise Portuguese conversation; normal documents/code |
| 06 ESLint/Biome | Keep ESLint | Existing lint/typed/rule gates; no duplicate Biome |
| 07 Graphify | Local structural mode only when useful | Scope/freshness/exclusions; semantic inference remains excluded |
| 08 Obsidian | Not selected | Revisit only for an explicit external-memory need |
| 09 Claude memory | Reuse canonical project context equivalent | Readable current documentation; no new memory service |
| 10 Hooks | Preserve current configuration | No new hooks authorized or necessary by default |
| 11 agent-browser | Prerequisite historically pending | Recheck availability; any global installation is separate scope |
| 12 Context7 | Reuse existing connection | Planning resolve/query succeeded; release-specific claims need local docs |
| 13 Artifact/skill creation | No deliverable needs it | Revisit for a concrete artifact or recurring reusable capability |
| 14 Chrome DevTools MCP | Use existing equivalent where sufficient | Add nothing without a demonstrated console/network/performance gap |
| 15 Codex | Preserve native integration | Verify actual client capability; no copied foreign-client settings |
| 16 Vercel skills | Reuse installed web skills | Review provenance, names, applicable changes; deployment still deferred |
| 17 Next runtime/performance | Reuse analyzer; dev-loop prerequisite pending | Requalify when relevant; browser smoke does not qualify another skill |
| 18 PostgreSQL | Not applicable | Product explicitly has no persistence |
| 19 GitHub CI repair | No selected CI repair task | Revisit only with an actual authorized repository/check failure |
| 20 Security review | Scoped source/diff review | Explicit comparison and private redacted evidence; no remote probing |
| 21 shadcn/ui | Not selected | Existing project design system is authoritative |
| 22 Sentry | Not selected | Requires a future need and authorized service |
| 23 Harness2 | Reuse native method adaptation | Relevant smoke cases only; no standalone lab, paid benchmark or automation |

AIOX remains the installed system plugin; do not scaffold its runtime into the application. Named design skills are advisory lenses subordinate to PRODUCT/DESIGN, not permission to add competing fonts, tokens, libraries or loops.

## T3 — Make services and Bruno understandable on the existing page

**Files:** `src/components/landing/sections.tsx` (`WalkDetails`), `hero.tsx`, `navigation.tsx`, `contact.tsx` (`Questions`, `Contact`, `LandingFooter`); `src/app/page.tsx` only if composition requires it. Reuse `landing.css`/`landing-sections.css` and tokens; update product/design evidence with actual outcomes. No new route is planned.

**Interfaces:** consumes T1 approved content and existing anchor destinations; produces four clear service entries, a compact approved Bruno introduction and common dog/cat contact language. Preserve public component exports and section IDs.

- [ ] Replace generic care categorization with Dog walking, Daycare, Boarding and Cat visits using existing layout/components; keep Meet & Greet outside the confirmed service list.
- [ ] Place the approved short introduction near the service content; do not expand the site merely to fill missing biography or photographs.
- [ ] Update shared CTA/navigation/FAQ wording to include cat enquiries and explain the current preview. Keep descriptive dog imagery and dog-specific walking copy accurate.
- [ ] Review the whole page against T1, including metadata if its claims change. Verify every primary CTA resolves to `#contact` and no inaccessible or empty placeholder content is introduced.
- [ ] Perform browser content/anchor review under T5. Do not add tests that merely snapshot approved copy.

**Acceptance:** FR-01–FR-03/FR-06; a visitor can identify the four services and Bruno without invented facts. Dog-first positioning does not exclude cat visits from shared navigation/contact.

## T4 — Generalize the existing preview contract for cats and dogs

**Files:** modify `src/lib/contact-schema.ts`, `src/lib/contact-schema.test.ts`, `src/components/landing/contact-form.tsx`; inspect/update relevant assertions in `src/lib/landing-fallback.test.ts`. Reuse the existing local browser script `.local-evidence/ux-mobile-2026-10-24/browser-check.js` as a reference, adapting a copy in the new run's own evidence directory after inspecting its paths/selectors. Do not overwrite the historical script or results. This ignored local evidence may be absent on another checkout; if absent, reproduce the explicit journey checks in T4/T5 with the available browser tooling and record that limitation.

**Interfaces:** retains exports `contactSchema`, inferred `ContactDetails` and `ContactForm()`. Input becomes `{ owner, email, petName, location, message }` with exact limits in the TRD. The DOM key and error key are `petName`; the control ID is `contact-pet`; label is `Pet’s name`.

- [ ] Search all `dog`, `contact-dog` and schema consumers before editing; distinguish shared input keys from legitimate dog content/assets.
- [ ] Update boundary tests first: trimmed pet names accepted, blank/missing/non-string rejected, 100 characters accepted and 101 rejected; a legacy-only `dog` object lacks required `petName`; unrelated unknown fields remain stripped. Preserve existing owner/email/location/message coverage.
- [ ] Run `pnpm exec vitest run src/lib/contact-schema.test.ts` and confirm failure is the intended contract mismatch before changing production code.
- [ ] Rename the schema key and shared field/error/ID references together. Preserve email limits, four required fields, optional note and unsent status. Do not add a selector or species inference.
- [ ] Run `pnpm exec vitest run src/lib/contact-schema.test.ts src/lib/landing-fallback.test.ts`; expected: boundary and SSR/no-JS safety pass.
- [ ] Exercise dog and cat examples in the browser: blank pet name focuses `contact-pet`; malformed email focuses email first; a 1501-character note set in the DOM opens collapsed details before focusing; editing clears stale status; valid data remains unsent with no network submission or browser storage. Preserve draft on every invalid path.

**Acceptance:** FR-04–FR-05; schema/form/tests agree, no migration or compatibility adapter needed for this unpersisted internal contract, and no delivery behavior changes.

## T5 — Verify the local milestone and hand off honestly

**Files:** relevant actual fixes only; sanitized evidence/status in `docs/setup.md`, coverage/invocation updates in `docs/quality.md`, actual state updates in PRODUCT/architecture/design. Reuse existing browser harness after inspecting its source.

**Interfaces:** consumes T3/T4 integrated result; produces a dated verification report and explicit accepted/pending product status, not automatic publication.

- [ ] Run `pnpm check` against the final source; expected: lint, types, typed lint, custom-rule checks, tests and production build pass. Record failures rather than weakening gates.
- [ ] Use an isolated local process for browser review at 320/390/768/1440 widths plus enlarged text. Cover Review Focus 1–5, navigation/Escape/focus return, FAQ, pause/reduced-motion, touch, no-JS safety and visible anchor targets.
- [ ] Check no new external application request, no personal data in URLs/storage, and no console errors during both service journeys. Inspect logs without exposing contact bodies or secrets.
- [ ] Request independent read-only review of the changed source, scoped diff and acceptance evidence. Fix material findings and rerun affected checks only.
- [ ] Record visual review separately from automation. Record physical-device/keyboard and screen-reader checks as passed, failed or not run; do not infer them from Chromium emulation.
- [ ] Ask Bruno to review the local content/composition. Record remaining content/asset blockers and keep Stage B, delivery and publication pending.

**Acceptance:** FR-01–FR-07 traced to T1–T5 evidence; no critical unresolved defect in the reviewed local scope. A technical pass alone does not establish commercial launch readiness or human approval.

## Deferred phases and resumption gates

Delivery follows [docs/contact-delivery.md](../../contact-delivery.md): provider choice, domain/account authorization, server-only secret path, server validation/abuse controls, failure/retry policy and explicitly authorized actual delivery test. Do not request credentials until this task is resumed. Provider retention/cost and mailbox receipt require their own evidence.

Publication requires explicit authorization, approved public content/assets, an operational contact path, hosted checks and recovery instructions. No provider/domain/hosting action is selected by this plan. `finishing-a-development-branch` applies only when implementation is complete and integration is requested; its menu is not a current action.

## Plan self-review and handoff

- FR-01–FR-03 map to T1/T3; FR-04–FR-05 to T4; FR-06 to T3–T5; FR-07 to T2/T5.
- Contract names and limits are defined once in the TRD and referenced by T4. Review Focus cases have assigned checks.
- Unconfirmed business facts have owners and effects in PRODUCT; future provider details are intentionally deferred, not executable placeholder tasks.
- No new dependency, route, database or runtime animation is required. Reuse wins over additional setup where evidence supports it.
- Documentation approval does not authorize implementation. Stop after delivering these documents for review; do not ask for credentials or automatically start either execution skill.
