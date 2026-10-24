import { afterEach, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));
afterEach(() => vi.unstubAllEnvs());

it("removes structured secrets while keeping useful context", async () => {
  vi.stubEnv("LOG_LEVEL", "info");
  const { createLogger } = await import("@/lib/logger");
  const lines: string[] = [];
  const log = createLogger({ write: (line) => { lines.push(line); } });
  log.info({
    token: "test-secret",
    password: "top-level-password",
    authorization: "top-level-authorization",
    cookie: "top-level-cookie",
    secret: "top-level-secret",
    user: { password: "test-password", token: "nested-token", secret: "nested-secret", id: "user-1" },
    req: { headers: { authorization: "Bearer test-token", cookie: "session=test", "x-api-key": "test-api-key" } },
    requestId: "request-1",
  }, "Request completed");

  const output = lines.join("");
  for (const secret of ["test-secret", "top-level-password", "top-level-authorization", "top-level-cookie", "top-level-secret", "test-api-key", "test-password", "test-token", "session=test", "nested-token", "nested-secret"]) {
    expect(output).not.toContain(secret);
  }
  expect(JSON.parse(output)).toMatchObject({ requestId: "request-1", user: { id: "user-1" }, msg: "Request completed" });
});

it("honors the configured log threshold", async () => {
  vi.stubEnv("LOG_LEVEL", "error");
  const { createLogger } = await import("@/lib/logger");
  const lines: string[] = [];
  const log = createLogger({ write: (line) => { lines.push(line); } });
  log.info("below threshold");
  log.error("visible failure");
  expect(lines).toHaveLength(1);
  expect(JSON.parse(lines[0])).toMatchObject({ msg: "visible failure", level: 50 });
});
