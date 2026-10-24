# Bruno Dog Walker

## Problem and objective

Residents seeking premium dog walking and pet care on Manhattan's Upper East Side need to understand the services, learn who will care for their pets, and know how to request attention from Bruno. The confirmed website goal is service discovery, trust and direct contact.

## Audience and flows

The audience is prospective pet-care clients in the Upper East Side, Manhattan, NYC. No registered roles exist.

The later MVP flow is: read verified service information, review Bruno's biography and approved trust material, then open an existing contact channel to request care. A contact request does not confirm availability or a booking.

## Current delivery

The approved bootstrap provides a local Next.js foundation, identity-only page, validation/logging helpers, tests, quality gates, documentation and local agent skills. The future MVP is not implemented.

## MVP and exclusions

The first product delivery will present confirmed services, coverage, Bruno and an actionable direct-contact link. No internal enquiry storage is needed for this selected approach.

Explicit exclusions: database, enquiry form, online reservations, login and payments. No deployment, account creation, email sending, analytics or remote integration is authorized by the bootstrap. Do not invent services, prices, testimonials, certifications, insurance, availability or contact details.

## Requirements and decisions

- Mobile and desktop reading, semantic HTML, keyboard access and sufficient contrast.
- Next.js App Router, TypeScript, Tailwind and pnpm, as accepted in the design.
- No persistence: the user explicitly selected direct contact without a database. Omit ORM, schema, migrations and database environment variables.
- English is the approved scaffold default proposed for the NYC audience; final copy and language remain revisable.
- Bootstrap checks and builds require no credentials and make no service connections.

## Pending product inputs

The actual contact channel/destination, service descriptions, exact coverage boundaries, biography, verifiable trust evidence, approved photographs/assets and final language need confirmation before the marketing MVP. These were deliberately deferred rather than simulated.

## Acceptance

Technical bootstrap acceptance is defined in the [approved design](docs/superpowers/specs/2026-10-23-bootstrap-design.md); observed results are in [setup](docs/setup.md).

Later product acceptance: visitors can understand accurate services and coverage, identify Bruno through approved content, and successfully open the real contact destination on mobile and desktop. There must be no suggestion that contacting Bruno confirms a reservation.

## Next delivery and maintenance

Confirm the pending inputs, agree on the page's visual direction and implement the direct-contact MVP. Update this document when product decisions change; implementation and verification belong in architecture/setup documents.
