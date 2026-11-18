export const SITE_URL = "https://www.sachinakash.dev";
export const SITE_NAME = "Sachin Akash";
export const PERSON_ID = `${SITE_URL}/#person`;
export const BUSINESS_ID = `${SITE_URL}/#service`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export type SeoHead = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  type: string;
  noindex: boolean;
  jsonLd: Record<string, unknown>[];
};

let serverHead: SeoHead | null = null;
export const collectServerHead = (head: SeoHead) => {
  serverHead = head;
};
/** Returns and clears the head collected while prerendering a route. */
export const takeServerHead = () => {
  const head = serverHead;
  serverHead = null;
  return head;
};

export const absoluteUrl = (path: string) =>
  /^https?:\/\//.test(path)
    ? path
    : `${SITE_URL}${path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`}`;

export const breadcrumbSchema = (items: Array<{ name: string; path: string }>) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

const escapeAttribute = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Serialises route head tags for the prerendered HTML. */
export function renderHeadTags(head: SeoHead) {
  const meta = (attribute: string, key: string, value: string) =>
    `<meta ${attribute}="${key}" content="${escapeAttribute(value)}" />`;
  const tags = [
    `<title>${escapeAttribute(head.title)}</title>`,
    meta("name", "description", head.description),
    meta(
      "name",
      "robots",
      head.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    ),
    `<link rel="canonical" href="${escapeAttribute(head.canonical)}" />`,
    meta("property", "og:type", head.type),
    meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:locale", "en_GB"),
    meta("property", "og:title", head.title),
    meta("property", "og:description", head.description),
    meta("property", "og:url", head.canonical),
    meta("property", "og:image", head.image),
    meta("property", "og:image:alt", head.imageAlt),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", head.title),
    meta("name", "twitter:description", head.description),
    meta("name", "twitter:image", head.image),
  ];
  if (head.jsonLd.length) {
    const json = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": head.jsonLd,
    }).replace(/</g, "\\u003c");
    tags.push(
      `<script type="application/ld+json" id="route-jsonld">${json}</script>`,
    );
  }
  return tags.join("\n    ");
}
