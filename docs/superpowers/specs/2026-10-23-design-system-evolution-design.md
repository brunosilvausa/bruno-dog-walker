# Design-system evolution

User selected library evolution: reusable brand elements, refined existing components and a showcase with composition, contrast and usage. Execution follows the earlier authorization to proceed without intermediate confirmations. This document records implementation choices, not invented user preferences.

## Approach

Considered a narrow polish of existing primitives and an evolution that brings the supplied visual grammar into the working library. The user selected evolution. Keep the original palette, fonts, logos and light theme; use wave, editorial label, singular spark, blue/cream mascot signatures and actual supplied photos. No spatial/3D framework is needed for these references.

## Deliverables

- Server-rendered Wave and Spark SVG primitives using brand tokens. Decorative assets stay out of the accessibility tree.
- Mascot signatures in cream/blue with explicit compact sizing. Keep complete logos legible; original PNG bytes remain untouched.
- Editorial Tag treatment, optional Card media slot and heading-level choice, and a BrandPhoto component using static imports and Next Image responsive sizing/lazy loading.
- Refined action feedback without changing native disabled/loading behavior; reduced motion removes decorative transforms.
- Showcase organized as a practical brand guide: identity, visual grammar, photography, palette/contrast, typography, actions/states, composition. Sections have anchor navigation and concise usage guidance. English examples; actual photo subjects remain unnamed.
- Existing home content stays identity-only. Demonstrative photos appear only in the showcase. Archived references remain untouched.

## Constraints and validation

No new dependency, stack update, business facts, forms or publication. Values belong to tokens. Native HTML semantics, keyboard focus, readable contrast, responsive sizing and reduced-motion behavior remain required. Test component semantics and token contrast, run pnpm check, inspect mobile/desktop browser views and image requests, then obtain a fresh independent review. No performance improvement percentage is claimed without comparable measurements.
