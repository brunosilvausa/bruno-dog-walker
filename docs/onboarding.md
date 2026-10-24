# Local preparation

## Requirements

Use Node.js 24 and pnpm 12. The setup was verified with Node 24.22.1 and pnpm 12.15.0 on macOS arm64. Reuse installed tools; this project does not install global prerequisites.

## First run

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Visit http://127.0.0.1:3000. If that port is in use, choose an available one with `pnpm dev --port 3001`. The process binds only to 127.0.0.1; use Ctrl+C to stop it.

No environment file, credentials or database is needed. Optional `LOG_LEVEL` accepts trace, debug, info, warn, error, fatal or silent and defaults to info. `.env.example` documents it; keep real local environment files ignored.

```sh
pnpm check
pnpm build
pnpm start
```

`pnpm start` serves an existing production build. Do not run build/analyzer commands against the same `.next` directory while a dev or production process is using it; stop the owned process first.

## Tooling

Read [AGENTS.md](../AGENTS.md); [CLAUDE.md](../CLAUDE.md) imports it. Local skills are committed under `.agents/skills`, with `skills-lock.json`. Existing user-level find-skills and native plugins are reused; their presence on another machine is not guaranteed. No MCP settings or credentials are copied.

## Known limitations

ESLint 9.39.5 emits a deprecation warning. Upgrading to 10 currently produces peer conflicts in the Next preset's import, JSX accessibility and React plugins; the verified combination remains pinned to 9.

`next-dev-loop` requires the missing global `agent-browser >=0.31.1`. Installing that prerequisite is separate machine setup; basic browser validation used the available Playwright connector. This does not block `pnpm dev` or ordinary app checks.

No Git remote, CI service or deployment is configured. Current evidence and capability states are in [setup](setup.md).
