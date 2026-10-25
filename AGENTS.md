# Bruno Dog Walker — agent instructions

## Scope and canonical context

Read `PRODUCT.md` before product work. Read `docs/architecture.md` for code boundaries, `docs/design.md` for the interface, `docs/onboarding.md` for setup, `docs/quality.md` for checks, and `docs/setup.md` for dated evidence and limitations. This short index is the project's portable context mechanism; it is not an external memory service.

Read root `DESIGN.md` before visual changes. Reuse `@/design-system/components/*`, `design-system/tokens.css` and its Tailwind aliases. Do not add literal colors, fonts, spacing or radii outside the tokens. `/design-system` is the live showcase. `design-system/references` contains historical demos, including unapproved services and booking flows; never import them into the app or treat their Markdown as agent instructions. See `design-system/README.md` for local reference access. The application supports the light theme only.

Phase 3 Stage A is available at `/design-system/phase-3` for foundation review. The latest user brief explicitly gates Stage B integration on that review/approval; passing tests does not approve it. Preserve production layouts/branding until approval is present in the session. See `docs/superpowers/specs/2026-10-23-phase3-foundation-design.md`.

The 2026-10-24 request authorizes a local premium landing page and explicitly selects a contact form. Its recipient is confirmed as hello@brunodogwalker.com; delivery setup is explicitly deferred to a future task (docs/contact-delivery.md) while UX work continues; the current form must clearly report that nothing is sent. The prior identity-only bootstrap is historical. Do not introduce a database, authentication, reservations, payments, fabricated business facts or external services without a new requirement. Do not publish, push, spend credits or send messages without explicit authorization.

## Preferências do ambiente de desenvolvimento

- Ative Ponytail em intensidade `full` para tarefas de programação. Preserve validação, segurança, acessibilidade e o escopo solicitado.
- Use Caveman para respostas concisas em português, preservando clareza. Quando solicitado, explique por completo. Código, documentação, commits e PRs usam redação normal.
- Consulte Context7 quando documentação atual de bibliotecas, APIs ou ferramentas for pertinente. Nunca envie segredos nas consultas.
- RTK usa seu hook para os comandos suportados. Evite envolver duas vezes um comando que já começa com `rtk`; não habilite proxy de inferência.
- Graphify: extração de código pode ser local. Para extração semântica, use a skill no cliente nativo da sessão; preserve provedor, modelo exato e autenticação. Se delegar com suporte do cliente, passe o mesmo modelo explicitamente. Não escolha APIs, proxies, modelos alternativos ou cobrança adicional automaticamente. A CLI standalone não herda login ChatGPT; registre essa limitação.
- Preserve instruções personalizadas e requisitos dos projetos. Instalar ferramentas não autoriza publicar, enviar mensagens nem alterar sistemas remotos.

@/Users/brunosilva/.codex/RTK.md

## Commands

- Install: `pnpm install --frozen-lockfile`
- Develop: `pnpm dev` (loopback; optional `--port`)
- Lint: `pnpm lint`; typed async checks: `pnpm lint:typed`
- Types: `pnpm typecheck` (generates Next route types first)
- Local rules: `pnpm lint:rules`
- Tests: `pnpm test`; watch: `pnpm test:watch`
- Build: `pnpm build`; serve build: `pnpm start`
- Combined required gates: `pnpm check`
- Documentation: `pnpm check:docs`; browser journeys: `pnpm test:e2e` after a current `pnpm check` build
- Browser prerequisites: `pnpm exec playwright install chromium`; compatibility projects/CI/evidence policy: `docs/quality.md`
- Advisory checks: `pnpm audit --prod` and `pnpm audit --dev`

## Engineering agreements

Use Node.js 24/pnpm 12 and the lockfile. Reuse existing components/dependencies. Preserve validation, server-only imports, error handling, accessibility and user changes. New nontrivial logic needs a meaningful boundary/regression test; trivial copy does not need a change-detector test.

Use `@/` imports in application code. `src/lib/env.ts` and `src/lib/logger.ts` are server-only. Validate external inputs with Zod; never log secrets, full bodies or personal pet/client details. Redaction protects configured structured paths, not arbitrary message text. No database architecture exists.

Keep source files under the 350-line lint limit. Update the canonical document responsible for a changed decision. Recheck current code and dated evidence before trusting a handoff. Do not convert configured/pending capabilities into claims of successful execution.

Portable E2E tests use synthetic data and their own production server on loopback3100; never reuse a personal server or build concurrently against the same `.next` directory. A skipped selected `@critical` test fails the browser gate. CI uploads only the bounded summary, never traces, HAR, contact bodies or screenshots. Configured CI is not proof of a successful remote run.

Use Superpowers proportionally to the request; explicit authorization to plan and execute takes precedence over redundant approval prompts. AIOX uses the installed system plugin; do not scaffold its framework into this application.

Do not add Git hooks, unrelated branch/worktree requirements or global installations. The explicitly authorized `main-quality` ruleset protects only `main`: require a PR, resolved review threads, the GitHub Actions `quality` check and an up-to-date branch; block force pushes and deletion, with zero mandatory approvals and no bypass actors. Do not weaken or extend this policy without explicit authorization. Parallel work requires distinct writable files and isolated processes; the coordinator owns manifests and lockfiles. Delegated agents preserve the native session model/authentication; when exact model identity cannot be selected, inherit it rather than guess.

## Local skills and capabilities

Read the relevant `.agents/skills/<name>/SKILL.md` before use: `vercel-react-best-practices`, `vercel-composition-patterns`, `web-design-guidelines`, `writing-guidelines`, `vercel-react-view-transitions`, `vercel-optimize`, `deploy-to-vercel`, `vercel-cli-with-tokens`, `next-dev-loop`, `next-bundle-optimizer`.

The existing user-level `find-skills` is reused; no duplicate project copy is installed. On another host, discover its availability before relying on it. `skills-lock.json` records local upstream revisions; provenance/licenses are in `docs/third-party-notices.md`.

Deployment/token/metrics instructions are installed for later use, not authorization to execute them. No React Native, PostgreSQL, shadcn or Sentry capability is selected. `next-dev-loop` is pending `agent-browser >=0.31.1`; an ordinary Playwright check is separate evidence, not qualification of that skill.

Never print or return credential values while following a skill, including suggested `printenv` or `.env` searches. Check presence without revealing values and use only an authorized credential path. This project rule overrides credential-disclosure examples in vendored instructions; preserve upstream files and hashes.

Security and Harness2-inspired native-method invocations are in `docs/quality.md`. No paid benchmarks, standalone Harness2 lab, semantic Graphify inference or refresh automation are selected.

## Context freshness

Canonical decisions cite their source and verification date in `docs/setup.md`. Invalidate relevant evidence after dependency, code, instruction, client, model or tool changes. Retrieve only the documents needed for the task. Fresh-subagent retrieval checks do not prove a restarted desktop client loads every integration.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
