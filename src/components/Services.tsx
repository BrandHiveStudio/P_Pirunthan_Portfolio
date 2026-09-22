"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Bot, 
  Cpu, 
  Compass, 
  Rocket, 
  ChevronRight,
  ArrowDown
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ambientY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const services = [
    {
      num: "01",
      title: "Full-Stack Web Engineering",
      subtitle: "Next.js 15, TypeScript & Scalable Cloud Apps",
      description:
        "Architecting production-ready web applications with clean server-side rendering, robust client state management, dynamic databases (PostgreSQL/Supabase/SQLite), and high-conversion UI design tailored for desktop and mobile.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
      icon: <Code2 className="w-6 h-6 text-[#12BDF7]" />,
      accent: "from-blue-500/20 via-[#12BDF7]/10 to-transparent",
    },
    {
      num: "02",
      title: "AI Workflows & Conversational Agents",
      subtitle: "Context-Grounded Chatbots & WhatsApp Automation",
      description:
        "Building intelligent assistants trained on structured company datasets. Automating customer inquiries, lead qualification, and multilingual service recommendations via custom web widgets and WhatsApp Cloud APIs.",
      tags: ["Prompt Engineering", "WhatsApp API", "Webhooks", "NLP", "Deterministic RAG"],
      icon: <Bot className="w-6 h-6 text-violet-400" />,
      accent: "from-violet-500/20 via-purple-500/10 to-transparent",
    },
    {
      num: "03",
      title: "Offline-First ERP & Business Systems",
      subtitle: "Hybrid Local POS & Cloud Sync Architecture",
      description:
        "Engineering high-reliability business systems that maintain uninterrupted operations through internet drops and power cuts, utilizing SQLite local persistence paired with background cloud synchronization and real-time inventory ledgers.",
      tags: ["SQLite Local", "PostgreSQL Cloud", "POS Hardware", "Offline Sync", "Ledger Architecture"],
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    {
      num: "04",
      title: "Technical Project Planning & Architecture",
      subtitle: "Scoping, Systems Design & Process Optimization",
      description:
        "Translating complex business requirements into clear technical roadmaps, database schemas, and milestone-driven deliverables. Drawing from operations management to prevent architectural debt and streamline implementation.",
      tags: ["System Design", "Database Schemas", "Operations Optimization", "API Contracts"],
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    {
      num: "05",
      title: "BrandHive Studio Turnkey Solutions",
      subtitle: "End-to-End Creative & Technology Studio Delivery",
      description:
        "Through BrandHive Studio, providing turnkey digital agency solutions — combining modern web development, brand identity systems, automated sales funnels, and ongoing technical support for startups and established enterprises.",
      tags: ["Digital Agency", "Consultation", "Turnkey Delivery", "Brand Identity"],
      icon: <Rocket className="w-6 h-6 text-rose-400" />,
      accent: "from-rose-500/20 via-pink-500/10 to-transparent",
    },
  ];

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-[#0c101d] text-white"
    >
      {/* Subtle ambient lighting — pure CSS for zero JS overhead */}
      <motion.div 
        style={{ y: ambientY }}
        className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-[#12BDF7]/10 blur-[150px] pointer-events-none rounded-full animate-[ambientPulse_11s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-violet-600/10 blur-[140px] pointer-events-none rounded-full animate-[ambientPulse_13s_ease-in-out_1s_infinite]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Reference-Inspired Bold Visual Styling */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
            SERVICES & <span className="text-gradient-cyan">SOLUTIONS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-impact technical deliverables built for commercial viability, operational excellence, and measurable business growth.
          </p>
        </motion.div>

        {/* Numbered Interactive Service Cards (Reference Video Aesthetic) */}
        <div className="max-w-4xl mx-auto space-y-5">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.num}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.09 }}
                onClick={() => setActiveService(isActive ? -1 : index)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 cursor-pointer select-none relative overflow-hidden group shadow-card ${
                  isActive
                    ? "bg-[#1c2438] border-[#12BDF7]/60 shadow-[0_0_35px_-5px_rgba(18,189,247,0.22)]"
                    : "bg-[#151b2c] border-[#24304c] hover:border-[#37476b] hover:bg-[#182033]"
                }`}
              >
                {/* Active accent background flare */}
                {isActive && (
                  <motion.div 
                    layoutId="activeServiceBackdrop"
                    className={`absolute inset-0 bg-gradient-to-r ${service.accent} pointer-events-none`}
                  />
                )}

                {/* Top edge active glowing line */}
                {isActive && (
                  <motion.div 
                    layoutId="activeServiceGlow"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#12BDF7] to-transparent"
                  />
                )}

                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-5 sm:gap-8">
                    {/* Oversized Number Display (matching reference video numerals) */}
                    <span className={`text-3xl sm:text-4xl lg:text-5xl font-black font-mono tracking-tighter transition-colors ${
                      isActive ? "text-[#12BDF7] drop-shadow-[0_0_12px_rgba(18,189,247,0.5)]" : "text-slate-600 group-hover:text-slate-400"
                    }`}>
                      {service.num}
                    </span>

                    {/* Service Icon */}
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive 
                        ? "bg-[#151b2c] border-[#12BDF7]/50 shadow-brand-glow" 
                        : "bg-[#1c2438] border-[#24304c] group-hover:border-[#37476b]"
                    }`}>
                      {service.icon}
                    </div>

                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Expand/Collapse Chevron */}
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all ${
                    isActive 
                      ? "bg-[#12BDF7]/20 border-[#12BDF7]/40 text-[#12BDF7]" 
                      : "bg-[#151b2c] border-[#24304c] text-slate-400 group-hover:text-slate-200"
                  }`}>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                      className="overflow-hidden pt-6 mt-5 border-t border-[#24304c] relative z-10"
                    >
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="space-y-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                          Key Focus & Technologies
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, tagIdx) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25, delay: tagIdx * 0.04 }}
                              className="px-3 py-1.5 rounded-xl bg-[#151b2c] text-xs font-mono text-[#12BDF7] border border-[#24304c] hover:border-[#12BDF7]/40 transition-colors font-medium shadow-sm"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Section Flow Guide */}
        <div className="mt-16 flex justify-center">
          <a
            href="#skills"
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#12BDF7] transition-colors py-2 px-4 rounded-full bg-[#151b2c] border border-[#24304c]"
          >
            <span>Explore Technical Arsenal</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
