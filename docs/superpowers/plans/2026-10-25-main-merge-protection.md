# Main Merge Protection Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans task-by-task. Preserve the phased implementation and verification method. Planning approval does not authorize execution, commits, pushes, PR creation or remote policy changes.

**Goal:** Prevent changes from reaching `main` without a pull request and the required quality check, first closing the browser-selection failure path.

**Architecture:** Keep the existing single `quality` job and impact-selected browser suites. Make selection fail closed, then enforce the existing check through one active GitHub branch ruleset. Demonstrate rejection and recovery using a disposable PR without merging its synthetic failure.

**Tech Stack:** Existing GitHub Actions, Bash, Node built-in test runner, pnpm and authenticated GitHub API/CLI. No new dependencies.

**Spec:** The short four-phase design approved by Bruno in this conversation on 2026-10-25: repair selection; validate; protect `main`; demonstrate blocked then passing PR. This approval covers the design and detailed planning, not implementation.

## Global constraints

- Preserve the landing page, contact preview, Stage B gate and all existing quality checks.
- No new services, hooks, merge queue, paid tooling or obligatory human reviewer.
- No bypass actors in the proposed ruleset. An administrator can still edit the policy; this is not protection against a determined administrator.
- Required context is the observed check name `quality`, with expected source GitHub Actions. Resolve its actual integration ID from live API data; never guess it.
- Existing AGENTS.md prohibits main-branch blockers. Update only that restriction after explicit authorization to execute this approved protection scope; retain all other boundaries.
- Before any write, inspect dirty state and current remote rules. Preserve user work and unrelated rules; never overwrite a changed remote configuration blindly.
- Keep private evidence bounded and redacted. Never upload raw contact data, credentials or synthetic failure code to `main`.

## Review focus

- Selector execution failure must fail the job rather than emit an empty successful output: phase 1 negative control.
- Empty or unknown selection must fail for manual and automatic paths: phase 1 shell tests.
- A passing check for an old head/base must not satisfy the current PR: phase 3 strict update policy and phase 4 current-SHA checks.
- Solo-owner workflow must remain usable without self-approval: zero required approvals, phase 3 API verification.
- Missing/pending/failing required check must leave the PR unmergeable: phase 4 inspect check runs and mergeability without attempting a merge.

## Phase 1 — Close browser-selection failure

**Files:** modify `.github/workflows/quality.yml`, `package.json`, `docs/quality.md`; create `scripts/quality-workflow.test.mjs`. Reuse `scripts/quality-scope.mjs` unchanged unless a demonstrated defect requires otherwise. No lockfile change expected.

**Interfaces:** selector stdout is `critical\n` or `full\n`. The workflow writes `suite=<value>\n` to `GITHUB_OUTPUT` only after successful selection and validation; all other outcomes exit nonzero.

- [x] Add Node tests that execute the actual workflow selection block using `bash -e -o pipefail`, temporary `GITHUB_OUTPUT`, and a temporary fake `node` executable on PATH. Extract the named step's literal run block without adding a YAML library; fail clearly if that bounded fixture format changes.
- [x] Cover automatic `critical` and `full`, manual `critical` and `full`, empty/unknown/multiline output, manual invalid input, and a selector exiting nonzero both with and without valid-looking stdout. Assert exact valid output; invalid cases must exit nonzero and publish no suite.
- [x] Run `node --test scripts/quality-workflow.test.mjs`; record intended RED cases on the existing workflow.
- [x] In the workflow, assign the automatic result separately (`suite=$(node scripts/quality-scope.mjs)`), assign the manual input to the same variable, validate with a closed `case` accepting only `critical|full`, then write the output. Keep the required job unconditional.
- [x] Rerun the new tests: all PASS. Add their explicit path to the existing `pnpm test` Node invocation; preserve the other test paths.
- [x] Document fail-closed behavior and the regression command in `docs/quality.md`. Review the small diff for any path that could bypass browser execution.

**Gate:** execution errors and invalid values cannot produce a successful selection step. Successful valid selection preserves existing coverage.

## Phase 2 — Validate and publish the repair before enforcement

**Files:** phase 1 diff; `docs/setup.md` for dated results.

- [x] Run `pnpm check`, then `pnpm check:docs` against final source.
- [x] Reuse that production build, with no concurrent build or unknown server, for `pnpm exec playwright test --grep @critical` and `pnpm exec playwright test --project=chromium-desktop --grep @extended`. Require zero failures and no selected critical skips.
- [x] Independently review workflow, test controls and final diff. Record actual results, not expected historical counts.
- [x] Under explicit execution/publication authorization, use the AIOX DevOps role to commit only reviewed paths and publish the repair through a PR. Wait for a successful current-head GitHub run before merging the repair; enforcement is not active yet. Do not reuse this permission for other work.
- [x] Record the immutable repair commit and run URL. Do not proceed on failed, cancelled or unobserved remote execution.

**Gate:** repaired workflow is on `main` with an observed successful full GitHub run; the new local negative controls pass.

## Phase 3 — Activate the approved main policy

**Files:** `AGENTS.md`, `docs/quality.md`, `docs/setup.md`. Remote resource: one branch ruleset in `brunosilvausa/bruno-dog-walker`.

- [x] Re-read repository access, default branch, rulesets, classic branch protection and current check metadata through the API. Save the relevant pre-change configuration privately. Stop for conflicting changes rather than replacing them.
- [x] Update AGENTS.md narrowly to permit the approved `main` policy and required PR workflow; preserve prohibitions on unsolicited remote actions and unrelated global branch requirements. Prepare/check these docs before activating the policy.
- [x] Prepare the exact reviewable ruleset payload: name `main-quality`, target branch, enforcement `active`, include `refs/heads/main`, no exclusions and no bypass actors.
- [x] Require pull requests with zero required approving reviews and resolved review threads; require status context `quality` from the observed GitHub Actions integration, with strict up-to-date policy. Do not exempt existing-branch updates from required checks.
- [x] Add deletion and non-fast-forward prohibitions. Do not add `restrict updates`, which could block legitimate merges; PR enforcement governs normal updates.
- [x] Under explicit remote-policy authorization, create the ruleset only if the revalidated state still matches the baseline. Fetch it back and compare every effective setting with the payload. Preserve the resource ID and redacted before/after receipt.
- [ ] Publish prepared documentation through the required PR path; wait for current checks before any merge. Use existing tests and `check:docs`; do not weaken enforcement to publish documentation.

**Gate:** API confirms an active policy targeting exactly `main`, the correct required check/source, strict freshness, zero approvals and no bypass actors.

## Phase 4 — Demonstrate block and recovery

**Files:** temporary branch-only Vitest fixture `src/lib/merge-protection-probe.test.ts`; final sanitized receipt in `docs/setup.md` and command/policy contract in `docs/quality.md`.

- [ ] Create a clearly named disposable branch from the protected current `main`. Add one synthetic Vitest test that intentionally fails; do not disable or edit the workflow.
- [ ] Push/open a draft-marked-as-test PR targeting `main` under explicit authorization. Wait for `quality` to fail at the probe commit; record head SHA, failing run and rules-aware mergeability. Distinguish the policy block from any other conflict/draft restriction; do not treat draft status alone as proof. If necessary mark ready solely for this validation.
- [ ] Confirm effective policy identifies the failing required check as blocking. Never attempt an actual bad merge as a negative test.
- [ ] Delete the synthetic fixture on the same branch and push the correction. Confirm the latest head passes `quality`, is up to date with `main`, and is allowed by the policy. If removal leaves an empty PR, use a small truthful documentation receipt change so a green mergeable PR can be observed.
- [ ] Close the probe PR without merging its branch. Delete only the owned temporary remote/local branch after preserving evidence and confirming no unique user work.
- [ ] Publish the final truthful receipt through a normal documentation PR, verify checks, and merge only under the authorized integration scope. Record observed pending/fail/pass states separately; do not invent unobserved timeout or bypass tests.
- [ ] Verify final local/remote SHA and working-tree state, ruleset settings, and no leftover probe fixture or owned test server. Report any intentionally retained resources.

**Gate:** current-SHA remote evidence demonstrates a failing check blocks and a corrected passing PR satisfies policy. No synthetic failure reaches `main`.

## Recovery and limits

If implementation fails, preserve the first failure and stop that phase. Fix the root cause and rerun affected checks before proceeding. Never disable tests or rules merely to obtain green.

If policy unexpectedly blocks legitimate recovery, inspect the failed requirement first. Any administrative policy change needs explicit approval, a captured before-state, the smallest change, restoration and revalidation. Do not configure a permanent bypass in anticipation.

GitHub can accept skipped/neutral check conclusions; preserve the unconditional required job, validated suite selection and existing critical-skip failure reporter. Binding the app does not prevent someone editing the workflow to fake success. Review workflow/test changes carefully; independent mandatory human review can be added when another eligible maintainer exists.

## Planning completion

This document implements the approved short design as a plan only. No code, dependency, remote rule, commit, push or PR is changed by preparing it. Execution remains a separate user decision.

## Local closure — 2026-10-25

Phase 1 and the local-only phase 2 checks are complete. The extra final blank line in docs/setup.md was removed; final whitespace and owned documentation checks passed. Prior logs show RED 4/12 passing with eight intended failures, GREEN 12/12, 94 application tests, 29 tooling tests, 96 critical journeys and ten extended layouts. The independent read-only review in this conversation reported no findings. No build or browser suite was repeated for this documentation-only closure. Publishing the repair, observing its remote run, enforcing rules and the rejection/recovery probe remain pending and unauthorized in this local task.

## Phase 3 activation — 2026-10-25

Explicit phase3 authorization supersedes the historical planning-only limits for this scope. Ruleset25811101 is active and API-verified; documentation publication is separate from approval to merge. The documentation PR and CI results are recorded in local receipts to avoid a post-CI documentation loop. Phase4 remains pending.
