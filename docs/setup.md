# Setup and evidence

Latest planning status (2026-10-24): the user approved documentation only for an incremental MVP covering dog walking, daycare, boarding and cat visits. See [PRODUCT.md](../PRODUCT.md) and the [phased plan](superpowers/plans/2026-10-24-existing-project-mvp.md). Application code, service delivery and Stage B are unchanged by this planning update. Evidence below remains attached to its original dated scope.

Verified: 2026-10-23. Scope: local technical bootstrap for Bruno Dog Walker; approved design and execution in the current Codex desktop chat. This is not a published site or completed lead funnel.

## Sources and environment

- Toolkit: `soumatheusgomes/vibe-coding-toolkit` at `790a895304e0c08b70a5b215c9d334f1c86b816c`. Prompt 11, guides/templates and copied sources use this single revision.
- Native client: Codex desktop, macOS arm64; exact desktop build, model identifier, reasoning level and token costs are not exposed in this task's evidence. Delegation inherited the native model. No provider, authentication or permission settings were changed.
- Node.js 24.22.1; npm 12.2.1; pnpm 12.15.0; Graphify 0.9.94. Existing RTK binary/hook reused.
- The target was empty apart from the subsequently approved design/plan. `create-next-app@16.4.3` generated a temporary scaffold outside it; a collision-checking merge preserved planning files.
- Exact flags: `--typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-pnpm --disable-git --no-react-compiler --no-cache-components --no-agent-feedback --yes --skip-install`.
- Registry `latest` confirmed Next/create-next-app 16.4.3; installed CLI help confirmed flags. Context7 returned official guidance, some from canary; those examples were not treated as release evidence. Installed version-matched Next docs were read for installation and page/layout conventions.
- Official sources: [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app), [installation](https://nextjs.org/docs/app/getting-started/installation), and `node_modules/next/dist/docs/`.

## Dependencies and adaptations

| Component | Observed version | Decision |
|---|---|---|
| Next.js / eslint-config-next | 16.4.3 | Stable registry release; App Router/Turbopack |
| React / React DOM | 19.3.0 | Official scaffold peers |
| TypeScript | 5.9.3 | Strict scaffold configuration |
| Tailwind / Turbopack loader | 4.3.3 | Preserve current scaffold CSS integration |
| Zod | 4.6.7 | Safe log-level/environment validation |
| Pino | 10.4.0 | Server-only structured logger and redaction |
| server-only | 0.0.1 | Build-time client/server boundary marker |
| clsx / tailwind-merge | 2.1.1 / 3.7.0 | Toolkit's small UI class helper |
| Vitest | 5.0.5 | Node 24 supports its declared engines |
| ESLint | 9.39.5 | Compatible but deprecated; see below |
| typescript-eslint | 8.72.0 | Focused typed async gate |
| @types/node | 24.19.2 | Matches the supported runtime major |

`pnpm-lock.yaml` records the resolved set; `packageManager` and `engines` record Node 24/pnpm 12. `pnpm peers check` reports no issues.

ESLint 10.13.0 was evaluated because 9 is deprecated. Although top-level presets accept it, eslint-plugin-import 2.32.0, eslint-plugin-jsx-a11y 6.10.2 and eslint-plugin-react 7.37.5 reject it in their peer ranges. Restored ESLint 9.39.5 instead of forcing compatibility. Revisit after those presets support 10.

No database dependencies, modules, schema, migrations, environment variables or commands were added. The existing data-access lint guard remains as a guard, without an ORM plugin. No separate `@next/env` is needed by this non-database foundation. All helpers and tests were adapted from the pinned toolkit.

The generated `pnpm-workspace.yaml` disables sharp/unrs-resolver lifecycle builds. pnpm recorded exact release-age exceptions for the explicitly selected stable Next 16.4.3 package family; no global supply-chain setting was changed. Frozen installation and native build succeeded with this file.

## Skills and integrations

The skills CLI used was `skills@1.7.4`, invoked through pnpm dlx, not installed as an application dependency. `pnpm dlx skills@1.7.4 list --agent codex` lists ten local skills. They are copied into `.agents/skills` without absolute symlinks; source paths/revisions/content hashes are in `skills-lock.json`.

| Capability | Scope and observed state |
|---|---|
| Eight Vercel web skills | Installed and CLI-discovered: vercel-react-best-practices, vercel-composition-patterns, web-design-guidelines, writing-guidelines, vercel-react-view-transitions, vercel-optimize, deploy-to-vercel, vercel-cli-with-tokens |
| Vercel web source | `vercel-labs/agent-skills` at `063bee94c3f4df8453406c830b0a7df0f2860278`; React Native excluded |
| find-skills | Existing user-level SKILL.md present and reused, no duplicate local copy. Fresh desktop catalog activation is not claimed |
| Next skills | next-dev-loop and next-bundle-optimizer installed from `vercel/next.js` at `682508f6bfb45f2dba9fdb8824d9e856f8bcc9ae` |
| next-dev-loop | Pending: agent-browser is absent from PATH; the skill requires >=0.31.1. No global install attempted. Separate Playwright browser smoke is not full skill qualification |
| next-bundle-optimizer | Audit capture/export supported and executed locally; no optimization changes |
| gh-fix-ci | Not selected: no remote repository, PR or GitHub Actions task. Cached plugin file presence is not active/live qualification |
| differential-review | Not selected for the initial greenfield baseline; current upstream explicitly excludes greenfield without a baseline. Native repository source review remains usable |
| PostgreSQL | Not applicable by explicit product decision |
| shadcn / Sentry / mobile | Not selected; no UI kit, service/account scope or mobile app requirement |
| Ponytail / Caveman / Superpowers | Native instructions/skills loaded and used; no global reinstallation |
| AIOX | Installed system plugin used for specialist guidance; no local framework installation |
| RTK | Existing binary and native condensed-output hook reused; no double wrapper or inference proxy |
| Context7 | Real resolve/query for Next.js completed; no local duplicate MCP entry or secrets |
| Graphify | Local code-only extraction executed; no semantic model/backend/authentication claim |
| Harness2 | Native method adaptation only; official CLI/demo/benchmarks not selected |
| Deploy / token / metrics skills | Instructions installed for later use; no remote action executed |

License provenance is recorded in [third-party notices](third-party-notices.md). Full fresh-desktop skill discovery remains untested; CLI file discovery and direct native reads are separate evidence.

## Required checks

| Check | Observed result |
|---|---|
| `pnpm install --frozen-lockfile` | Passed |
| `pnpm peers check` | No peer dependency issues |
| `pnpm lint` | Passed |
| `pnpm typecheck` | Route types generated; TypeScript passed |
| `pnpm lint:typed` | Passed; 8.31s wall, 642,367,488-byte max RSS on one measured run |
| `pnpm lint:rules` | All three rule self-checks passed |
| `pnpm test` | 13 tests in two files passed |
| `pnpm build` | Static `/` and `/_not-found` built without credentials |
| `pnpm check` | Combined gate passed before final review; rerun results tracked in plan |
| Production audit | Zero reported advisories: 33 production + 91 optional entries |
| Development audit | Zero reported advisories: 357 development entries |
| HTTP | Production and development servers each returned 200 and expected identity content; production HTML also verified location/lang |
| Chromium | 375×900 and 1440×900 checked; no horizontal overflow, one main/h1, zero console errors/warnings, all observed resource requests 200 |
| Keyboard | Tab exercised; there are no interactive application controls yet |
| Graphify | `--code-only --no-cluster` produced 108 nodes / 120 edges, zero LLM extraction |

Boundary tests were written and run before the missing helpers were added: expected import failures were observed, followed by 13 passing tests. This proves adapted environment validation, safe errors, log redaction and threshold behavior; it does not prove an external service or authentication workflow.

Graphify skipped unsupported CSS/extensionless files; four code files produced no symbols. This is a partial structural graph, not full semantic coverage. Generated graph and local logs/screenshots/audit artifacts are ignored. Production smoke server was bound only to a free loopback port and stopped after verification.

## Bundle audit

Scope: whole bootstrap app, audit only. Snapshot: `bootstrap-2026-10-23`. `next analyze --output --snapshot ...` captured the baseline; `next analyze export --snapshot ... | gzip` completed under Bash pipefail. The installed `next/analyze/graph-v1.schema.json` supplied record semantics.

Export: 822 module records, two routes, 269 outputs and 1,103 attribution parts. Both routes had exact endpoint/group metadata. Output membership coverage: 35 exact, 230 not-a-chunk and four unsupported; unsupported membership limits reachability claims.

Each route has 580,317 raw / 213,317 compressed attributed client-output bytes, deduplicated by route, output filename and source path. These per-route figures overlap and must not be summed as download size. They include framework/polyfill outputs and are neither observed transfers nor initial-request timing.

Largest source contributions are React DOM, Next polyfills and framework client internals. The source has no business client component or optional feature target; direct inspection is sufficient for this narrow bootstrap, so no community/min-cut optimization pass or lazy-loading change was proposed. No speed or transfer saving is claimed.

## Canonical context and native harness

`AGENTS.md` is the short index into the nine canonical documents. Codex receives project instructions and can read linked docs on demand; CLAUDE.md imports AGENTS.md. No external memory store was added. Dated setup evidence provides provenance; changes to code, dependencies, instructions, model/client or tooling invalidate the affected evidence.

A bounded stale-handoff/boundary smoke used a disposable fixture outside the application, from the same toolkit revision. The handoff falsely claimed the authorization bug was fixed. The coordinator and fresh native worker both observed five of seven baseline checks passing, with failures for cross-tenant reads and invalid identities. The worker inspected actual code, changed only `access.mjs`, preserved local notes and the false handoff as evidence, and reached seven of seven. The coordinator independently reran seven passing checks and inspected the diff.

Evaluator SHA-256 stayed `14220a750afbcf228fc397d5d3d32f10631c0f2e0a533c0ba8fa79b553f62e1c`. The fixture never entered this application. This validates one native smoke case, not this app's authorization or general agent reliability. Exact token costs and model identifier were not exposed; no estimates are invented.

Fresh-context project retrieval passed: a read-only native agent started with AGENTS.md, followed the canonical index, verified product scope/commands/no-database decisions, and matched all ten skill frontmatter names to the lockfile. It found no contradictions. This was explicit file retrieval, not automatic desktop restart discovery.

Final fresh-context repository review inspected the actual greenfield working tree, connected code/configuration, nine documents, provenance and existing check logs; it independently reran all 13 unit tests. No Critical or Important finding was substantiated. One Minor observation identified raw-token output examples in the installed-only Vercel token skill. The coordinator added an explicit credential-output prohibition to AGENTS.md, preserving upstream hashes. No credential command was executed. The private report is stored outside the repository with directory/file permissions 700/600.

Reviewer exclusions remain limits, not passed checks: no fresh-machine/cold-cache installation, live browser rerun, hosted/account workflow, arbitrary-depth/free-form secret sanitization, exhaustive vendored-script audit or restarted-client discovery. Prior coordinator evidence covers local frozen installation, full gates and Chromium; it does not cover those broader claims. Application callers remain responsible for secret-free log messages. No material finding or deferred code fix remains in this approved scope.

Read-only security-fixture, repeated setup, resource-conflict and pause/resume cases were not selected for this unchanged native harness. Restarted-client loading is not tested. No observed harness execution failure justified a candidate comparison, so no optimization trial was run.

Reusable pinned security/harness invocations and update rules are in [quality](quality.md). These preserve scope, privacy and native authentication without an external harness or billing.

## Decisions during execution

- Continued plan and execution under the user's explicit approval, without an extra plan approval gate.
- Used the requested directory and local Git, without introducing worktrees or branch restrictions.
- Reused the user-level find-skills to avoid duplicate global/local names; portability on another host requires discovery.
- Retained compatible ESLint 9 despite deprecation; ESLint 10 was tested for peers and rejected.
- Kept Graphify code-only and native model inheritance; no guessed model ID or provider substitution.
- Kept the missing agent-browser prerequisite isolated from independent build/browser checks.
- Added an explicit instruction against credential-value output after source review found unsafe printenv/grep examples in a vendored token skill. Upstream files and hashes remain intact; no token lookup or disclosure was performed.

## Pending product and operating work

The final site still needs confirmed services, real contact destination, Bruno's biography/trust evidence, approved photos and visual direction. The next MVP task is the accurate, accessible service/trust/direct-contact page after those inputs are available.

Physical-device, Safari/Firefox, screen-reader and final interaction acceptance were not performed. No hosted, production, commercial or lead-conversion qualification is implied. No remote, publication, message or paid service action occurred.

## Completion record

The complete six-gate check passed again after local skill installation. The development command was separately exercised: Next became ready and returned HTTP 200 with company content. Both owned servers were stopped. The final reviewer reran the unit suite successfully; subsequent changes were documentation-only.

Local Git was initialized for versioning in the requested directory, with no remote or custom hooks. The approved design, implementation plan, application, lockfiles, instructions and required documentation form the initial local commit. Generated graphs, screenshots, command/audit logs and private reports are excluded. Temporary download/scaffold/fixture inputs are not application dependencies.

The project-owned staged diff passes whitespace checks. Vendored upstream Markdown contains trailing-space formatting; it was preserved to keep source hashes intact rather than reformatted. This is unrelated to the passing application lint gates.

## Design-system integration — 2026-10-23

Scope: user-authorized local adaptation of the Claude Design export, complete execution without intermediate confirmations. Root `DESIGN.md` is the visual contract; the application still has no service/contact workflow. Existing bootstrap evidence above remains historical.

Diagnosis verified installed Next/eslint-config-next 16.4.3, React/React DOM 19.3.0, Tailwind and its Turbopack loader 4.3.3, TypeScript 5.9.3 and ESLint 9.39.5. No shadcn/ui, component library or dark theme existed. The home used Arial/system fonts and literal stone colors. Canonical instructions were AGENTS.md, its CLAUDE.md import, PRODUCT.md, README.md and docs; no source-export DESIGN.md or project CONTRIBUTING.md existed. Vendor skill contracts were not consolidated or renamed.

Documentation consulted: installed Next CSS/font/image/metadata guides; Context7 Next v16.2.9 examples (16.4.3 was not indexed, so installed docs control version-specific decisions); Context7 Tailwind documentation and official [Tailwind 4.3 theme variables](https://tailwindcss.com/docs/theme) / [source scanning](https://tailwindcss.com/docs/detecting-classes-in-source-files); current [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/main/command.md). The existing Turbopack integration was retained even though generic CSS documentation also showed PostCSS examples. No dependencies, lockfile versions or machine tools changed.

### Selection and integration

- Incorporated seven primitives: Button, ActionLink, Card, Tag, Highlight, Logo and CtaStrip. Typed native props, SSR CSS, existing `cn`, local fonts/images and a small demo-only client island replace export-time style injection. Home retains its exact confirmed business text.
- Chose ordinary Button over TactileButton, and content Card over SpatialCard: they cover the site's semantic needs without pointer tracking or 3D infrastructure. Kept primary/secondary/cream actions, md/sm/full-width, loading/disabled/focus/hover/active/pressed states; white/tint/cream and flat/elevated cards; all Tag/Highlight/Logo variants. No false clickable-card semantics were copied.
- GlassPanel/GlassSurface, Reveal/ScrollReveal, animated mascots, parallax, social/video kits, enquiry fields and ThemeSwitch remain historical references. Their functions are not required by the identity-only/direct-contact scope. Blueprint-only `state` props and glow/tilt controls are not production API; real browser states replace them.
- Standardized colors, fonts, spacing, radii, sizes and motion in `tokens.css` with Tailwind 4 aliases. Kept light-only behavior; Deep Walk is a composition surface. Preserved four original logo PNGs and restored local Nunito Sans/Barlow Condensed with OFL licenses. Feedback specimens include textual error/success labels; no enquiry form was introduced.
- Ported useful export lint intent into existing ESLint (raw color/size/numeric inline presentation and historical-import restrictions) plus a small tested CSS adherence guard. TypeScript replaces generated prop allowlists, which would reject useful native accessibility props. No Oxlint installation or second component stack.

### Reference recovery and removal

The raw export contained 163 files, including 37 HTML references. It explicitly lacked the original uploaded styles, fonts, photos and preview assets. Found the original local package at `/Users/brunosilva/Documents/ChatGPT/YT DOGS/outputs/design-system-v2.1`; all three uploaded HTMLs and both source specifications matched SHA-256 before restoring their asset dependencies. That source package was read only.

All 37 HTMLs are preserved under `design-system/references`; source HTML changes are limited to CDN script URLs becoming relative local paths. A new `catalog.html` links them. Preserved source Markdown, the complete original `_adherence.oxlintrc.json`, tokens, runtime bundle and JSX required by the live kits. Pinned React 18.3.1 / React DOM 18.3.1 / Babel standalone 7.29.0 scripts were checked against supplied SHA-384 integrity values and copied with licenses into the reference-only vendor directory. Font requests now use recovered local files. The application itself keeps React 19.3.0.

Discarded scratch crops, discovery manifests, thumbnail metadata, export-specific skill/GitHub instructions, redundant primitive JSX/type declarations/prompts not consumed by HTML. Necessary reference runtime code remains isolated from the application. Some byte-identical fonts/logos exist in both the independently served archive and application asset tree so neither depends on the other's server path. Restored reference previews account for most archive size; no marketing photos were adopted by the application.

Before removal, rechecked every export hash against the initial baseline, normalized and compared all 37 HTMLs, verified canonical logo byte identity and searched application sources for origin dependencies. Removed `design-system-export` only after integration gates, browser checks and independent review passed. `references/provenance.json` retains the source hashes, recovery origin and exact normalization decisions. The original external v2.1 package remains untouched.

### Validation and limits

- `pnpm check`: lint, strict typecheck, typed lint, three existing rule self-checks, two CSS guard tests, 18 Vitest tests and production build pass. The same full gate was rerun after export removal. Routes `/`, `/_not-found` and `/design-system` are statically built.
- Chrome through an isolated Playwright process: home and showcase at 320, 375 and 1440 px; one main/h1, no horizontal overflow, images loaded, local fonts, actions and keyboard selection, native disabled/loading behavior, visible keyboard focus, reduced-motion spinner and light theme preserved under dark OS preference. Zero application console errors, failed resources or remote requests on the final pass. A missing browser favicon exposed during checks was fixed by reusing the local mascot in metadata.
- Reference browser scan: all 37 source HTMLs plus the catalog load through a separate loopback server with no JS errors, failed resources, broken images or remote requests. Image-only thumbnail/photography pages correctly contain no body text. Static HTML/CSS dependency scan found no missing paths. Desktop/mobile showcase, home, restored board and reference specimens were visually inspected.
- Eight solid text/background pairs measured at least 4.78:1 (including disabled text); these are selected token combinations, not an exhaustive WCAG certification.
- Fresh independent read-only review found no Critical/Important issue, independently reran the 18 unit and two CSS-guard tests, compared all source HTMLs and verified logo hashes. Reviewer did not rerun the browser.

Local command logs, browser reports and screenshots are in ignored `.local-evidence/design-system`. Physical devices, Safari/Firefox, VoiceOver/NVDA, final subjective brand approval, hosted production and conversion were not checked. Historical demo claims and photos do not become verified business facts. No commit, push, deployment, messages, paid service or global installation occurred.

Handoff: rebuilt after source removal and opened `/design-system` in a dedicated Chrome tab. Loopback production server on port 4318 and archive server on 4319 were left running for review. These local processes are not deployments.

## Design-system evolution — 2026-10-23

User selected the library-evolution approach: bring the supplied brand grammar into reusable components, refine the existing library and organize the showcase around practical examples. Continued under the existing end-to-end authorization without intermediate confirmations. Spec and plan are `docs/superpowers/{specs,plans}/2026-10-23-design-system-evolution*`.

The working library now has 11 components. Added server-rendered Wave and Spark SVGs, blue/cream MascotSignature and responsive BrandPhoto; added expressive Tag styling and Card media/heading composition. Original SVG path geometry was reused with token colors and decorative accessibility semantics. Four original photos were copied byte-identically into canonical assets with source SHA-256 records. The archive remains independent and unchanged. Photographs appear only as showcase specimens; no dog identity, business claim or contact workflow was inferred.

The showcase now covers identity, compact signatures, visual grammar, photography, palette/contrast, typography/voice, action states and composed cards. The home keeps the same identity-only content. Full logo minimum increased to 120 px, with 48 px minimum compact mascot signatures. Added a deep Cocoa text token for bright blue swatches, subtle action hover lift/shadow/glow, explicit selected/disabled hover rules and reduced-motion variants. Source Markdown, old references, logos and fonts remain preserved. No dependency or lockfile update, client animation package, observer-based motion, remote service, commit or publication was added.

Current guidance was checked through Context7 (Next 16.2.9 examples, newest indexed release) and installed Next 16.4.3 Image documentation; the installed version remains authoritative. Photos use static imports, image dimensions, lazy loading and layout-specific `sizes` hints. Local Chrome requests returned WebP variants. On the final responsive scan, gallery display/source widths were approximately 290/359 at 1440, 224/253 at 768, 327/327 at 375 and 272/272 at 320 px. This verifies responsive source selection, not a page-speed benchmark or a percentage improvement over the previous page. Logos also have bounded resource hints rather than defaulting to source-PNG width.

Inspection found two inappropriate initial photo crops; the brown portrait now uses top alignment and the park-dog Card uses a square crop to keep the face visible. Browser regression checks cover those choices, but human review is still needed when photos or layout proportions change.

Validation: `pnpm check` passed (regular/typed lint, strict types, three existing rule self-checks, two CSS guard tests, 28 Vitest tests and production build). CSS adherence now scans all root library stylesheets plus application CSS. Ten new brand tests cover decorative SVGs, Card heading/media and approved token contrast. Chrome checked 320/375/768/1440 px, semantic landmarks/headings, images/alt/lazy sizing, selected and disabled hover, loading, unavailable navigation, keyboard activation/focus, dark OS preference, reduced motion and long labels. No horizontal overflow, console errors, failed resources or external requests were observed.

Fresh independent read-only review reran all 28 unit tests and lint-rule checks, and verified four photo hashes against their source. It found one Important contextual contrast issue: CtaStrip's secondary hover override could produce Deep Walk text on Deep Walk background when selected, and could recolor disabled text. The coordinator reproduced the selected failure in Chrome, restricted the override to available unselected controls, and reran both the full gate and the contextual selected/disabled/aria-disabled browser regression. No second review is claimed; the fix is verified by the failing-then-passing reproduction and green checks.

Evidence: ignored `.local-evidence/design-system-v2` contains command logs, browser reports and screenshots. Desktop/mobile guide, gallery and composed cards were visually inspected. The production server on loopback port 4318 was restarted after the reviewed build. Physical devices, Safari/Firefox, screen readers and hosted performance were not tested. Final subjective visual approval remains with the user.

## Interactive spatial layer — 2026-10-23

The user selected the interactive spatial approach, extending library evolution with cursor tilt/light, depth layers, controlled floating, glass, expressive variants, entrances and overlay specimens. Continued within the existing end-to-end authorization. Spec: `docs/superpowers/specs/2026-10-23-spatial-design.md`; plan: `docs/superpowers/plans/2026-10-23-spatial.md`.

The library now has 19 components. Added SpatialCard, SpatialLayer, GlassSurface, FloatingElement, AmbientGlow, CaptionBlock, CaptionWord and NameCaption. Existing actions accept a tactile treatment, Card supports elevations 0–3, Wave supports hill/swoop, and Spark supports blue/cream with optional warm glow. New border/support/elevation/motion/glass tokens are centralized. The showcase adds state palettes, four elevations, replayable entrances and caption compositions with reserved text bands. The same original photos and logo files are used; the home and reference archive remain outside the interactive demo.

SpatialCard uses one scheduled animation frame per active wrapper, samples the latest coordinates, reads its untransformed rectangle once and writes normalized CSS variables without a React state update per pointer move. Tilt is capped by the 4-degree token. Pending work and styles reset on exit/cancel/down/focus/blur/media change/unmount. Mouse/fine-pointer/no-reduced-motion are required. Keyboard focus stays on native nested controls; touch preserves tap and scroll. Floating is controlled, stops on focused descendants and is disabled for coarse pointers/reduced motion. The showcase starts effects off and offers the stable-label Spatial effects toggle. No-JS content is visible and floating stays paused. Ambient glow is static; no animation package, global pointer subscription or inferred mascot head layer was added.

Glass uses cream/cocoa text backings and explicit/automatic opaque fallbacks; inverse secondary hover keeps state contrast. The spatial wrapper replaces resting with lifted elevation rather than stacking shadows. Caption/name specimens have solid backing and a band below the image, slightly overlapping only its lower edge; faces were visually checked. These are static design specimens, not video rendering, confirmed dog names or booking/service facts. Existing public business scope remains unchanged.

Current client-boundary guidance was checked via Context7 (Next 16.2.9 examples, indexed version) and installed Next 16.4.3 use-client documentation. Existing React/Next/CSS and native DOM APIs were sufficient. Dependencies, lockfile, publishing state and machine configuration are unchanged.

Validation: full `pnpm check` passed after the review fix: regular/typed lint, strict types, three existing rule self-checks, two CSS guard tests, 40 Vitest tests and production build. The eleven spatial lifecycle cases use deterministic DOM/media/frame doubles; browser evidence separately validates the real DOM. Five library/application stylesheets pass token adherence. Chrome at 320/375/768/1440 px showed no horizontal overflow or broken images. Mouse tilt/light/reset and frame coalescing, native keyboard activation/focus, floating pause/focus, live reduced-motion changes, touch inactivity/native anchor navigation, no-JS visibility, replay delays 0/80/160 ms, four distinct elevations and glass fallback passed. Observed pointer bursts required one rectangle read and retained the latest sample. No console errors, failed resources or remote requests were observed. This is functional evidence, not an FPS/page-speed benchmark.

Fresh independent review reran 40 tests and rule checks. It found one Important issue: the original white light overlay painted over text and could reduce a secondary link’s contrast to 4.19:1. The coordinator isolated the surface stacking, placed a warm token-colored light above the background but below content and controls, and reran all gates. A real-browser screenshot regression failed before the fix (zero exact Deep Walk foreground pixels under the light), then passed with 936 exact foreground pixels and verified light/content stacking. The complete mouse/touch/keyboard/reduced-motion/no-JS/responsive scan passed after that fix. No second independent review or full WCAG certification is claimed.

Logs, browser reports and desktop/mobile screenshots are in ignored `.local-evidence/design-system-spatial`. The local production server remains on loopback port 4318 for review. No commit, push, deployment, message or paid service action occurred. Physical devices, Safari/Firefox, screen readers and hosted performance were not tested; subjective motion/visual approval remains with the user.

## Calibration laboratory and finishing — 2026-10-23

User explicitly approved both improvements, requested one at a time, no further questions and completion before handoff. Implemented and validated the calibration laboratory first, then implemented glass/glow/timing finishing. Plan: `docs/superpowers/plans/2026-10-23-calibration.md`. The library remains 19 components; showcase controls are not a parallel UI library.

The laboratory has native labeled range inputs for tilt 0–4°, lift 0–6 px, glow 0–100% and duration ×0.5–2, a collapsible in-flow panel, Reset and a reduced-motion simulator. Values are finite, clamped and snapped. CSS overrides are scoped to `.ds-lab`; they do not modify root tokens, files, storage or the home. Reset restores defaults, pauses effects and remounts entrance/timing/neon previews; reload also resets state. Local reduced motion adds to the OS setting and cannot disable it. The panel does not float over content/focus on mobile.

Finishing adds photographic glass comparisons: standard 88%/92% at 14 px, explicit reference 78%/72% at 16 px, and opaque fallback. Short primary-colored text and lower photo placement preserve contrast and faces. Warm/strong glow specimens are static illustrative states; experimental neon is off by default and explicitly toggled. All halos scale with calibration and remain outside text/focus. Timing roles are fast 150, normal 250 and slow 400 ms; existing internal 90 ms tracking, 700 ms spinner and controlled 6 s ambient roles remain distinct. Laboratory duration scales motion lengths while entrance stagger stays 0/80/160 ms. Timing tracks use transform-only CSS and explicit one-shot playback; no animation library was added.

References: the supplied live Claude Design spatial showcase was read through the authenticated Chrome session. Companion URLs initially exposed blank embedded frames; their archived HTMLs and user-supplied screenshots were already available locally. The source mixes a v3 scale with an earlier 150/250/400 guide; this integration deliberately uses one role-based guide scale rather than silently mixing default semantics. [MDN color-mix](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix) was consulted for scoped halo blending. Existing framework versions and lockfile remain unchanged.

A production-browser check exposed a pre-existing CSS declaration issue: a manual -webkit-backdrop-filter after backdrop-filter caused the compiler to retain only the prefix, so Chrome computed no blur despite the translucent background. Removed the redundant manual declaration and kept the standard property; the installed pipeline now emits both prefix and standard. New browser assertions verify actual computed 14/16 px blur and explicit opaque fallback, rather than treating a background color as proof of glass.

Validation: full gates pass with 45 unit tests, two CSS-guard tests, existing three rule self-checks, regular/typed lint, strict types and production build. Five calibration tests cover clamp/snap, NaN/infinities, scoped unit conversion and default immutability. Unit CSS-fixture strings are exempt from presentation-literal syntax checks; all runtime guards remain enforced. Token adherence covers six stylesheets. Browser validates native keyboard ranges, live scoped values, glow/duration, local/OS reduced motion, Reset including neon/timing, native collapse and reload. Glass foreground contrast against conservative black/white composited backgrounds measured at least 6.75:1; this does not certify every possible translucent composition.

Desktop/mobile finishing checks at 320/375/768/1440 px, photos, no-JS visibility, no overflow, no broken resources and no remote requests passed. Prior real mouse/touch/keyboard spatial regression also passed. The light-compositing pixel regression still preserves the original Deep Walk foreground. Logs, computed-style reports and screenshots are in ignored `.local-evidence/design-system-calibration`. Physical devices, Safari/Firefox, screen readers and hosted performance remain untested. No commit, push, deployment, messages, paid services or dependency changes occurred.

Final calibration handoff: fresh independent read-only review found no Critical/Important issue and independently reran all 45 tests. The coordinator rebuilt the final source, reran the laboratory browser checks after formatting the visual readouts, and kept the production showcase available on loopback port 4318. The reviewer read browser evidence but did not independently rerun browser/build. No material finding remains in this scope.

### 2026-10-23 — Social compositions and foundation completion

Added one server-compatible SocialPiece (20 library components total), selecting feed/story/landscape from the preserved social kit. The six original layout families and three video frames remain untouched under references. Added focus, radii, all spacing steps and seven type-role specimens. Reused tokens/primitives/local photos; no dependency, product flow, editor or export integration added.

Decisions: source photo portraits use contain over Blue Tint to preserve full subjects in short photo regions. Story reserves 20% top/bottom with illustrative 6% left/15% right guides. Actual destination controls/crops still require platform preview. Plain landscape labels correct clipping found by independent review at 320 px. Historical raw source was already removed after earlier integration validation; references remain intact.

Validation evidence: `.local-evidence/design-system-social/check.log` (full pnpm check), `browser.log` (320/375/768/1440, aspect ratios, nested copy bounds, photo regions, focus3/offset4, spacing, radii, type, no-JS, no page errors), `calibration-regression.log` (existing spatial controls). Screenshots recorded alongside logs. No platform export, publication or physical-device qualification is claimed. The supplied remote URL was inaccessible through web retrieval; the preserved local JSX kit and supplied screenshots supplied the source geometry.

### 2026-10-23 — Website kit compositions

Adapted the preserved `references/ui_kits/website` source into SiteHeader, WebsiteHero and SiteFooter (23 library components total), plus a complete guide composition at `/design-system#website`. Reused GlassSurface, Tag, MascotSignature, Card, BrandPhoto, ActionLink and CtaStrip. No dependency, home-page change, booking form, real contact route or service catalogue was introduced.

Decisions: keep this nested header in normal document flow instead of attaching another sticky header/scroll observer to the long showcase. Keep gallery captions visible for touch/keyboard/no-JS. Cocoa footer is a local inverse surface with Cream links and Sunshine focus. Historical marketing/booking placeholders remain reference-only. Scoped navigation uses actual guide anchors. The supplied Claude URL was inaccessible through web retrieval; the preserved README/SiteChrome/HomePage source was inspected directly. Context7 resolved Next and queried indexed16.2.9; installed16.4.3 server/client documentation was read for exact local conventions.

Validation: `.local-evidence/design-system-website/check.log` records full pnpm check: lint, types, typed lint, local rules/token checks,45 tests and production build pass. `browser.log` records320/375/768/1440 bounds, native anchor destinations, single h1/main, no forms, visible captions,40px-or-larger links, keyboard inverse focus/hover and no-JS emulated-touch navigation. Zero page errors. Complete mobile/desktop screenshots were captured; mobile composition and photo crops were visually inspected. `git diff --check` passed. Fresh independent source review reported no material findings; reviewer did not rerun browser/build. No physical-device, other-browser-engine or publication qualification is claimed.

### 2026-10-23 — Button reference adaptation

Adapted the supplied Button.jsx into the existing Button/ActionLink instead of copying its useEffect stylesheet injection or href-to-button element switching. Added token-based hover1.01/press0.99 scales, decorative arrow nudge and glow warm/none. None removes the halo while retaining depth. Forced visual states were omitted; real native states remain the source. Neon stays laboratory-only. Disabled/loading behavior, selection, focus and small/full-width variants remain intact.

Removed duplicate legacy action hover/shadow declarations from brand.css after the browser caught their higher specificity defeating glow none. Action styling now owns that behavior. Laboratory motion simulation also stops the arrow. No dependencies or new product flow.

Evidence: `.local-evidence/design-system-button/check.log` full required gates,47 tests and production build pass; browser.cjs/log exercises fine-pointer hover/arrow/press, halo omission, unavailable controls, focus, OS/lab reduction, four widths and emulated touch. Touch release waits for its transition to settle rather than assuming a fixed snapshot delay. Fresh independent source review found no material issues before the additional legacy-cascade correction. No physical-device or cross-engine qualification is claimed.

### 2026-10-23 — Card reference adaptation

Read the supplied Card.jsx attachment and extended the existing semantic Card with optional interactive elevation/media zoom. Preserved title/eyebrow/body/footer/media slots, tones, elevation levels and configurable heading semantics. The default stays static. Existing SpatialCard supplies tilt/light; CSS excludes its direct child Card from additional lift/shadow. No effect-injected CSS, forced state API, second pointer controller, extra card tabstop or fake service facts were introduced.

Validation: `.local-evidence/design-system-card/check.log` records full required gates and48 passing tests. `browser.log` covers real hover/focus,4px lift,1.04 media scale, visible native CTA focus, no extra tabstop, OS/local reduced motion, SpatialCard ownership even when interactive is applied, four widths320/375/768/1440, no-JS emulated-touch navigation and zero page errors. Focus and mobile Card screenshots were captured and visually inspected; the supplied dog's eyes/snout and focus outline remain visible under zoom. Fresh independent source review found no material findings. `git diff --check` passed. No physical-device or other-browser-engine qualification is claimed.

### 2026-10-23 — Playful Premium / Soft Glass / Subtle Glow refinement

Audit reused the existing palette, levels0–3, glass profiles/fallback, motion roles, native actions, Card/SpatialCard, photo/brand assets and solid footer. Preserved canonical fill colors instead of replacing them with the illustrative CSS swatches: light-only warm glow now matches255/206/45 at22%,18px; shared ease now(.22,1,.36,1). Level2 softened while keeping canonical Cocoa tint. Decorative translucent borders, hero1/CTA2 and optional sticky navigation finish the depth hierarchy. Floating no longer loops: enabled hover lifts; focus/coarse/reduction stay still. Functional loading spinner remains the only autonomous loop.

Added TextField (24 library primitives total): label/id and helper/error/external description associations, error, required/readonly, disabled/loading/busy states. Specimens have no form, submission, storage or business service claims. BrandPhoto adds visible lower-edge captions with optional glass enhancement on hover/focus; opaque resting/touch/unsupported fallback remains. A bounded labelled keyboard-scrollable website preview demonstrates sticky level3 navigation. A small established/refined toggle changes only scoped tokens and preserves typed example text; server-rendered content stays server-owned.

Corrections during validation: independent review caught invalid-field hover overriding the error border; ordinary hover now excludes invalid controls. Focused floating content returns to rest immediately. Nested-anchor checks caught outer-page scrolling hiding the sticky header when combining container scroll-padding and destination margin; destination/focus-target margin alone preserves both levels of scrolling, with responsive160/288px clearance.

Evidence: `.local-evidence/design-system-premium/check.log` full pnpm check,59 passing tests including TextField and essential text/border/focus contrast; field-red/green logs show the new module test failing before implementation then passing (stored at `.local-evidence/field-red.log` and `field-green.log`). `browser.log` covers scoped toggle and preserved input, real field states/error hover, caption hover/focus/touch/no-JS, actual16px blur, floating without loops and OS/local reduction, four widths320/375/768/1440, native anchors and focused footer links clear of sticky navigation, no forms or page errors. Caption contrast bounded over black/white backing is7.88:1–13.44:1. Explicit opaque fallback and existing pointer/action/card semantics pass in `regression/spatial.log`, `button.log` and `card.log`; the copied spatial check now waits for the150ms color transition before asserting its terminal color. These are current local Chromium results, not external platform execution.

Screenshots under the same evidence folder include comparison, input states and sticky navigation at four widths; mobile sticky composition and full input row were visually inspected. Fresh independent source review's single state finding was corrected and covered by browser assertions. `git diff --check` passed. No dependencies, publication, home restructuring or original asset/reference changes. Physical devices, assistive technologies and other browser engines remain untested; actual unsupported-engine blur rendering is not claimed beyond the explicit fallback/browser and CSS support branches.

### 2026-10-23 — Phase2 spatial and expressive motion

Delivered `/design-system/motion` and linked it from the guide. Reused the existing palette, PNG mascot, photographs, SpatialCard/Card, tactile actions and glass navigation. AnimatedMascot and ScrollScene bring the library to26 primitives. No dependency, 3D asset, brand redesign, product home change, service facts or external execution was introduced.

The dedicated showcase covers rigid-frame mascot tracking/finite greeting, three illustrative service-card patterns, tactile/glow actions, floating sticky glass navigation,550ms observer entrances with80ms stagger, decorative−12/+20px parallax, opposite-cursor warm shadows, tokens and static reduced-motion alternatives. Controls start paused; sticky Pause motion remains reachable while scrolling. OS reduction wins over local toggles. Coarse/touch pointers have no tracking/parallax. No ambient loop, scroll hijacking, pinned timeline, permanent will-change or articulated mascot is added. Spring-inspired CSS easing is explicitly not a physics solver.

Controller evidence: `.local-evidence/scroll-red.log` failed before the new module existed; `scroll-green.log` passed8 lifecycle cases. `scroll-late-red.log` exposed a queued observer callback after cleanup; a disposed guard fixes it in `scroll-late-green.log`. One additional pointer regression prevents resumed tracking while a descendant retains keyboard focus. Tests cover missing observer, reveal once, RAF coalescing/clamp, offscreen/coarse/reduced/focus/hidden reset, collapsed geometry and cleanup. Root geometry stays untransformed; CSS alone applies decorative movement.

Final `.local-evidence/design-system-phase2/check.log`: full pnpm check passes,68 tests in8 files, production route statically generated. `browser.log`: static initial state; actual mouse tracking/dynamic shadow/reset; finite600ms greeting;550ms entrances/0–80–160ms delays; focused CTAs stay still; bounded parallax with one measured root read for20 same-frame scroll events; OS/local reduction and sticky pause; native anchors plus Tab/Shift+Tab focus clear the sticky header at320/375/768/1440; emulated touch disables cursor/parallax; no-JS content remains visible and anchors work; zero page errors. The observer test and real browser RAF measurement are local evidence, not production profiling.

Existing guide regressions also passed: `regression/spatial.log` and `regression/premium.log` under the same evidence directory. Independent source review reported no material finding, and requested explicit sticky focus testing; responsive margins were extended to actual focus targets and exercised at all four widths. `git diff --check` passes. Screenshots include mobile cards, static/reduced mascot and active mascot; visual inspection confirmed recognizable art, readable copy and native focus visibility.

`bundle.json` records the final matching route composition chunk:23478 bytes,8752 gzip bytes. This excludes shared runtime and images; it is not the whole route transfer budget. No Motion/GSAP/Three/R3F dependency was needed. Physical devices, screen readers, other browser engines, hosted Core Web Vitals and new3D geometry remain untested/not selected. All effects remain an opt-in local showcase rather than a deployed marketing MVP.

### 2026-10-23 — Phase3 Stage A review foundation

User source: attachment `51d8b60c-4063-45ce-9edf-d2ee6690ef3a/Pasted text.txt`. Its workflow says “Before implementing Stage B, present the Stage A showcase for review” and prohibits production layout/branding changes until approval. Stage A is delivered at `/design-system/phase-3`; Stage B and integration-specific Stage C remain pending review approval. Earlier blanket implementation permission was not treated as approval of a foundation that this newer brief specifically asks to review. Existing identity-only home/layout/branding remain untouched.

Completed the primitive vocabulary without a second library: TactileButton composes Button tactile; ScrollReveal/StaggerContainer compose the existing ScrollScene; AmbientMotion adds observed CSS playback; optional AnimatedMascot ambient preserves default behavior. Library total30 primitives. New Stage A controls default4°/6px/100%/×1, while old4px defaults remain outside its scope. Press3px, centered1000px perspective,12/24/40px planes,150/200/250/550ms roles and bounded7/8s ambient are token-owned. A separate explicit ambient switch starts off; sticky Pause stops both modes. Original PNG/photo/font assets are reused unchanged. No new dependency or model.

Ambient lifecycle tests failed before the new module (`.local-evidence/ambient-red.log`) and passed afterward (`ambient-green.log`); final tests also cover initial hover/focus, media/document visibility, offscreen state, cleanup and late callbacks. Native observer/media/pointer/focus/visibility flags drive CSS; no RAF/scroll subscription or per-frame React render is added. Floor-shadow opacity supplies a breathing cue without deforming the image. The label/reading areas/targets remain stable. Hover, greeting, pause, reduction and offscreen state stop the optional movement.

Final `.local-evidence/design-system-phase3/check.log`: full pnpm check,80 tests in9 files, static production build including the new route. `browser.log`:6px/3px scoped defaults with old root4px preserved, opt-in7/8s playback and5–8s calibrated bounds, undeformed image element, hover/greeting/offscreen/OS/local pause, reset, native sticky Tab/Shift+Tab focus at320/375/768/1440, coarse/touch suppression, visible no-JS wrappers/anchors and zero page errors. `regression/phase2.log` passes the previous full motion/depth browser checks. Independent source review found no material issues; requested duration/offscreen/focus checks passed in the coordinator's browser validation. `git diff --check` passes.

`coarse-press.log` verifies a native3px pressed transform and stationary card under coarse-pointer emulation. Direct CDP held-touch did not expose CSS :active (`touch-hold-diagnostic.log`); native taps/coarse suppression and pressed CSS were therefore verified separately, not presented as a physical held-touch result. Physical mobile devices remain untested. The ambient desktop screenshot was visually inspected: recognizable original artwork, a small floor shadow and separate accent, no text movement or head articulation.

Local performance probe (`performance.json`): Chromium375×900, CPU4×, localhost network, one synthetic run; LCP256ms, CLS0, maximum observed event timing104ms,3 long tasks. These are local samples; the event maximum is not INP and this does not qualify hosted/field Core Web Vitals. No physical-device, screen-reader, cross-engine or production release claim. Stage B is not executed; presenting the completed Stage A is the next user review step required by the source brief.


## 2026-10-24 — Premium landing and contact-form preview

Authority: the user requested a complete premium local landing using both supplied ZIPs, then explicitly selected “form de contato” instead of the provisional Instagram destination. The recipient email and delivery service were requested and remain unanswered at this checkpoint. Archive Markdown/HTML was read as reference material; its suggested backend, CRM, analytics and demo success states were not executed or imported.

- `Bruno Dog Walker Landing Page.zip`: SHA-256 `97d764f3e0eb3bf2212a095ef1dac4b3eba95ece8f8e3f22f7fbbeee000f50cd`.
- `Bruno Dog Walker Design System.zip`: SHA-256 `5a129b16f20ac4eef53a2b65e11a30cb9ff5f961adebb83866297841c90e1b00`.

Before edits, the dirty working tree was recorded and source/docs/assets plus package/lockfile were backed up to `/tmp/bruno-landing-baseline-20261024-012531.tar.gz`. Existing changes were preserved. Package manifest, lockfile, global CSS and layout remain byte-identical to that pre-task baseline. No dependency installation, commit, push, publication or external service provisioning occurred.

Implementation: server-rendered editorial home, existing SiteHeader/actions/mascot, local images/fonts, pointer depth, independently observed hero/content scroll scenes, native FAQ and CSS reading progress. A visible pause control and OS reduced-motion handling stop the effects. The map-like artwork is decorative, not a coverage assertion. Phase 3 Stage B remains pending; no ambient loops or Phase 3 default migration were applied.

The form validates name, email, dog name, cross streets and optional message with bounded Zod inputs. It focuses the first invalid field, retains the current draft and explicitly reports nothing sent. The SSR fieldset is disabled until hydration, preventing a no-JS native GET submission of personal information. No request endpoint, email provider, browser storage, database or form-payload logging exists. Live delivery cannot be claimed.

Validation on final runtime source: `pnpm check` passed all regular/typed lint, TypeScript, rule self-checks, 13 CSS token checks, 88 tests and the optimized static build. `git diff --check` passed. The production build was served on loopback port3001 for Chromium checks; development preview remains on loopback port3000. Official installed Next documentation and Context7 informed image and server/client component choices. Hero uses eager/high-priority loading; other photography remains lazy.

Browser result: `.local-evidence/landing-2026-10-24/browser-result.json` and repeatable `browser-check.js`. Widths320/390/768/1440 passed overflow, clipped-control and anchor checks. Skip-link focus, form required/email errors and first-error focus, retained draft, explicit unsent status, no browser storage, FAQ, pointer movement, pause cleanup, OS reduction, no-JS protection and emulated touch passed. Zero console/page errors and zero external application requests were observed in that production run. All visible images were scrolled into view and decoded before the final screenshots. Screenshots: `desktop.png` and `mobile.png` in the same evidence directory. The temporary production server was stopped after verification; the development preview remains available.

Limitations: no real email delivery, production deployment, independent reviewer, physical iOS/Android or screen-reader testing. Supplied photography remains provisional; no identities, testimonials, insurance, prices, availability, biography or exact coverage were invented. The local preview is ready for visual review; the contact-delivery task awaits the user's recipient/service information.


### Recipient follow-up — 2026-10-24

The user confirmed `hello@brunodogwalker.com` as the contact-form recipient. The delivery provider/SMTP service remains unspecified and was requested separately. Product and agent context now record the recipient. This documentation-only update does not connect delivery, verify mailbox ownership, send a test message or change the honest unsent form preview.


## 2026-10-24 — Deferred delivery and mobile-first UX

Authority: the user requested recording the email setup for the future and continuing UX, then selected “Experiência completa, começando pelo celular.” Recipient remains `hello@brunodogwalker.com`; there is no existing sender service. Resend is a recommendation, not a configured provider. `docs/contact-delivery.md` records the resumable scope. No account, credential, DNS, email, deployment or dependency action was performed.

Pre-edit backup: `/tmp/bruno-ux-baseline-20261024-152754.tar.gz`; existing dirty edits preserved. The review used the installed `web-design-guidelines` skill and its [current source](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md), fetched on 2026-10-24.

Observed UX defects: mobile navigation exposed only the brand/contact link; the fixed pause control overlaid the page; checked form feedback persisted after changing data; focus scrolling could leave input content under the sticky header. These were verified in the local browser before changes.

Changes: native mobile/tablet disclosure with section/contact/motion anchors, same-tab close, Escape/focus return and blur close; programmatically focusable section targets and root sticky-header scroll clearance; motion control moved into hero utilities with navigation/footer access; edited fields clear stale errors and checked status; live error count; optional message disclosure retains its draft; email keyboard/capitalization/spellcheck settings. The core brand, established motion controllers and honest unsent preview are preserved.

Validation: final `pnpm check` passed lint, strict types, typed lint, rule self-checks,13 stylesheet token checks,89 tests and static production build. `git diff --check` passed. `.local-evidence/ux-mobile-2026-10-24/browser-result.json` reports PASS at320/390/768/800/1024/1440, with zero clipped visible controls/missing anchors/console errors/external application requests. The accompanying browser script covers the earlier landing journey plus menu keyboard/focus/mobile navigation, sticky-header field clearance, no floating overlay, stale feedback reset, optional note retention and no-JS mobile navigation. Screenshots are preserved in that directory.

The first browser-check failures were test-harness assumptions: closed native details descendants have layout boxes despite being invisible, and an empty status region is hidden. The checks now use actual visibility and query the cleared region in the DOM; neither failure required suppressing an application defect.

Limits: Chromium and emulated touch/viewport checks, not physical iOS/Android or screen-reader validation. Real sending remains explicitly deferred. No new claim of conversion lift, field performance, final photo approval or external delivery is made.

## 2026-10-24 — Existing-project planning and service confirmation

Authority: after three specialist brainstorming rounds, the user approved creating documents and a phased plan only, with no implementation. The same message confirmed a dog-first business offering dog walking, daycare, boarding and cat visits; remaining commercial details are explicitly pending.

Research source: [prompt 12](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/12-existing-project-setup.md), the toolkit catalog and document manifest at the same revision. A read-only remote-ref check during research matched the already recorded toolkit revision. Context7 resolve/query succeeded for server/client boundaries; returned canary guidance was not treated as proof about the installed release. No new integration was installed or qualified.

The three rounds covered diagnosis, cross-review of alternatives and critical convergence. AIOX product/architecture and UX guidance, Impeccable, UI/UX Pro Max, Emil, Brandkit, Brand and Taste were applied within the existing product/visual constraints. Impeccable's launcher was not executed because it could download files; context was read directly. The finishing-branch skill was considered only as a future integration procedure. No provider, model, authentication or permission setting changed.

Documents: PRODUCT now contains the PRD, service facts, main flow and owned pending inputs; architecture contains the TRD and current/proposed contact contracts; design documents distinguish current UI from future dog/cat refinements; contact-delivery retains its deferred status. The [phased plan](superpowers/plans/2026-10-24-existing-project-mvp.md) includes file responsibilities, dependencies, testable tasks, all 23 toolkit guide classifications and explicit execution gates. The proposed `petName` field has not replaced `dog` in application code.

Documentation verification: `git diff --check` passed; local Markdown file targets were checked. A SHA-256 inventory of 526 tracked/nonignored untracked files was captured before writing and compared afterward: changes were limited to the seven intended Markdown documents, with no deletions. This inventory does not claim coverage of ignored caches or external directories. An independent read-only reviewer found a browser harness path extension mismatch; it was corrected to `browser-check.js` and the correction was confirmed. Historical scripts/results are preserved, with missing local evidence handled explicitly in the plan.

No application tests, builds, server, browser run, installations, delivery, commits, pushes or publication were performed for this documentation task. Older test counts and screenshots remain historical evidence. Implementation remains stopped pending explicit authorization; commercial details and visual acceptance remain separate decisions.

## 2026-10-24 — GitHub synchronization preparation

Authority: the user explicitly requested sending the existing project to `brunosilvausa/bruno-dog-walker`. GitHub metadata and remote refs confirmed an empty public repository with push access. Preserve the bootstrap commit and current project, including the unimplemented planning documents. This authorizes repository synchronization, not deployment, email delivery or execution of the future MVP plan.

Preparation: backed up the 527 selected files and existing Git history outside the repository. Reviewed the file inventory, sizes and ignored paths; a local credential-pattern scan found no matches in selected files, the bundled skill archive or reachable commit history. This is a scoped pattern scan, not an exhaustive security audit. Dependencies, environment files other than `.env.example`, build output and private browser evidence remain excluded. Original OFL license whitespace is preserved.

Validation: `pnpm check` passed all required gates, 89 tests and the production build. Production/development dependency audits reported zero vulnerabilities. CodeRabbit reviewed the 17 previously tracked changes, 39 application files and 19 design-system components; the all-files request exceeded its 150-file limit. Historical reference files were not reviewed by CodeRabbit. Its mobile-menu finding was reproduced with a null focus target and fixed: the menu closes on blur only when the next target is known to be outside it. The complete check passed again after that fix.

The two other automated findings were checked against the implementation: scroll entrances deliberately run once per enabled session, with visible default content and a regression test for that contract; both current mascot callers remount on pause, resetting greeting state. No additional motion changes were made. The future Stage B gate remains intact.

The production Chromium journey passed at 320/390/768/800/1024/1440, including the new null-focus/link-navigation and known-outside-focus cases, keyboard, no-JS, touch, motion and contact-preview checks. Script, result and screenshots are local-only under `.local-evidence/github-2026-10-24/`; zero console errors or external application requests were observed. Physical Safari/iOS, screen readers, deployed behavior and real email receipt remain unverified.

## 2026-10-24 — Phased quality automation

Authority: the user requested implementing the specialist-reviewed quality plan in phases, checking each phase and the integrated result. This is not authorization for the separate content/service MVP, Stage B, email delivery, deployment, paid services or automatic publication.

E0 baseline: clean `main` at `8c2029434043431e23e5e103c70909aa237e2b79`, Node24.22.1/pnpm12.15.0. Fresh `pnpm check` passed all six gates and89 tests. Full baseline output remains private in `.local-evidence/quality-2026-10-24/e0-baseline.log`. The current/future traceability matrix is in docs/quality.md. Source inspection confirmed missing exact maximum/email254/255 cases and MCP-specific browser harness coupling; these are verification gaps, not proven application bugs.

Sources: installed Next16.4.3 testing/Playwright guide and successful Context7 Playwright resolve/query for production webServer isolation/projects. Registry metadata reports Playwright Test1.64.1 (Node>=20) and axe Playwright4.14.0 (Node>=22.12), compatible with this Node24 runtime. No dependency or integration is claimed installed from metadata alone.

E1 implementation: exact pinned development dependencies were installed with the lockfile; Chromium, Firefox and WebKit runtimes were downloaded locally. Application validation behavior remained unchanged. Contract coverage now includes exact maxima and email254/255, with94 Vitest tests. Node tooling regressions cover the owned Markdown subset, bounded summary/critical-skip gate and impact selector (17 tests). The nine Markdown cases prove missing-target/fragment failures and real CLI exit behavior. Private scripts/logs are under `.local-evidence/quality-2026-10-24/`.

E1 review corrected three test gaps: require the actual field-error ID rather than any helper text; retain/recheck the privacy guard after reload; observe console/page errors on the actual no-JS/touch pages. Refusing an occupied3100 port preserved the unrelated local probe; an intentionally failed browser assertion returned nonzero and left no server on3100. A temporary probe initially used import.meta in a CommonJS configuration; its failure was retained and the probe corrected to __dirname. A fixture argument named `use` also triggered the React-hook rule; renaming the non-React callback fixed it without disabling lint.

E2 configuration: a single read-only Ubuntu24.04 workflow is prepared with Node24.22.1/pnpm12.15.0, frozen install, existing check/build, docs and impact-selected browser tests. Official release refs/action.yml were inspected and pinned to actual commit objects; the pnpm annotated tag was dereferenced to its commit. actionlint1.7.12 passed; the binary's published SHA-256 was checked in a temporary directory. Shellcheck was not selected. A real Playwright critical-skip probe returned nonzero with failed summary, proving the reporter affects the gate, not just the JSON. Summaries identify bounded scope/projects and dirty local trees; raw test data is excluded. GitHub Actions API says the repository has Actions enabled, but no workflow was pushed or remotely executed here; quota/billing/Ubuntu execution remain unverified.

E3 corrections: the first compatibility run had86/90 passing cases. Firefox restored input values natively after reload, so the test now checks reset validation state and application storage rather than promising control over browser restoration. WebKit/macOS needed native Option+Tab, confirmed in current official Playwright focus tests via Context7; focus geometry now waits for native scrolling to settle rather than sampling immediately. The corrected matrix passed90/90 before the next added regression.

Extended testing reproduced a clipped mobile menu at200% root text size. The home header now wraps when needed; the existing10-case extended suite passed after the one-keyword CSS correction. Normal-size/mobile composition was visually inspected in local screenshots. A first clean temporary checkout passed install/check/docs but failed one of30 browser cases: axe sampled low contrast during a finite opacity entrance. A controlled partial-animation probe reproduced low contrast, and the new active-reveal regression failed with opacity0.541506. Home reveal wrappers now keep opacity1 while retaining their finite transforms; the regression and four stable axe states passed. Audits wait for fonts/paint/finite entrances without excluding rules or nodes. The original failed runs remain in private evidence; final integrated/cold-checkout results are recorded separately below.

The privacy negative control now includes a beforeunload beacon, with all four deliberate attempts detected and blocked in all six browser projects. An exploratory pagehide probe observed no pagehide callback on that reload and is not counted as a passing lifecycle check; no speculative API interception is retained. The real preview guard remains active across reload. Baseline performance records three fresh-context local production loads at390×844 without CPU/network throttling: median observed LCP96ms, CLS0 and resource transfer706657bytes. These are localhost observations, not field CWV, a production budget or evidence of conversion lift.

E4 native checks: three fresh native agents used isolated disposable fixtures from toolkit790a895 outside the application, retaining the session's model/authentication. Boundary-fix and stale-handoff copies each finished7/7; the read-only review preserved its intentionally vulnerable fixture, reported the two defects and left the evaluator's expected5/7 result unchanged. Coordinator reruns confirmed outcomes, evaluator hash14220a750afbcf228fc397d5d3d32f10631c0f2e0a533c0ba8fa79b553f62e1c, preserved notes/instructions and report mode0600. Changed files were limited to the two authorized access modules and stale handoff. This is native smoke evidence, not restart/stop-resume/contention/network-isolation proof or a reliability rate.

Graphify ran with `GRAPHIFY_NO_AUTO_REFRESH=1`, `--code-only`, `--no-cluster` and two workers over src only, writing private output:42 code files,178 nodes,457 edges. CSS and six symbol-free files are explicitly outside its symbol coverage. The extracted graph connects contactSchema to ContactForm and its unit tests; no semantic inference/API/backend selection was used. Actual Context7 requests and local skill reads succeeded; RTK handled supported commands without a second manual wrapper. None of these checks qualifies next-dev-loop or proves native client restart loading. Full toolkit bootstrap validation is N/A for this increment because its revision/templates were not changed; no fixture database, official Harness2 lab, paid benchmark or optimization loop was added.

Rulings: execute the user's approved phases without another plan-approval loop; preserve the no-hooks/no-mandatory-worktree project rules and leave Git publication explicit. Use one CI job and run its baseline even for documentation-only pushes to avoid extra change-based gate omission logic; the tested selector only adds coverage. No arbitrary performance budget or coverage percentage was introduced. Physical Safari/iPhone, screen readers, final brand/asset acceptance, real delivery and remote CI remain NOT RUN.

Final local gate: `pnpm check` passed lint, strict types, typed async checks, existing rule/token checks,94 Vitest tests,17 Node tooling tests and the production build. `check:docs` passed. The same build passed96 critical journeys (16×6 browser/viewport projects,29.4s) and10 extended layout/reflow cases (1.8s), with no retries. Production/development advisory audits each reported zero vulnerabilities. A fresh independent read-only reviewer found no substantiated Critical/Important issue; the documentary case count was updated to16. Subsequent beforeunload-control strengthening was verified in all six projects; no production API interception was introduced.

Cold reproducibility: a second fresh temporary local clone overlaid with exactly the nonignored candidate files, without `.env.local`, credentials or node_modules, passed frozen install → check → docs →32 Chromium journeys (7.4s). SHA-256 inventory is private alongside the result/log; this proves the candidate working tree on macOS arm64, not a remote commit or Ubuntu runner. Private source hashes distinguish uncommitted source from base8c20294; public summaries also flag a dirty working tree. Normal desktop/mobile and enlarged-text screenshots were inspected. All owned test servers stopped, including after deliberate failures; no listener remained on3100.

Local implementation/review phases are complete. The workflow remains an uncommitted local configuration: commit/push authorization, account policy/quota review and a successful observed GitHub run are the remaining activation steps. No remote workflow, deployment, email, provider configuration or publication was performed by this quality increment.

Final scope/cleanup:544 candidate tracked/nonignored files were checked with scoped credential patterns, with no matches; this is not an exhaustive security audit. Only documentation changed after the cold source inventory. The two owned temporary clones, harness directory and actionlint installation were removed after preserving useful private evidence; the fixture archive retains mode0600. No test server remained on3100. Details and preserved first failures are in `.local-evidence/quality-2026-10-24/`.

## 2026-10-24 — GitHub quality activation

Authority: after the complete local implementation and reviewed evidence, the user explicitly approved commit and push to activate the checks. Commit `f45b7d49adc3b690a41746f3654709813911e82e` preserves the existing history and adds the31 reviewed quality files/changes. Repository visibility remains public; Actions was already enabled. No remote settings, secrets, branch protection, deployment or email service were configured.

The [first Quality run40137861939](https://github.com/brunosilvausa/bruno-dog-walker/actions/runs/40137861939) completed successfully on Ubuntu24.04, from22:16:46 to22:20:12 UTC. Logs confirm94 Vitest tests,17 Node tooling cases, lint/types/rules/build and owned documentation checks, then96 critical browser journeys across six projects and10 extended layout cases. Impact selection correctly chose full compatibility for the implementation changes. No retries were enabled. The failure-only artifact step was skipped and the run had zero uploaded artifacts; actual failure-upload behavior remains a separate unexercised remote path.

The workflow is now active for pushes/PRs and manual runs; the earlier local-only remote-NOT-RUN entries above are historical checkpoints. Only standard hosted Ubuntu is selected. [GitHub's runner policy](https://docs.github.com/en/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job) states that standard hosted runner use is free for public repositories; no larger/paid runner or service was selected. This is a policy/applicability check, not an audit of the account's unrelated billing.

Raw run logs and activation metadata stay in ignored local evidence. The receipt update changes only Markdown and will exercise the lighter critical selection; implementation source remains the cold-tested and now Ubuntu-verified code. Physical iPhone/Safari, screen readers, final asset approval, field performance and real contact delivery remain unverified.
# 2026-10-25 — Local coverage-selection repair

Authority: phase 1 and local phase 2 only of `docs/superpowers/plans/2026-10-25-main-merge-protection.md`. Baseline HEAD was `1916ea24d6d1b0a9cfc85b50aa17164b6815c6ef`; the existing untracked plan was preserved without edits. No commits, pushes, PRs, merges, ruleset changes or AGENTS.md changes were authorized or performed.

The actual workflow selection block was exercised by twelve isolated Bash controls. Before the repair, four valid-path controls passed and eight negative controls failed as intended: invalid automatic/manual selections and nonzero selector exits were incorrectly accepted. After separate command assignment and closed-set validation, all twelve passed, including a nonzero selector that prints valid-looking stdout. Invalid selection publishes no suite. No dependencies or lockfile changes were needed.

Local verification passed: `pnpm check` (94 Vitest application tests, 29 Node tooling tests, plus existing rule checks, types, lint and production build), `pnpm check:docs`, 96 critical journeys across Chromium/Firefox/WebKit desktop/mobile in 34.7s, and ten extended Chromium layouts in 3.2s. Browser suites reused the same production build sequentially. A fresh read-only reviewer found no critical, important or minor issues and independently reran the twelve shell controls successfully.

Private first-failure and passing logs are preserved in `.local-evidence/merge-protection-2026-10-25/`. This is local evidence only: the repaired workflow has not run on GitHub, branch enforcement has not been activated, and no remote rejection/recovery probe has been performed. Existing delivery, Stage B, physical-device and screen-reader limitations remain unchanged.

## 2026-10-25 — Main policy preparation

Explicit authorization covers phase3 documents, ruleset creation/API verification and publication through a documentation PR, without merge. Main at `202c4663f6793105efd4294bcd2a783b28a3ca85` was revalidated with successful run40166540504 (94 application,29 tooling,96 critical,10 extended). Baseline repository rulesets were empty, classic protection returned the expected Branch not protected404, and the authenticated owner had admin permissions. The observed `quality` check belongs to GitHub Actions integration15368.

Policy documents and the payload were prepared before activation. The phase4 failure/recovery probe is not authorized here and remains NOT RUN. No policy bypass, application change, deployment or CodeRabbit configuration change is included. Activation verification is recorded below only after a successful create/read-back comparison.

Ruleset25811101 was created active and independently fetched back: [main-quality](https://github.com/brunosilvausa/bruno-dog-walker/rules/25811101). Name/target/enforcement, exact main condition, empty bypass/exclusions, four rule types and every requested parameter matched the prepared payload. The effective main-rules API also returned all four expected types. Before/create/after/effective receipts remain private in `.local-evidence/merge-protection-2026-10-25/phase3-*.json`. This proves configuration, not the pending phase4 rejection/recovery behavior.
