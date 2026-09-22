export interface Project {
  id: string;
  title: string;
  subtitle: string;
  label?: string;
  category: "AI & Automation" | "Web & SaaS" | "Business Systems" | "Machine Learning" | "Web Application" | "AI & Full-Stack Development" | "Business Intelligence & Data Analytics";
  role: string;
  timeline: string;
  status: "Live Production" | "Live Studio Platform" | "Live Deployed System" | "Live (Paper Mode)" | "Academic Project";
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
  cvDownloadPath: "/assets/cv/P_Pirunthan_Professional_CV.pdf",
  portraitPath: "/assets/profile/portrait.png",
  brandIconPath: "/assets/branding/name-icon.png",
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
    liveUrl: "https://www.brandhivestudio.com.lk/",
    description:
      "Digital headquarters for BrandHive Studio, delivering modern web applications, AI-enabled business workflows, and high-conversion client platforms.",
    longDescription:
      "As Founder and Lead Developer of BrandHive Studio, designed and implemented the complete digital agency presence. The platform showcases creative and technological services, structured packages, dynamic case studies, and automated client consultation funnels. Engineered with modern Next.js architecture, responsive typography, interactive sections, and high performance.",
    thumbnail: "/assets/brandhive/Home.png",
    gallery: [
      { url: "/assets/brandhive/Home.png", caption: "BrandHive Studio — Hero & Brand Experience" },
      { url: "/assets/brandhive/About.png", caption: "About Studio — Vision & Cross-Disciplinary Approach" },
      { url: "/assets/brandhive/Services.png", caption: "Service Tiers — Digital, Web & AI Business Solutions" },
      { url: "/assets/brandhive/Portfolio.png", caption: "Portfolio Grid — Featured Work & Implementations" },
      { url: "/assets/brandhive/process.png", caption: "Delivery Process — Structured 5-Step Methodology" },
      { url: "/assets/brandhive/Insights.png", caption: "Knowledge Hub — Agency Insights & Thought Leadership" },
      { url: "/assets/brandhive/Contact.png", caption: "Inquiry Funnel — Tailored Consultation Form" },
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
      { url: "/assets/whatsapp-agent/Multilanguage.png", caption: "Multilingual Support — Inquiries in English, Tamil & Sinhala" },
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
    thumbnail: "/assets/screenguard-finder/Home.png",
    gallery: [
      { url: "/assets/screenguard-finder/Home.png", caption: "Compatibility Finder — Instant Device Search Engine" },
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
    liveUrl: "https://uzeetech.com.lk/",
    description:
      "Modern brand showcase website for UZEE TECH displaying their premium smartphone accessories, protection services, and retail locations.",
    longDescription:
      "Built the comprehensive web presence for UZEE TECH, a premier mobile protection and tech accessories retailer. Developed with clean design aesthetics, comprehensive service pages, photo galleries of installations, and contact integration. Designed for high conversion and optimized mobile usability.",
    thumbnail: "/assets/uzee-tech/Home.png",
    gallery: [
      { url: "/assets/uzee-tech/Home.png", caption: "UZEE TECH — Brand Identity & Accessories Showcase" },
      { url: "/assets/uzee-tech/About.png", caption: "Company Profile & Quality Commitment" },
      { url: "/assets/uzee-tech/Services.png", caption: "Protection & Installation Services Catalog" },
      { url: "/assets/uzee-tech/Gallery.png", caption: "Retail Gallery & Customer Installations" },
      { url: "/assets/uzee-tech/Contact.png", caption: "Contact & Store Location Finder" },
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
    thumbnail: "/assets/muthuwadige-erp/Dashboard.png",
    gallery: [
      { url: "/assets/muthuwadige-erp/Dashboard.png", caption: "Operations Dashboard — Sanitized Revenue & Activity Metrics" },
      { url: "/assets/muthuwadige-erp/Login.png", caption: "Role-Based Staff Access & Security Gate" },
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
    thumbnail: "/assets/trading-bot/Dashboard.png",
    gallery: [
      { url: "/assets/trading-bot/Dashboard.png", caption: "Scanner Dashboard — Multi-Pair Momentum & Volatility Tracker" },
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
  {
    id: "dental-clinic-system",
    title: "Sunrise Dental Clinic Management System",
    subtitle: "Centralized Clinic Operations & Appointment Management",
    label: "Academic Project",
    category: "Web Application",
    role: "Academic Project • Individual contribution not specified",
    timeline: "Academic Project",
    status: "Academic Project",
    description:
      "A centralized clinic management application for patient and dentist records, appointment scheduling, and billing. Uses a layered MVC architecture to organize clinic workflows and support authorized staff.",
    longDescription:
      "Built as an academic project, this clinic management system provides a unified platform for managing patient records, dentist profiles, appointment workflows, and billing operations. The application enforces role-based access for receptionists, dentists, and administrators, and implements service-layer availability checks to prevent overlapping bookings. REST endpoints expose structured JSON for system integration.",
    thumbnail: "/assets/dental-clinic/Patient Management Screen.png",
    gallery: [
      { url: "/assets/dental-clinic/Patient Management Screen.png", caption: "Patient Management — Records & Profile Dashboard" },
      { url: "/assets/dental-clinic/Appointment Management Screens.png", caption: "Appointment Scheduling — Conflict-Aware Booking Interface" },
      { url: "/assets/dental-clinic/Billing Management Screens.png", caption: "Billing — Treatment Invoices, Fees & Receipt History" },
      { url: "/assets/dental-clinic/MVC Architecture Diagram.png", caption: "Layered MVC Architecture Diagram" },
      { url: "/assets/dental-clinic/Database Tables & Entity Relationship Diagram.png", caption: "Database Schema & Entity Relationship Diagram" },
      { url: "/assets/dental-clinic/REST API Testing.png", caption: "RESTful API Testing & JSON Response Validation" },
      { url: "/assets/dental-clinic/JUnit Test Class.png", caption: "JUnit 5 Test Class — Service Layer Unit Testing" },
    ],
    technologies: ["Java 21", "Spring Boot 3", "Spring MVC", "Spring Data JPA", "MySQL 8", "Thymeleaf", "Bootstrap 5", "JavaScript", "Maven", "JUnit 5"],
    highlights: [
      "Patient and dentist management with full profile and record tracking.",
      "Service-layer appointment availability checks to prevent overlapping bookings.",
      "Treatment-based invoices, consultation fees, receipts, and billing history.",
      "Layered MVC architecture with RESTful JSON endpoints.",
      "Role-based workflows for receptionist, dentist, and administrator access.",
    ],
  },
  {
    id: "rainfall-prediction",
    title: "Rainfall Probability Prediction System",
    subtitle: "Weather Classification & Interactive ML Prediction Interface",
    label: "Academic Project",
    category: "Machine Learning",
    role: "Academic Project • Individual contribution not specified",
    timeline: "Academic Project",
    status: "Academic Project",
    description:
      "A machine learning application that analyzes weather parameters to estimate rainfall probability through an interactive prediction interface.",
    longDescription:
      "Developed as an academic machine learning project, this system processes weather datasets, handles missing values, and trains a Random Forest classifier to predict rainfall probability. An interactive Streamlit UI allows users to input weather parameters and receive real-time probability estimates. The trained model is serialized and reloaded for inference, evaluated using accuracy, precision, recall, F1-score, and confusion matrix metrics. The workflow was executed and submitted on Kaggle.",
    thumbnail: "/assets/rainfall-prediction/streamlit_ui_inputs.png",
    gallery: [
      { url: "/assets/rainfall-prediction/streamlit_ui_inputs.png", caption: "Streamlit UI — Interactive Weather Parameter Inputs" },
      { url: "/assets/rainfall-prediction/streamlit_prediction_output.png", caption: "Prediction Output — Rainfall Probability Result" },
      { url: "/assets/rainfall-prediction/model_confusion_matrix.png", caption: "Model Evaluation — Confusion Matrix" },
      { url: "/assets/rainfall-prediction/eda_correlation_heatmap.png", caption: "EDA — Feature Correlation Heatmap" },
      { url: "/assets/rainfall-prediction/kaggle_notebook_success.png", caption: "Kaggle Notebook — Successful Execution" },
      { url: "/assets/rainfall-prediction/kaggle_submissions.png", caption: "Kaggle Submission History & Score" },
    ],
    technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Streamlit", "Jupyter Notebook", "Kaggle", "Machine Learning"],
    highlights: [
      "Weather data preprocessing and missing-value handling.",
      "Random Forest classification for rainfall probability estimation.",
      "Interactive Streamlit interface for real-time weather parameter inputs.",
      "Trained model serialization and reloading for inference.",
      "Evaluated with accuracy, precision, recall, F1-score, and confusion matrix.",
    ],
  },
  {
    id: "used-car-prices",
    title: "Regression of Used Car Prices",
    subtitle: "End-to-End Vehicle Price Estimation with FastAPI & React Dashboard",
    label: "Academic Project",
    category: "AI & Full-Stack Development",
    role: "Academic Project • Individual contribution not specified",
    timeline: "Academic Project",
    status: "Academic Project",
    description:
      "An end-to-end vehicle price estimation application combining data preprocessing, feature engineering, regression modeling, a REST API, and an interactive dashboard.",
    longDescription:
      "This academic project delivers a full pipeline from raw Kaggle dataset to deployed price estimator. The dataset includes 188,533 training and 125,690 test records. Feature engineering introduced vehicle age, kilometers per year, and luxury-brand indicators. Six regression models were benchmarked — Linear Regression, Decision Tree, Random Forest, XGBoost, CatBoost, and LightGBM — with LightGBM selected for best validation performance. A FastAPI backend with Pydantic validation and cached model loading serves predictions, consumed by a React 18 + Vite + TypeScript dashboard presenting LKR prices.",
    thumbnail: "/assets/used-car-prices/01_Homepage.png",
    gallery: [
      { url: "/assets/used-car-prices/01_Homepage.png", caption: "React Dashboard — Vehicle Price Estimation Homepage" },
      { url: "/assets/used-car-prices/03_PredictionForm.png", caption: "Prediction Form — Vehicle Parameter Inputs" },
      { url: "/assets/used-car-prices/03_ModelComparisonTable.png", caption: "Model Comparison — Benchmark Results Across 6 Regressors" },
      { url: "/assets/used-car-prices/03_CorrelationHeatmap.png", caption: "EDA — Feature Correlation Heatmap" },
      { url: "/assets/used-car-prices/05_FeatureImportance.png", caption: "LightGBM Feature Importance Chart" },
      { url: "/assets/used-car-prices/03_SwaggerHome.png", caption: "FastAPI Swagger UI — Prediction Endpoints" },
      { url: "/assets/used-car-prices/03_Leaderboard.png", caption: "Kaggle Leaderboard Position" },
    ],
    technologies: ["Python 3.12", "Pandas", "Scikit-learn", "LightGBM", "FastAPI", "Pydantic", "React 18", "Vite", "TypeScript", "Uvicorn"],
    highlights: [
      "Kaggle dataset: 188,533 training records and 125,690 test records.",
      "Feature engineering for vehicle age, kilometers per year, and luxury-brand indicators.",
      "Benchmarked Linear Regression, Decision Tree, Random Forest, XGBoost, CatBoost, and LightGBM.",
      "LightGBM selected based on comparative validation performance.",
      "FastAPI backend with Pydantic validation and cached model loading.",
      "React dashboard with LKR price presentation.",
    ],
  },
  {
    id: "civil-aviation-bi",
    title: "Sri Lanka Civil Aviation Business Intelligence System",
    subtitle: "Integrated Statistical, Network, Geospatial & Operational BI Study",
    label: "Academic Project • CIS6008",
    category: "Business Intelligence & Data Analytics",
    role: "Academic Project • Individual contribution not specified",
    timeline: "Academic Project • CIS6008",
    status: "Academic Project",
    description:
      "An integrated civil aviation BI study combining statistical modeling, stakeholder network analysis, geospatial suitability assessment, and operational dashboard analytics.",
    longDescription:
      "This academic BI project (CIS6008) delivers a multi-dimensional analysis of Sri Lanka civil aviation operations. Passenger demand was modeled using descriptive statistics, correlation analysis, and multiple linear regression in R. Stakeholder Social Network Analysis quantified centrality and influence patterns. QGIS-based geospatial assessment evaluated radar-site suitability near Bandaranaike International Airport using PostGIS. Power BI dashboards cover flight operations, on-time performance, delay bottlenecks, and real-time alert indicators.",
    thumbnail: "/assets/civil-aviation/D01_PowerBI_Page1_Operations_Overview.png",
    gallery: [
      { url: "/assets/civil-aviation/D01_PowerBI_Page1_Operations_Overview.png", caption: "Power BI — Flight Operations Overview Dashboard" },
      { url: "/assets/civil-aviation/D02_PowerBI_Page2_Delay_Bottlenecks.png", caption: "Power BI — Delay & Bottleneck Analysis Dashboard" },
      { url: "/assets/civil-aviation/D03_PowerBI_Page3_International_Traffic_Alerts.png", caption: "Power BI — International Traffic & Alert Dashboard" },
      { url: "/assets/civil-aviation/mlr_actual_vs_predicted.png", caption: "Multiple Linear Regression — Actual vs Predicted Passenger Demand" },
      { url: "/assets/civil-aviation/sna_network_graph.png", caption: "Stakeholder Social Network Analysis Graph" },
      { url: "/assets/civil-aviation/correlation_matrix.png", caption: "Correlation Matrix — Passenger Demand Analysis" },
      { url: "/assets/civil-aviation/PostGIS_Spatial_Analysis_Evidence.png", caption: "PostGIS — Geospatial Radar-Site Suitability Analysis" },
    ],
    technologies: ["R", "Statistical Analysis", "Multiple Linear Regression", "Social Network Analysis", "QGIS", "PostgreSQL", "PostGIS", "Power BI", "Data Visualization", "GIS"],
    highlights: [
      "Passenger demand analysis using descriptive statistics, correlation, and multiple linear regression.",
      "Stakeholder Social Network Analysis and centrality quantification.",
      "QGIS radar-site suitability analysis near Bandaranaike International Airport.",
      "Power BI dashboards for flight operations, on-time performance, delay, and alert monitoring.",
      "Integrated statistical, network, geospatial, and operational BI analysis.",
    ],
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
