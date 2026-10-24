# Button refinement

User supplied the original Button.jsx as the next component to adapt under the standing implementation approval.

Approach: evolve existing Button/ActionLink rather than copy effect-injected CSS, combine their native semantics or add forced .is-state classes. Add optional glow warm/none, arrow motion and restrained hover/press scales using root tokens. Neon stays in the explicit experimental laboratory per DESIGN.md. Glow none removes only the halo, preserving meaningful tactile depth/elevation. No dependency, form or home content change.

Reach: action.tsx, tokens.css, styles.css, spatial.css tactile precedence, laboratory.css reduced simulation, action specimens, action tests and documentation. Hover movement requires fine pointer/hover and no reduced motion; OS and laboratory reduction stop arrow/press motion. Loading/disabled remain still. Validate contrast/selected/tactile coexistence, narrow wrapping and native unavailable behavior. Run full gates and real browser checks; fresh independent source review.

Completed. Full gates pass with47 tests. Browser initially caught a higher-specificity legacy primary halo in brand.css; remove the duplicate rule instead of increasing specificity. Native action tests cover halo props/arrow exclusion while loading. Browser evidence covers visual state composition and motion reduction. Touch assertions wait for the release transition to settle.
