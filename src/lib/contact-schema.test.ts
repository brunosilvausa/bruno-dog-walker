import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = { owner: " Alex ", email: " alex@example.com ", dog: " Milo ", location: " E 80th & 2nd ", message: " " };

describe("contact input boundary", () => {
  it("normalizes surrounding whitespace and allows an empty optional message", () => {
    expect(contactSchema.parse(valid)).toEqual({ owner: "Alex", email: "alex@example.com", dog: "Milo", location: "E 80th & 2nd", message: "" });
  });
  it.each(["owner", "email", "dog", "location"])("rejects a missing or whitespace-only %s", field => {
    expect(contactSchema.safeParse({ ...valid, [field]: "  " }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, [field]: undefined }).success).toBe(false);
  });
  it("rejects malformed email and caps every free-text field", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
    for (const [field, limit] of Object.entries({ owner: 100, dog: 100, location: 120, message: 1500 })) {
      expect(contactSchema.safeParse({ ...valid, [field]: "x".repeat(limit + 1) }).success).toBe(false);
    }
  });
  it("rejects non-string data and excludes unknown fields", () => {
    expect(contactSchema.safeParse({ ...valid, owner: ["Alex"] }).success).toBe(false);
    expect(contactSchema.parse({ ...valid, secret: "unused" })).not.toHaveProperty("secret");
  });
});
