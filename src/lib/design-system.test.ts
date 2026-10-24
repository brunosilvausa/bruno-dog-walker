import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Button, ActionLink, TactileButton } from "@/design-system/components/action";

describe("design system action semantics", () => {
  it("reuses native button loading protection for the tactile primitive", () => {
    const html = renderToStaticMarkup(createElement(TactileButton, { loading: true }, "Example"));
    expect(html).toContain('data-tactile="true"');
    expect(html).toContain('type="button"');
    expect(html).toContain('disabled=""');
    expect(html).toContain('aria-busy="true"');
  });

  it("defaults actions to non-submitting buttons and forwards selection", () => {
    const html = renderToStaticMarkup(createElement(Button, { "aria-pressed": true }, "Select"));
    expect(html).toContain('type="button"');
    expect(html).toContain('aria-pressed="true"');
  });

  it("blocks loading actions and exposes their busy name", () => {
    const html = renderToStaticMarkup(createElement(Button, {
      loading: true, loadingLabel: "Preparing…", type: "submit",
    }, "Continue"));
    expect(html).toContain('disabled=""');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain("Preparing…");
    expect(html).toContain('type="submit"');
  });

  it.each([{ disabled: true }, { loading: true }])("removes navigation for unavailable links: %j", (state) => {
    const html = renderToStaticMarkup(createElement(ActionLink, { href: "/", ...state }, "Home"));
    expect(html).not.toContain("href=");
    expect(html).toContain('aria-disabled="true"');
    expect(html).toContain('role="link"');
    expect(html).toContain('tabindex="-1"');
  });

  it("preserves navigation and accessible text for active links", () => {
    const html = renderToStaticMarkup(createElement(ActionLink, { href: "/", arrow: true }, "Home"));
    expect(html).toContain('href="/"');
    expect(html).toContain('aria-hidden="true"');
    expect(html).not.toContain("aria-disabled");
  });

  it("supports a halo-free action without changing native loading semantics", () => {
    const html = renderToStaticMarkup(createElement(Button, { glow: "none", arrow: true, loading: true }, "Wait"));
    expect(html).toContain('data-glow="none"');
    expect(html).toContain('disabled=""');
    expect(html).not.toContain('ds-action-arrow');
  });

  it("exposes a decorative arrow and halo choice on navigable links", () => {
    const html = renderToStaticMarkup(createElement(ActionLink, { href: "/", arrow: true, glow: "none" }, "Home"));
    expect(html).toContain('class="ds-action-arrow" aria-hidden="true"');
    expect(html).toContain('data-glow="none"');
    expect(html).toContain('href="/"');
  });

  it("keeps tactile loading actions unavailable with native semantics", () => {
    const html = renderToStaticMarkup(createElement(Button, {
      tactile: true, loading: true, loadingLabel: "Loading…", variant: "secondary",
    }, "Continue"));
    expect(html).toContain('data-tactile="true"');
    expect(html).toContain('disabled=""');
    expect(html).toContain('aria-busy="true"');
    expect(html).not.toContain(' tactile="');
  });
});
