# Quality and reusable checks

## Commands and meaning

| Command | Contract |
|---|---|
| `pnpm lint` | Next/TypeScript presets, 350-line limit, structured logger and presentation/data boundary guards |
| `pnpm typecheck` | `next typegen` then strict TypeScript checking |
| `pnpm lint:typed` | Typed `no-floating-promises` and `no-misused-promises`, both errors |
| `pnpm lint:rules` | Executes the three copied custom-rule self-checks, design CSS guard self-tests and token adherence check |
| `pnpm test` | Node Vitest environment/logging boundary suite |
| `pnpm test:watch` | Interactive test watch |
| `pnpm build` | Production compilation and static rendering without credentials |
| `pnpm check` | All six required gates above, in order |
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
