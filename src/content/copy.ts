/**
 * All marketing copy authored for this project. Phrasing is generic SaaS
 * marketing language — not a derivative of any third-party site. Company
 * names appearing in customer rows are placeholders.
 */

export const nav = {
  brand: "Hyun Kim",
  brandShort: "hk",
  links: [
    { label: "Products", hasMenu: true },
    { label: "Solutions", hasMenu: true },
    { label: "Developers", hasMenu: true },
    { label: "Resources", hasMenu: true },
    { label: "Pricing", hasMenu: false },
  ],
  guideMe: "Guide me",
  signIn: "Sign in",
  contact: "Contact sales",
};

export const hero = {
  badgeLabel: "World commerce on Hyun Kim:",
  badgeValue: "1.64943906%",
  headline: {
    lead: "Move money. Move faster.",
    rest: "One platform for payments, billing, and global commerce—built so your team can ship today and scale tomorrow.",
  },
  ctaPrimary: "Get started",
  ctaSecondary: "Sign up with Google",
};

export const logos = {
  topRow: ["Atlasly", "amazonia", "novidia", "Folkswagen", "coincore", "Glohoo", "shopful"],
};

export const solutions = {
  intro: {
    lead: "One toolkit. Every business model.",
    rest: "Modular products for payments, billing, treasury, and platform commerce—use one, use them all.",
  },
  cards: [
    {
      id: "payments",
      title: "Take payments anywhere your customers are",
      illustration: "payments",
      expandTitle: "Take payments anywhere your customers are",
      expandLead:
        "Run online checkout, in-person terminals, and embedded flows on a single payments stack tuned for high acceptance rates.",
      bullets: [
        "Convert more shoppers with a tuned checkout",
        "Reach new regions with local methods",
        "Boost acceptance with machine-learned routing",
        "Unify in-store and online sales",
      ],
      ctaPrimary: "Explore payments",
      ctaSecondary: "See pricing details",
    },
    {
      id: "billing",
      title: "Run any pricing model you can imagine",
      illustration: "billing",
      expandTitle: "Run any pricing model you can imagine",
      expandLead:
        "Spin up subscriptions, usage meters, hybrid plans, and one-off invoices without rebuilding your billing stack.",
      bullets: [
        "Launch new plans in minutes",
        "Meter usage with millisecond precision",
        "Reduce involuntary churn",
        "Recognize revenue automatically",
      ],
      ctaPrimary: "Explore billing",
      ctaSecondary: "See pricing details",
    },
    {
      id: "agentic",
      title: "Power commerce that AI agents can drive",
      illustration: "agentic",
      expandTitle: "Power commerce that AI agents can drive",
      expandLead:
        "Let AI agents transact safely on behalf of your customers with scoped authority, audit trails, and reversible flows.",
      bullets: [
        "Issue agents scoped credentials",
        "Attribute revenue to the right surface",
        "Settle disputes with full provenance",
        "Ship conversational checkout in days",
      ],
      ctaPrimary: "Explore agentic",
      ctaSecondary: "See pricing details",
    },
    {
      id: "issuing",
      title: "Launch a card program in days",
      illustration: "issuing",
      expandTitle: "Launch a card program in days",
      expandLead:
        "Design, issue, and operate virtual and physical cards purpose-built for your customers, contractors, or partners.",
      bullets: [
        "Stand up programs without the bank lift",
        "Set per-card spend rules",
        "Embed cards inside your product",
        "Ship physical cards worldwide",
      ],
      ctaPrimary: "Explore issuing",
      ctaSecondary: "See pricing details",
    },
    {
      id: "borderless",
      title: "Move money across borders, including stablecoins",
      illustration: "borderless",
      expandTitle: "Move money across borders, including stablecoins",
      expandLead:
        "Send and receive value across rails—fiat, stablecoins, on-chain settlement—through a single API surface.",
      bullets: [
        "Pay out to 195 markets",
        "Bridge fiat and stablecoins on demand",
        "Lock in FX, hedge currency risk",
        "Stay compliant in every region",
      ],
      ctaPrimary: "Explore global money",
      ctaSecondary: "See pricing details",
    },
    {
      id: "embed",
      title: "Build payments into your own product",
      illustration: "embed",
      expandTitle: "Build payments into your own product",
      expandLead:
        "Bring payouts, accounts, and financial services into your platform with prebuilt components and a flexible API.",
      bullets: [
        "Onboard customers in minutes",
        "Customize the entire flow",
        "Move money in 50+ currencies",
        "Offload risk and compliance",
      ],
      ctaPrimary: "Explore connect",
      ctaSecondary: "See pricing details",
    },
  ],
};

export const notSureCTA = {
  lead: "Not sure where to begin?",
  rest: "Tell us about your business and we'll match you with the right starting point.",
  cta: "Find what fits",
};

export const aiBanner = {
  title: "Building the rails for the AI economy",
  cta: "Watch now",
  brandSub: "Hyun Kim sessions",
};

export const statsHero = {
  title: ["The backbone", "of internet commerce"],
  stats: [
    { value: "135+", label: "currencies and payment methods supported" },
    { value: "$1.9T", label: "in volume processed last year" },
    { value: "99.999%", label: "historical uptime across services" },
    { value: "200M+", label: "active subscriptions on Hyun Kim Billing" },
  ],
};

export const enterprise = {
  intro: {
    lead: "Power for businesses at every scale.",
    rest: "A reliable platform that adapts as your business does.",
  },
  transform: {
    title: "Reinvent enterprise finance with one shared stack",
    rest:
      "Some of the most-recognized companies in the world run their commerce on Hyun Kim—consolidating regions, products, and lines of business onto a single platform.",
    cta: "Hyun Kim for enterprises",
  },
  case: {
    badge: "Heretz unifies global commerce on Hyun Kim.",
    cta: "Read the story",
    stats: [
      { value: "160", label: "countries" },
      { value: "11K+", label: "locations worldwide" },
    ],
    productsLabel: "Products used",
    products: "Payments, Terminal, Connect, Radar, and Hyun Kim Sigma",
  },
  accordionItems: [
    {
      icon: "URBN",
      title: "URBM consolidates billions in online and in-store revenue onto Hyun Kim.",
    },
    {
      icon: "IC",
      title: "Instaqart routes grocery delivery payments through Hyun Kim.",
    },
    {
      icon: "LM",
      title: "Le Monde modernizes subscriber payments with Hyun Kim.",
    },
  ],
  realize: {
    title: "Get there faster with a team behind you",
    cards: [
      {
        icon: "services",
        title: "Professional services.",
        rest: "Hands-on guidance for implementations, migrations, and integrations of every shape.",
        cta: "View services",
      },
      {
        icon: "partners",
        title: "Certified experts.",
        rest: "Work with a vetted partner that can integrate and run Hyun Kim on your behalf.",
        cta: "View partners",
      },
      {
        icon: "support",
        title: "Support plans.",
        rest: "Pick the response time and coverage your team needs, with tiered plans for every stage.",
        cta: "View plans",
      },
    ],
  },
};

export const startup = {
  intro: {
    lead: "A finance foundation built for high-growth startups",
    rest:
      "From the first invoice to the IPO, founders pick Hyun Kim to handle payments, billing, and global rails without slowing down.",
    cta: "Hyun Kim for startups",
  },
  cases: [
    {
      id: "lovable",
      brand: "Liveable",
      story: "Liveable scales an AI-native product on Hyun Kim's payments stack.",
      cta: "Read the story",
      visual: "lovable",
    },
    {
      id: "runway",
      brand: "runaway",
      story: "Runaway saves engineering time with Hyun Kim's no-code tooling.",
      cta: "Read the story",
      visual: "runway",
    },
    {
      id: "supabase",
      brand: "supacase",
      story: "Supacase ships its backend-as-a-service to 150 markets with Hyun Kim.",
      cta: "Read the story",
      visual: "supabase",
    },
    {
      id: "linear",
      brand: "Liner",
      story: "Liner partners with Hyun Kim to run billing for its product teams.",
      cta: "Read the story",
      visual: "linear",
    },
  ],
  programs: [
    {
      title: "Startups program.",
      rest: "Credits, a focused community, and expert resources for early-stage founders.",
      cta: "Apply now",
      gradientClass: "gradient-startups-card",
    },
    {
      title: "Atlas.",
      rest: "Incorporate, bank, and accept payments in two business days flat.",
      cta: "Start a company",
      gradientClass: "gradient-atlas-card",
    },
  ],
};

export const platform = {
  intro: {
    lead: "Make your platform a full financial operating system",
    rest:
      "Vertical SaaS platforms—from the Fortune 100 to the Cloud 100—embed Hyun Kim to add payments, payouts, and financial products their customers expect.",
    cta: "Hyun Kim for platforms",
  },
  subCards: [
    {
      icon: "rocket",
      title: "Ship to market faster.",
      rest: "Embed payments components and no-code tools to launch with less engineering overhead.",
      cta: "Read the guide",
    },
    {
      icon: "growth",
      title: "Unlock new revenue lines.",
      rest: "Monetize platform transactions—payments take rates, interchange, financing, and more.",
      cta: "Read the guide",
    },
    {
      icon: "risk",
      title: "Stay ahead of platform risk.",
      rest: "Use built-in tools for compliance, fraud, credit risk, and account security around the world.",
      cta: "Read the guide",
    },
  ],
};

export const testimonial = {
  quote:
    "Working with Hyun Kim gives our team a global partner—one we can trust to keep up as our customers expand, launch, and reinvent how they reach the market.",
  author: "Kourtnie Maier",
  role: "Lead Product Manager of Payments, Mindbloom",
  storyCta: "Read the story",
  logos: ["mindbloom", "JOBBR", "subspark", "lightskip"],
};

export const developer = {
  intro: {
    lead: "Reliable, extensible rails for every stack.",
    rest: "Drop Hyun Kim into your codebase with the integration shape that fits—API, SDK, partner platform, or no-code.",
    ctaPrimary: "View developer docs",
    ctaSecondary: "Open on GitHub",
  },
  connect: {
    title: "Connect to the systems you already run.",
    rest: "Route payments across processors, fan out custom workflows, and plug into third-party apps with first-class APIs.",
  },
  scale: {
    title: "Scale with confidence.",
    rest: "Thousands of transactions per second, peak traffic, peak season—handled with consistent speed and reliability.",
    stats: [
      { value: "500M+", label: "API requests per day" },
      { value: "10K+", label: "API requests per second" },
      { value: "150K+", label: "transactions per minute" },
    ],
  },
  integration: {
    title: "Pick the integration path that fits.",
    rest: "AI-powered support, rich docs, and built-in debugging tools get you up and running with the right option for your team.",
    paths: [
      {
        title: "No code?",
        rest: "Run billing, in-person payments, or payment links straight from the Dashboard—no code required.",
        cta: "Explore no-code",
      },
      {
        title: "Pre-integrated platforms.",
        rest: "Browse the platforms that ship Hyun Kim alongside their site or commerce tools.",
        cta: "See directory",
      },
      {
        title: "Build your own.",
        rest: "Use SDKs, APIs, the MCP server, and AI dev tools to ship and run a custom integration.",
        cta: "Get started",
      },
    ],
  },
};

export const whatsHappening = {
  title: "What's happening",
  subtitle: "Fresh from the Hyun Kim desk.",
  primary: {
    badge: "Annual letter",
    year: "2025",
    body:
      "Businesses on Hyun Kim generated $1.9T last year. Our annual letter unpacks the trends reshaping the internet economy—faster international expansion, stablecoin progress, agentic commerce, and more.",
    cta: "Read the letter",
  },
  thumbs: [
    { id: "tower", label: "Tower" },
    { id: "portrait", label: "Portrait" },
    { id: "stripe", label: "Sessions" },
  ],
};

export const bookOfWeek = {
  title: "Book of the week",
  subtitle: "Big ideas, free to read.",
  bookTitle: "Openness and the Theory of Conjecture",
  author: "K. Popper-Adjacent",
  body:
    "Progress comes from putting our beliefs under pressure, not from defending them. This collection of essays argues that science, history, and politics all sharpen when we welcome correction over comfort. The thesis is plain: certainty isn't on offer, so the willingness to be wrong is the engine of better answers.",
  pressCta: "Hyun Kim Press",
  worksCta: "Works in Progress",
};

export const readyToStart = {
  lead: "Ready to get started?",
  rest:
    "Open an account in minutes, or talk to our team about a tailored package for your business.",
  ctaPrimary: "Start now",
  ctaSecondary: "Contact sales",
  columns: [
    {
      title: "See what you'll pay",
      rest: "Per-transaction pricing with no hidden line items.",
      cta: "Pricing details",
    },
    {
      title: "Start building",
      rest: "Go live with Hyun Kim in as little as ten minutes.",
      cta: "Integration options",
    },
  ],
};

export const footer = {
  columns: [
    {
      heading: "Products and pricing",
      links: [
        "Pricing",
        "Atlas",
        "Authorization Boost",
        "Billing",
        "Capital",
        "Capital for platforms",
        "Checkout",
        "Climate",
        "Connect",
        "Crypto",
        "Crypto Onramp",
        "Data Pipeline",
        "Elements",
        "Subscriptions",
        "Treasury",
        "Treasury for platforms",
        "Financial Connections",
        "Global Payouts",
        "Identity",
        "Invoicing",
        "Issuing",
        "Link",
        "Managed Payments",
        "Payments",
        "Payment links",
        "Payment methods",
        "Radar",
        "Revenue Recognition",
        "Hyun Kim Sigma",
        "Tax",
        "Terminal",
        "Usage-based billing",
      ],
    },
    {
      heading: "Solutions",
      links: [
        "Enterprises",
        "Startups",
        "Agentic commerce",
        "Crypto",
        "Ecommerce",
        "Embedded finance",
        "Finance automation",
        "Global businesses",
        "In-app payments",
        "Marketplaces",
        "Platforms",
        "SaaS",
        "AI companies",
        "Creator economy",
        "Hospitality, travel, and leisure",
        "Insurance",
        "Media and entertainment",
        "Nonprofits",
        "Public sector",
        "Retail",
      ],
      developers: {
        heading: "Developers",
        links: [
          "Documentation",
          "API reference",
          "API status",
          "API changelog",
          "Libraries and SDKs",
          "Developer blog",
        ],
      },
    },
    {
      heading: "Integrations and custom solutions",
      links: [
        "App Marketplace",
        "Partner ecosystem",
        "Professional services",
      ],
      resources: {
        heading: "Resources",
        links: [
          "Product roadmap",
          "Guides",
          "Customer stories",
          "Blog",
          "Sessions annual conference",
          "Privacy and terms",
          "Prohibited and restricted businesses",
          "Licenses",
          "Sitemap",
          "Cookie settings",
          "Your privacy choices",
          "More resources",
        ],
      },
    },
    {
      heading: "Company",
      links: ["Jobs", "Newsroom", "Hyun Kim Press", "Contact sales"],
      support: {
        heading: "Support",
        links: [
          "Get support",
          "Managed support plans",
          "CA residents: +1 888 926 2289",
        ],
        signIn: "Sign in",
      },
    },
  ],
  locale: "United States (English)",
  copyright: "© 2026 Hyun Kim, LLC.",
};
