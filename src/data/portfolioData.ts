export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "AI & Automation" | "Web & SaaS" | "Business Systems";
  role: string;
  timeline: string;
  status: "Live Production" | "Live Studio Platform" | "Live Deployed System" | "Live (Paper Mode)";
  description: string;
  longDescription: string;
  thumbnail: string;
  gallery: { url: string; caption: string }[];
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  privacyNotice?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location?: string;
  description: string;
  tags: string[];
  keyAchievements: string[];
}

export interface EducationItem {
  degree: string;
  institution?: string;
  period: string;
  details?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  level: string;
}

export const PERSONAL_INFO = {
  name: "P Pirunthan",
  monogram: "PP",
  headline: "Full-Stack Developer & AI Automation Specialist",
  tagline: "Building resilient web applications, intelligent AI workflows, and business-critical systems.",
  founderTitle: "Founder of BrandHive Studio",
  location: "Negombo, Sri Lanka",
  email: "piru.exports@gmail.com",
  phone: "+94 70 390 5441",
  phoneDisplay: "+94 70 390 5441",
  whatsappUrl: "https://wa.me/94703905441",
  cvDownloadPath: "/assets/cv/cv.pdf",
  portraitPath: "/assets/profile/portrait.png",
  summary:
    "Full-Stack Developer and AI Automation Specialist with hands-on experience building web applications, business systems, and AI-powered workflows. Founder of BrandHive Studio, combining technical project leadership with a proven background in operations, sales, customer support, and digital marketing. Focused on practical, client-oriented solutions for businesses, startups, and agencies.",
  stats: [
    { label: "Real-World Projects", value: "7+" },
    { label: "Studio Founded", value: "BrandHive" },
    { label: "Languages Spoken", value: "3 Fluent" },
    { label: "Architecture", value: "End-to-End" },
  ],
  coreValues: [
    {
      title: "Business-First Engineering",
      description:
        "Technical architecture guided by practical business goals, operational efficiency, and tangible user outcomes.",
      icon: "TrendingUp",
    },
    {
      title: "AI-Powered Automation",
      description:
        "Designing intelligent conversational agents, automated pipelines, and workflow enhancers that eliminate repetitive bottlenecks.",
      icon: "Bot",
    },
    {
      title: "Resilient & Offline-First",
      description:
        "Building mission-critical systems that continue working through network degradation with seamless hybrid cloud sync.",
      icon: "Cpu",
    },
    {
      title: "Cross-Functional Leadership",
      description:
        "Bridging software development with deep operational management, customer experience, and executive project delivery.",
      icon: "Users",
    },
  ],
};

export const SKILL_CATEGORIES = [
  {
    name: "Frontend & Web",
    skills: [
      { name: "Next.js", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Framer Motion", level: "Proficient" },
      { name: "HTML5 / Responsive UI", level: "Advanced" },
    ],
  },
  {
    name: "Backend & Databases",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Proficient" },
      { name: "Python", level: "Proficient" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "PostgreSQL", level: "Proficient" },
      { name: "SQLite (Offline/Local)", level: "Advanced" },
      { name: "Prisma ORM", level: "Proficient" },
      { name: "Supabase", level: "Proficient" },
    ],
  },
  {
    name: "AI & Workflow Automation",
    skills: [
      { name: "AI Chatbots & Conversational Agents", level: "Advanced" },
      { name: "Structured Knowledge Integration", level: "Advanced" },
      { name: "WhatsApp Cloud API / Bot Automation", level: "Advanced" },
      { name: "Prompt Engineering & Guardrails", level: "Advanced" },
      { name: "Market Scanners & CCXT Automation", level: "Proficient" },
      { name: "Webhook & Email Alert Pipelines", level: "Advanced" },
    ],
  },
  {
    name: "Infrastructure & Tools",
    skills: [
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Vercel Deployment", level: "Advanced" },
      { name: "Cloudflare R2", level: "Proficient" },
      { name: "Hybrid POS / Offline Sync", level: "Advanced" },
      { name: "Debugging & Performance Tuning", level: "Advanced" },
    ],
  },
  {
    name: "Business & Operations",
    skills: [
      { name: "Technical Project Planning", level: "Lead" },
      { name: "Operations & Process Design", level: "Experienced" },
      { name: "Client Management & BPO", level: "Experienced" },
      { name: "Sales Strategy & FMCG", level: "Experienced" },
      { name: "Digital Marketing & Brand Strategy", level: "Experienced" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "brandhive-studio",
    title: "BrandHive Studio",
    subtitle: "Creative & Technology Studio Digital Headquarters",
    category: "Web & SaaS",
    role: "Founder & Full-Stack Developer",
    timeline: "May 2026 – Present",
    status: "Live Studio Platform",
    description:
      "Digital headquarters for BrandHive Studio, delivering modern web applications, AI-enabled business workflows, and high-conversion client platforms.",
    longDescription:
      "As Founder and Lead Developer of BrandHive Studio, designed and implemented the complete digital agency presence. The platform showcases creative and technological services, structured packages, dynamic case studies, and automated client consultation funnels. Engineered with modern Next.js architecture, responsive typography, interactive sections, and high performance.",
    thumbnail: "/assets/brandhive/home.png",
    gallery: [
      { url: "/assets/brandhive/home.png", caption: "BrandHive Studio — Hero & Brand Experience" },
      { url: "/assets/brandhive/about.png", caption: "About Studio — Vision & Cross-Disciplinary Approach" },
      { url: "/assets/brandhive/services.png", caption: "Service Tiers — Digital, Web & AI Business Solutions" },
      { url: "/assets/brandhive/portfolio.png", caption: "Portfolio Grid — Featured Work & Implementations" },
      { url: "/assets/brandhive/process.png", caption: "Delivery Process — Structured 5-Step Methodology" },
      { url: "/assets/brandhive/insights.png", caption: "Knowledge Hub — Agency Insights & Thought Leadership" },
      { url: "/assets/brandhive/contact.png", caption: "Inquiry Funnel — Tailored Consultation Form" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    highlights: [
      "Modular services and structured pricing breakdown for clear client conversion.",
      "Custom responsive design system with fluid typography and dark mode aesthetics.",
      "Integrated inquiry pipeline for rapid client onboarding and scope definition.",
    ],
  },
  {
    id: "hive-ai",
    title: "HIVE AI — Business AI Assistant",
    subtitle: "Website-Integrated Conversational AI Agent",
    category: "AI & Automation",
    role: "AI & Full-Stack Developer",
    timeline: "BrandHive Studio Project",
    status: "Live Deployed System",
    description:
      "Website-integrated AI assistant connected to structured business knowledge (services, packages, add-ons, and FAQs) for interactive client inquiries.",
    longDescription:
      "Developed HIVE AI, an intelligent website-embedded conversational assistant integrated into BrandHive Studio. The assistant is grounded in curated business knowledge, enabling potential clients to explore services, request custom scope breakdowns, understand add-on deliverables, and receive immediate answers to complex questions 24/7. Continuously refined for response accuracy and multilingual expansion.",
    thumbnail: "/assets/hive-ai/chat-bot.png",
    gallery: [
      { url: "/assets/hive-ai/chat-bot.png", caption: "HIVE AI — Floating Interactive Chat Interface" },
      { url: "/assets/hive-ai/response.png", caption: "Full-Context Query Resolution & Service Presentation" },
      { url: "/assets/hive-ai/mobile.png", caption: "Mobile Responsive View with Frictionless Chat" },
    ],
    technologies: ["TypeScript", "Next.js", "REST APIs", "Prompt Engineering", "Tailwind CSS"],
    highlights: [
      "Connected directly to structured studio knowledge base for deterministic, relevant answers.",
      "Handles nuanced queries regarding development packages, timelines, and technical add-ons.",
      "Responsive widget designed for zero disruption to browsing user experience.",
    ],
  },
  {
    id: "whatsapp-ai-agent",
    title: "BrandHive WhatsApp AI Agent",
    subtitle: "Automated Multilingual Messaging & Client Intake Agent",
    category: "AI & Automation",
    role: "AI Automation Specialist",
    timeline: "BrandHive Studio Project",
    status: "Live Deployed System",
    description:
      "WhatsApp-based AI agent supported by structured business data with multilingual conversational capabilities for inbound customer management.",
    longDescription:
      "Engineered an automated WhatsApp customer agent designed to streamline initial customer touchpoints, handle multi-language inquiries (English, Sinhala, Tamil), and provide accurate company information. Backed by structured business databases and webhook endpoints. Customer privacy is strictly preserved: all showcased conversations and screenshots are sanitized with private customer data excluded.",
    thumbnail: "/assets/whatsapp-agent/whatsapp-bot.png",
    gallery: [
      { url: "/assets/whatsapp-agent/whatsapp-bot.png", caption: "WhatsApp AI Bot — Service Discovery Dialogue" },
      { url: "/assets/whatsapp-agent/multilanguage.png", caption: "Multilingual Support — Inquiries in English, Tamil & Sinhala" },
    ],
    technologies: ["Node.js / Python", "WhatsApp API / Webhooks", "NLP", "Structured Knowledge Engine"],
    highlights: [
      "Multilingual conversational engine capable of understanding natural customer inquiries.",
      "Automates lead capture, service inquiries, and appointment scheduling inside WhatsApp.",
      "Built with strict data privacy protocols — customer conversations sanitized.",
    ],
    privacyNotice: "Private customer conversations, contact details, and proprietary client chats are strictly excluded to protect confidentiality.",
  },
  {
    id: "screenguard-finder",
    title: "UZEE TECH ScreenGuard Finder",
    subtitle: "Interactive Device Compatibility & Catalog Engine",
    category: "Web & SaaS",
    role: "Full-Stack Developer",
    timeline: "Client Project | UZEE TECH",
    status: "Live Production",
    liveUrl: "https://finder.uzeetech.com.lk",
    description:
      "Web-based compatibility finder backed by a structured device/model dataset, enabling customers and retail staff to instantly find matching screen protection.",
    longDescription:
      "Architected and deployed a dedicated web-based compatibility search engine for UZEE TECH. Retail customers and counter staff can search through thousands of device models across Apple, Samsung, Xiaomi, Huawei, and others to find exactly compatible screen protectors in seconds. Includes a full-featured admin management panel, authentication, and live cloud hosting.",
    thumbnail: "/assets/screenguard-finder/home.png",
    gallery: [
      { url: "/assets/screenguard-finder/home.png", caption: "Compatibility Finder — Instant Device Search Engine" },
      { url: "/assets/screenguard-finder/search.png", caption: "Model Interaction — Fast SKU & Compatibility Lookup" },
      { url: "/assets/screenguard-finder/home-light.png", caption: "Light Mode Viewport for High-Glare Retail Counters" },
      { url: "/assets/screenguard-finder/admin.png", caption: "Admin Panel — Real-Time Model & Inventory Management" },
      { url: "/assets/screenguard-finder/login.png", caption: "Staff Authentication Portal" },
      { url: "/assets/screenguard-finder/mobile.png", caption: "Mobile In-Store Experience for Sales Staff" },
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Supabase / SQLite"],
    highlights: [
      "Active production deployment live at finder.uzeetech.com.lk.",
      "Significantly accelerated retail counter checkout times and eliminated compatibility mistakes.",
      "Protected admin panel for adding new smartphone releases and updating stock matches.",
    ],
  },
  {
    id: "uzee-tech-website",
    title: "UZEE TECH Official Website",
    subtitle: "Modern Tech Showcase & Retail Presentation",
    category: "Web & SaaS",
    role: "Lead Web Developer",
    timeline: "Client Project | UZEE TECH",
    status: "Live Production",
    description:
      "Modern brand showcase website for UZEE TECH displaying their premium smartphone accessories, protection services, and retail locations.",
    longDescription:
      "Built the comprehensive web presence for UZEE TECH, a premier mobile protection and tech accessories retailer. Developed with clean design aesthetics, comprehensive service pages, photo galleries of installations, and contact integration. Designed for high conversion and optimized mobile usability.",
    thumbnail: "/assets/uzee-tech/home.png",
    gallery: [
      { url: "/assets/uzee-tech/home.png", caption: "UZEE TECH — Brand Identity & Accessories Showcase" },
      { url: "/assets/uzee-tech/about.png", caption: "Company Profile & Quality Commitment" },
      { url: "/assets/uzee-tech/services.png", caption: "Protection & Installation Services Catalog" },
      { url: "/assets/uzee-tech/gallery.png", caption: "Retail Gallery & Customer Installations" },
      { url: "/assets/uzee-tech/contact.png", caption: "Contact & Store Location Finder" },
      { url: "/assets/uzee-tech/mobile.png", caption: "Mobile Responsive Layout" },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    highlights: [
      "Sleek contemporary design that elevated brand perception in the competitive mobile accessories market.",
      "Fully responsive grid layouts and rapid asset loading.",
      "Clear call-to-actions directing customers to local store visits and the ScreenGuard Finder tool.",
    ],
  },
  {
    id: "muthuwadige-erp",
    title: "Muthuwadige Hardware ERP",
    subtitle: "Hybrid Offline-First POS & Inventory Management System",
    category: "Business Systems",
    role: "Full-Stack / Systems Contributor",
    timeline: "Client Enterprise Project",
    status: "Live Deployed System",
    description:
      "Contributed to an offline-first, hybrid POS/ERP system with local and cloud components for a high-volume retail hardware operation.",
    longDescription:
      "Contributed to the design and development of an offline-resilient POS and enterprise resource planning system for Muthuwadige Hardware. Engineered to withstand power and internet interruptions without stopping cashier checkouts, using local caching, background cloud synchronisation, stock tracking, and supplier ordering. Sensitive financial data is completely sanitized.",
    thumbnail: "/assets/muthuwadige-erp/dashboard.png",
    gallery: [
      { url: "/assets/muthuwadige-erp/dashboard.png", caption: "Operations Dashboard — Sanitized Revenue & Activity Metrics" },
      { url: "/assets/muthuwadige-erp/login.png", caption: "Role-Based Staff Access & Security Gate" },
      { url: "/assets/muthuwadige-erp/Pasted image (2).png", caption: "POS Cashier Terminal & Fast Barcode/Search Billing" },
      { url: "/assets/muthuwadige-erp/Pasted image (4).png", caption: "Hardware Stock Ledger & Low-Stock Alerts" },
      { url: "/assets/muthuwadige-erp/Pasted image (6).png", caption: "Item Categorization & Bulk Pricing Controls" },
      { url: "/assets/muthuwadige-erp/Pasted image (7).png", caption: "Supplier Purchase Orders & Delivery Receipts" },
    ],
    technologies: ["React", "Node.js", "Express", "SQLite / PostgreSQL", "Local Caching", "Tailwind CSS"],
    highlights: [
      "Offline-first architecture ensures cashier registers operate seamlessly during internet outages.",
      "Multi-category hardware inventory indexing tens of thousands of individual SKUs.",
      "Strict data sanitization applied to protect proprietary business metrics.",
    ],
    privacyNotice: "All client revenue metrics, customer phone numbers, and confidential inventory supplier costs are sanitized.",
  },
  {
    id: "trading-automation",
    title: "Hive Trading Automation V2",
    subtitle: "Quantitative Spot Market Scanner & Paper-Trading Engine",
    category: "AI & Automation",
    role: "Independent Systems Developer",
    timeline: "Active Project | Paper Mode",
    status: "Live (Paper Mode)",
    description:
      "Paper-trading market-scanning system for Binance Spot with strict risk controls, real-time indicator evaluation, and instant email alerts.",
    longDescription:
      "Developed an algorithmic market scanner and paper-trading simulator for Binance Spot. Built to scan multiple currency pairs in real time, evaluate multi-timeframe indicator confluence, and execute simulated paper trades while strictly enforcing max-loss limits and position sizing rules. The system is active in paper-simulation mode and does not execute real-money trades; live capital trading is intentionally disabled, and no profitability or financial returns are implied.",
    thumbnail: "/assets/trading-bot/dashboard.png",
    gallery: [
      { url: "/assets/trading-bot/dashboard.png", caption: "Scanner Dashboard — Multi-Pair Momentum & Volatility Tracker" },
      { url: "/assets/trading-bot/trade-status.png", caption: "Simulated Paper-Trading Execution & Position Journal" },
      { url: "/assets/trading-bot/email-notify.png", caption: "Automated Email Notification & Event Webhook Trigger" },
    ],
    technologies: ["Python", "CCXT Library", "Pandas", "WebSockets / REST", "SMTP Alert Webhooks", "React"],
    highlights: [
      "Real-time market scanning across cryptocurrency pairs on Binance Spot.",
      "Strict automated risk boundaries: maximum drawdown stops and dynamic trailing risk limits.",
      "Active exclusively in simulated paper-trading mode — zero real-money execution or profitability claims.",
    ],
    privacyNotice: "Operational Notice: Active system running strictly in PAPER simulation mode. Live trading is intentionally disabled; this project does not execute real-money trades and makes no claims of profitability or investment returns.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "May 2026 – Present",
    role: "Founder & Lead Developer",
    company: "BrandHive Studio",
    location: "Sri Lanka",
    description:
      "Lead technical project planning, full-stack web architecture, and AI automation delivery. Design and engineer client-focused web platforms, conversational AI bots, and digital transformation solutions for growing businesses.",
    tags: ["Next.js", "TypeScript", "AI Workflows", "Business Strategy", "Client Delivery"],
    keyAchievements: [
      "Launched BrandHive Studio digital agency platform and its proprietary HIVE AI assistant.",
      "Delivered custom web applications, compatibility tools, and WhatsApp automations for commercial clients.",
      "Established standard development workflows combining modern full-stack web technologies with AI integrations.",
    ],
  },
  {
    period: "2025 – Apr 2026",
    role: "Sales & Operational Manager",
    company: "Quick Delivery Express (PVT) Ltd",
    description:
      "Managed end-to-end logistics operations, team coordination, sales growth, and client communications. Streamlined dispatch schedules and implemented technology-assisted operational tracking.",
    tags: ["Operations Management", "Logistics", "Sales Leadership", "Process Optimization"],
    keyAchievements: [
      "Supervised nationwide delivery dispatch schedules and reduced fulfillment latency.",
      "Spearheaded operational reporting improvements bridging field teams and management.",
    ],
  },
  {
    period: "2024 – 2025",
    role: "FMCG Sales Manager",
    company: "AgroVista Plantations (PVT) Ltd",
    description:
      "Directed distribution channels, wholesale account relationships, and product sales quotas across key regional retail networks.",
    tags: ["FMCG Distribution", "Account Management", "Revenue Growth", "B2B Negotiations"],
    keyAchievements: [
      "Expanded regional retail distribution footprint and maintained high vendor retention.",
      "Managed inventory forecasting and distributor coordination.",
    ],
  },
  {
    period: "2023 – 2024",
    role: "Sales Executive & Social Media Executive",
    company: "Green Computers L.L.C.",
    location: "UAE",
    description:
      "Managed retail computer hardware sales, customer consultations, and brand visibility across digital social media channels in the United Arab Emirates market.",
    tags: ["International Sales", "Tech Hardware", "Social Media Marketing", "Customer Relations"],
    keyAchievements: [
      "Consulted retail and corporate clients on hardware specifications, upgrades, and IT components.",
      "Grew digital engagement and inbound hardware inquiries via targeted social channels.",
    ],
  },
  {
    period: "2022 – 2023",
    role: "Operations Executive & Social Media Executive",
    company: "Quick Delivery Express (PVT) Ltd",
    description:
      "Coordinated dispatch workflows, customer inquiry resolutions, and company digital branding campaigns.",
    tags: ["Operations", "Social Media", "Customer Experience", "Workflow Tracking"],
    keyAchievements: [
      "Maintained high customer satisfaction through proactive delivery resolution.",
    ],
  },
  {
    period: "2021 – 2022",
    role: "Customer Support Executive",
    company: "Sterling BPO Solutions (PVT) Ltd",
    description:
      "Provided high-standard international customer support, issue diagnosis, and customer communication across multi-channel BPO operations.",
    tags: ["BPO Operations", "Customer Support", "Conflict Resolution", "Communication"],
    keyAchievements: [
      "Consistently achieved top-tier First Contact Resolution (FCR) and customer CSAT metrics.",
    ],
  },
  {
    period: "2020 – 2021",
    role: "Marketing Executive & Social Media Executive",
    company: "DM Markenware (PVT) Ltd",
    description:
      "Planned and executed digital advertising campaigns, product marketing collaterals, and customer outreach initiatives.",
    tags: ["Digital Marketing", "Content Creation", "Social Advertising", "Lead Generation"],
    keyAchievements: [
      "Created structured social media campaigns increasing brand visibility and product inquiries.",
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Professional Certificate in Software Engineering",
    period: "Currently Pursuing",
    details: "Focused on advanced algorithms, software design patterns, full-stack architecture, and cloud systems.",
  },
  {
    degree: "Professional Diploma in English & IT / ICT",
    institution: "Vocational & Technical Training Institute",
    period: "2018",
    details: "Comprehensive study covering computer applications, network fundamentals, programming basics, and business English.",
  },
  {
    degree: "G.C.E. Ordinary Level (O/L)",
    institution: "Ministry of Education, Sri Lanka",
    period: "2017",
    details: "Completed secondary education with strong foundations in English, Mathematics, and Science.",
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: "English", proficiency: "Fluent", level: "Professional & Technical Working Proficiency" },
  { name: "Sinhala", proficiency: "Fluent", level: "Native / Bilingual Proficiency" },
  { name: "Tamil", proficiency: "Fluent", level: "Native / Bilingual Proficiency" },
];
