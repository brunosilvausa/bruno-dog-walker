import { defineConfig } from "eslint/config";
import base from "./eslint-rules/next-base.mjs";

export default defineConfig([
  ...base,
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "quality/no-direct-console": ["error", { logger: "the server logger (remove client debug output)" }],
      "quality/no-direct-data-access": ["error", {
        modules: ["@/db", "@/db/index"], bindings: ["db", "getDb"],
        layers: ["/src/app/", "/src/components/"], extensions: [".tsx"],
      }],
    },
  },
  { ignores: [".local-evidence/**", ".superpowers/**"] },
]);
