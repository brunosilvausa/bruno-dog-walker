# Interactive spatial design-system layer

The user selected the interactive spatial approach, including cursor tilt, directional light, floating elements and glass, with mouse/touch/keyboard validation. This extends the selected library evolution and earlier authorization to execute without intermediate confirmations.

## Approach and choices

Compared expressive CSS-only polish with an interactive layer; the user selected the latter. Reuse current components and tokens. Add narrowly scoped native DOM interaction for SpatialCard, CSS-based FloatingElement/AmbientGlow/GlassSurface, optional tactile treatment on existing actions, replayable entrance examples, graphics variants, elevations and caption/name overlays. No animation dependency, service facts, reservation flow or video editing engine.

SpatialCard wraps server-rendered children rather than replacing their semantics. A small controller coalesces the latest pointer coordinates in one animation frame, reads an untransformed wrapper, clamps normalized coordinates, ignores touch/pen, and cancels pending work on exit/cancel/blur/unmount/media change. Fine-pointer hover and no reduced motion are required. Keyboard users get a visible focus-within state on real nested controls. The wrapper is not an extra tab stop or fake button.

Floating animation needs an explicit pause state, pauses on focused descendants, and is static for reduced motion and coarse pointers. The showcase supplies one accessible pause/resume control for its spatial stage. Ambient glow is static decoration. Glass has contrasting text, cream/cocoa variants and opaque fallbacks; use text backing to prevent photo-dependent contrast. No head-layer animation is fabricated from the single mascot PNG.

Showcase adds tokens/states/borders, hill/swoop waves and blue/cream sparks, four elevations, replayable 400 ms / 80 ms stagger entrance specimens, spatial stage and caption/name examples. Overlays use solid text backings and a composition that leaves faces unobstructed. Touch keeps native tap/scroll. No-JS rendering keeps content visible; entrance animation is explicitly replayed rather than hiding server content until an observer fires.

## Acceptance

Unit regressions cover controller coalescing/latest sample, non-mouse/media rejection and cleanup; existing action semantics and decorative SVGs remain green. Browser verifies real mouse tilt/light/reset, live reduced-motion changes, pause/focus behavior, touch inactivity/native navigation, keyboard, glass fallback, overlays, no-JS visibility and responsive layout. Run pnpm check and one independent final review. Keep all prior source/reference assets and dirty changes. No commits or publication.
