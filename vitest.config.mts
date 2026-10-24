import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: { alias: {
    "@/design-system": fileURLToPath(new URL("./design-system", import.meta.url)),
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  } },
  test: { environment: "node", include: ["src/**/*.test.ts"], restoreMocks: true },
});
