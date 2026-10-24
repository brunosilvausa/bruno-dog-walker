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
  it("rejects malformed email", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });
  it.each(Object.entries({ owner: 100, dog: 100, location: 120, message: 1500 }))(
    "accepts the %s length limit of %i and rejects one extra character", (field, limit) => {
      expect(contactSchema.safeParse({ ...valid, [field]: "x".repeat(limit) }).success).toBe(true);
      expect(contactSchema.safeParse({ ...valid, [field]: "x".repeat(limit + 1) }).success).toBe(false);
    },
  );
  it("accepts a 254-character email and rejects a syntactically valid 255-character email", () => {
    const email = `${"a".repeat(64)}@${"b".repeat(63)}.${"c".repeat(63)}.${"d".repeat(61)}`;
    expect(email).toHaveLength(254);
    expect(contactSchema.safeParse({ ...valid, email }).success).toBe(true);
    expect(contactSchema.safeParse({ ...valid, email: `${email}d` }).success).toBe(false);
  });
  it("rejects non-string data and excludes unknown fields", () => {
    expect(contactSchema.safeParse({ ...valid, owner: ["Alex"] }).success).toBe(false);
    expect(contactSchema.parse({ ...valid, secret: "unused" })).not.toHaveProperty("secret");
  });
});
