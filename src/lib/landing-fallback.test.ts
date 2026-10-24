import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { ContactForm } from "@/components/landing/contact-form";
import { LandingNavigation } from "@/components/landing/navigation";

describe("landing progressive enhancement", () => {
  it("disables the form before hydration so a no-JS submit cannot leak fields into a URL", () => {
    const html = renderToStaticMarkup(createElement(ContactForm));
    expect(html).toContain('<fieldset disabled="">');
    expect(html).toContain("<noscript>");
    expect(html).toContain('role="status"');
    expect(html).not.toContain('type="hidden"');
  });
  it("renders a native mobile menu and real contact/motion anchors without JavaScript", () => {
    const html = renderToStaticMarkup(createElement(LandingNavigation));
    expect(html).toContain('<details class="lp-mobile-menu">');
    expect(html).toContain("<summary>");
    expect(html).toContain('href="#contact"');
    expect(html).toContain('href="#motion-settings"');
    expect(html).not.toContain('role="menu"');
  });
});
