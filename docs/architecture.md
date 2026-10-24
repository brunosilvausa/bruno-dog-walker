# Code and architecture

## Stack

Next.js 16.4.3 with App Router and Turbopack, React 19.3.0, TypeScript 5.9.3 and Tailwind 4.3.3. Node.js 24 and pnpm 12 are the supported local baseline; exact dependency versions are locked in `pnpm-lock.yaml`.

The official scaffold uses `@tailwindcss/turbopack` in `next.config.ts`. Preserve that version-matched integration rather than importing a PostCSS recipe from an older Next template. Compiler/cache components were explicitly disabled during scaffolding.

## Actual code map

- `src/app/page.tsx`: server-rendered landing composition, shared header and section anchors.
- `src/components/landing/`: server-rendered hero/editorial/FAQ/contact sections; `navigation.tsx` enhances a native disclosure menu; `experience.tsx` owns motion pause and composes existing spatial/scroll controllers; `contact-form.tsx` owns local validation and an explicit unsent preview.
- `src/lib/contact-schema.ts`: bounded contact inputs using Zod, shared with focused boundary tests. There is no delivery endpoint yet.
- `src/app/landing.css`, `landing-sections.css`: home-only responsive composition using design-system tokens.
- `src/app/layout.tsx`: English document language, title and description.
- `src/app/globals.css`: Tailwind 4 CSS-first aliases, explicit source scanning and design-system CSS imports.
- `design-system/components`, `tokens.css`, `styles.css`, `brand.css`, `showcase.css`, `spatial.css`, `assets`: typed UI/brand/spatial primitives, visual values, styles and local assets. `@/design-system/*` resolves here; other `@/*` imports resolve to `src`.
- `src/app/design-system`: static component showcase with a small client island for action/selection examples.
- `src/app/design-system/brand-sections.tsx`, `foundations.tsx`: server-rendered identity, graphic/photo, color/contrast/type/voice and composition specimens; no new client state.
- `design-system/components/spatial-card.tsx`, `spatial-controller.ts`: client-only pointer wrapper and native lifecycle; one queued frame per active wrapper, no global pointer subscription, React render per movement or animation dependency.
- `src/app/design-system/spatial-examples.tsx`: controlled spatial pause and explicit entrance replay; `detail-sections.tsx` renders state/elevation/graphics/overlay specimens on the server.
- `components/calibration.ts` in the root design system validates finite, bounded calibration values and emits scoped CSS custom properties. `calibration-controls.tsx` uses native ranges/details; `finishing-sections.tsx` passes static glass/photo content into the laboratory, with small client neon/timing specimens. No persistence or global provider exists.
- `design-system/components/field.tsx`: server-compatible native TextField with label/helper/error/loading associations; demonstration controls have no form or submission. `premium-sections.tsx` passes server specimens into `treatment-comparison.tsx`, whose only state is a scoped treatment toggle. `premium.css` refines shared treatments and bounded sticky navigation.
- `design-system/components/scroll-scene.tsx`, `scroll-controller.ts`: controlled native observer/RAF lifecycle, with static fallback and one root geometry read per queued frame. `animated-mascot.tsx` reuses the original logo and pointer wrapper. `/design-system/motion` passes server cards/photos/table into its small controlled client composition; no timeline/3D runtime is added.
- `design-system/components/ambient-motion.tsx`, `ambient-controller.ts`: observed decorative CSS playback, stopped by media/visibility/focus/hover and cleanup. `reveal.tsx` exposes server-only structural reveal/stagger wrappers. `/design-system/phase-3` reuses calibration with scoped6px lift and a separate ambient opt-in; Stage B production integration is review-gated.
- `design-system/references`: isolated historical HTMLs and their dependency closure; excluded from app types, lint and Tailwind scanning, not served by Next.
- `src/lib/env-schema.ts`: Zod log-level schema and safe environment parser.
- `src/lib/env.ts`: server-only `getLogLevel()`, defaulting to `info`.
- `src/lib/logger.ts`: server-only Pino singleton and `createLogger(destination?)`, with structured redaction.
- `src/lib/utils.ts`: `cn(...inputs)` combines conditional classes and resolves Tailwind conflicts.
- `src/lib/*.test.ts`: environment and logging boundary tests in Vitest's Node environment.
- `eslint-rules/`, `eslint.config.mjs`, `eslint.typed.config.mjs`, `scripts/verify-quality-rules.mjs`: pinned toolkit rule implementation and local gates.
- `.agents/skills/`, `skills-lock.json`: versioned instructions; not runtime dependencies.
- `tests/e2e/`, `playwright.config.ts`: independent production browser journeys, shared synthetic fixtures/health observation, privacy guard and axe states; six engine/viewport projects, no production imports.
- `scripts/check-docs.mjs`, `quality-scope.mjs`, `e2e-summary-reporter.mjs`: tested Node-only tooling for owned documentation, impact selection and a bounded public summary. Scripts do not receive application credentials.
- `.github/workflows/quality.yml`: prepared read-only push/PR checks on one Ubuntu runner; production build reused by browser tests. Remote execution is tracked separately in setup.

## Boundaries and data

The home is a Server Component with small client islands for motion pause and local contact-form validation. Images and fonts remain local. Existing spatial/scroll lifecycle code handles reduced motion, coarse pointers, visibility and cleanup. The form has no fetch, server action, route handler, delivery adapter or persistence; its pre-hydration disabled fieldset prevents a no-JS GET submission. The user selected a form instead of the provisional Instagram link. No external business request occurs until a delivery channel is explicitly configured.

There is no persistence, ORM, database client, schema, migration or database command. This follows the user's selected direct-contact approach, not a missing setup step.

`LOG_LEVEL` is the only application environment setting. Validation errors include its name without the rejected input. Pino removes configured top-level, nested and HTTP-header secret fields. Redaction cannot sanitize arbitrary free-form messages; callers must avoid logging secrets and unnecessary personal data.

## Decisions and maintenance

Stable registry versions and local CLI/docs were checked on 2026-10-23. ESLint 9.39.5 is retained because three Next plugins reject ESLint 10 in their peer ranges, despite the newer major being available. Revisit when the complete preset supports it; do not force peers.

No `@next/env` dependency is necessary: Next loads environment variables for application execution; no standalone script needs an environment loader. Vitest stubs configuration directly.

The project-owned design system is the component library; shadcn/ui is absent. No hosted provider, analytics or observability service is chosen. Update this map when real features introduce new boundaries. Verification and pending tools are recorded in [setup](setup.md).

## TRD extension — planning approval, 2026-10-24

Status: documentation only. The user confirmed dog walking, daycare, boarding and cat visits and authorized the phased plan, not application changes. [PRODUCT.md](../PRODUCT.md) owns requirements FR-01–FR-07 and pending commercial decisions. Retain the versioned stack above, server-rendered content, small client islands and local assets; there is no reason to introduce a CMS, new component framework or backend service for this local milestone.

### Planned contact contract and backend schema

No database schema exists or is proposed. The application currently uses `contactSchema` and its inferred `ContactDetails` type from `src/lib/contact-schema.ts`; `ContactForm()` validates FormData locally. The current required animal-name key is `dog`. No external endpoint or persisted record consumes that key.

The proposed dog/cat-compatible contract retains the same exports and maps `dog` to `petName` in one coordinated future change:

| Property | Type and boundary | Planned form mapping |
|---|---|---|
| `owner` | Trimmed nonempty string, maximum 100 | Your name; existing ID retained |
| `email` | Trimmed valid email, maximum 254 | Email address; existing ID retained |
| `petName` | Trimmed nonempty string, maximum 100 | Pet’s name; `name="petName"`, `id="contact-pet"` |
| `location` | Trimmed nonempty string, maximum 120 | Cross streets; existing ID retained |
| `message` | Trimmed string, maximum 1500; empty string allowed | Optional note; FormData supplies `""` when blank |

UI optionality of the note does not currently make the schema property optional: callers supply an empty string. Unknown keys remain stripped. Do not infer species from a name, impose an ASCII-only name pattern, add a multi-pet record model or collect an exact home address. No service/appointment ID, dates, capacity or payment data is required.

Consumers that must change together: `src/components/landing/contact-form.tsx`, `src/lib/contact-schema.test.ts`, relevant SSR regression assertions in `src/lib/landing-fallback.test.ts`, and the local browser check selectors/fixtures. Search all callers again before implementation. Keep first-error lookup aligned with input names; use `errors.petName`. Existing unsent status, disabled pre-hydration fieldset, note disclosure and draft retention are invariants. A schema regression must reject a legacy-only `dog` object because `petName` is required, rather than silently accepting a missing pet name.

### Data lifecycle and future delivery boundary

Current and planned local preview: browser document → FormData → Zod → field errors or local checked state. There is no network submission, storage, queue, lead table or business-data log. Reloading does not restore a draft. This description concerns application behavior, not a promise about browser autofill or OS features.

Deferred conceptual path: browser → one server-owned submission boundary → server-side Zod/payload limits → authorized delivery provider → honest response. Whether to use a Server Function or route handler is intentionally left to the separately resumed delivery design; do not scaffold both now. Credentials stay server-only; logs must omit contact bodies and personal details. Reuse validation rather than trust client checks.

Delivery states must distinguish invalid input, sending, provider acceptance, rejection and uncertain/timeout outcomes. Do not show success on uncertainty or claim mailbox receipt from an API acknowledgement. Preserve the draft on failure; choose a duplicate-submission/retry policy before enabling delivery. Abuse controls must fit the selected runtime; an in-process counter does not guarantee distributed rate limiting. Any provider retention, external storage, cost or extra service requires review when delivery resumes. See [delivery scope](contact-delivery.md).

### Technical acceptance and verification ownership

- FR-01–FR-03: server content, stable anchors and owner-approved copy; no invented operating details.
- FR-04–FR-05: schema boundary tests, SSR/no-JS regression and actual browser journeys for dog and cat enquiries.
- FR-06: existing token/rule gates plus keyboard, touch, reduced-motion and visual review; no Phase 3 Stage B integration.
- FR-07: capability coverage and reproducible commands in setup/quality; a capability documented in an old run is not freshly verified.

The coordinator owns shared manifests, lockfiles, integration and evidence. Future workers require distinct writable files and isolated mutable processes. The [phased plan](superpowers/plans/2026-10-24-existing-project-mvp.md) specifies task dependencies and checks. None were executed as part of this documentation update.
