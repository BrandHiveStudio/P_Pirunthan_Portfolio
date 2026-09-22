"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { 
  ArrowRight, 
  Download, 
  MessageCircle, 
  Sparkles, 
  Code2, 
  Bot, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  Database, 
  Globe, 
  MapPin, 
  Layers,
  ArrowDown
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll Parallax Tracking
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroCardY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // Smooth mouse tilt physics for the portrait card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const marqueeTech = [
    { name: "BrandHive Studio", icon: <Sparkles className="w-4 h-4 text-[#12BDF7]" /> },
    { name: "Next.js 15", icon: <Globe className="w-4 h-4 text-slate-200" /> },
    { name: "TypeScript", icon: <Code2 className="w-4 h-4 text-blue-400" /> },
    { name: "React 19", icon: <Globe className="w-4 h-4 text-[#12BDF7]" /> },
    { name: "AI Automations", icon: <Bot className="w-4 h-4 text-violet-400" /> },
    { name: "WhatsApp Cloud API", icon: <MessageCircle className="w-4 h-4 text-emerald-400" /> },
    { name: "Offline-First POS", icon: <Cpu className="w-4 h-4 text-amber-400" /> },
    { name: "Python Systems", icon: <Terminal className="w-4 h-4 text-yellow-400" /> },
    { name: "PostgreSQL & SQLite", icon: <Database className="w-4 h-4 text-indigo-400" /> },
  ];

  // Staged entrance animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.55, ease: "easeOut" as const } 
    },
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden grid-bg-comfort"
    >
      {/* Restrained, comfortable ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-blue-600/15 via-[#12BDF7]/10 to-violet-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#12BDF7]/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Staged Entrance Hero Copy with Scroll Parallax */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: heroContentY }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151b2c] border border-[#24304c] shadow-subtle">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-slate-200 tracking-wide">
                  Available for Select Projects & Collaborations
                </span>
              </div>
            </motion.div>

            {/* Main Headline (Reference Video "HI, I'M..." Style) */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] font-display">
                HI, I&apos;M <span className="text-gradient-cyan">{PERSONAL_INFO.name.toUpperCase()}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 font-display">
                Full-Stack Developer & <span className="text-[#12BDF7]">AI Automation Specialist</span>
              </p>
            </motion.div>

            {/* Studio Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#151b2c] border border-[#24304c] text-slate-200 text-sm font-medium shadow-subtle">
                <Sparkles className="w-4 h-4 text-[#12BDF7] shrink-0" />
                <span>
                  Founder of <strong className="text-white font-semibold">BrandHive Studio</strong> — Digital, Web & AI Solutions
                </span>
              </div>
            </motion.div>

            {/* Introduction Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Passionate about building resilient web applications, intelligent AI workflows, and business-critical systems. Combining modern technical engineering with practical experience in operations, sales leadership, and customer support.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#12BDF7] to-blue-600 hover:from-[#0369a1] hover:to-[#12BDF7] text-white font-bold text-sm shadow-brand-pill hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Selected Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="P_Pirunthan_Professional_CV.pdf"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#151b2c] hover:bg-[#1c2438] border border-[#24304c] hover:border-[#37476b] text-slate-200 font-semibold text-sm transition-all shadow-subtle"
              >
                <Download className="w-4 h-4 text-[#12BDF7]" />
                <span>Download CV</span>
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-700/60 text-emerald-300 text-sm font-semibold transition-all shadow-subtle"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </motion.div>

            {/* Staggered Feature Chips */}
            <motion.div
              variants={itemVariants}
              className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#24304c]"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                <span>Next.js & TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                <span>AI Chatbots & Agents</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                <span>Offline-First ERP / POS</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                <span>Trilingual: EN / SI / TA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Professional Portrait Card with Subtle Depth & Scroll Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ y: heroCardY }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-sm sm:max-w-md [perspective:1200px]"
            >
              {/* Restrained Accent Glow Halo */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-[#12BDF7]/25 to-indigo-600/20 rounded-3xl blur-xl opacity-70 animate-pulse-subtle" />

              {/* 3D Motion Card Container */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="relative rounded-3xl overflow-hidden bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/50 shadow-card p-3 transition-colors duration-300"
              >
                {/* Inner Portrait Frame */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0e1322]">
                  <Image
                    src={PERSONAL_INFO.portraitPath}
                    alt={`${PERSONAL_INFO.name} - Full-Stack Developer & AI Automation Specialist`}
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />

                  {/* Gradient Overlay for Readable Text Integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />

                  {/* Integrated Info Overlay at Bottom */}
                  <div
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[#151b2c]/90 backdrop-blur-md border border-[#24304c] shadow-elevated"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white tracking-tight">
                          {PERSONAL_INFO.name}
                        </div>
                        <div className="text-xs text-[#12BDF7] font-semibold mt-0.5">
                          Founder @ BrandHive Studio
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 bg-[#1c2438] px-2.5 py-1 rounded-lg border border-[#24304c]">
                        <MapPin className="w-3.5 h-3.5 text-rose-400" />
                        <span>Negombo, LK</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Depth Badge Top-Right */}
                <motion.div
                  style={{ transform: "translateZ(45px)" }}
                  className="absolute -top-3 -right-3 bg-[#151b2c] border border-[#24304c] rounded-2xl p-3 shadow-elevated hidden sm:flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#12BDF7]/15 border border-[#12BDF7]/30 flex items-center justify-center text-[#12BDF7]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">AI Automations</div>
                    <div className="text-[11px] text-slate-300">Web & WhatsApp Agents</div>
                  </div>
                </motion.div>

                {/* Floating Depth Badge Bottom-Left */}
                <motion.div
                  style={{ transform: "translateZ(45px)" }}
                  className="absolute -bottom-3 -left-3 bg-[#151b2c] border border-[#24304c] rounded-2xl p-3 shadow-elevated hidden sm:flex items-center gap-3"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Full-Stack Scale</div>
                    <div className="text-[11px] text-slate-300">7+ Deployed Systems</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Marquee Row Below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 pt-8 border-t border-[#24304c]"
        >
          <p className="text-center text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">
            Core Technology & Platform Architecture
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {marqueeTech.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3, scale: 1.04 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/40 text-xs text-slate-200 font-medium transition-all shadow-subtle"
              >
                {item.icon}
                <span>{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Guide Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#about"
            className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400 hover:text-[#12BDF7] transition-colors py-2 px-4 rounded-full bg-[#151b2c]/80 border border-[#24304c]"
          >
            <span>Explore the Story</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
