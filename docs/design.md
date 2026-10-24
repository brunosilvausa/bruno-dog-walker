# Design and accessibility

## Current interface

The current page is an identity-only bootstrap screen, not the final brand or marketing design. It shows the confirmed company name, service category and Upper East Side location. English is the approved scaffold default.

`src/app/globals.css` owns the warm off-white background, dark text and system-font stack. `src/app/page.tsx` owns a narrow reading measure, responsive padding and heading scale. There are no remote fonts/images, animations, controls, contact CTA or fabricated testimonials.

## Accessibility

Use a single main landmark, a descriptive h1, document language and accurate metadata. Body copy must remain readable on narrow viewports. Future links require descriptive names and visible keyboard focus; the base focus style already exists. Honor reduced motion if animation is later requested.

The bootstrap has no interactive controls, so keyboard traversal has no application target; this does not certify the accessibility of future contact links or forms.

## Observed review

On 2026-10-23, Chromium smoke checks at 375×900 and 1440×900 found one main landmark, the expected h1 and English language, with no horizontal overflow. Both screenshots were visually inspected. Console reported zero errors/warnings and all observed application requests returned HTTP 200. Keyboard Tab was exercised; no application controls exist.

Physical devices, screen readers and other browser engines were not tested. Final brand, assets, page composition and contact journey remain a separate product design task; offer visual mockups during that discussion.
