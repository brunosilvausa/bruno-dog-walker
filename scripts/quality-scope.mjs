import { execFileSync } from "node:child_process";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

/** Select added compatibility coverage; the critical baseline always runs. */
export function selectBrowserSuite(paths) {
  return paths.some(input => {
    const path = input.replaceAll("\\", "/").replace(/^(?:\.\/)+/, "");
    if (path.startsWith("design-system/references/")) return false;
    return ["src/", "design-system/", "tests/e2e/", ".github/workflows/"].some(prefix => path.startsWith(prefix))
      || ["package.json", "pnpm-lock.yaml"].includes(path)
      || /^(?:eslint(?:\.[^/]+)?\.config\.[^/]+|tsconfig(?:\.[^/]+)?\.json|(?:vitest|playwright|next)\.config\.[^/]+)$/.test(path);
  }) ? "full" : "critical";
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  let suite = "full";
  const base = process.env.QUALITY_BASE_SHA ?? "";
  if (/^[a-f\d]{40}$/i.test(base) && !/^0{40}$/.test(base)) {
    try {
      // Disabled rename detection includes both removed and added paths when code moves.
      const paths = execFileSync("git", ["diff", "--no-ext-diff", "--no-renames", "--name-only", "-z", base, "HEAD"], {
        encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], timeout: 10_000,
      }).split("\0").filter(Boolean);
      suite = selectBrowserSuite(paths);
    } catch { /* Unknown comparison state gets the wider suite, never a skipped baseline. */ }
  }
  process.stdout.write(`${suite}\n`);
}
