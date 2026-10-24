# Local preparation

## Requirements

Use Node.js 24 and pnpm 12. The setup was verified with Node 24.22.1 and pnpm 12.15.0 on macOS arm64. Reuse installed tools; this project does not install global prerequisites.

## First run

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Visit http://127.0.0.1:3000. If that port is in use, choose an available one with `pnpm dev --port 3001`. The process binds only to 127.0.0.1; use Ctrl+C to stop it.

Visit `/design-system` for live component specimens. To view the archived HTMLs separately, follow [design-system/README.md](../design-system/README.md); their local static server is independent of Next and requires no external font/CDN requests.

No environment file, credentials or database is needed. Optional `LOG_LEVEL` accepts trace, debug, info, warn, error, fatal or silent and defaults to info. `.env.example` documents it; keep real local environment files ignored.

```sh
pnpm check
pnpm build
pnpm start
```

`pnpm start` serves an existing production build. Do not run build/analyzer commands against the same `.next` directory while a dev or production process is using it; stop the owned process first.

## Tooling

### Portable browser checks

After installing locked dependencies, run `pnpm exec playwright install chromium` once per new Playwright browser version. Then run `pnpm check`, `pnpm check:docs` and `pnpm test:e2e` in that order. The browser runner uses the resulting production build and owns loopback3100; an occupied port fails rather than reusing an unknown process. Reports remain under ignored `.local-evidence/e2e/`.

For compatibility, install `chromium firefox webkit` with the same local Playwright CLI and use the commands in [quality](quality.md#portable-browser-and-ci-commands). Required Linux system libraries are host prerequisites, not permission to change a personal machine globally. The disposable Ubuntu CI runner installs its browser dependencies inside the job.

### Agent tooling

Read [AGENTS.md](../AGENTS.md); [CLAUDE.md](../CLAUDE.md) imports it. Local skills are committed under `.agents/skills`, with `skills-lock.json`. Existing user-level find-skills and native plugins are reused; their presence on another machine is not guaranteed. No MCP settings or credentials are copied.

## Known limitations

ESLint 9.39.5 emits a deprecation warning. Upgrading to 10 currently produces peer conflicts in the Next preset's import, JSX accessibility and React plugins; the verified combination remains pinned to 9.

`next-dev-loop` requires the missing global `agent-browser >=0.31.1`. Installing that prerequisite is separate machine setup; basic browser validation used the available Playwright connector. This does not block `pnpm dev` or ordinary app checks.

The existing Git remote is GitHub. The read-only quality workflow is active on push/PR, with a successful complete Ubuntu run recorded in [setup](setup.md#2026-10-24--github-quality-activation). Deployment and email delivery remain deferred. Physical-device and screen-reader evidence remain separate.
