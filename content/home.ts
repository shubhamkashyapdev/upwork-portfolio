export const upworkUrl =
  "https://www.upwork.com/freelancers/~016892b2e096ca585d"

export const hero = {
  eyebrow: "Upwork portfolio hub",
  title: "Shubham Kashyap",
  subtitle: "Full Stack AI Developer",
  description:
    "Targeted proof pages for Upwork prospects. Each page is built around a specific type of project, so clients see relevant work instead of a generic portfolio.",
  note: "I personally lead the technical work.",
}

export const about = {
  title: "Who I am",
  body: "Hands-on full-stack developer focused on AI products, multi-tenant SaaS, and production software. These pages exist to support Upwork proposals: one focused proof document per buying intent, not a broad agency site.",
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
