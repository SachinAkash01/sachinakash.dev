import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { projects } from "./data/portfolio";
import { servicePages } from "./data/services";
import { renderHeadTags, takeServerHead } from "./lib/seo";

/** Every indexable route, used for prerendering and the sitemap. */
export const routes = [
  { path: "/", priority: "1.0" },
  { path: "/projects", priority: "0.9" },
  { path: "/services", priority: "0.9" },
  { path: "/resume", priority: "0.8" },
  ...servicePages.map((service) => ({
    path: `/services/${service.slug}`,
    priority: "0.8",
  })),
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: "0.7",
  })),
];

export function render(url: string) {
  takeServerHead();
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  const head = takeServerHead();
  if (!head) throw new Error(`No <Seo> rendered for ${url}`);
  return { html, head: renderHeadTags(head) };
}
