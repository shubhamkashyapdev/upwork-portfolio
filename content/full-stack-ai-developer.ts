import {
  Bot,
  Boxes,
  Braces,
  Building2,
  Cable,
  CloudCog,
  Database,
  FlaskConical,
  Layers3,
  Mic2,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
  SplitSquareHorizontal,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react"

export const upworkUrl =
  "https://www.upwork.com/freelancers/~016892b2e096ca585d"

export const hero = {
  badge: "Upwork · Top Rated Plus",
  title: "Full Stack AI Developer",
  titleAccent: "Multi-Tenant SaaS",
  description:
    "AI SaaS, multi-tenant platforms, and production software: architecture, development, integrations, and deployment.",
  note: "Direct collaboration from scope conversation through production delivery.",
}

export const credibility = [
  { value: "Top Rated Plus", label: "Upwork talent" },
  { value: "$80K+", label: "Verified earnings" },
  { value: "4,200+", label: "Upwork hours" },
  { value: "100%", label: "Job success" },
]

export const projects = [
  {
    name: "LogoArena",
    location: "Italy",
    url: "https://logoarena.com",
    displayUrl: "logoarena.com",
    description: "A full-stack logo contest and marketplace platform.",
    context:
      "Long-term partnership across frontend, backend, and ongoing delivery for a live Italian SaaS brand.",
    tags: ["Next.js", "Marketplace", "SaaS", "Long-term"],
    image: "/projects/logoarena.jpg",
  },
  {
    name: "Hiding Elephant",
    location: "Italy",
    url: "https://hidingelephant.com",
    displayUrl: "hidingelephant.com",
    description: "AI logo generation SaaS for professional designers.",
    context:
      "A repeat engagement covering the complete generation experience through production deployment.",
    tags: ["AI generation", "Next.js", "Product UX", "SaaS"],
    image: "/projects/hiding-elephant.png",
  },
  {
    name: "UseCortana / AgentKong",
    location: "Canada",
    url: "https://usecortana.ai",
    displayUrl: "usecortana.ai",
    description: "A multi-channel AI sales agent with voice, text, and CRM.",
    context:
      "Fixed-price SaaS delivery followed by ongoing product work across a production agent platform.",
    tags: ["Voice AI", "AI agents", "LiveKit", "Agentic CRM"],
    image: "/projects/usecortana.png",
  },
  {
    name: "MeisterFlow",
    location: "Switzerland",
    url: "https://app.meisterflow.ch",
    displayUrl: "app.meisterflow.ch",
    description: "Multi-tenant booking and invoicing for home services.",
    context:
      "Tenant-isolated product architecture with billing, booking workflows, and AI automation hooks.",
    tags: ["Multi-tenant", "Supabase", "Stripe", "Automation"],
    image: "/projects/meisterflow.jpg",
  },
  {
    name: "Real Estate Underwriting SaaS",
    location: "USA",
    displayUrl: "Private beta",
    description: "Vertical software shaped around real underwriting work.",
    context:
      "Custom intake, document handling, and CRM-connected operations for an industry-specific workflow.",
    tags: ["Vertical SaaS", "Documents", "CRM", "Workflows"],
  },
  {
    name: "Image Generation SaaS",
    location: "Canada",
    displayUrl: "Client-owned product",
    description: "A production-ready AI image generation application.",
    context:
      "Fixed-price delivery from a tightly scoped MVP through complete SaaS product surfaces.",
    tags: ["AI generation", "API integration", "Next.js", "SaaS"],
  },
]

export const caseStudies = [
  {
    number: "01",
    name: "UseCortana",
    eyebrow: "Multi-channel AI sales agent",
    description:
      "The client needed a production platform, not a prototype, that could coordinate voice, text, and CRM activity in one coherent product.",
    built:
      "I led the architecture, full-stack product build, voice and real-time integrations, agent orchestration, and production delivery.",
    complexity: [
      "VAPI and LiveKit voice pipeline",
      "Agentic CRM behavior",
      "Multi-channel communication",
      "Production SaaS surfaces",
    ],
    result: "5.0 rating · $3,915 · 131 hours · ongoing product work",
    image: "/projects/usecortana.png",
    url: "https://usecortana.ai",
  },
  {
    number: "02",
    name: "MeisterFlow",
    eyebrow: "Multi-tenant operations SaaS",
    description:
      "A Swiss home-services product needed booking, invoicing, tenant isolation, and billing built on foundations that could grow beyond the first release.",
    built:
      "I designed and built the Next.js and Supabase architecture, Stripe billing, core workflows, and clean integration points for AI automation.",
    complexity: [
      "Tenant-level data isolation",
      "Stripe subscriptions",
      "Booking and invoicing logic",
      "AI-ready architecture",
    ],
    result: "5.0 rating · live production platform · scalable beyond scope",
    image: "/projects/meisterflow.jpg",
    url: "https://app.meisterflow.ch",
  },
  {
    number: "03",
    name: "LogoArena",
    eyebrow: "Long-term marketplace engineering",
    description:
      "A live marketplace needed a technical partner who could keep delivering across evolving product requirements, not disappear after the first release.",
    built:
      "I worked across frontend, backend, contest and marketplace workflows, maintenance, and ongoing production feature delivery.",
    complexity: [
      "Contest and marketplace flows",
      "Multi-role product UX",
      "Ongoing production delivery",
      "Long-term codebase stewardship",
    ],
    result: "5.0 rating · $24,543 across contracts · 2,433 hours",
    image: "/projects/logoarena.jpg",
    url: "https://logoarena.com",
  },
]

export const reviews = [
  {
    title: "MeisterFlow · Multi-Tenant Booking & Invoicing Platform",
    rating: "5.0",
    meta: "Next.js · Supabase · Stripe · Google/Outlook OAuth · Docker",
    quote:
      "Building a SaaS platform is challenging, and I needed someone who could think beyond the requirements. Shubham consistently came up with smarter, more scalable solutions and was always thinking several steps ahead. His communication was professional, his work was high quality, and he genuinely cared about the long-term success of the product. I highly recommend him and would gladly work with him again.",
    featured: true,
  },
  {
    title: "AI Sales Bot / SaaS Web App",
    rating: "5.0",
    value: "$24,500",
    meta: "Fixed-price AI platform",
    quote: "Respectful, knowledgeable, honest and smart.",
  },
  {
    title: "LogoArena · Full Stack AI Developer",
    rating: "5.0",
    value: "$8,144",
    meta:
      "679 hours · Long-term · Reliable · Committed to quality · Clear communicator",
    quote:
      "Really enjoyed working with Shubham. He's creative, dependable, and easy to collaborate with. The work was completed on time, communication was great, and the work was always high-quality.",
  },
  {
    title: "LogoArena · Frontend / Full Stack Developer",
    rating: "5.0",
    value: "$16,399",
    meta:
      "1,754 hours · Long-term · Collaborative · Detail oriented · Committed to quality",
    quote:
      "Wow. It's been an absolutely incredible experience working with Shubham. Beyond the fact that he is a top developer and true expert in his field, he is also a great person and extremely easy to work with. Our project required both creative and logical thinking, and has multiple levels of complexity. Throughout all stages of our project, Shubham was able to help us plan, research, and execute our vision at the highest level, with patience, and attention to even the smallest of details. In fact, we haven't stopped working with Shubham, we're continuing straight on to another project with him. Thanks a lot Shubham! Looking forward to what's next!",
  },
  {
    title: "Hiding Elephant · Full Stack Development",
    rating: "5.0",
    value: "$3,345",
    meta: "335 hours · Repeat client · Endorsed · Collaborative",
    quote:
      "This was our second project working with Shubham, and just like the first, we had a fantastic experience working with him throughout the entire project! Both Shubham's skills and personality fit in perfectly with our company's culture and vision, and we're excited to continue working together on our new projects. Thanks Shubham!",
  },
]

export const principles = [
  {
    number: "01",
    title: "Architecture before velocity",
    body: "I plan the data, integrations, system boundaries, and deployment path before complexity gets expensive.",
  },
  {
    number: "02",
    title: "Questions early",
    body: "I remove ambiguity upfront and turn business requirements into concrete technical decisions.",
  },
  {
    number: "03",
    title: "Visible progress",
    body: "You get clear updates on what is done, what is next, and what needs a decision.",
  },
  {
    number: "04",
    title: "Production delivery",
    body: "I handle the path through QA, deployment, maintainability, and ongoing delivery, not just local code.",
  },
]

export const deliveryProcess = [
  {
    number: "01",
    title: "Architecture first",
    body: "Design the best-fit architecture from your requirements: data model, integrations, infra, and delivery path mapped before build starts.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Feasibility & R&D",
    body: "Every component that may need research is identified upfront. No hidden assumptions, no surprises mid-build.",
    icon: FlaskConical,
  },
  {
    number: "03",
    title: "Phased scoping",
    body: "Projects split into phases, then milestones per phase, so scope, cost, and progress stay transparent.",
    icon: SplitSquareHorizontal,
  },
  {
    number: "04",
    title: "Sprint delivery",
    body: "Work runs in planned sprints with AI-assisted development for faster, more consistent implementation.",
    icon: Zap,
  },
  {
    number: "05",
    title: "Security & compliance",
    body: "Auth, data isolation, access control, and compliance considerations built in, not bolted on at the end.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Testing & QA",
    body: "Automated testing with Vitest and Cypress, plus manual QA, so production releases are reliable.",
    icon: TestTube2,
  },
]

export const capabilities = [
  { icon: Bot, label: "Production AI SaaS" },
  { icon: Layers3, label: "Multi-tenant platforms" },
  { icon: Rocket, label: "Production MVP · direct or POC-first" },
  {
    icon: Workflow,
    label: "AI Agent SaaS with native workflow builder",
  },
  { icon: Mic2, label: "Multi-channel AI agent SaaS" },
  { icon: Building2, label: "Custom CRMs & portals" },
  { icon: PanelsTopLeft, label: "Internal tools & dashboards" },
  { icon: Cable, label: "CRM & API-connected SaaS" },
  { icon: Database, label: "Supabase-backed SaaS products" },
  { icon: CloudCog, label: "Deployment & infrastructure" },
  { icon: Boxes, label: "Stripe billing & subscriptions" },
  {
    icon: Braces,
    label: "Custom RAG · LangChain & Vercel AI SDK",
  },
]

export const productionStack = {
  groups: [
    {
      label: "Product",
      items: ["Next.js", "React", "TypeScript"],
    },
    {
      label: "Backend & data",
      items: [
        "Node.js",
        "Python / FastAPI",
        "PostgreSQL",
        "Supabase",
        "Prisma",
        "Redis",
      ],
    },
    {
      label: "AI & agents",
      items: [
        "OpenAI",
        "Claude",
        "Gemini",
        "LangChain",
        "Vercel AI SDK",
        "RAG",
        "MCP",
      ],
    },
    {
      label: "Infra & integrations",
      items: ["Docker", "Stripe", "REST APIs", "Webhooks"],
    },
  ],
  note: "Technology is chosen based on project scope: whatever best fits the build. Other tools and frameworks are used when the project requires them.",
}
