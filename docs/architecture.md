# Code and architecture

## Stack

Next.js 16.4.3 with App Router and Turbopack, React 19.3.0, TypeScript 5.9.3 and Tailwind 4.3.3. Node.js 24 and pnpm 12 are the supported local baseline; exact dependency versions are locked in `pnpm-lock.yaml`.

The official scaffold uses `@tailwindcss/turbopack` in `next.config.ts`. Preserve that version-matched integration rather than importing a PostCSS recipe from an older Next template. Compiler/cache components were explicitly disabled during scaffolding.

## Actual code map

- `src/app/page.tsx`: static company identity, confirmed service category and location.
- `src/app/layout.tsx`: English document language, title and description.
- `src/app/globals.css`: Tailwind import, system-font base and focus outline.
- `src/lib/env-schema.ts`: Zod log-level schema and safe environment parser.
- `src/lib/env.ts`: server-only `getLogLevel()`, defaulting to `info`.
- `src/lib/logger.ts`: server-only Pino singleton and `createLogger(destination?)`, with structured redaction.
- `src/lib/utils.ts`: `cn(...inputs)` combines conditional classes and resolves Tailwind conflicts.
- `src/lib/*.test.ts`: environment and logging boundary tests in Vitest's Node environment.
- `eslint-rules/`, `eslint.config.mjs`, `eslint.typed.config.mjs`, `scripts/verify-quality-rules.mjs`: pinned toolkit rule implementation and local gates.
- `.agents/skills/`, `skills-lock.json`: versioned instructions; not runtime dependencies.

## Boundaries and data

The page is a Server Component with no business client code, external images/fonts, forms, route handlers, server actions or remote data calls. It does not yet consume the reusable server helpers. No contact button exists until its real destination is confirmed.

There is no persistence, ORM, database client, schema, migration or database command. This follows the user's selected direct-contact approach, not a missing setup step.

`LOG_LEVEL` is the only application environment setting. Validation errors include its name without the rejected input. Pino removes configured top-level, nested and HTTP-header secret fields. Redaction cannot sanitize arbitrary free-form messages; callers must avoid logging secrets and unnecessary personal data.

## Decisions and maintenance

Stable registry versions and local CLI/docs were checked on 2026-10-23. ESLint 9.39.5 is retained because three Next plugins reject ESLint 10 in their peer ranges, despite the newer major being available. Revisit when the complete preset supports it; do not force peers.

No `@next/env` dependency is necessary: Next loads environment variables for application execution; no standalone script needs an environment loader. Vitest stubs configuration directly.

No component library, hosted provider, analytics or observability service is chosen. Update this map when real features introduce new boundaries. Verification and pending tools are recorded in [setup](setup.md).
