import { useEffect } from 'react'

type SeoProps = { title: string; description: string; path?: string }

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    document.title = title
    const upsert = (selector: string, attribute: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      if (element) element.setAttribute(attribute, value)
    }
    upsert('meta[name="description"]', 'content', description)
    upsert('meta[property="og:title"]', 'content', title)
    upsert('meta[property="og:description"]', 'content', description)
    upsert('meta[property="og:url"]', 'content', `${window.location.origin}${path}`)
    upsert('meta[name="twitter:title"]', 'content', title)
    upsert('meta[name="twitter:description"]', 'content', description)
  }, [description, path, title])
  return null
}
