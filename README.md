# Bruno Dog Walker

Local foundation for a premium dog walking and pet care website serving the Upper East Side of Manhattan, NYC. The future site will explain services, establish trust in Bruno, and direct visitors to an existing contact channel.

This delivery is the technical bootstrap. It contains a minimal identity page, not the finished marketing site or a working enquiry flow. No database, forms, login, reservations, payments or remote services are configured.

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

## Documentation

- [Product and scope](PRODUCT.md)
- [Local preparation](docs/onboarding.md)
- [Architecture](docs/architecture.md)
- [Design and accessibility](docs/design.md)
- [Quality and reusable reviews](docs/quality.md)
- [Agent instructions](AGENTS.md)
- [Setup evidence and limitations](docs/setup.md)
- [Approved design](docs/superpowers/specs/2026-10-23-bootstrap-design.md)
- [Execution plan](docs/superpowers/plans/2026-10-23-bootstrap.md)

## Next delivery

Confirm the actual services, Bruno's biography and verified trust evidence, approved photos and contact destination. Then design and build the first service/trust/contact page. Acceptance requires an accurate, accessible direct-contact link, not an online reservation.
