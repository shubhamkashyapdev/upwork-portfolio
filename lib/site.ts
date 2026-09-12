import type { Metadata } from "next"

/** Set NEXT_PUBLIC_SITE_URL to your production domain (e.g. https://yoursite.com) for correct share previews. */
export function getSiteUrl(): URL {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000")
  return new URL(raw)
}

export const siteName = "Shubham Kashyap"

export const defaultTitle = "Shubham Kashyap · Full Stack AI Developer"

export const defaultDescription =
  "Full stack AI developer. I ship production SaaS, multi-tenant platforms, and custom software from architecture through deployment. Upwork Top Rated Plus."

export const ogImage = {
  url: "/profile.jpg",
  width: 1024,
  height: 1024,
  alt: "Shubham Kashyap, Full Stack AI Developer",
}

export function buildPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string
  description: string
  path?: string
}): Metadata {
  const siteUrl = getSiteUrl()
  const url = new URL(path, siteUrl)

  return {
    title,
    description,
    alternates: { canonical: url.pathname === "/" ? siteUrl.href : url.href },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      url,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  }
}
