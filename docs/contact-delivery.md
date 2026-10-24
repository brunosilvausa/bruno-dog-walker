# Deferred contact delivery

Recorded on 2026-10-24 at the user's explicit request to leave this for the future and continue UX work.

- Confirmed recipient: `hello@brunodogwalker.com`.
- The user has no sending service configured.
- Resend was recommended as a possible future provider, not provisioned or connected. Its then-current free plan allowed 100 emails/day; recheck pricing before activation.
- Current form: local validation preview only. Nothing is sent or persisted.

Planning approval, 2026-10-24: service categories now include dog walking, daycare, boarding and cat visits. Documentation proposes a shared pet-name field; the running application's `dog` field has not changed. The [planned contract](architecture.md#planned-contact-contract-and-backend-schema) must be rechecked against implementation when delivery resumes. Approval to write this plan does not reopen delivery or authorize requesting credentials now.

## Resume later

1. Confirm the provider and create/access its account with the user.
2. Verify an appropriate sending domain/subdomain, preserving existing mail/DNS records.
3. Configure a restricted server-only credential through an authorized secret path; never place keys in chat or client code.
4. Implement server-side validation, bounded inputs and abuse controls, then connect delivery to the confirmed recipient.
5. Authorize and verify an actual test delivery before claiming that the form works end to end. Provider acceptance is not mailbox-delivery proof.

This note does not authorize account creation, DNS changes, spending, publication or sending test messages.

Sources: user messages in the local landing-page session; [Resend pricing](https://resend.com/pricing) and [domain verification](https://resend.com/docs/dashboard/domains/introduction), checked 2026-10-24.
