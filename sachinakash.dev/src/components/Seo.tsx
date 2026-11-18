import { useEffect } from "react";
import {
  SITE_NAME,
  absoluteUrl,
  collectServerHead,
  type SeoHead,
} from "../lib/seo";

type SeoProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  /** One or more schema.org objects; rendered as a single JSON-LD @graph. */
  jsonLd?: Record<string, unknown>[];
};

const DEFAULT_IMAGE = "/images/brand/og-sachin-akash.png";
const DEFAULT_IMAGE_ALT =
  "Sachin Akash, software engineer and freelance web developer in Colombo, Sri Lanka";

export function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = "website",
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const head: SeoHead = {
    title,
    description,
    canonical: absoluteUrl(path),
    image: absoluteUrl(image),
    imageAlt,
    type,
    noindex,
    jsonLd,
  };

  // During prerendering the head is collected for the static HTML; in the
  // browser the same values are applied to document.head on navigation.
  if (typeof window === "undefined") collectServerHead(head);

  const jsonLdText = JSON.stringify(jsonLd);
  useEffect(() => {
    document.title = head.title;
    const setMeta = (attribute: "name" | "property", key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(
        `meta[${attribute}="${key}"]`,
      );
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };
    setMeta("name", "description", head.description);
    setMeta("name", "robots", head.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("property", "og:title", head.title);
    setMeta("property", "og:description", head.description);
    setMeta("property", "og:url", head.canonical);
    setMeta("property", "og:type", head.type);
    setMeta("property", "og:image", head.image);
    setMeta("property", "og:image:alt", head.imageAlt);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("name", "twitter:title", head.title);
    setMeta("name", "twitter:description", head.description);
    setMeta("name", "twitter:image", head.image);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = head.canonical;

    let script = document.getElementById("route-jsonld");
    if (head.jsonLd.length) {
      if (!script) {
        script = document.createElement("script");
        script.id = "route-jsonld";
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@graph": head.jsonLd,
      });
    } else {
      script?.remove();
    }
    // jsonLdText stands in for the jsonLd array identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [head.title, head.description, head.canonical, head.image, head.imageAlt, head.type, head.noindex, jsonLdText]);

  return null;
}
