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

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#12BDF7] text-slate-950 shadow-brand-pill"
                    : "bg-[#151b2c] text-slate-300 hover:text-white hover:bg-[#1c2438] border border-[#24304c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skill Cards Grid with Staggered Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#37476b] transition-all duration-200 flex flex-col justify-between group shadow-card"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-3.5 border-b border-[#24304c]">
                    <div className="w-10 h-10 rounded-xl bg-[#1c2438] border border-[#24304c] flex items-center justify-center">
                      {getCategoryIcon(category.name)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#12BDF7] transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {category.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-3 rounded-xl bg-[#1c2438] border border-[#24304c] hover:border-[#37476b] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-200">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#151b2c] text-[#12BDF7] border border-[#24304c]">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Specialized Focus Callout with High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12 p-7 sm:p-9 rounded-3xl bg-[#151b2c] border border-[#24304c] shadow-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#12BDF7] flex items-center justify-center md:justify-start gap-2">
                <Code2 className="w-4 h-4" />
                <span>Modern Full-Stack</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Next.js & TypeScript Specialist
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clean server/client component architecture, strict type safety, responsive Tailwind styling, and optimized Web Vitals.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-violet-400 flex items-center justify-center md:justify-start gap-2">
                <Bot className="w-4 h-4" />
                <span>AI Workflows</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Deterministic Knowledge AI
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Grounding chatbots and WhatsApp bots in structured company datasets, FAQs, and service catalogs with high precision.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center justify-center md:justify-start gap-2">
                <Cpu className="w-4 h-4" />
                <span>Resilient Architecture</span>
              </div>
              <h4 className="text-base font-bold text-white">
                Hybrid Offline-First POS
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Local-first SQLite caching coupled with cloud synchronization, ensuring retail operations never halt during connectivity drops.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
