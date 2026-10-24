import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Focused guard for our declaration style, not a general CSS parser.
export function checkCss(css) {
  const errors = [];
  for (const [, property, value] of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([\w-]+)\s*:\s*([^;{}]+)[;}]/g)) {
    if (property.startsWith("--")) continue;
    const protectedProperty = /^(?:color|background(?:-color)?|font(?:-.+)?|line-height|letter-spacing|(?:padding|margin|gap|border-radius)(?:-.+)?|(?:row|column)-gap|border(?:-.+)?)$/;
    if (!protectedProperty.test(property)) continue;
    const withoutTokens = value.replace(/var\(--[\w-]+\)/g, "");
    if (/#[\da-f]{3,8}\b|(?:rgb|hsl|oklch)\(|\b\d*\.?\d+(?:px|rem|em|vw|vh|%)\b/i.test(withoutTokens)
      || (/^(?:font-family|color|background(?:-color)?)$/.test(property)
        && !/^(?:\s|transparent|currentColor|inherit|none)*$/.test(withoutTokens))) {
      errors.push(`${property}: ${value.trim()} must use a design token`);
    }
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const files = [...readdirSync("design-system").filter((file) => file.endsWith(".css") && file !== "tokens.css")
    .map((file) => `design-system/${file}`), ...readdirSync("src", { recursive: true })
    .filter((file) => file.endsWith(".css")).map((file) => `src/${file}`)];
  const errors = files.flatMap((file) => checkCss(readFileSync(file, "utf8")).map((error) => `${file}: ${error}`));
  if (errors.length) {
    process.stderr.write(`${errors.join("\n")}\n`);
    process.exitCode = 1;
  } else process.stdout.write(`Design token adherence: ${files.length} stylesheets passed.\n`);
}
