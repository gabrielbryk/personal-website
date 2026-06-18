// Build-time SSG step.
//
// Reads the SSR bundle produced by `vite build --ssr src/entry-server.tsx
// --outDir dist/.ssr`, calls its render() to get static HTML for <App />,
// and injects that HTML into the built client dist/index.html (replacing the
// empty <div id="root"></div>). The temp dist/.ssr dir is removed afterward.
//
// Result: the deployed index.html ships real content for SEO, social unfurl,
// and first paint, while src/main.tsx hydrates it on the client.

import { readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dist = join(root, "dist");
const ssrEntry = join(dist, ".ssr", "entry-server.js");
const indexPath = join(dist, "index.html");

const { render } = await import(pathToFileURL(ssrEntry).href);
const appHtml = render();

const template = await readFile(indexPath, "utf8");
const marker = '<div id="root"></div>';
if (!template.includes(marker)) {
  throw new Error(
    `prerender: could not find \`${marker}\` in dist/index.html — nothing injected.`,
  );
}
const out = template.replace(marker, `<div id="root">${appHtml}</div>`);
await writeFile(indexPath, out, "utf8");

await rm(join(dist, ".ssr"), { recursive: true, force: true });

console.log(
  `prerender: injected ${appHtml.length} chars of HTML into dist/index.html`,
);
