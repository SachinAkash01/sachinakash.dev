// Renders every route to static HTML with route-specific <head> tags, then
// writes 404.html and sitemap.xml. Runs after the client and SSR builds.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrEntry = join(root, "dist-ssr", "entry-server.js");
const SITE_URL = "https://www.sachinakash.dev";

const { render, routes } = await import(pathToFileURL(ssrEntry).href);
const template = await readFile(join(dist, "index.html"), "utf8");
const seoBlock = /<!--seo:start-->[\s\S]*?<!--seo:end-->/;
if (!seoBlock.test(template) || !template.includes("<!--app-html-->")) {
  throw new Error("index.html is missing the seo or app-html markers");
}

const page = (url) => {
  const { html, head } = render(url);
  return template.replace(seoBlock, head).replace("<!--app-html-->", html);
};

for (const { path } of routes) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, page(path));
  console.log(`prerendered ${path}`);
}

await writeFile(join(dist, "404.html"), page("/404"));
console.log("prerendered /404.html");

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path, priority }) =>
      `  <url><loc>${SITE_URL}${path === "/" ? "/" : path}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${routes.length} URLs`);

await rm(join(root, "dist-ssr"), { recursive: true, force: true });
