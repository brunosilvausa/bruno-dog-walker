# Card reference adaptation

Standing approval: implement this next supplied component without questions. Adapt the attachment into existing semantic Card; reuse SpatialCard for cursor tracking instead of duplicating effects/state/style injection. No fabricated service catalogue.

Selected approach: add interactive boolean (defaultfalse) for contextual elevation on real hover/focus-within, plus media zoom1.04 on fine hovering pointers without reduced motion. Card remains an article with configurable heading and existing media/body/footer slots. CTA remains native; no card tab stop/click handler. SpatialCard owns transforms/elevation for its direct child even if interactive is supplied; media zoom remains optional through interactive. No forced state/maxTilt API or duplicate controller. Preserve source photography, token values and SSR.

Reach: content.tsx, styles.css, token zoom, laboratory motion override, existing composition specimen, README/root contract, regression semantics test. Validate native CTA keyboard focus, media bounds, static vs interactive, SpatialCard coexistence, OS/local reduction, four widths and noJS. Full pnpm check and fresh independent source review required.

Complete: library and showcase updated,48 tests/full gates pass. Real browser confirms hover/focus, zoom containment, spatial single-owner behavior, reduced motion, four widths and no-JS emulated touch. Independent review reports no material findings. Mobile photo and CTA focus visually inspected. Evidence: .local-evidence/design-system-card/.
