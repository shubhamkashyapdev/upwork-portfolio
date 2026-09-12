import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Play,
  Star,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  capabilities,
  caseStudies,
  credibility,
  deliveryProcess,
  founderTestimonial,
  hero,
  principles,
  projects,
  proposalCta,
  reviews,
  productionStack,
} from "@/content/full-stack-ai-developer"
import { buildPageMetadata } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = buildPageMetadata({
  title: "Shubham Kashyap · Full Stack AI Developer",
  description:
    "Full stack AI developer focused on production SaaS and multi-tenant platforms. Live work includes MeisterFlow, LogoArena, and AgentKong.",
  path: "/full-stack-ai-developer",
})

function SectionIntro({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <div className="grid gap-6 border-t border-ink/15 pt-6 md:grid-cols-[1fr_2fr] md:gap-12">
      <div className="flex items-start gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-ink">
        <span className="text-accent-orange">{index}</span>
        <span>{eyebrow}</span>
      </div>
      <div>
        <h2 className="max-w-3xl text-balance text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-ink sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  )
}

function VideoEmbed({
  youtubeId,
  iframeTitle,
  caption,
}: {
  youtubeId: string
  iframeTitle: string
  caption?: string
}) {
  return (
    <div className="group relative aspect-video overflow-hidden border border-ink/15 bg-[#e9e6df] p-2 sm:p-3">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0&modestbranding=1`}
        title={iframeTitle}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      {caption ? (
        <div className="pointer-events-none absolute bottom-6 left-6 hidden items-center gap-3 bg-paper px-4 py-3 text-xs font-medium shadow-sm sm:flex">
          <Play className="size-3 fill-current" />
          {caption}
        </div>
      ) : null}
    </div>
  )
}

function ProjectVisual({
  name,
  image,
}: {
  name: string
  image?: string
}) {
  if (image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink/10 bg-[#f0eee9]">
        <Image
          src={image}
          alt={`${name} product website`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  return (
    <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-ink/10 bg-[#ece9e2]">
      <div className="absolute inset-5 border border-ink/10 bg-paper">
        <div className="flex h-8 items-center gap-1.5 border-b border-ink/10 px-3">
          <span className="size-1.5 rounded-full bg-ink/20" />
          <span className="size-1.5 rounded-full bg-ink/20" />
          <span className="size-1.5 rounded-full bg-ink/20" />
        </div>
        <div className="grid h-[calc(100%-2rem)] grid-cols-[30%_1fr]">
          <div className="border-r border-ink/10 p-3">
            <div className="h-2 w-2/3 bg-ink/10" />
            <div className="mt-3 h-2 w-full bg-ink/5" />
            <div className="mt-2 h-2 w-4/5 bg-ink/5" />
          </div>
          <div className="p-4">
            <div className="h-3 w-1/2 bg-ink/10" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-12 border border-ink/10 bg-[#f7f5ef]" />
              <div className="h-12 border border-ink/10 bg-[#f7f5ef]" />
            </div>
          </div>
        </div>
      </div>
      <span className="relative mt-auto mb-8 bg-paper px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-ink">
        Private client product
      </span>
    </div>
  )
}

export default function FullStackAiDeveloperPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-12">
        <section className="pb-20 pt-7 sm:pb-28">
          <div className="flex items-center justify-between border-b border-ink/15 pb-5">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[-0.02em] text-ink"
              aria-label="Shubham Kashyap home"
            >
              SHUBHAM KASHYAP
            </Link>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-ink sm:block">
              Available for select projects
            </span>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center pb-16 pt-16 text-center md:pt-24">
            <Badge
              variant="outline"
              className="mb-7 rounded-none border-ink/20 bg-transparent px-3 py-3 font-mono text-[10px] uppercase tracking-[0.16em]"
            >
              <span className="mr-1 size-1.5 rounded-full bg-accent-orange" />
              {hero.badge}
            </Badge>
            <h1 className="max-w-4xl text-balance text-[clamp(2.4rem,6.5vw,5.5rem)] font-medium leading-[0.92] tracking-[-0.06em]">
              {hero.title}{" "}
              <span className="text-accent-orange">· {hero.titleAccent}</span>
            </h1>
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

          <div className="grid border-y border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {credibility.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "py-6 sm:px-6 lg:py-8",
                  index > 0 && "border-t border-ink/15 sm:border-t-0",
                  index % 2 === 1 && "sm:border-l",
                  index > 1 && "sm:border-t lg:border-t-0",
                  index > 0 && "lg:border-l"
                )}
              >
                <p
                  className={cn(
                    "text-2xl font-semibold tracking-[-0.04em] sm:text-3xl",
                    index === 1 && "text-accent-orange"
                  )}
                >
                  {item.value}
                </p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-ink">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center font-mono text-[9px] tracking-wide text-muted-ink">
            Verified Upwork history · 37+ production contracts · repeat and
            long-term clients
          </p>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="01"
            eyebrow={founderTestimonial.eyebrow}
            title={founderTestimonial.title}
            description={founderTestimonial.context}
          />

          <div className="mt-12 border border-ink/15 bg-[#f5f2eb]">
            <div className="border-b border-ink/15 px-6 py-8 sm:px-10 sm:py-9">
              <p className="text-xl font-medium tracking-[-0.03em] sm:text-2xl">
                {founderTestimonial.name}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-ink">
                {founderTestimonial.role} · {founderTestimonial.location}
              </p>
            </div>
            <div className="p-3 sm:p-5">
              <VideoEmbed
                youtubeId={founderTestimonial.youtubeId}
                iframeTitle={`${founderTestimonial.name} on working with Shubham Kashyap`}
              />
            </div>
            <div className="grid gap-4 border-t border-ink/15 px-6 py-6 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-8 sm:px-10 sm:py-7">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent-orange">
                  {founderTestimonial.productLabel}
                </p>
                <p className="mt-2 text-sm font-medium leading-6">
                  {founderTestimonial.productMeta}
                </p>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted-ink sm:text-right">
                {founderTestimonial.credibility}
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="02"
            eyebrow="Production work"
            title="Clients who trusted me with real products."
            description="Live businesses, repeat engagements, and software used in production, not tutorial projects or concept screens."
          />

          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2">
            {projects.map((project) => {
              const body = (
                <>
                  <ProjectVisual name={project.name} image={project.image} />
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-muted-ink">
                      <span>{project.location}</span>
                      <span className="flex items-center gap-1.5">
                        {project.displayUrl}
                        {project.url ? (
                          <ExternalLink className="size-3" />
                        ) : null}
                      </span>
                    </div>
                    <h3 className="mt-8 text-2xl font-medium tracking-[-0.04em]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-base font-medium leading-6">
                      {project.description}
                    </p>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-muted-ink">
                      {project.context}
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="rounded-none border-ink/15 bg-transparent px-2.5 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted-ink"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )

              return project.url ? (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group border-b border-r border-ink/15 transition-colors hover:bg-[#f7f4ed]"
                >
                  {body}
                </a>
              ) : (
                <article
                  key={project.name}
                  className="group border-b border-r border-ink/15"
                >
                  {body}
                </article>
              )
            })}
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="03"
            eyebrow="Selected case studies"
            title="A closer look at three production products I’ve built."
            description="The products, systems, and technical work behind each engagement."
          />

          <div className="mt-16 space-y-24">
            {caseStudies.map((study, index) => (
              <article
                key={study.name}
                className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14"
              >
                <a
                  href={study.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "group relative block overflow-hidden border border-ink/15 bg-[#e9e6df] p-2",
                    index % 2 === 1 && "lg:order-2"
                  )}
                >
                  <ProjectVisual name={study.name} image={study.image} />
                  <span className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-paper">
                    <ArrowUpRight className="size-4" />
                  </span>
                </a>

                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-ink">
                      <span className="text-accent-orange">{study.number}</span>
                      <span>{study.eyebrow}</span>
                    </div>
                    <h3 className="mt-6 text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                      {study.name}
                    </h3>
                    <p className="mt-7 text-base leading-7 text-muted-ink">
                      {study.description}
                    </p>
                    <div className="mt-7 border-l-2 border-accent-orange pl-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-ink">
                        What I built
                      </p>
                      <p className="mt-2 text-sm leading-6">{study.built}</p>
                    </div>
                    <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                      {study.complexity.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-muted-ink"
                        >
                          <Check className="mt-0.5 size-3.5 shrink-0 text-accent-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="mt-8 border-t border-ink/15 pt-5 font-mono text-[10px] uppercase leading-5 tracking-[0.12em]">
                    {study.result}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="04"
            eyebrow="Upwork history"
            title="The strongest claims are the ones clients make."
            description="Verified contract outcomes from the platform where these engagements began."
          />

          <div className="mt-12 grid border-l border-t border-ink/15 md:grid-cols-2">
            {reviews.map((review) => (
              <article
                key={review.title}
                className={cn(
                  "flex min-h-64 flex-col border-b border-r border-ink/15 p-7 sm:p-9",
                  review.featured &&
                    "bg-ink text-paper md:col-span-2 md:grid md:min-h-80 md:grid-cols-[1fr_1.2fr] md:gap-16"
                )}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "font-mono text-[10px] uppercase tracking-[0.15em] text-muted-ink",
                        review.featured && "text-paper/55"
                      )}
                    >
                      Verified Upwork contract
                    </span>
                    <span className="flex items-center gap-1 text-accent-orange">
                      <Star className="size-3 fill-current" />
                      <span className="font-mono text-[10px]">{review.rating}</span>
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mt-6 text-xl font-medium tracking-[-0.035em]",
                      review.featured && "max-w-md text-3xl sm:text-4xl"
                    )}
                  >
                    {review.title}
                  </h3>
                </div>
                <div
                  className={cn(
                    "mt-6 flex flex-1 flex-col",
                    review.featured && "mt-10 md:mt-0"
                  )}
                >
                  <blockquote
                    className={cn(
                      "text-xl leading-snug tracking-[-0.025em]",
                      review.featured &&
                        "text-base leading-7 sm:text-lg sm:leading-8 md:text-xl md:leading-8"
                    )}
                  >
                    “{review.quote}”
                  </blockquote>
                  <div
                    className={cn(
                      "mt-auto border-t border-ink/15 pt-5",
                      review.featured && "border-paper/20"
                    )}
                  >
                    <p
                      className={cn(
                        "text-xs font-medium leading-6 text-muted-ink",
                        review.featured &&
                          "text-sm leading-7 text-paper/80 sm:text-base"
                      )}
                    >
                      {review.meta}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="05"
            eyebrow="How I work"
            title="I lead the delivery, not just the code."
            description="You get a hands-on technical partner who turns ambiguity into decisions and keeps the build moving through production."
          />

          <div className="mt-12 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="min-h-72 border-b border-r border-ink/15 p-6 sm:p-7"
              >
                <span className="font-mono text-2xl tracking-[-0.04em] text-ink/20">
                  {principle.number}
                </span>
                <h3 className="mt-16 text-lg font-semibold tracking-[-0.025em]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-ink">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="06"
            eyebrow="Delivery approach"
            title="Sprint planning and AI-assisted development."
            description="Structured for faster implementation, clearer scope, and nothing left to assumption."
          />

          <div className="mt-12 border border-ink/15">
            <p className="border-b border-ink/15 px-6 py-5 text-center text-sm text-muted-ink sm:px-8">
              From architecture through production: every phase planned, scoped,
              and tested.
            </p>
            <div className="grid border-l border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
              {deliveryProcess.map((step) => (
                <article
                  key={step.number}
                  className="min-h-64 border-b border-r border-ink/15 p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-2xl tracking-[-0.04em] text-ink/20">
                      {step.number}
                    </span>
                    <step.icon
                      className="size-5 text-accent-orange"
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="mt-12 text-lg font-semibold tracking-[-0.025em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-ink">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-28">
          <SectionIntro
            index="07"
            eyebrow="Capabilities"
            title="What I can help you build."
            description="Capabilities organized around outcomes, not a wall of technology logos."
          />

          <div className="mt-12 grid border-l border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex min-h-28 items-center gap-4 border-b border-r border-ink/15 p-6 transition-colors hover:bg-[#f5f2eb]"
              >
                <Icon
                  className="size-5 text-accent-orange"
                  strokeWidth={1.6}
                />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
          <div className="mt-12 border border-ink/15">
            <div className="grid gap-5 border-b border-ink/15 px-6 py-6 sm:px-8 md:grid-cols-[1fr_2fr] md:items-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-ink">
                Typical production stack
              </span>
              <p className="text-sm leading-6 text-muted-ink">
                Tools I ship with most often, not a fixed menu.
              </p>
            </div>
            <div className="grid border-l border-ink/15 sm:grid-cols-2">
              {productionStack.groups.map((group) => (
                <div
                  key={group.label}
                  className="border-b border-r border-ink/15 p-6 sm:p-7"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-ink">
                    {group.label}
                  </p>
                  <p className="mt-4 text-sm font-medium leading-7 tracking-[-0.01em]">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
            <p className="px-6 py-5 text-center text-sm leading-6 text-muted-ink sm:px-8">
              {productionStack.note}
            </p>
          </div>
        </section>

        <section className="pb-10">
          <SectionIntro
            index="08"
            eyebrow={proposalCta.eyebrow}
            title={proposalCta.title}
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14 lg:items-start">
            <div>
              <p className="max-w-md text-base leading-7 text-muted-ink sm:text-lg sm:leading-8">
                {proposalCta.body}
              </p>
            </div>

            <figure className="border border-ink/15 bg-[#f3f1eb] p-2 sm:p-3">
              <div className="overflow-hidden border border-ink/10 bg-white">
                <Image
                  src={proposalCta.image}
                  alt={proposalCta.imageAlt}
                  width={800}
                  height={450}
                  className="h-auto w-full"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <figcaption className="mt-3 px-1 text-center text-sm text-muted-ink">
                {proposalCta.caption}
              </figcaption>
            </figure>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-ink/15 py-5 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-ink sm:flex-row">
            <span>Shubham Kashyap · Full-Stack AI Developer</span>
            <span>Top Rated Plus · 100% Job Success</span>
          </div>
        </section>
      </div>
    </main>
  )
}
