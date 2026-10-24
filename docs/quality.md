# Quality and reusable checks

## Commands and meaning

| Command | Contract |
|---|---|
| `pnpm lint` | Next/TypeScript presets, 350-line limit, structured logger and presentation/data boundary guards |
| `pnpm typecheck` | `next typegen` then strict TypeScript checking |
| `pnpm lint:typed` | Typed `no-floating-promises` and `no-misused-promises`, both errors |
| `pnpm lint:rules` | Executes the three copied custom-rule self-checks, design CSS guard self-tests and token adherence check |
| `pnpm test` | Vitest Node application/boundary suite and Node tooling regression tests |
| `pnpm test:watch` | Interactive test watch |
| `pnpm build` | Production compilation and static rendering without credentials |
| `pnpm check` | All six required gates above, in order |
| `pnpm check:docs` | Owned inline Markdown file/fragment links; no network checks or vendored documentation |
| `pnpm test:e2e` | Critical Chromium desktop/mobile journeys and shared axe checks against an existing current production build |
| `pnpm audit --prod`, `pnpm audit --dev` | Separate advisory checks; a clean result is not proof of exploit absence |

No checks connect to a database or apply migrations. The original 13 environment/logging tests use real Zod/Pino with only the `server-only` marker mocked. Nine action cases, nineteen brand/contrast cases, twelve spatial lifecycle cases, five calibration boundary cases and four TextField association/state cases plus eight scroll-scene and ten ambient lifecycle cases bring the historical suite to 80. The 2026-10-24 landing adds seven contact-input boundary cases and two no-JS render/safety cases, bringing the suite to 89. The spatial controller uses deterministic DOM/media/frame doubles in Node; actual browser evidence is separate. No coverage percentage or full E2E suite is claimed.

Typed lint measured 8.31 seconds wall time and 642,367,488 bytes maximum resident set on this host, while independent setup checks also ran. This is one observation, not a performance benchmark.

## Browser, bundle and graph

The production page and component showcase are checked by HTTP and Chromium at mobile/desktop sizes. Showcase interaction remains ephemeral demonstration state. The 2026-10-24 landing has a separate browser journey check covering contact anchors, validation, first-error focus, draft retention, explicit unsent state, no-JS safety, pointer/pause/reduction/touch and native FAQ. This is a local form preview, not delivery evidence.

The design-system action regression suite checks default button type, loading prevention, disabled-link navigation removal, pressed semantics and active links. ESLint applies regular/typed checks to the root component folder and rejects historical reference imports and literal presentation values. The focused CSS guard covers colors, fonts, spacing and radii outside `tokens.css`; it is not a general parser. Source prop allowlists are replaced by strict TypeScript native-element types. Historical references have separate local browser evidence and do not enter production compilation.

Brand regressions check decorative SVG accessibility, Card heading/media semantics and approved text/background token contrast. CSS adherence scans all root design-system stylesheets and application CSS. Browser evidence also exercises selected and disabled hover, responsive photo loading/crops, long labels, reduced motion and the unchanged identity-only home. Visual review of photo faces remains necessary beyond resource/overflow assertions.

Spatial regressions cover frame coalescing/latest samples, clamping, touch/pen rejection, hybrid-pointer reset, collapsed surfaces, focus/exit/cancel/pointer-down/blur and unmount cleanup, live reduced-motion/capability changes. Browser checks exercise native mouse/touch/keyboard, pause, glass fallback, selected/disabled contextual contrast, no-JS visibility, replay timing and actual bounded layout. Floating must have a usable pause control; reference-kit claims do not substitute for this integration evidence.

Calibration tests reject nonfinite inputs, clamp/snap native range values, verify scoped unit mapping and preserve defaults. Browser validation checks keyboard ranges, Reset/reload, collapse, local/OS motion reduction, actual computed blur and opaque fallback, scaled timing, neon reset and composited glass text contrast. Literal expected CSS values are allowed in unit fixtures; runtime source and CSS token guards remain enforced. Build success alone does not prove a backdrop effect survived CSS prefix optimization.

Use `next-bundle-optimizer` in audit mode for baseline build evidence. CLI support and capture/export are recorded in [setup](setup.md). Do not claim browser transfer savings from analyzer attribution. `next-dev-loop` is installed but not qualified because agent-browser is missing.

Graphify uses only local code extraction: `GRAPHIFY_NO_AUTO_REFRESH=1 graphify extract . --code-only --no-cluster`. Exclusions protect secrets, dependencies, skills and generated output. Its graph does not validate business requirements or prose; standalone CLI does not inherit ChatGPT login, and no semantic LLM extraction is authorized.

## Reusable security review

Source: [toolkit prompt 13 at 790a895304e0c08b70a5b215c9d334f1c86b816c](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/13-security-review.md).

Invocation in the native session: “Read the pinned prompt 13 linked here and execute its Prompt block in repository baseline mode for this project. Keep the review read-only, preserve client/model/authentication, and save a redacted report in a private directory outside the repository.”

For diff mode, supply actual immutable base/head and comparison semantics. Inspect entry points, caller boundaries, logging and dependency scripts. No installed skill authorizes remote probing, publication or fixes. Differential-review is not selected for this greenfield baseline; manual source tracing and the existing tests remain available.

Store private reports outside the repository with restrictive permissions; sanitized results belong in setup evidence. Do not upload reports or raw traces. No findings means none substantiated in the inspected scope, never absolute security.

## Harness2-inspired native method

Source: [toolkit prompt 15 at 790a895304e0c08b70a5b215c9d334f1c86b816c](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/15-harness-improvement.md), [evaluation guide](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/07-harness-evaluation.md).

Invocation: “Read the pinned prompt 15 linked here and establish/reuse its native method adaptation for this project. Preserve the current model, authentication, permissions and working configuration. Run relevant disposable smoke cases and record only observed results. Compare at most one candidate only after a real harness failure.”

This is a local method adaptation, not execution of the Harness2 framework or its benchmarks. No CLI lab, API billing, bridge, new orchestrator or optimization daemon is selected.

Use same-revision fixtures/evaluator outside the app. Preserve evaluator integrity and local notes; independently rerun checks. Current evidence includes stale-handoff/boundary verification and canonical-document retrieval. Client restart, stop/resume, shared-resource contention and repeated setup are separate unrun observations. A passing case does not establish reliability across clients/models.

## Review and maintenance

One fresh independent final review checks the approved scope and final source/configuration. Fix material findings and run affected checks; extra rounds need unresolved risk or new evidence. Keep source changes, command contracts and their canonical documents synchronized.

Pinned toolkit updates require review of source/diff before replacing templates or prompt references. Skills use their own recorded upstream revisions. On unchanged reruns reuse valid evidence; dependency, instruction, model/client or tool changes invalidate relevant checks.

## Landing review, 2026-10-24

`src/lib/contact-schema.test.ts` covers whitespace normalization, required fields, email shape, every text-length boundary, non-string inputs and discarded unknown fields. `landing-fallback.test.ts` checks the disabled SSR fieldset that prevents accidental no-JS form submission through a GET URL. Existing spatial and scroll lifecycle tests remain unchanged.

The repeatable Playwright check and observed result are in `.local-evidence/landing-2026-10-24/`. It runs against a local production build and checks 320/390/768/1440 widths, visible controls, internal anchors, keyboard skip link, contact preview validation/focus, preserved draft, no browser storage, native FAQ, pause cleanup, reduced-motion override, no-JS form protection and emulated touch. Screenshots were reviewed separately. This is Chromium evidence only; it is not a physical-device, screen-reader, independent-review or real email-delivery qualification.

The subsequent mobile UX check is preserved separately in `.local-evidence/ux-mobile-2026-10-24/`. It adds native menu opening/closing, Escape/focus return, mobile contact navigation, sticky-header input clearance, no floating control overlay, stale checked/error reset, optional-note retention and no-JS menu checks. Widths320/390/768/800/1024/1440 were checked against the production build. Closed native details descendants must be excluded using actual visibility, not bounding boxes alone. The cleared status region is intentionally hidden and must be queried in the DOM when asserting its empty text.

## Quality automation — current and future contracts

Authority: phased implementation approved on 2026-10-24 after three specialist reviews. The [design](superpowers/specs/2026-10-24-quality-automation-design.md) and [implementation plan](superpowers/plans/2026-10-24-quality-automation.md) govern this quality work; they do not authorize the separate service/content MVP or delivery.

| ID / priority | Current invariant | Verification owner / existing proof | Portable verification |
|---|---|---|---|
| Q-01 / P0 | Required strings, normalization, unknown-field stripping and length boundaries | QA; contact-schema.test.ts | Explicit maximum/maximum+1 cases, valid email254/255 |
| Q-02 / P0 | Honest unsent preview, retained draft, invalidated stale feedback, accessible error focus | QA/UX; historical browser check | contact.spec.ts, including collapsed optional-note error |
| Q-03 / P0 | No contact transmission, URL leakage or application persistence | Security; SSR no-JS test and source review | All-origin request/storage sentinel checks, including same-origin negative control |
| Q-04 / P0 | Working anchors/menu, Escape return, null-focus navigation and keyboard access | UX; historical browser check | navigation.spec.ts and no-JS navigation |
| Q-05 / P0 | Motion pause, OS reduction, touch fallback and visible static content | QA/UX; controller tests and historical browser check | motion.spec.ts in real browser contexts |
| Q-06 / P0 | Essential semantics, labels, usable focus and no inaccessible overflow | UX; SSR/contrast tests, historical browser check | Shared axe checks in initial/menu/error/checked states; layout and focus tests |
| Q-07 / P0 | Existing code boundaries, token usage, types and build | Coordinator; pnpm check | Existing gate retained, plus test/config lint scope |
| Q-08 / P1 | Composition, enlarged text, cross-engine behavior and responsive crops | UX + Bruno; acceptance separate from assertions | Six-width layout, selected compatibility projects and human review |
| Q-09 / P0 | Reproducible commands, honest evidence, no unknown server reuse | DevOps; previous runs local only | Production runner, docs validator, reviewed CI and cleanup checks |

PRODUCT FR-01/FR-02/FR-04 and the planned `petName` migration remain future content/application work. The current suite must test `dog`, not silently assert those future features. FR-03/FR-05/FR-06/FR-07 overlap current invariants but their full future acceptance is not implied by this matrix. Physical Safari/iPhone, screen-reader announcements, final asset/commercial approval and real delivery require separate evidence.

Failures in selected P0 criteria prevent a PASS; they cannot be hidden by retry, skipped tests or quarantine. Other selected failures also remain FAIL until resolved or explicitly dispositioned with scope, owner and reason. Unobserved checks are NOT RUN; inapplicability needs a reason. Dependency audits retain their existing advisory status. Record the first failure even when a diagnostic rerun later passes.

## Portable browser and CI commands

The quality increment adds five contract cases to the prior89 Vitest tests (now94). Tooling tests separately cover the Markdown subset, public summary/privacy/critical-skip gate and impact selection. Counts are evidence, not a coverage percentage. Vitest remains Node-only and excludes Playwright specs.

```sh
pnpm exec playwright install chromium
pnpm check
pnpm check:docs
pnpm test:e2e
```

Do not build or run an analyzer concurrently against the same `.next` directory. `test:e2e` launches a production server on loopback3100, waits up to30s, refuses an existing server and uses SIGTERM with a5s shutdown window. Each test has a30s bound and assertions have5s; workers2 and retries0. Fresh contexts isolate tests. Local output directories are unique and ignored. No trace/video/screenshot recording is enabled by default.

For the wider selected checks, install the other browser runtimes once, then reuse the same current build:

```sh
pnpm exec playwright install chromium firefox webkit
pnpm exec playwright test --grep @critical
pnpm exec playwright test --project=chromium-desktop --grep @extended
```

The critical matrix has16 cases across six projects: Chromium/Firefox/WebKit desktop1440×1000 and mobile390×844. Mobile Firefox uses viewport/touch emulation without unsupported `isMobile`; none is physical-device evidence. The10 extended cases are selected only on Chromium desktop: six widths320/390/768/800/1024/1440, root-text enlargement200%, and menu boundaries1023/1024/1025. Root-font enlargement is not a claim of browser zoom or WCAG conformance.

Four axe states use the same runner: initial, menu open, invalid form and locally checked form. Audits wait for fonts, paint and finite entrance completion after preparing each state; no violation allowlist suppresses findings. A separate active-animation regression requires full reading opacity during entrance, preserving contrast rather than merely waiting out a fade. Actual keyboard/focus/no-JS/reduced-motion tests complement axe; VoiceOver/Safari and human visual review remain separate. WebKit/macOS requires Option+Tab to traverse links under its default keyboard preference; the test uses that native shortcut, not programmatic focus to bypass the skip link.

The privacy guard observes all routed origins/methods, headers and bodies, blocks synthetic contact markers before transport, and counts blocked attempts as failures. It is kept through reload; state and application storage are checked afterward. Normal local GET/HEAD assets remain allowed. The negative control deliberately attempts same-origin URL/body, cross-origin transmission and a beforeunload beacon during reload and must detect all four. This is evidence of those observed HTTP flows, not a universal network sandbox. Native browser autofill/form restoration is outside the application's persistence contract; Firefox restoration does not itself prove application storage. IDB/cache checks apply only where those APIs are observable.

## Workflow and impact selection

`.github/workflows/quality.yml` is configured for pushes, pull requests and manual runs. Activation and an observed successful GitHub run are tracked separately in setup. Actions are pinned by commit; contents permission is read-only, checkout credentials are not persisted, cache is disabled, and the job has a20min bound. Concurrent superseded runs on the same source branch are cancelled. No secrets, cron, deployment, comments, Git hooks or branch protection are added.

Every run installs the frozen lockfile and executes `pnpm check` plus `check:docs`. For simplicity and to avoid unsafe change-based gate omission, this first workflow also runs the baseline for documentation-only pushes; locally a documentation-only review can use `check:docs`. Browser selection compares committed base→HEAD with rename detection disabled so removals remain visible:

| Changed scope | Browser suite |
|---|---|
| Application, nonhistorical design system, E2E, package/lock, runtime/lint/type/test configuration or workflow | Critical six-project compatibility plus extended Chromium layout |
| Other scripts, root/docs Markdown or historical references only | Critical Chromium desktop/mobile |
| New branch, missing/invalid/unavailable base | Full compatibility, conservatively |
| Manual run | Explicit critical/full choice |

`scripts/quality-scope.mjs` is tested against real temporary Git histories, including source→docs renames. It never skips the baseline. A selected `@critical` test reported skipped/interrupted makes the reporter return failed and the CLI exit nonzero. A deliberate skip probe verified the actual Playwright behavior. Declared extended nonapplicable project combinations remain visible skips rather than being claimed tested; the documented extended command avoids those combinations entirely.

The failure artifact allowlist is only `.local-evidence/e2e/*/summary.json`, retained7days. The reporter copies only status/counts, allowlisted project/scope identifiers, selected count, time, SHA, working-tree dirty flag, lock hash and Node version. It never copies titles, errors, request bodies or attachments. Raw traces/HAR/screenshots are outside the upload policy. Console/error content used by tests is synthetic; do not run contact fixtures with real personal data or add service credentials to this job.

## Maintenance and remaining manual checks

Keep the document validator's inline Markdown subset explicit; external availability, reference-style links and arbitrary HTML href/src are not claimed checked. New custom logic needs a failing control and a passing control. Tests remain independent; diagnostic reruns retain the first failure and never silently quarantine P0.

Visual snapshots require approved baselines, stable fonts/images and motion frozen only for the visual comparison. Performance starts with a recorded production baseline, not an invented score target. Changes to app/UI select compatibility; material dependency/client/model/instruction/tool changes trigger the applicable integration/harness checks separately. Current tools' discovery, actual task execution, local graph extraction and native disposable harness results are separate evidence; no API-backed benchmark or official Harness2 run is implied.
