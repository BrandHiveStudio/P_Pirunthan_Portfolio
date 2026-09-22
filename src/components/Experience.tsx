"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Building2,
  TrendingUp
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll beam animation tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" ref={containerRef} className="py-28 relative overflow-hidden bg-[#0b0f19]">
      {/* Dynamic ambient lighting — pure CSS for zero JS overhead */}
      <div 
        className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full animate-[ambientPulse_11s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-1/4 left-10 w-[480px] h-[480px] bg-[#12BDF7]/8 blur-[140px] pointer-events-none rounded-full animate-[ambientPulse_13s_ease-in-out_1s_infinite]" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Storytelling</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            WORK <span className="text-gradient-cyan">EXPERIENCE</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A verified progression from operations management, FMCG logistics, and international tech sales to full-stack software development and agency founding.
          </p>

          {/* Value Callout Ribbon */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-[#151b2c]/80 border border-[#24304c] text-xs text-slate-300">
              <TrendingUp className="w-4 h-4 text-[#12BDF7]" />
              <span>Multi-disciplinary background: Operations + Sales + Software Architecture</span>
            </div>
          </div>
        </motion.div>

        {/* Timeline Track Container */}
        <div className="relative ml-4 sm:ml-36 md:ml-44">
          {/* Static Background Spine */}
          <div className="absolute left-0 top-3 bottom-6 w-[2px] bg-[#24304c]" />

          {/* Dynamic Scroll-Linked Animated Light Beam */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-0 top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#12BDF7] via-blue-500 to-violet-600 shadow-brand-glow"
          />

          {/* Timeline Cards Flow */}
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isCurrent = idx === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="relative pl-6 sm:pl-10 group"
                >
                  {/* Timeline Indicator Milestone Node */}
                  <div className="absolute -left-[7px] top-2 z-20">
                    {isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="animate-ping absolute w-5 h-5 rounded-full bg-[#12BDF7] opacity-60" />
                        <div className="w-3.5 h-3.5 rounded-full bg-[#12BDF7] border-2 border-white shadow-brand-glow" />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#151b2c] border-2 border-[#24304c] group-hover:border-[#12BDF7] group-hover:scale-125 transition-all duration-300" />
                    )}
                  </div>

                  {/* Desktop Date Marker */}
                  <div className="sm:absolute sm:-left-40 md:-left-48 sm:top-1 sm:text-right sm:w-32 md:w-40 hidden sm:block">
                    <div className="space-y-0.5">
                      <span
                        className={`text-xs font-mono font-bold tracking-tight block ${
                          isCurrent ? "text-[#12BDF7]" : "text-slate-400 group-hover:text-slate-200 transition-colors"
                        }`}
                      >
                        {exp.period}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                          ● Active
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 space-y-4 shadow-card relative overflow-hidden group/card ${
                    isCurrent
                      ? "bg-[#161d30] border-[#12BDF7]/40 shadow-[0_0_30px_-5px_rgba(18,189,247,0.15)]"
                      : "bg-[#151b2c] border-[#24304c] hover:border-[#37476b] hover:bg-[#182033]"
                  }`}>
                    {/* Subtle card corner glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#12BDF7]/5 rounded-full blur-2xl pointer-events-none group-hover/card:bg-[#12BDF7]/10 transition-colors" />

                    {/* Mobile Date Tag */}
                    <div className="sm:hidden flex items-center justify-between gap-2 pb-1">
                      <span className="text-xs font-mono font-bold text-[#12BDF7] bg-[#1c2438] px-3 py-1 rounded-lg border border-[#24304c]">
                        {exp.period}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-700/60">
                          Active Focus
                        </span>
                      )}
                    </div>

                    {/* Role & Company Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover/card:text-[#12BDF7] transition-colors font-display">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                          <div className="flex items-center gap-1.5 text-white">
                            <Building2 className="w-4 h-4 text-[#12BDF7]" />
                            <span>{exp.company}</span>
                          </div>
                          {exp.location && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-300 flex items-center gap-1 font-medium">
                                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                                {exp.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {isCurrent && (
                        <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#12BDF7]/15 text-[#12BDF7] border border-[#12BDF7]/40 shadow-sm">
                          Founder & Active Focus
                        </span>
                      )}
                    </div>

                    {/* Narrative Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Achievements Checklist */}
                    {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                      <div className="space-y-2 pt-1 border-t border-[#24304c]/70">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block pt-1">
                          Key Deliverables & Responsibilities
                        </span>
                        {exp.keyAchievements.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-[#1c2438] text-xs font-mono text-slate-200 border border-[#24304c] group-hover/card:border-[#12BDF7]/30 transition-colors font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
