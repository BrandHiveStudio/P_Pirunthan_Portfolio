"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Code2, 
  Bot, 
  Cpu, 
  Compass, 
  Rocket, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function Services() {
  const [activeService, setActiveService] = useState<number>(0);

  const services = [
    {
      num: "01",
      title: "Full-Stack Web Engineering",
      subtitle: "Next.js 15, TypeScript & Scalable Cloud Apps",
      description:
        "Architecting production-ready web applications with clean server-side rendering, robust client state management, dynamic databases (PostgreSQL/Supabase/SQLite), and high-conversion UI design tailored for desktop and mobile.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Vercel"],
      icon: <Code2 className="w-5 h-5 text-[#12BDF7]" />,
    },
    {
      num: "02",
      title: "AI Workflows & Conversational Agents",
      subtitle: "Context-Grounded Chatbots & WhatsApp Automation",
      description:
        "Building intelligent assistants trained on structured company datasets. Automating customer inquiries, lead qualification, and multilingual service recommendations via custom web widgets and WhatsApp Cloud APIs.",
      tags: ["Prompt Engineering", "WhatsApp API", "Webhooks", "NLP", "Deterministic RAG"],
      icon: <Bot className="w-5 h-5 text-violet-400" />,
    },
    {
      num: "03",
      title: "Offline-First ERP & Business Systems",
      subtitle: "Hybrid Local POS & Cloud Sync Architecture",
      description:
        "Engineering high-reliability business systems that maintain uninterrupted operations through internet drops and power cuts, utilizing SQLite local persistence paired with background cloud synchronization and real-time inventory ledgers.",
      tags: ["SQLite Local", "PostgreSQL Cloud", "POS Hardware", "Offline Sync", "Ledger Architecture"],
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
    },
    {
      num: "04",
      title: "Technical Project Planning & Architecture",
      subtitle: "Scoping, Systems Design & Process Optimization",
      description:
        "Translating complex business requirements into clear technical roadmaps, database schemas, and milestone-driven deliverables. Drawing from operations management to prevent architectural debt and streamline implementation.",
      tags: ["System Design", "Database Schemas", "Operations Optimization", "API Contracts"],
      icon: <Compass className="w-5 h-5 text-amber-400" />,
    },
    {
      num: "05",
      title: "BrandHive Studio Turnkey Solutions",
      subtitle: "End-to-End Creative & Technology Studio Delivery",
      description:
        "Through BrandHive Studio, providing turnkey digital agency solutions — combining modern web development, brand identity systems, automated sales funnels, and ongoing technical support for startups and established enterprises.",
      tags: ["Digital Agency", "Consultation", "Turnkey Delivery", "Brand Identity"],
      icon: <Rocket className="w-5 h-5 text-rose-400" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0c101d]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#12BDF7]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            SERVICES & <span className="text-gradient-cyan">SOLUTIONS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-impact technical deliverables built for commercial viability, operational excellence, and measurable business growth.
          </p>
        </motion.div>

        {/* Numbered Interactive Service Accordion */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {services.map((service, index) => {
            const isActive = activeService === index;

            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => setActiveService(isActive ? -1 : index)}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-200 cursor-pointer select-none shadow-subtle ${
                  isActive
                    ? "bg-[#1c2438] border-[#12BDF7]/50 shadow-card"
                    : "bg-[#151b2c] border-[#24304c] hover:border-[#37476b] hover:bg-[#182033]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-[#12BDF7]">
                      {service.num}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2.5">
                        <span>{service.title}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-[#151b2c] border border-[#24304c] flex items-center justify-center shrink-0">
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-5 h-5 text-[#12BDF7]" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden pt-5 mt-4 border-t border-[#24304c]"
                    >
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-lg bg-[#151b2c] text-xs font-mono text-[#12BDF7] border border-[#24304c] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
