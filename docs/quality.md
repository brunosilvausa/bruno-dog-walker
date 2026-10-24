# Quality and reusable checks

## Commands and meaning

| Command | Contract |
|---|---|
| `pnpm lint` | Next/TypeScript presets, 350-line limit, structured logger and presentation/data boundary guards |
| `pnpm typecheck` | `next typegen` then strict TypeScript checking |
| `pnpm lint:typed` | Typed `no-floating-promises` and `no-misused-promises`, both errors |
| `pnpm lint:rules` | Executes all three copied custom-rule self-checks |
| `pnpm test` | Node Vitest environment/logging boundary suite |
| `pnpm test:watch` | Interactive test watch |
| `pnpm build` | Production compilation and static rendering without credentials |
| `pnpm check` | All six required gates above, in order |
| `pnpm audit --prod`, `pnpm audit --dev` | Separate advisory checks; a clean result is not proof of exploit absence |

No checks connect to a database or apply migrations. Tests mock only the `server-only` marker, which intentionally throws outside React's server resolver; Zod and Pino run for real. The 13 tests cover default/valid/invalid configuration, safe errors, structured secret removal and log thresholds. No coverage percentage or full E2E suite is claimed.

Typed lint measured 8.31 seconds wall time and 642,367,488 bytes maximum resident set on this host, while independent setup checks also ran. This is one observation, not a performance benchmark.

## Browser, bundle and graph

The production page was checked by HTTP and Chromium at mobile/desktop sizes. No controls exist yet. Add interaction tests when the direct-contact journey is implemented; do not infer future accessibility from this smoke check.

Use `next-bundle-optimizer` in audit mode for baseline build evidence. CLI support and capture/export are recorded in [setup](setup.md). Do not claim browser transfer savings from analyzer attribution. `next-dev-loop` is installed but not qualified because agent-browser is missing.

Graphify uses only local code extraction: `GRAPHIFY_NO_AUTO_REFRESH=1 graphify extract . --code-only --no-cluster`. Exclusions protect secrets, dependencies, skills and generated output. Its graph does not validate business requirements or prose; standalone CLI does not inherit ChatGPT login, and no semantic LLM extraction is authorized.

## Reusable security review

Source: [toolkit prompt 13 at 790a895304e0c08b70a5b215c9d334f1c86b816c](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/13-security-review.md).

Invocation in the native session: “Read the pinned prompt 13 linked here and execute its Prompt block in repository baseline mode for this project. Keep the review read-only, preserve client/model/authentication, and save a redacted report in a private directory outside the repository.”

For diff mode, supply actual immutable base/head and comparison semantics. Inspect entry points, caller boundaries, logging and dependency scripts. No installed skill authorizes remote probing, publication or fixes. Differential-review is not selected for this greenfield baseline; manual source tracing and the existing tests remain available.

Store private reports outside the repository with restrictive permissions; sanitized results belong in setup evidence. Do not upload reports or raw traces. No findings means none substantiated in the inspected scope, never absolute security.

## Harness2-inspired native method

Source: [toolkit prompt 15 at 790a895304e0c08b70a5b215c9d334f1c86b816c](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/prompts/15-harness-improvement.md), [evaluation guide](https://github.com/soumatheusgomes/vibe-coding-toolkit/blob/790a895304e0c08b70a5b215c9d334f1c86b816c/docs/07-harness-evaluation.md).

Invocation: “Read the pinned prompt 15 linked here and establish/reuse its native method adaptation for this project. Preserve the current model, authentication, permissions and working configuration. Run relevant disposable smoke cases and record only observed results. Compare at most one candidate only after a real harness failure.”

This is a local method adaptation, not execution of the Harness2 framework or its benchmarks. No CLI lab, API billing, bridge, new orchestrator or optimization daemon is selected.

Use same-revision fixtures/evaluator outside the app. Preserve evaluator integrity and local notes; independently rerun checks. Current evidence includes stale-handoff/boundary verification and canonical-document retrieval. Client restart, stop/resume, shared-resource contention and repeated setup are separate unrun observations. A passing case does not establish reliability across clients/models.

## Review and maintenance

One fresh independent final review checks the approved scope and final source/configuration. Fix material findings and run affected checks; extra rounds need unresolved risk or new evidence. Keep source changes, command contracts and their canonical documents synchronized.

Pinned toolkit updates require review of source/diff before replacing templates or prompt references. Skills use their own recorded upstream revisions. On unchanged reruns reuse valid evidence; dependency, instruction, model/client or tool changes invalidate relevant checks.
