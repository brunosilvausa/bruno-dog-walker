# Calibration and finishing plan

User explicitly approved all work, requested sequential implementation and no questions. Complete the laboratory first, then visual finishing, then full validation/review. No commits, publication or stack changes.

Design decisions: controls affect only an ephemeral showcase scope. Tilt 0–4 degrees, lift 0–6 px, glow 0–100%, duration ×0.5–2 and a reduced-motion simulator; OS reduced motion always wins. Native details/range controls, Reset restores defaults and pauses effects. No persistence or hidden global token mutation.

After laboratory validation, add glass comparison over supplied photographs, default/strong/experimental-neon glow specimens and interactive duration tracks. Preserve safe 88%/92% glass backings, compare the source 78%/16 px profile explicitly, and retain opaque fallbacks. Standardize 150/250/400 ms role-based timing (plus existing internal tracking and controlled ambient timings); showcase v3 reference values do not silently override public defaults. Glow stays behind content or outside controls and never replaces the focus outline.

- [x] Add boundary tests and implement scoped calibration state, accessible controls, reset/collapse and local reduced-motion override.
- [x] Validate laboratory behavior before visual finishing.
- [x] Implement glass/glow/motion comparisons using existing components, tokens and supplied photos; preserve face visibility and semantic/contrast rules.
- [x] Run full gates and browser desktop/mobile, keyboard/touch, control/reset/simulation, no-JS, pixel contrast and local-only resource checks.
- [x] Independent read-only review; fix material issues and record final evidence. Keep the local showcase available.

Completed in order: laboratory gates/browser passed before finishing. Final full gates: 45 unit tests, CSS/rule checks, lint/types/build. Final browser validates controls, scoped values/reset/reload, glass/contrast/fallback, glow/timing, local+OS reduced motion and four responsive widths; prior spatial/pixel regressions remain green. Fresh independent review PASS; no outstanding material finding. See docs/setup.md and ignored local evidence.
