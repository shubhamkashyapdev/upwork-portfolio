export const upworkUrl =
  "https://www.upwork.com/freelancers/~016892b2e096ca585d"

export const profileImage = "/profile.jpg"

export const hero = {
  eyebrow: "Full Stack AI Developer",
  title: "Shubham Kashyap",
  subtitle: "Production SaaS & multi-tenant platforms",
  description:
    "I build and ship AI products and custom software end to end: architecture, development, integrations, and production delivery. Upwork Top Rated Plus.",
  note: "Top Rated Plus · 37+ production contracts · 100% job success",
}

export const about = {
  title: "Who I am",
  body: "Hands-on full-stack developer working with founders and product teams on SaaS, multi-tenant platforms, and AI-powered applications. I stay close to the build from early scoping through production and iteration.",
}

export const expertiseIntro = {
  title: "Areas I work in.",
  description:
    "Each card links to a focused proof page with products and client feedback matched to that type of hire.",
}

export type ExpertiseStatus = "live" | "building"

export const expertisePages = [
  {
    title: "Full-Stack AI Developer",
    description:
      "AI SaaS, multi-tenant platforms, and production software from architecture through deployment.",
    href: "/full-stack-ai-developer",
    status: "live" as ExpertiseStatus,
  },
  {
    title: "AI Automation Developer",
    description:
      "Business automations, AI workflows, and integration-heavy systems built for real operations.",
    href: "/ai-automation-developer",
    status: "building" as ExpertiseStatus,
  },
  {
    title: "n8n AI Automation Developer",
    description:
      "Complex n8n workflows, self-hosting, API integrations, and AI-connected automations.",
    href: "/n8n-ai-automation-developer",
    status: "building" as ExpertiseStatus,
  },
  {
    title: "GoHighLevel Expert",
    description:
      "GHL customizations, CRM workflows, custom apps, and API integrations for agency operations.",
    href: "/ghl-expert",
    status: "building" as ExpertiseStatus,
  },
]
