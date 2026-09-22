"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Database, 
  Bot, 
  Briefcase, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Cpu
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredCategories =
    selectedCategory === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === selectedCategory);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Frontend & Web":
        return <Code2 className="w-5 h-5 text-[#12BDF7]" />;
      case "Backend & Databases":
        return <Database className="w-5 h-5 text-blue-400" />;
      case "AI & Workflow Automation":
        return <Bot className="w-5 h-5 text-violet-400" />;
      case "Infrastructure & Tools":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Business & Operations":
        return <Briefcase className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-300" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#12BDF7]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Technological Arsenal</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of modern technologies, database architectures, AI frameworks, and operational strategies I apply to real-world engineering problems.
          </p>

          {/* Interactive Filter Tabs with Sliding Motion Indicator */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors duration-200 ${
                    isSelected
                      ? "text-slate-950"
                      : "text-slate-300 hover:text-white hover:bg-[#1c2438] border border-[#24304c]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-[#12BDF7] rounded-full shadow-brand-pill"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skill Cards Grid with Staggered Motion & Interactive Capability Nodes */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, y: 16 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/40 transition-all duration-300 flex flex-col justify-between group shadow-card relative overflow-hidden"
              >
                {/* Subtle top corner ambient glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#12BDF7]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#12BDF7]/10 transition-colors" />

                <div>
                  {/* Category Header with Glow Node */}
                  <div className="flex items-center gap-3.5 mb-5 pb-3.5 border-b border-[#24304c]">
                    <div className="w-11 h-11 rounded-2xl bg-[#1c2438] border border-[#24304c] group-hover:border-[#12BDF7]/40 flex items-center justify-center transition-all duration-300 shrink-0">
                      {getCategoryIcon(category.name)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#12BDF7] transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {category.skills.length} verified competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List with Interactive Micro-Cards */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.05 + skillIdx * 0.03 }}
                        whileHover={{ x: 3, scale: 1.01 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#1c2438]/80 border border-[#24304c] hover:border-[#12BDF7]/40 hover:bg-[#1c2438] transition-all cursor-default"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#151b2c] text-[#12BDF7] border border-[#24304c]">
                          {skill.level}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Specialized Focus Capability Constellation */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#151b2c] border border-[#24304c] shadow-card relative overflow-hidden"
        >
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-[#12BDF7]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 p-5 rounded-2xl bg-[#1c2438]/50 border border-[#24304c]/60 hover:border-[#12BDF7]/40 hover:bg-[#1c2438] transition-all"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-[#12BDF7] flex items-center justify-center md:justify-start gap-2">
                <div className="p-1.5 rounded-lg bg-[#151b2c] border border-[#24304c] text-[#12BDF7]">
                  <Code2 className="w-4 h-4" />
                </div>
                <span>Modern Full-Stack</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Next.js & TypeScript Specialist
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clean server/client component architecture, strict type safety, responsive Tailwind styling, and optimized Web Vitals.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 p-5 rounded-2xl bg-[#1c2438]/50 border border-[#24304c]/60 hover:border-violet-500/40 hover:bg-[#1c2438] transition-all"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center justify-center md:justify-start gap-2">
                <div className="p-1.5 rounded-lg bg-[#151b2c] border border-[#24304c] text-violet-400">
                  <Bot className="w-4 h-4" />
                </div>
                <span>AI Workflows</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Deterministic Knowledge AI
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Grounding chatbots and WhatsApp bots in structured company datasets, FAQs, and service catalogs with high precision.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="space-y-3 p-5 rounded-2xl bg-[#1c2438]/50 border border-[#24304c]/60 hover:border-emerald-500/40 hover:bg-[#1c2438] transition-all"
            >
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center md:justify-start gap-2">
                <div className="p-1.5 rounded-lg bg-[#151b2c] border border-[#24304c] text-emerald-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <span>Resilient Architecture</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Hybrid Offline-First POS
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Local-first SQLite caching coupled with cloud synchronization, ensuring retail operations never halt during connectivity drops.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
