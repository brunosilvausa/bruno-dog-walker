import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { TextField } from "@/design-system/components/field";

describe("TextField accessibility boundaries", () => {
  it("associates a visible label, helper, error and existing description", () => {
    const html = renderToStaticMarkup(createElement(TextField, {
      id: "example", label: "Example name", helper: "Use example text.", error: "Enter a name.",
      "aria-describedby": "context", required: true,
    }));
    expect(html).toContain('for="example"');
    expect(html).toContain('id="example"');
    expect(html).toContain('aria-describedby="context example-help example-error"');
    expect(html).toContain('id="example-error"');
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain("required");
  });

  it("leaves valid inputs enabled and free of dangling description IDs", () => {
    const html = renderToStaticMarkup(createElement(TextField, { id: "valid", label: "Example" }));
    expect(html).not.toContain("disabled");
    expect(html).not.toContain("aria-invalid");
    expect(html).not.toContain("aria-describedby");
  });

  it("blocks loading edits and exposes a busy description", () => {
    const html = renderToStaticMarkup(createElement(TextField, { id: "busy", label: "Example", loading: true }));
    expect(html).toContain('disabled=""');
    expect(html).toContain('aria-busy="true"');
    expect(html).toContain('aria-describedby="busy-loading"');
    expect(html).toContain('id="busy-loading"');
    expect(html).toContain("Loading…");
  });

  it("preserves native readonly and external invalid states", () => {
    const html = renderToStaticMarkup(createElement(TextField, {
      id: "readonly", label: "Example", readOnly: true, "aria-invalid": true, "aria-describedby": "external",
    }));
    expect(html).toContain('readOnly=""');
    expect(html).toContain('aria-invalid="true"');
    expect(html).toContain('aria-describedby="external"');
  });
});
