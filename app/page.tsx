import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  about,
  expertisePages,
  hero,
  upworkUrl,
} from "@/content/home"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Shubham Kashyap · Upwork Portfolio",
  description:
    "Targeted Upwork portfolio pages for full-stack AI development, automations, n8n, and GoHighLevel work.",
}

function BuildingStatus() {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-ink">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-orange/50" />
        <span className="relative inline-flex size-2 rounded-full bg-accent-orange" />
      </span>
      Assembling
    </span>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <section className="pb-20 pt-7 sm:pb-24">
          <div className="flex items-center justify-between border-b border-ink/15 pb-5">
            <span className="text-sm font-semibold tracking-[-0.02em] text-ink">
              SHUBHAM KASHYAP
            </span>
            <a
              href={upworkUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-ink transition-colors hover:text-accent-orange sm:block"
            >
              Upwork profile
            </a>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center pt-16 text-center md:pt-24">
            <Badge
              variant="outline"
              className="mb-7 rounded-none border-ink/20 bg-transparent px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em]"
            >
              <span className="mr-1 size-1.5 rounded-full bg-accent-orange" />
              {hero.eyebrow}
            </Badge>
            <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              {hero.title}
            </h1>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange">
              {hero.subtitle}
            </p>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-7 text-muted-ink">
              {hero.description}
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 text-sm font-medium">
              <span className="flex size-8 items-center justify-center rounded-full border border-ink/15">
                <Check className="size-3.5" />
              </span>
              <span>{hero.note}</span>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="grid gap-6 border-t border-ink/15 pt-6 md:grid-cols-[1fr_2fr]">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-ink">
              01 / About
            </div>
            <div>
              <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                {about.title}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-ink sm:text-lg">
                {about.body}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <div className="grid gap-6 border-t border-ink/15 pt-6 md:grid-cols-[1fr_2fr]">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-ink">
              02 / Expertise
            </div>
            <div>
              <h2 className="max-w-2xl text-balance text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                Focused portfolio pages by project type.
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-ink">
                Upwork proposals link directly to the page that matches the
                work. One page live today. The rest are being assembled.
              </p>
            </div>
          </div>

          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2">
            {expertisePages.map((page) => {
              const isLive = page.status === "live"

              const inner = (
                <>
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.15em]",
                        isLive ? "text-accent-orange" : "text-muted-ink"
                      )}
                    >
                      {isLive ? "Live" : "Portfolio page"}
                    </span>
                    {isLive ? (
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    ) : (
                      <BuildingStatus />
                    )}
                  </div>
                  <h3 className="mt-10 text-2xl font-medium tracking-[-0.04em]">
                    {page.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-muted-ink">
                    {page.description}
                  </p>
                </>
              )

              return isLive ? (
                <Link
                  key={page.href}
                  href={page.href}
                  className="group min-h-64 border-b border-r border-ink/15 p-7 transition-colors hover:bg-[#f7f4ed] sm:p-9"
                >
                  {inner}
                </Link>
              ) : (
                <article
                  key={page.href}
                  aria-disabled="true"
                  className="min-h-64 border-b border-r border-ink/15 bg-[#f3f1eb]/60 p-7 sm:p-9"
                >
                  {inner}
                </article>
              )
            })}
          </div>
        </section>

        <section className="border-t border-ink/15 py-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-lg text-sm leading-6 text-muted-ink">
              Hiring on Upwork? Use the portfolio page linked in the proposal,
              or message me directly on the platform.
            </p>
            <a
              href={upworkUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-orange"
            >
              Message on Upwork
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-6 flex flex-col justify-between gap-2 border-t border-ink/15 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-ink sm:flex-row">
            <span>Shubham Kashyap · Full Stack AI Developer</span>
            <span>Top Rated Plus · 100% Job Success</span>
          </div>
        </section>
      </div>
    </main>
  )
}
