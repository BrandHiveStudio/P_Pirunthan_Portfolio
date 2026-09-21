"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  TrendingUp, 
  Bot, 
  Cpu, 
  Users, 
  MapPin, 
  Languages, 
  Award, 
  CheckCircle,
  Terminal,
  Zap
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#12BDF7]" />,
    Bot: <Bot className="w-5 h-5 text-violet-400" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
    Users: <Users className="w-5 h-5 text-emerald-400" />,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#12BDF7]/8 blur-[110px] pointer-events-none rounded-full" />

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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Profile & Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Software Engineering with <span className="text-gradient-cyan">Operational Reality</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            I don&apos;t just write code in isolation — I engineer practical, scalable web applications and intelligent automations designed around real business workflows.
          </p>
        </motion.div>

        {/* Two-Column Grid: Narrative vs Profile Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#151b2c] border border-[#24304c] shadow-card space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <Terminal className="w-5 h-5 text-[#12BDF7]" />
                <span>The Developer Behind BrandHive Studio</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">P Pirunthan</strong>, a Full-Stack Developer, AI Automation Specialist, and the Founder of <strong className="text-[#12BDF7] font-semibold">BrandHive Studio</strong> based in Negombo, Sri Lanka.
                </p>
                <p>
                  What distinguishes my work is an extensive background before and alongside software engineering. Having served as a <strong className="text-white font-semibold">Sales & Operational Manager</strong>, <strong className="text-white font-semibold">FMCG Distribution Manager</strong>, and <strong className="text-white font-semibold">BPO Customer Support Specialist</strong>, I understand how businesses actually function, where operational bottlenecks occur, and what users truly need.
                </p>
                <p>
                  From architecting <strong className="text-white font-semibold">offline-first POS/ERP systems</strong> that survive real-world power and internet interruptions to deploying <strong className="text-white font-semibold">intelligent WhatsApp and web AI assistants</strong> grounded in structured data, my priority is always high reliability, practical usability, and measurable business outcomes.
                </p>
              </div>

              {/* Verified Competency Bullets */}
              <div className="pt-5 border-t border-[#24304c] grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                  <span>Full-Stack Next.js, React & TypeScript</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                  <span>AI Agent & WhatsApp Workflow Automation</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                  <span>Hybrid POS / SQLite Offline-First Systems</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-medium">
                  <CheckCircle className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                  <span>Cross-Functional Technical Project Planning</span>
                </div>
              </div>
            </div>

            {/* Core Values 2x2 Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {PERSONAL_INFO.coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/40 hover:bg-[#1c2438] transition-all space-y-2.5 shadow-subtle"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1c2438] border border-[#24304c] flex items-center justify-center">
                    {iconMap[value.icon] || <Zap className="w-5 h-5 text-[#12BDF7]" />}
                  </div>
                  <h4 className="text-sm font-bold text-white">{value.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Snapshot Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] space-y-6 shadow-card">
              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-[#24304c] pb-3.5">
                <Award className="w-4 h-4 text-[#12BDF7]" />
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Full Name
                  </span>
                  <span className="text-sm font-bold text-white">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Current Role & Venture
                  </span>
                  <span className="text-sm font-bold text-[#12BDF7]">
                    Founder & Developer @ BrandHive Studio
                  </span>
                  <span className="text-xs text-slate-300 block mt-0.5">
                    (May 2026 – Present)
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Base Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Languages Spoken
                  </span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <Languages className="w-4 h-4 text-blue-400" />
                    English · Sinhala · Tamil (All Fluent)
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Core Engineering Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                      "Express",
                      "Python",
                      "PostgreSQL",
                      "SQLite",
                      "Supabase",
                      "Prisma",
                      "AI Chatbots",
                      "WhatsApp API",
                      "Vercel",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#1c2438] text-slate-200 text-xs font-mono border border-[#24304c] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Studio Venture Card */}
              <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#12BDF7]" />
                    BrandHive Studio
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#12BDF7] bg-[#12BDF7]/10 px-2.5 py-0.5 rounded-full border border-[#12BDF7]/30">
                    Technology & Agency
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Delivering end-to-end digital solutions, modern web platforms, conversational AI agents, and custom software systems for commercial clients and startups.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
