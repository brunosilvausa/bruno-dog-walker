import { afterEach, describe, expect, it, vi } from "vitest";
import { getLogLevel } from "@/lib/env";

// The server-only marker intentionally throws outside React's server resolver.
vi.mock("server-only", () => ({}));
afterEach(() => vi.unstubAllEnvs());

describe("server environment", () => {
  it("defaults the log level without requiring credentials", () => {
    vi.stubEnv("LOG_LEVEL", undefined);
    expect(getLogLevel()).toBe("info");
  });

  it.each(["trace", "debug", "info", "warn", "error", "fatal", "silent"])(
    "accepts the %s log level",
    (level) => {
      vi.stubEnv("LOG_LEVEL", level);
      expect(getLogLevel()).toBe(level);
    },
  );

  it.each(["", "INFO", "sensitive-invalid-value"])(
    "rejects invalid configuration without exposing the input: %j",
    (level) => {
      vi.stubEnv("LOG_LEVEL", level);
      expect(() => getLogLevel()).toThrow(
        "Invalid or missing environment variable: LOG_LEVEL",
      );
      if (level) expect(() => getLogLevel()).not.toThrow(level);
    },
  );
});
