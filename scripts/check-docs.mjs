import { existsSync, lstatSync, readFileSync, readdirSync, realpathSync, statSync } from "node:fs";
import { dirname, extname, isAbsolute, relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

// Focused subset: inline Markdown links/images, ATX/Setext headings and HTML IDs.
// Reference-style links and arbitrary HTML href/src attributes are not parsed.
const excluded = new Set(["references", "generated", "ignored", ".agents", "node_modules"]);
const blank = value => value.replace(/[^\n]/g, " ");
const outside = (root, path) => relative(root, path).split(sep)[0] === ".." || isAbsolute(relative(root, path));

function withoutFences(source) {
  let fence;
  return source.split("\n").map(line => {
    const marker = line.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (!fence && marker) fence = marker[1];
    else if (fence && marker && marker[1][0] === fence[0]
      && marker[1].length >= fence.length && !marker[2].trim()) fence = undefined;
    else if (!fence) return line;
    return blank(line);
  }).join("\n");
}

function withoutInlineCode(source) {
  return source.replace(/(`+)([^`]|(?!\1)`)*?\1/g, blank);
}

function anchors(source) {
  const text = withoutFences(source);
  const ids = new Set();
  for (const tag of withoutInlineCode(text).matchAll(/<[a-z][^>]*>/gi)) {
    const match = tag[0].match(/\bid\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/i);
    if (match) ids.add(match[1] ?? match[2] ?? match[3]);
  }
  const used = new Set();
  const lines = text.split("\n");
  for (let index = 0; index < lines.length; index++) {
    const atx = lines[index].match(/^ {0,3}#{1,6}\s+(.+?)\s*#*\s*$/);
    const setext = lines[index].trim() && /^ {0,3}(?:=+|-+)\s*$/.test(lines[index + 1] ?? "");
    if (!atx && !setext) continue;
    const heading = (atx?.[1] ?? lines[index]).replace(/<[^>]*>/g, "")
      .replace(/!?\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/(?<!\w)_{1,2}([^_]+)_{1,2}(?!\w)/g, "$1").replace(/[`*~]/g, "");
    const base = heading.toLowerCase().replace(/[^\p{L}\p{N}\p{M}_\-\s]/gu, "").trim().replace(/\s/g, "-");
    let slug = base;
    for (let suffix = 1; used.has(slug); suffix++) slug = `${base}-${suffix}`;
    used.add(slug); ids.add(slug);
    if (setext && !atx) index++;
  }
  return ids;
}

function links(source) {
  const text = withoutInlineCode(withoutFences(source));
  const result = [];
  const start = /!?\[(?:\\.|[^\]\\\n])*\]\(\s*/g;
  for (const match of text.matchAll(start)) {
    let end = match.index + match[0].length;
    let destination = "";
    if (text[end] === "<") {
      const closing = text.indexOf(">", end + 1);
      if (closing < 0) continue;
      destination = text.slice(end + 1, closing); end = closing + 1;
    } else {
      let depth = 0;
      for (; end < text.length; end++) {
        const character = text[end];
        if (character === "\\" && end + 1 < text.length) { destination += text[++end]; continue; }
        if (character === "(") depth++;
        if (character === ")") { if (!depth) break; depth--; }
        if (/\s/.test(character) && !depth) break;
        destination += character;
      }
    }
    // Optional quoted titles are ignored, but a complete Markdown link is required.
    if (!/^\s*(?:"[^"\n]*"|'[^'\n]*')?\s*\)/.test(text.slice(end))) continue;
    result.push({ destination, line: text.slice(0, match.index).split("\n").length });
  }
  return result;
}

function ownedDocuments(root) {
  const files = readdirSync(root, { withFileTypes: true })
    .filter(entry => entry.isFile() && entry.name.endsWith(".md"))
    .map(entry => resolve(root, entry.name));
  function walk(path) {
    if (!existsSync(path) || !lstatSync(path).isDirectory()) return;
    for (const entry of readdirSync(path, { withFileTypes: true })) {
      if (entry.name.startsWith(".") || excluded.has(entry.name)) continue;
      const child = resolve(path, entry.name);
      if (entry.isDirectory()) walk(child);
      else if (entry.isFile() && entry.name.endsWith(".md")) files.push(child);
    }
  }
  walk(resolve(root, "docs"));
  const designReadme = resolve(root, "design-system/README.md");
  if (existsSync(designReadme) && lstatSync(designReadme).isFile()) files.push(designReadme);
  return files.sort();
}

/** Validate owned documentation under root; return diagnostics, never mutate files. */
export function validateDocs(root) {
  root = realpathSync(resolve(root));
  const errors = [];
  const cache = new Map();
  for (const file of ownedDocuments(root)) {
    const source = readFileSync(file, "utf8");
    for (const { destination, line } of links(source)) {
      if (!destination || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(destination)) continue;
      const location = `${relative(root, file)}:${line}`;
      try {
        const hash = destination.indexOf("#");
        const path = decodeURIComponent((hash < 0 ? destination : destination.slice(0, hash)).split("?")[0]);
        const fragment = hash < 0 ? "" : decodeURIComponent(destination.slice(hash + 1));
        const target = path ? resolve(path.startsWith("/") ? root : dirname(file), path.replace(/^\//, "").replace(/:\d+(?::\d+)?$/, "")) : file;
        if (outside(root, target)) { errors.push(`${location}: target escapes repository: ${destination}`); continue; }
        if (relative(root, target).split(sep)[0] === ".local-evidence") continue;
        if (!existsSync(target)) { errors.push(`${location}: missing file: ${destination}`); continue; }
        if (outside(root, realpathSync(target))) { errors.push(`${location}: target escapes repository: ${destination}`); continue; }
        if (!fragment) continue;
        if (!statSync(target).isFile()) { errors.push(`${location}: fragment needs a file: ${destination}`); continue; }
        if (/^L\d+(?:-L\d+)?$/.test(fragment) && extname(target) !== ".md") continue;
        if (!cache.has(target)) cache.set(target, anchors(readFileSync(target, "utf8")));
        if (!cache.get(target).has(fragment)) errors.push(`${location}: missing fragment: ${destination}`);
      } catch (error) {
        errors.push(`${location}: cannot validate ${destination}: ${error instanceof URIError ? "invalid URL encoding" : "unreadable target"}`);
      }
    }
  }
  return errors;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const errors = validateDocs(process.cwd());
    if (errors.length) {
      process.stderr.write(`${errors.join("\n")}\n`); process.exitCode = 1;
    } else process.stdout.write("Owned documentation links and fragments passed (inline Markdown subset).\n");
  } catch {
    process.stderr.write("Documentation check could not read its root.\n"); process.exitCode = 1;
  }
}
