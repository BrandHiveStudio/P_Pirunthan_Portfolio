"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
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
  Zap,
  Sparkles,
  ArrowDown
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Scroll parallax transforms for floating 3D elements
  const avatarY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const avatarRotate = useTransform(scrollYProgress, [0, 1], [-4, 6]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [-30, 50]);

  const iconMap: Record<string, React.ReactNode> = {
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#12BDF7]" />,
    Bot: <Bot className="w-5 h-5 text-violet-400" />,
    Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
    Users: <Users className="w-5 h-5 text-emerald-400" />,
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.55, 
        ease: [0.21, 0.47, 0.32, 0.98] as const
      } 
    },
  };

  const pillContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.88, y: 8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { duration: 0.3, ease: "easeOut" as const } 
    },
  };

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-32 relative overflow-hidden bg-[#0b0f19] text-white"
    >
      {/* Ambient background glows — pure CSS for zero JS overhead */}
      <div 
        className="absolute top-1/3 right-0 w-[520px] h-[520px] bg-blue-600/12 blur-[150px] pointer-events-none rounded-full animate-[ambientPulse_10s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-10 left-0 w-[460px] h-[460px] bg-[#12BDF7]/10 blur-[140px] pointer-events-none rounded-full animate-[ambientPulse_12s_ease-in-out_1s_infinite]" 
      />

      {/* Floating 3D Character Element (Left Side with Scroll Parallax) */}
      <motion.div
        style={{ y: avatarY, rotate: avatarRotate }}
        className="hidden xl:block absolute left-8 top-1/4 w-44 h-44 pointer-events-none select-none z-0 opacity-85"
      >
        <div className="relative w-full h-full drop-shadow-[0_20px_35px_rgba(18,189,247,0.25)]">
          <Image
            src="/assets/profile/anime_avatar_transparent.png"
            alt="3D Avatar"
            fill
            className="object-contain"
            sizes="176px"
          />
        </div>
      </motion.div>

      {/* Floating 3D Tech Depth Badge (Right Side with Inverse Parallax) */}
      <motion.div
        style={{ y: badgeY }}
        className="hidden xl:block absolute right-10 top-1/3 p-4 rounded-3xl bg-[#151b2c]/80 backdrop-blur-md border border-[#24304c] shadow-elevated pointer-events-none select-none z-0"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#12BDF7]/15 border border-[#12BDF7]/30 flex items-center justify-center text-[#12BDF7]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Full-Cycle Delivery</div>
            <div className="text-[11px] text-slate-400">Code • Logic • Business</div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Reference-Inspired Bold Visual Framing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Profile & Journey</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-display">
            ABOUT <span className="text-gradient-cyan">ME</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Bridging modern full-stack software development with real-world operational management, FMCG logistics, and international tech sales.
          </p>
        </motion.div>

        {/* Two-Column Grid: Narrative vs Profile Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/30 transition-colors duration-300 shadow-card space-y-5 relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#12BDF7]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#12BDF7]/10 transition-colors" />

              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#1c2438] border border-[#24304c] text-[#12BDF7]">
                  <Terminal className="w-4 h-4" />
                </div>
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

            {/* Core Values 2x2 Grid with Interactive Hover Depth */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {PERSONAL_INFO.coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-5 rounded-2xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/50 hover:bg-[#1c2438] transition-all duration-300 space-y-2.5 shadow-subtle group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1c2438] border border-[#24304c] group-hover:border-[#12BDF7]/40 flex items-center justify-center transition-colors">
                    {iconMap[value.icon] || <Zap className="w-5 h-5 text-[#12BDF7]" />}
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#12BDF7] transition-colors">{value.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Snapshot Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/30 transition-colors duration-300 space-y-6 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-[#24304c] pb-3.5">
                <div className="p-1.5 rounded-lg bg-[#1c2438] border border-[#24304c] text-[#12BDF7]">
                  <Award className="w-4 h-4" />
                </div>
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div className="p-3 rounded-xl bg-[#1c2438]/60 border border-[#24304c]/60">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Full Name
                  </span>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    {PERSONAL_INFO.name}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#1c2438]/60 border border-[#24304c]/60">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Current Role & Venture
                  </span>
                  <span className="text-sm font-bold text-[#12BDF7] mt-0.5 block">
                    Founder & Developer @ BrandHive Studio
                  </span>
                  <span className="text-xs text-slate-300 block mt-0.5">
                    (May 2026 – Present)
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#1c2438]/60 border border-[#24304c]/60">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Base Location
                  </span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#1c2438]/60 border border-[#24304c]/60">
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px]">
                    Languages Spoken
                  </span>
                  <span className="text-sm font-semibold text-slate-200 flex items-center gap-1.5 mt-0.5">
                    <Languages className="w-4 h-4 text-blue-400" />
                    English · Sinhala · Tamil (All Fluent)
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 uppercase tracking-wider block font-bold text-[10px] mb-1">
                    Core Engineering Stack
                  </span>
                  <motion.div 
                    variants={pillContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-1.5 mt-2"
                  >
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
                      <motion.span
                        key={tech}
                        variants={pillVariants}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="px-2.5 py-1 rounded-lg bg-[#1c2438] hover:bg-[#24304c] text-slate-200 hover:text-white text-xs font-mono border border-[#24304c] hover:border-[#12BDF7]/50 transition-all font-medium cursor-default shadow-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>

              {/* Studio Venture Card */}
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] hover:border-[#12BDF7]/40 transition-colors space-y-2 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#12BDF7] animate-pulse" />
                    BrandHive Studio
                  </span>
                  <span className="text-[10px] uppercase font-bold text-[#12BDF7] bg-[#12BDF7]/10 px-2.5 py-0.5 rounded-full border border-[#12BDF7]/30">
                    Technology & Agency
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Delivering end-to-end digital solutions, modern web platforms, conversational AI agents, and custom software systems for commercial clients and startups.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Section Continuous Flow Arrow Indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#services"
            className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-[#12BDF7] transition-colors py-2 px-4 rounded-full bg-[#151b2c] border border-[#24304c]"
          >
            <span>Explore Services</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
