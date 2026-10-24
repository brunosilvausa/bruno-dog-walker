# Bruno Dog Walker

Local premium landing page for dog walking and pet care on Manhattan's Upper East Side. It combines the supplied identity, local photography, layered pointer depth, scroll reveals, responsive editorial sections and an accessible Meet & Greet form.

**The form is a local preview: no requests are sent.** The recipient is `hello@brunodogwalker.com`; delivery setup is [deferred for later](docs/contact-delivery.md) while UX work continues. No database, login, reservations, payments or deployment is included.

`/design-system`, `/design-system/motion` and `/design-system/phase-3` retain the existing component showcases. Historical HTMLs in `design-system/references` remain isolated from application code. Phase 3 Stage B remains review-gated; the landing reuses the established motion components and defaults.

## Run

Use Node.js 24 and pnpm 12 (validated with 24.22.1 and 12.15.0):

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open http://127.0.0.1:3000. If occupied, use `pnpm dev --port 3001`. No credentials or `.env.local` are required. Optional `LOG_LEVEL` is documented in `.env.example`.

```sh
pnpm check
pnpm build
pnpm start
```

Both server commands bind to loopback. Stop your process with Ctrl+C.

## Quality checks

```sh
pnpm exec playwright install chromium
pnpm check
pnpm check:docs
pnpm test:e2e
```

The browser command starts and stops its own production server on loopback port3100 and refuses an occupied port. Run `pnpm check` first so it tests the current build. It covers Chromium mobile/desktop journeys and four axe accessibility states with synthetic data. [Quality](docs/quality.md#portable-browser-and-ci-commands) documents compatibility, layout and CI scope. Raw evidence stays local and ignored.

The [GitHub workflow](.github/workflows/quality.yml) runs automatically on pushes and pull requests, with broader browser coverage for application/UI/configuration changes. Its [first complete Ubuntu run passed](https://github.com/brunosilvausa/bruno-dog-walker/actions/runs/40137861939); see [activation evidence](docs/setup.md#2026-10-24--github-quality-activation).

## Documentation

- [Product and scope](PRODUCT.md)
- [Local preparation](docs/onboarding.md)
- [Architecture](docs/architecture.md)
- [Design and accessibility](docs/design.md)
- [Visual contract and tokens](DESIGN.md)
- [Component library and HTML references](design-system/README.md)
- [Quality and reusable reviews](docs/quality.md)
- [Agent instructions](AGENTS.md)
- [Setup evidence and limitations](docs/setup.md)
- [Approved design](docs/superpowers/specs/2026-10-23-bootstrap-design.md)
- [Execution plan](docs/superpowers/plans/2026-10-23-bootstrap.md)

## Next delivery

Continue the complete UX, starting with mobile. Email delivery is deferred; resume it later using [the recorded checklist](docs/contact-delivery.md). Detailed services, Bruno's biography, trust evidence and final photos still need confirmation; a contact request does not confirm a reservation.
