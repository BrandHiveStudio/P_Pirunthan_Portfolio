"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  GraduationCap, 
  Languages, 
  Globe2, 
  BookOpen, 
  Sparkles,
  Award
} from "lucide-react";
import { EDUCATION, LANGUAGES } from "@/data/portfolioData";

export default function Education() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#0c101d]">
      {/* Subtle ambient lighting — pure CSS for zero JS overhead */}
      <div 
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full animate-[ambientPulse_10s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#12BDF7]/8 blur-[130px] pointer-events-none rounded-full animate-[ambientPulse_12s_ease-in-out_1s_infinite]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Languages</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            EDUCATION & <span className="text-gradient-cyan">FLUENCY</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Continuous technical specialization paired with native trilingual communication across English, Sinhala, and Tamil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Qualifications: 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-[#1c2438] border border-[#24304c] text-[#12BDF7]">
                <BookOpen className="w-4 h-4" />
              </div>
              <span>Formal Education & Credentials</span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {EDUCATION.map((edu, idx) => {
                const isPursuing = edu.period.toLowerCase().includes("pursuing");

                return (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="p-6 sm:p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/40 transition-all space-y-3 shadow-card relative overflow-hidden group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-[#12BDF7] transition-colors font-display">
                        {edu.degree}
                      </h4>
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-sm flex items-center gap-1.5 ${
                        isPursuing 
                          ? "bg-[#12BDF7]/15 text-[#12BDF7] border-[#12BDF7]/40" 
                          : "bg-[#1c2438] text-slate-300 border-[#24304c]"
                      }`}>
                        {isPursuing && <span className="w-1.5 h-1.5 rounded-full bg-[#12BDF7] animate-pulse" />}
                        <span>{edu.period}</span>
                      </span>
                    </div>

                    {edu.institution && (
                      <div className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-[#12BDF7]" />
                        <span>{edu.institution}</span>
                      </div>
                    )}

                    {edu.details && (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                        {edu.details}
                      </p>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Languages Section: 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <div className="p-2 rounded-xl bg-[#1c2438] border border-[#24304c] text-violet-400">
                <Languages className="w-4 h-4" />
              </div>
              <span>Trilingual Capability</span>
            </h3>

            <div className="p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/30 transition-colors space-y-5 shadow-card relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />

              <p className="text-sm text-slate-300 leading-relaxed">
                Fluent across three major languages, enabling frictionless cross-border client collaboration and directly powering the development of <strong className="text-white font-semibold">multilingual AI conversational agents</strong>.
              </p>

              <div className="space-y-3">
                {LANGUAGES.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02, x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] hover:border-[#12BDF7]/40 transition-all flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <Globe2 className="w-4 h-4 text-[#12BDF7]" />
                        <span className="text-sm font-bold text-white">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-300 block">
                        {lang.level}
                      </span>
                    </div>

                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-700/60 shadow-sm">
                      {lang.proficiency}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bot Advantage Callout */}
              <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] text-xs text-slate-200 leading-relaxed space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#12BDF7]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Multilingual AI Workflow Advantage</span>
                </div>
                <p>
                  Native understanding of Tamil and Sinhala idioms combined with technical English ensures our AI customer agents handle natural localized messaging without awkward translation artifacts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
