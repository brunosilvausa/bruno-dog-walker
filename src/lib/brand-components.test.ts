import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { Wave, Spark } from "@/design-system/components/graphics";
import { ScrollReveal, StaggerContainer } from "@/design-system/components/reveal";
import { Card } from "@/design-system/components/content";

describe("brand composition semantics", () => {
  it("renders reveal/stagger content visible without inline hiding or extra focus stops", () => {
    const html = renderToStaticMarkup(createElement(StaggerContainer, null,
      createElement(ScrollReveal, null, "Essential content")));
    expect(html).toContain("ds-scroll-stagger");
    expect(html).toContain("data-reveal");
    expect(html).toContain("Essential content");
    expect(html).not.toContain("style=");
    expect(html).not.toContain("tabindex=");
  });

  it.each([Wave, Spark])("keeps decorative graphics outside the accessibility tree", (Graphic) => {
    const html = renderToStaticMarkup(createElement(Graphic));
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain('focusable="false"');
    expect(html).not.toContain("<title");
  });

  it("keeps interactive cards semantic without adding an extra activation target", () => {
    const html = renderToStaticMarkup(createElement(Card, {
      title: "Example", interactive: true,
      footer: createElement("a", { href: "#details" }, "Read details"),
    }, "Description"));
    expect(html).toContain("<article");
    expect(html).toContain('data-interactive="true"');
    expect(html).toContain('href="#details"');
    expect(html).not.toContain('tabindex=');
    expect(html).not.toContain('role="button"');
    expect(html).not.toContain(' interactive=');
  });

  it("supports the correct heading level and a semantic media slot", () => {
    const html = renderToStaticMarkup(createElement(Card, {
      title: "A walk in the park", headingLevel: 2,
      media: createElement("figure", null, createElement("figcaption", null, "Supplied photograph")),
    }, "Example copy"));
    expect(html).toContain('<h2 class="ds-title-small">A walk in the park</h2>');
    expect(html).toContain("<figcaption>Supplied photograph</figcaption>");
    expect(html).not.toContain("headingLevel=");
  });
});

describe("brand token contrast", () => {
  const css = readFileSync(new URL("../../design-system/tokens.css", import.meta.url), "utf8");
  function luminance(name: string) {
    const raw = css.match(new RegExp(`--ds-${name}:\\s*(#[0-9a-f]{3}(?:[0-9a-f]{3})?)`, "i"))?.[1];
    if (!raw) throw new Error(`Missing color token: ${name}`);
    const hex = raw.length === 4 ? `#${[...raw.slice(1)].map((digit) => digit + digit).join("")}` : raw;
    const channels = [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16) / 255)
      .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  }
  function contrast(a: string, b: string) {
    const values = [luminance(a), luminance(b)].sort((x, y) => x - y);
    return (values[1] + 0.05) / (values[0] + 0.05);
  }
  it.each([["cocoa", "cream"], ["deep-blue", "cream"], ["cocoa", "sunshine"],
    ["sunshine", "deep-blue"], ["error", "cream"], ["success", "cream"], ["muted", "white"], ["muted", "disabled"], ["error", "white"]])(
    "%s on %s remains readable for normal text", (text, background) => {
      expect(contrast(text, background)).toBeGreaterThanOrEqual(4.5);
    });
  it.each([["border-field", "white"], ["focus", "white"], ["focus", "cream"], ["error", "white"]])(
    "%s against %s preserves essential control contrast", (indicator, background) => {
      expect(contrast(indicator, background)).toBeGreaterThanOrEqual(3);
    });
  it("reserves cream on bright blue for large type and rejects yellow on bright blue", () => {
    expect(contrast("cream", "blue")).toBeGreaterThanOrEqual(3);
    expect(contrast("cream", "blue")).toBeLessThan(4.5);
    expect(contrast("sunshine", "blue")).toBeLessThan(3);
  });
});
