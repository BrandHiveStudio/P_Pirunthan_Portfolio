"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Languages, 
  Globe2, 
  BookOpen, 
  Sparkles 
} from "lucide-react";
import { EDUCATION, LANGUAGES } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#0c101d]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Languages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-cyan">Multilingual Fluency</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Continuous technical specialization paired with native trilingual communication across English, Sinhala, and Tamil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Education Qualifications: 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <BookOpen className="w-5 h-5 text-[#12BDF7]" />
              <span>Formal Education & Credentials</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#37476b] transition-all space-y-2 shadow-card"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#1c2438] text-[#12BDF7] border border-[#24304c]">
                      {edu.period}
                    </span>
                  </div>

                  {edu.institution && (
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-[#12BDF7]" />
                      <span>{edu.institution}</span>
                    </div>
                  )}

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages Section: 5 cols */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 mb-2">
              <Languages className="w-5 h-5 text-violet-400" />
              <span>Trilingual Capability</span>
            </h3>

            <div className="p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] space-y-5 shadow-card">
              <p className="text-sm text-slate-300 leading-relaxed">
                Fluent across three major languages, enabling frictionless cross-border client collaboration and directly powering the development of <strong className="text-white font-semibold">multilingual AI conversational agents</strong>.
              </p>

              <div className="space-y-3">
                {LANGUAGES.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center justify-between"
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
                  </div>
                ))}
              </div>

              {/* Bot Advantage Callout */}
              <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] text-xs text-slate-200 leading-relaxed space-y-1">
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
