# Setup and evidence

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
