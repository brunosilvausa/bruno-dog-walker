# Bruno Dog Walker Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Deliver the approved no-database local foundation with documented, observed checks.

**Architecture:** Next.js App Router with a static identity page and small server-only environment/logging helpers. No business backend or external service is required. Existing native integrations remain in place.

**Tech Stack:** Stable Next.js, React, TypeScript, Tailwind, pnpm, Zod, Pino, server-only, clsx, tailwind-merge, Vitest and ESLint.

**Spec:** `docs/superpowers/specs/2026-10-23-bootstrap-design.md`

## Global Constraints

- Execute in the user's selected directory; preserve the design and all existing files.
- No database, forms, login, reservations, payments, fabricated business facts, publication or remote changes.
- Use toolkit revision `790a895304e0c08b70a5b215c9d334f1c86b816c` and record independent skill revisions.
- Preserve native client, model, authentication, permissions, RTK hook and global preferences; no inference proxy or paid API.
- Local skills only; no AIOX framework installation, Git hooks, branch requirements or global tool upgrades.
- User approved preparing the plan and executing it in the same instruction; no additional plan approval is required.

## Review Focus

- A fresh checkout without credentials must install and pass all checks: Task 1 environment tests and Task 3 frozen installation/build.
- Invalid environment values must fail without exposing their input: Task 1 `env.test.ts`.
- Structured secrets must be removed while useful logging context survives: Task 1 `logger.test.ts`.
- A viewport of 375px and keyboard navigation must remain readable and usable: Task 3 browser smoke.
- Instructions, generated skills and source copies must not introduce publication or overwrite permissions: Task 2 manifest inspection and Task 3 fresh-context retrieval/review.

## Task 1: Runnable foundation and boundary checks

**Files:** `src/app/{page,layout}.tsx`, `src/app/globals.css`, `src/lib/{env-schema,env,logger,utils}.ts`, `src/lib/{env,logger}.test.ts`, `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `next.config.ts`, `vitest.config.mts`, `eslint.config.mjs`, `eslint.typed.config.mjs`, `eslint-rules/*`, `scripts/verify-quality-rules.mjs`, `.env.example`, `.gitignore`.

**Interfaces:** `getLogLevel()` returns a validated Pino level defaulting to `info`; `parseEnv<T>(key, value, schema): T` throws only the key on invalid input; `createLogger(destination?: DestinationStream)` returns a Pino logger; `cn(...inputs: ClassValue[])` merges class names. No database exports exist.

- [x] Verify stable registry versions, CLI flags and current official docs against the runtime.
- [x] Generate a temporary scaffold using explicit App Router/TypeScript/Tailwind/ESLint/src/alias/pnpm flags; disable Git, compiler, cache components and feedback. Merge without replacing planning documents.
- [x] Install the non-database core and compatible test/lint dependencies, record Node/package manager engines and preserve one lockfile.
- [x] Adapt the template tests first: default log level, every accepted level, invalid level without input leak; logger removes top-level/nested/header secrets while retaining request ID/user ID.
- [x] Run `pnpm test` before implementing helpers. Expected: missing helper imports fail; record the result.
- [x] Adapt the non-database helpers and Vitest configuration from the pinned templates; rerun `pnpm test`. Expected: all boundary tests pass.
- [x] Replace sample branding/assets/fonts with a minimal semantic page containing only Bruno Dog Walker, premium dog walking/pet care, and Upper East Side, Manhattan. Keep English `lang`, accurate metadata and no contact CTA.
- [x] Copy all toolkit ESLint rule files and self-check; use lightweight baseline plus logger/data boundary guards and focused typed promise checks without ORM dependencies.
- [x] Run `pnpm check` containing lint, route type generation/tsc, typed lint, custom rule self-check, Vitest and build. Expected: all pass with no credentials.

## Task 2: Reusable instructions, skills and documentation

**Files:** `README.md`, `PRODUCT.md`, `AGENTS.md`, `CLAUDE.md`, `docs/{architecture,design,onboarding,quality,setup}.md`, `.agents/skills/**`, `skills-lock.json`, `.graphifyignore`, `.gitignore`.

**Interfaces:** `README.md` and `AGENTS.md` index canonical documents; documented commands match Task 1 package scripts. Skill instructions are versioned inputs, not evidence of remote execution.

- [x] Read the toolkit tool catalog and applicable capability guides; record each selected/not applicable/pending capability.
- [x] Inspect current upstream skill catalogs and installed global overlaps, then install applicable official skills for Codex locally. Verify frontmatter names, lock entries and portable links.
- [x] Create the nine manifest documents from pinned templates using only confirmed facts and implementation evidence; preserve generated Next.js guidance and all supplied preferences. `CLAUDE.md` imports `AGENTS.md` only.
- [x] Reference security prompt 13 and harness prompt 15 by pinned source URL and reusable invocation; specify private reports and native adaptation only.
- [x] Copy/adapt Graphify exclusions; ignore generated graph, caches, local evidence and credentials while preserving `.env.example` and local skills.
- [x] Verify documents, source paths, package scripts and no-database omissions using file inspection. Expected: all nine docs resolve; no fake contact or integration outcome.

## Task 3: Local qualification and handoff

**Files:** update plan checkboxes and `docs/{setup,quality,onboarding}.md`; ignored local evidence only for command logs/screenshots/reviews.

**Interfaces:** Task 1 gates and Task 2 canonical instructions/skill catalog are the validation inputs.

- [x] Verify `pnpm install --frozen-lockfile`; record separate production and development audits. Investigate advisories without forced downgrades.
- [x] Measure typed lint duration/memory and run final applicable checks after changes. Expected: required gates pass; concrete limitations remain explicit.
- [x] Start production server on a free loopback port. Verify HTTP 200, company content, desktop/mobile render, semantics, keyboard behavior where applicable and console/network failures. Stop only the owned server.
- [x] Run `GRAPHIFY_NO_AUTO_REFRESH=1 graphify extract . --code-only --no-cluster`; verify output or record concrete unsupported behavior, without semantic inference.
- [x] Run bounded native harness smoke: fresh-context instruction/command discovery and canonical context retrieval; disposable boundary/stale handoff/security cases where practical. Independently validate the fixture; distinguish observed actions from untested client restarts and unsupported interactions.
- [x] Dispatch one fresh reviewer for the final implementation/spec/plan and scope. Address important findings and run relevant checks; retain documented limitations.
- [x] Initialize local Git if needed, review staged files for generated/private output, and commit the local foundation and approved documents. No remote or publication.
- [x] Deliver `pnpm dev`, successful checks, actual pending items and the next MVP task.

## Execution notes

- Native execution with specialists used for catalog research, bounded harness checks and final review; no extra model/provider routing.
- This is an approved greenfield directory, so no worktree or branch gate is introduced. Progress stays in this plan and `docs/setup.md`.
- Existing template logic is reused; meaningful adapted boundary tests run before helper implementation. No tests are added solely for trivial identity copy.
- Self-review: each design section maps to Tasks 1–3; helper consumers match the defined exports; all five Review Focus conditions have named checks.
- Task 1 complete: 13 boundary tests, all three rule self-checks, lint, route types/TypeScript, typed lint and build passed. The complete gate passed again after skill installation.
- Task 2 complete: nine canonical documents, ten pinned local skills, reused global find-skills, licenses and graph exclusions verified.
- Task 3 verification complete: frozen install/peers, separate zero-advisory audits, HTTP/Chromium mobile+desktop, native fixture 5/7 to 7/7, code-only graph, bundle audit, clean-context retrieval and independent review. Remaining platform/integration limits are recorded in docs/setup.md.
- Ruling: keep the compatible deprecated ESLint 9 because current Next plugin peers reject ESLint 10; future tooling updates need revalidation.
- Ruling: reuse global find-skills instead of duplicating its name locally; another host must discover/install its own supported capability.
- Ruling: full next-dev-loop remains pending the unavailable agent-browser CLI; separate browser smoke does not qualify that workflow.
- Review disposition: no Critical/Important findings; the Minor unsafe token-output example was addressed by a local instruction override without modifying vendored source. No credentials were accessed.
