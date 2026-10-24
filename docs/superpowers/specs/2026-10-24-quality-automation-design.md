# Evidence-based quality automation

## Authority and intent

The user approved the revised QA plan after three specialist brainstorming rounds and explicitly requested phased implementation, testing and checking each phase and the integrated result. This work implements quality infrastructure, not the separately planned service/content MVP, delivery, Stage B motion or deployment.

## Approach

Keep the existing stack and `pnpm check`. A local-only approach would preserve dependence on the MCP session; automating the entire tool catalog on every edit would add unrelated cost and maintenance. The selected incremental approach adds portable Playwright journeys with shared axe checks, a small document validator and a read-only GitHub Actions workflow.

## Contracts

- Node.js 24, pnpm 12.15.0 and the project lockfile; no global installations, Git hooks, mandatory branches/worktrees, main protection or paid services.
- Existing contact contract remains `dog`; no transmission, persistence or receipt/reservation claims. Future PRODUCT requirements are not current regression expectations.
- P0 covers current navigation, keyboard/focus, safe no-JS rendering, input boundaries, privacy, reduced motion and pause. Selected P0 failures cannot be hidden by retry or quarantine.
- Tests share a fresh production build, synthetic inputs and isolated browser contexts. The runner owns its loopback server, refuses an occupied port, waits for readiness and cleans up its processes.
- Normal asset requests are allowed. Tests detect attempted transmission of synthetic contact values through any origin and storage controlled by the application. A blocked attempt still fails.
- Use Chromium mobile/desktop for routine runs. Run relevant Firefox/WebKit, breakpoint/layout and manual checks based on impact. Axe and WebKit do not qualify screen readers or physical Safari/iOS.
- No raw traces/HAR by default. Local outputs stay ignored; CI can publish only allowlisted synthetic summaries under a reviewed policy, proposed retention seven days.
- CI configuration is local work. Remote activation, account quota/cost verification and observed GitHub execution are separate evidence; do not claim automation is active before a successful remote run.
- Toolkit/harness/integration checks are triggered by relevant changes, outside the application's daily gate. No official Harness2 CLI, model API, semantic inference or scheduled optimizer.

## Completion evidence

Each phase records commands, scope, result and limits in docs/setup.md. docs/quality.md owns the matrix and commands. Required results are PASS, FAIL, NOT RUN or reasoned N/A. A fresh final review checks the integrated diff; unavailable manual/device/account checks remain explicit.
