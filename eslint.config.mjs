import { defineConfig } from "eslint/config";
import base from "./eslint-rules/next-base.mjs";

export default defineConfig([
  ...base,
  {
    files: ["src/**/*.{ts,tsx}", "design-system/components/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": ["error", { patterns: [{
        group: ["**/design-system-export/**", "**/design-system/references/**"],
        message: "Use the typed design-system library; references are isolated historical demos.",
      }] }],
      "no-restricted-syntax": ["error",
        { selector: "Literal[value=/#[0-9a-fA-F]{3,8}\\b/]", message: "Use a design-system color token." },
        { selector: "Literal[value=/\\b\\d+px\\b/]", message: "Use a design-system spacing or size token." },
        { selector: "JSXAttribute[name.name='style'] Property[key.name=/^(color|background|backgroundColor|fontFamily|fontSize|borderRadius|padding|paddingTop|paddingRight|paddingBottom|paddingLeft|margin|marginTop|marginRight|marginBottom|marginLeft|gap)$/] > Literal[raw=/^[0-9]/][value!=0]",
          message: "Use token classes or var(--ds-...) for presentation values.", },
      ],
      "quality/no-direct-console": ["error", { logger: "the server logger (remove client debug output)" }],
      "quality/no-direct-data-access": ["error", {
        modules: ["@/db", "@/db/index"], bindings: ["db", "getDb"],
        layers: ["/src/app/", "/src/components/"], extensions: [".tsx"],
      }],
    },
  },
  { files: ["src/**/*.test.ts"], rules: { "no-restricted-syntax": "off" } },
  { ignores: [".local-evidence/**", ".superpowers/**", "design-system/references/**"] },
]);
