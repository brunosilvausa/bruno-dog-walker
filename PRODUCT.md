# Bruno Dog Walker

Status: PRD and planning direction updated on 2026-10-24. The user approved documentation and a phased plan only; implementation has not been authorized by this update. The existing local application is described separately from planned behavior below.

A later 2026-10-24 request separately authorizes phased [quality automation](docs/superpowers/plans/2026-10-24-quality-automation.md), including regression checks and necessary accessibility corrections. It does not authorize executing the service/content MVP, delivery or publication.

## Problem and objective

Residents seeking premium dog walking and pet care on Manhattan's Upper East Side need to understand the services, learn who will care for their pets, and know how to request attention from Bruno. The confirmed website goal is service discovery, trust and direct contact.

## Audience and flows

The audience is prospective pet-care clients in the Upper East Side, Manhattan, NYC, primarily dog owners and also cat owners requesting visits. No registered roles exist.

The approved direction is a single landing page: understand the offer and neighborhood, explore confirmed services, learn about Bruno, check coverage guidance and FAQ, then use the contact form. A contact request does not confirm availability or a booking. The current form is still an unsent local preview.

## Confirmed services

Source: the user's 2026-10-24 planning approval, “principalmente para dogs, dog walking, daycare, boarding, mas tambem cat visits.” These categories are confirmed; their operational details are not.

| Service | Confirmed scope | Details that must not be inferred |
|---|---|---|
| Dog walking | Dog walking offered | Duration, group/private format, routes, frequency, prices |
| Daycare | Daycare offered, primarily for dogs | Premises, supervision, hours, capacity, collection/transport, eligibility |
| Boarding | Boarding offered, primarily for dogs | Accommodation, overnight arrangements, capacity, eligibility, prices |
| Cat visits | Visits for cats offered | Duration, frequency, included tasks, medication or other special care |

Do not extend daycare or boarding to cats without confirmation. “Meet & Greet” is not a fifth confirmed service, a mandatory step, or an online booking. Its role remains pending.

## Current delivery

The 2026-10-24 user request authorizes a local premium landing page based on the supplied Landing Page and Design System ZIPs. `/` now presents the approved brand, dog-walking/pet-care categories, editorial photography, Upper East Side identity, FAQ and a Meet & Greet contact section. The original identity-only foundation is preserved in a pre-edit local backup; existing showcase routes remain available.

The user subsequently selected **a contact form**, replacing the provisional Instagram destination. All primary CTAs lead to `#contact`. The form collects name, email, dog's name, cross streets and an optional message, with length limits and Zod validation. **Delivery is not connected**: the confirmed recipient is `hello@brunodogwalker.com`; the user has no sending service and explicitly deferred delivery setup to a future task. See [deferred delivery](docs/contact-delivery.md). The preview explicitly reports that nothing is sent, stores nothing, and does not claim receipt or a confirmed booking. It disables its controls without JavaScript to prevent a native GET submission exposing personal fields in the URL.

## MVP and exclusions

The requested landing page and form preview are implemented locally. Live contact delivery is not complete. No database, authentication, reservations, payments, analytics, external service provisioning or deployment is included. Do not fabricate prices, testimonials, certifications, insurance, availability, a biography or exact coverage boundaries. Supplied photographs are local visual references pending final asset approval; depicted people and dogs are not identified as Bruno or clients.

## Requirements and decisions

- Mobile and desktop reading, semantic HTML, keyboard access and sufficient contrast.
- Next.js App Router, TypeScript, Tailwind and pnpm, as accepted in the design.
- No persistence: the new form requirement does not authorize a database. Keep fields in the current document only; no browser storage, ORM or migrations.
- English is the approved scaffold default proposed for the NYC audience; final copy and language remain revisable.
- Bootstrap checks and builds require no credentials and make no service connections.

## PRD requirements and acceptance targets

These targets describe future work, not changes already made to the application.

| ID | Requirement | Acceptance target |
|---|---|---|
| FR-01 | Explain the confirmed offer | Dog walking, daycare, boarding and cat visits are discoverable on the same page; no unconfirmed operational claims |
| FR-02 | Introduce Bruno | A short owner-approved introduction is near the services; no invented biography, credentials or client identities |
| FR-03 | Explain area and next step | Upper East Side identity and coverage subject to confirmation; primary CTAs lead to `#contact` |
| FR-04 | Include dog and cat enquiries | Shared contact language and pet-name field support both; dog-specific service/editorial copy remains appropriate |
| FR-05 | Make preview status truthful | Valid input ends in “nothing sent”; errors preserve the draft and focus the first invalid field; no reservation claim |
| FR-06 | Preserve brand and accessibility | Existing tokens/components/light theme; usable mobile, keyboard, reduced-motion and no-JS reading paths |
| FR-07 | Keep a maintainable project | Existing stack and quality gates reused; toolkit decisions recorded without mandatory new installations |

### Main flow and alternate states

1. **Arrival:** identify Bruno Dog Walker, the service area and dog-first offer; cat visits remain explicitly discoverable.
2. **Services and trust:** read the four service categories and a short factual introduction to Bruno. Testimonials are optional and omitted when unavailable. A personal portrait is optional; brand art is not evidence of a caregiver's identity.
3. **Suitability:** read coverage guidance and FAQ. Exact availability, prices and service arrangements remain matters for conversation, with no implied guarantee.
4. **Contact:** all primary actions reach the shared contact section. The planned form remains four required fields plus an optional note; no service selector, pet profile or calendar is required for this MVP.
5. **Invalid input:** retain the draft, associate errors with fields, announce the summary and focus the first error; open the optional note before focusing an error inside it.
6. **Valid local preview:** confirm validation only, explicitly state nothing was sent, and leave the draft available in the current document. Editing clears stale validation status. Reload/navigation away has no persistence guarantee.
7. **Without JavaScript:** page, native menu and FAQ remain readable/usable; preview controls stay disabled so personal fields cannot leak through a native GET submission.
8. **Future operational contact:** only after delivery is separately resumed, submit to a server boundary, show an honest sending/error/accepted status and preserve the draft on failure. Provider acceptance does not prove inbox receipt. No state confirms a reservation.

### Two delivery milestones

- **Local review MVP:** approved information, coherent dog/cat journey and an accessible unsent preview. This is the next proposed implementation milestone, not yet implemented or accepted.
- **Public operational MVP:** the local experience plus separately authorized and verified delivery and publication. It is not complete while the contact path cannot send.

Success of the local milestone is demonstrated by task completion and review evidence, not conversion-rate claims. No analytics integration or numeric commercial target is selected.

## Pending product inputs

The user confirmed `hello@brunodogwalker.com` as the recipient on 2026-10-24. The user explicitly deferred delivery setup and chose to continue the complete UX, starting with mobile. Resend is a recommendation for future evaluation, not a configured service. The reference handoff is design material, not authorization for its suggested API, CRM, email, analytics or demo success screens.

| ID | Pending input | Owner | Effect on the plan |
|---|---|---|---|
| P-01 | Details of each confirmed service, eligibility and arrangements | Bruno | Blocks detailed claims, not listing the four confirmed categories |
| P-02 | Short factual introduction to Bruno | Bruno | Blocks completion of FR-02; do not substitute invented biography |
| P-03 | Exact coverage and any differences by service | Bruno | Use coverage subject to confirmation until supplied |
| P-04 | Meaning and conditions of Meet & Greet | Bruno | Do not present it as a guaranteed service or required step |
| P-05 | Approved copy, photos and rights to use each chosen asset | Bruno | Blocks public use of unapproved assets; personal portrait/testimonials are optional |
| P-06 | Prices, response times, availability and substantiated credentials | Bruno | Omit claims until confirmed; these are not mandatory page sections |
| P-07 | Delivery provider, processing/retention terms and publication destination | Bruno + future implementation owner | Deferred; does not block documentation or local UX planning |

Implementation proposal: change the shared field from “Dog’s name” to “Pet’s name” and its internal key from `dog` to `petName`, preserving the existing limits and four-field layout. This is a documented technical recommendation, not an applied change. Its contract is specified in [architecture](docs/architecture.md#planned-contact-contract-and-backend-schema).

## Acceptance

Visitors can explore the page and reach the contact form on mobile and desktop. Validation must preserve the draft and focus the first invalid field. Only a real, verified delivery response may show a received/sent state. Technical checks are recorded in [setup](docs/setup.md); visual approval and end-to-end delivery remain separate.

## Next delivery and maintenance

Current service/content authority: planning documents only. The [phased MVP plan](docs/superpowers/plans/2026-10-24-existing-project-mvp.md) prepares future local UX work; it does not authorize execution. Quality automation is authorized separately above. Resume delivery only as a future task using [the recorded checklist](docs/contact-delivery.md). No publication, spending, commits or pushes are part of the service/content planning task.
