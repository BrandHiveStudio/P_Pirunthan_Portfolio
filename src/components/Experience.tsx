"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-[#12BDF7]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-cyan">Work Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A diverse operational, sales, and engineering trajectory that empowers me to build software rooted in commercial viability and real business workflows.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#24304c] ml-4 sm:ml-32 md:ml-40 space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative pl-6 sm:pl-8 group"
            >
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  idx === 0
                    ? "bg-[#12BDF7] border-white shadow-brand-glow"
                    : "bg-[#151b2c] border-[#24304c] group-hover:border-[#12BDF7]"
                }`}
              />

              {/* Date Marker for Desktop */}
              <div className="sm:absolute sm:-left-36 md:-left-44 sm:top-1 sm:text-right sm:w-28 md:w-36 hidden sm:block">
                <span
                  className={`text-xs font-mono font-bold tracking-tight ${
                    idx === 0 ? "text-[#12BDF7]" : "text-slate-400"
                  }`}
                >
                  {exp.period}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] group-hover:border-[#37476b] group-hover:bg-[#182033] transition-all duration-200 space-y-4 shadow-card">
                {/* Mobile Date Marker */}
                <div className="sm:hidden inline-block text-xs font-mono font-bold text-[#12BDF7] bg-[#1c2438] px-3 py-1 rounded-lg border border-[#24304c]">
                  {exp.period}
                </div>

                {/* Role and Company Header */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#12BDF7] transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 mt-0.5">
                      <Building2 className="w-4 h-4 text-[#12BDF7]" />
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-300 flex items-center gap-1 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-rose-400" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  {idx === 0 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#12BDF7]/15 text-[#12BDF7] border border-[#12BDF7]/30 shadow-sm">
                      Current Focus
                    </span>
                  )}
                </div>

                {/* Narrative Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                {exp.keyAchievements && exp.keyAchievements.length > 0 && (
                  <div className="space-y-2 pt-1">
                    {exp.keyAchievements.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-lg bg-[#1c2438] text-xs font-mono text-slate-200 border border-[#24304c]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
