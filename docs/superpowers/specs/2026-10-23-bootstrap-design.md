# Bruno Dog Walker — Bootstrap Design

Date: 2026-10-23
Status: Approved by the user on 2026-10-23; plan and local implementation authorized.
Scope: Local technical foundation using the requested Vibe Coding Toolkit.

## Intent and product context

Bruno Dog Walker is a premium dog walking and pet care company serving the Upper East Side of Manhattan, NYC.
The eventual website should help visitors understand the services, trust Bruno, and contact him to request care.
The user selected direct contact and explicitly excluded a database, online reservations, login, and payments for now.
This bootstrap prepares a maintainable project for that future website. It does not deliver its functional marketing MVP.

## Goals

- Create a runnable local Next.js foundation in the requested directory without overwriting existing work.
- Apply the relevant toolkit core, documentation, local skills, and quality checks with the no-database adaptation.
- Preserve the user's development preferences and existing working integrations.
- Produce evidence of actual local checks and an explicit list of pending capabilities and product work.
- Leave a clear next task: define and build the service presentation, trust content, and real direct-contact journey.

## Non-goals and anti-goals

- No completed marketing site, brand system, booking workflow, enquiry form, authentication, payments, or database.
- No remote repository creation, push, deployment, DNS changes, accounts, analytics, Sentry service, or message sending.
- No paid services, inference proxy, alternative model/provider, or automatic external API billing.
- No fabricated service packages, prices, testimonials, credentials, insurance claims, contact details, or client results.
- No empty architecture layers, speculative component library, global tool upgrades, Git hooks, or branch blockers.
- A passing local build must never be presented as production readiness, a working lead funnel, or remote qualification.

## Approaches considered

| Approach | Benefits | Tradeoffs | Decision |
|---|---|---|---|
| Service website with direct contact | Simple request path, no stored enquiries, little operational overhead | Conversation continues in an existing contact channel | Selected by the user |
| Service website with an enquiry form | Structured requests inside the site | Requires delivery, spam handling, data handling, and failure states | Not selected |
| Booking or customer portal | Could manage scheduling and accounts | Adds persistence, authentication, operational scope, and possibly payments | Explicitly outside this phase |

The selected product approach supports a foundation without persistence. A contact destination is necessary before the later MVP can accept enquiries; it is not necessary to install and validate the local foundation.

## Confirmed decisions and proposed defaults

**Confirmed by the user:** company identity and audience; service discovery, trust, and contact as goals; direct contact as the approach; no database, reservations, login, or payments for now; bootstrap in this directory using the linked toolkit; AIOX specialist participation and brainstorming.

**Agent proposals for approval:** stable Next.js with App Router, strict TypeScript, Tailwind, ESLint, `src/`, `@/*`, and pnpm, following the requested toolkit. English for the minimal scaffold identity because the audience is in NYC; final site language remains revisable. A minimal static landing scaffold is sufficient for local smoke verification.

These technical choices are proposed defaults, not separate choices already confirmed by the user. Exact compatible package versions remain implementation-time decisions based on current evidence.

## Sources, compatibility, and current state

- Toolkit source: `soumatheusgomes/vibe-coding-toolkit`, revision `790a895304e0c08b70a5b215c9d334f1c86b816c`.
- Read prompt 11, bootstrap guide, defaults, tool scope matrix, Vercel skill catalog, templates guide, and documentation manifest from that revision.
- Use that same revision for templates and reusable prompt sources; record later upstream skill revisions separately.
- The destination was reported empty with no Git repository before this design document; no application has been scaffolded or validated.
- A real Context7 lookup on 2026-10-23 returned official create-next-app guidance, with source pointers on a canary branch. It does not verify the stable release or installed compatibility.
- At implementation, consult Context7 and [official create-next-app documentation](https://nextjs.org/docs/app/api-reference/cli/create-next-app), then check registry stable channels, the selected CLI's help, Node support, and peer dependencies.
- Do not select prereleases or bypass peer conflicts with forced installation. Record actual versions and adaptations in the lockfile and setup evidence.

## Foundation and affected files

The scaffold should use Server Components by default and accessible native HTML. Its page contains only the company identity and the confirmed service category/location. It is a bootstrap screen, not approved brand design or a functioning lead funnel.
Do not add a fake or nonfunctional contact button. Do not invent offerings to make the page look complete. Do not introduce forms, API routes, persistent state, analytics, or an external image/font dependency merely for the scaffold.

Install and adapt the toolkit's non-database core: Zod, `server-only`, Pino, `clsx`, `tailwind-merge`, and Vitest. Align Node types with the actual runtime and `@next/env` with Next.js if retained by the environment module. Keep only environment keys used by the foundation, with no secrets or database variables.
Preserve boundary validation, safe error messages, logger redaction, and relevant template tests. No endpoint or business feature is required to demonstrate these helpers.

Omit Drizzle, PostgreSQL/pg, database-only types and ESLint plugins, `src/db`, migration directories, Drizzle configuration, database tests, database environment names, and every `db:*` command. Document this as an intentional product adaptation.

Changes reach the app entry point/layout/styles/metadata, non-database `src/lib` modules and tests, package manifest and one pnpm lockfile, TypeScript/Next/Vitest configuration, ESLint profiles and rule self-checks, ignore files, local skills, and the documents below. Use a temporary scaffold and merge because this design makes the destination nonempty.

Use the lightweight Next.js lint profile without ORM dependencies, retaining the complete required rule directory and its self-check. Add the focused typed async profile, with `no-floating-promises` and `no-misused-promises` as errors, and measure its actual cost. Do not silently omit a required gate.

## Documentation and working agreements

Fill the nine manifest destinations with project facts and actual implementation evidence:

| File | Responsibility |
|---|---|
| `README.md` | Local run command, project entry point, document map |
| `PRODUCT.md` | Confirmed objectives, later MVP scope, exclusions, pending product inputs |
| `AGENTS.md` | Preserved user/scaffold instructions, commands, scope, agent agreements |
| `CLAUDE.md` | One-line bridge importing `AGENTS.md` |
| `docs/architecture.md` | Implemented structure and boundaries; plans labeled separately |
| `docs/design.md` | Minimal scaffold and accessibility criteria; brand design pending |
| `docs/onboarding.md` | Supported local setup and first run without credentials |
| `docs/quality.md` | Check contracts, reusable security and harness procedures, limitations |
| `docs/setup.md` | Sources/revisions, versions, capability decisions, results, pending work |

Preserve Ponytail `full`, concise Portuguese conversation through Caveman, normal technical writing, Context7 without secrets, RTK hook reuse without double wrapping, and native client/model/authentication. AIOX remains a system plugin; do not install its framework into the application.
Use a short index into canonical project documents for context retrieval. Record its loading mechanism, provenance, freshness rules, invalidation triggers, and an observed clean-context retrieval check; do not claim a client restart was tested by a subagent alone.
The design is approved. Local Git initialization and versioning of the approved design, plan, and bootstrap may occur as part of approved implementation; no remote is created.

## Skills and integration decisions

Install the current official web skills from `vercel-labs/agent-skills` and `find-skills` locally, after checking upstream names and existing overlaps. Preserve licenses, version canonical `.agents/skills` content and `skills-lock.json`, and use portable relative links only where needed for the active Codex client.
Availability of deployment instructions does not authorize deployment. Do not install React Native/Expo skills for this website.

| Capability | Proposed treatment |
|---|---|
| Next.js development loop | Select compatible instructions; verify browser/runtime prerequisites; record unavailable prerequisites without global installation |
| Next.js bundle optimizer | Select compatible instructions; verify analyzer support and record actual audit evidence |
| PostgreSQL skill | Not applicable: no persistence |
| GitHub CI repair | Evaluate Codex compatibility; live CI work pending until a repository/workflow and authorized task exist |
| Differential security review | Evaluate and use applicable local review instructions; document the review range and private report location |
| shadcn/ui | Not selected: accessible HTML and Tailwind suffice for the foundation |
| Sentry MCP | Not selected: no chosen service or account scope |
| Harness2 native method | Required measured local adaptation and relevant initial smoke cases; no standalone CLI lab or paid benchmark |

Reuse working Ponytail, Caveman, Superpowers, RTK, Context7, and Graphify integrations. Record installed, discovered, and executed as distinct states. A missing optional capability must not block independent foundation work or be reported as passed.
Keep pinned source references and reusable invocations for toolkit security prompt 13 and harness prompt 15 in `docs/quality.md`. Run relevant disposable native harness cases; only an observed failure justifies a candidate comparison. Preserve permissions and avoid background optimization or refresh automation.

## Acceptance and verification

Implementation is accepted as a local bootstrap only when the following evidence is recorded:

1. The project installs with a compatible stable dependency set and one lockfile; no database dependency, module, script, or environment setting remains.
2. `pnpm lint`, `pnpm typecheck`, `pnpm lint:typed`, `pnpm lint:rules`, `pnpm test`, and `pnpm build` pass without credentials. `pnpm check` runs these gates; `typecheck` generates route types first when supported.
3. The adapted environment and logger boundary tests pass, including invalid input and redaction behavior. The custom lint rule self-check runs. Tests do not claim a database or external service was exercised.
4. Production and development dependency audits are recorded separately, with advisory impact, remediation, or explicit unresolved limitations; no forced incompatible downgrade.
5. A server on a free local port returns the expected page over HTTP. A browser smoke check verifies identity content, basic mobile layout, semantics/keyboard behavior where applicable, and absence of obvious console failures. Stop only setup-owned processes.
6. The nine documents agree with actual files and commands, preserve user instructions, and distinguish implemented, configured without execution, pending, and not applicable.
7. Local skill files/links and CLI discovery are checked; fresh-client discovery is validated only if the host permits it. Record a real Context7 lookup and relevant native harness/retrieval results without inflating their scope.
8. Run local code extraction with `GRAPHIFY_NO_AUTO_REFRESH=1 graphify extract . --code-only --no-cluster`, verify its graph output, and ignore generated output. Record any concrete CLI limitation. No semantic extraction, LLM backend, upload, or refresh automation.
9. Deliver the development command, local verification evidence, known limitations, and the next MVP task. No production, commercial, or conversion claim follows from these checks.

## Inputs reserved for the later website

Before building the functional marketing MVP, confirm the real contact channel and destination, actual services and coverage details, Bruno's biography and verifiable trust evidence, approved photographs/assets, and final site language.
These inputs are deliberately not fabricated and do not block this technical bootstrap. Visual direction and page composition remain a later design discussion with a visual companion offered when useful.

## Approval and next step

This is one bounded bootstrap project. Approval covers the proposed local foundation, documentation, applicable local skills, and validation described here, not the later site or publication.
After approval, invoke `superpowers:writing-plans` and create the implementation plan before scaffolding or installing anything. Preserve and update this design if implementation reveals a material scope change.
