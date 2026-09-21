"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  ArrowUpRight,
  LayoutGrid,
  ListFilter,
  ChevronDown
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [layoutMode, setLayoutMode] = useState<"stacked" | "grid">("stacked");
  const [expandedStackedIndex, setExpandedStackedIndex] = useState<number>(0);

  const categories = ["All", "AI & Automation", "Web & SaaS", "Business Systems"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
        return "bg-emerald-950/60 text-emerald-300 border-emerald-700/50";
      case "Live Studio Platform":
        return "bg-[#12BDF7]/10 text-[#12BDF7] border-[#12BDF7]/30";
      case "Live Deployed System":
        return "bg-cyan-950/60 text-cyan-300 border-cyan-700/50";
      case "Live (Paper Mode)":
        return "bg-amber-950/60 text-amber-300 border-amber-700/50";
      default:
        return "bg-[#1c2438] text-slate-300 border-[#24304c]";
    }
  };

  const getStatusDot = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
        return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]";
      case "Live Studio Platform":
        return "bg-[#12BDF7] shadow-[0_0_8px_rgba(18,189,247,0.6)]";
      case "Live Deployed System":
        return "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]";
      case "Live (Paper Mode)":
        return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0c101d]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#12BDF7]/8 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Live Projects & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            MEMORABLE <span className="text-gradient-cyan">PROJECTS & SYSTEMS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real software implementations across live client platforms, conversational AI automations, enterprise offline-first ERPs, and algorithmic systems.
          </p>

          {/* Controls: Category Filter & Layout Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                      selectedCategory === cat
                        ? "bg-[#12BDF7] text-slate-950 shadow-brand-pill"
                        : "bg-[#151b2c] text-slate-300 hover:text-white hover:bg-[#1c2438] border border-[#24304c]"
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        selectedCategory === cat
                          ? "bg-slate-950 text-white"
                          : "bg-[#1c2438] text-slate-300"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Layout Mode Switcher */}
            <div className="flex items-center gap-1 p-1 rounded-xl bg-[#151b2c] border border-[#24304c] shadow-subtle shrink-0">
              <button
                onClick={() => setLayoutMode("stacked")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  layoutMode === "stacked"
                    ? "bg-[#12BDF7]/20 text-[#12BDF7] border border-[#12BDF7]/40"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Stacked Reference View"
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>Stacked View</span>
              </button>
              <button
                onClick={() => setLayoutMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  layoutMode === "grid"
                    ? "bg-[#12BDF7]/20 text-[#12BDF7] border border-[#12BDF7]/40"
                    : "text-slate-300 hover:text-white"
                }`}
                title="Grid Gallery View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* LAYOUT 1: STACKED EXPANDABLE PROJECT ROWS */}
        {layoutMode === "stacked" && (
          <div className="max-w-4xl mx-auto space-y-3.5">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedStackedIndex === index;
              const formattedNumber = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden shadow-card ${
                    isExpanded
                      ? "bg-[#1c2438] border-[#12BDF7]/50 shadow-elevated"
                      : "bg-[#151b2c] border-[#24304c] hover:border-[#37476b] hover:bg-[#182033]"
                  }`}
                >
                  {/* Card Header Accordion Bar */}
                  <div
                    onClick={() => setExpandedStackedIndex(isExpanded ? -1 : index)}
                    className="p-4 sm:p-5 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4 sm:gap-5">
                      <span className="text-xl sm:text-2xl font-extrabold font-mono text-[#12BDF7] tracking-tight">
                        {formattedNumber}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-2">
                          <span>{project.title}</span>
                          <span className="text-xs font-medium text-slate-300 hidden sm:inline">
                            — {project.subtitle}
                          </span>
                        </h3>
                        <span className="text-xs text-slate-300 font-medium sm:hidden block mt-0.5">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                      <span
                        className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shadow-sm ${getStatusBadge(
                          project.status
                        )}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getStatusDot(project.status)}`} />
                        <span>{project.status}</span>
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#151b2c] text-slate-300 border border-[#24304c] hidden md:inline-block">
                        {project.category}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="p-1 rounded-lg text-slate-300"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Visual Content Area */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="border-t border-[#24304c] p-5 sm:p-6 space-y-6 bg-[#182033]"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                          {/* Screenshot Showcase */}
                          <div
                            onClick={() => setActiveProject(project)}
                            className="md:col-span-7 relative aspect-video rounded-xl overflow-hidden bg-[#0c101d] border border-[#24304c] cursor-pointer group shadow-card"
                          >
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              fill
                              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, 500px"
                            />
                            <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151b2c]/95 text-[#12BDF7] text-xs font-bold border border-[#12BDF7]/50 shadow-elevated">
                                <Eye className="w-4 h-4" />
                                <span>Expand Gallery ({project.gallery.length} Images)</span>
                              </div>
                            </div>
                          </div>

                          {/* Details & Actions */}
                          <div className="md:col-span-5 space-y-4">
                            <div className="flex items-center gap-2 sm:hidden pb-1">
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusBadge(
                                  project.status
                                )}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getStatusDot(project.status)}`} />
                                <span>{project.status}</span>
                              </span>
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#151b2c] text-slate-300 border border-[#24304c]">
                                {project.category}
                              </span>
                            </div>

                            <p className="text-sm text-slate-200 leading-relaxed">
                              {project.description}
                            </p>

                            <div className="space-y-2">
                              {project.highlights.slice(0, 2).map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                  <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {project.technologies.slice(0, 4).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-0.5 rounded-md bg-[#151b2c] text-xs font-mono text-slate-200 border border-[#24304c]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="pt-3 flex items-center gap-3">
                              <button
                                onClick={() => setActiveProject(project)}
                                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#12BDF7] to-blue-600 text-white text-xs font-bold shadow-brand-pill hover:shadow-brand-glow transition-all"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                <span>Full Details & Gallery</span>
                              </button>

                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#151b2c] hover:bg-[#1c2438] text-slate-200 text-xs font-bold border border-[#24304c] transition-all"
                                >
                                  <span>Visit Live</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-[#12BDF7]" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* LAYOUT 2: GRID GALLERY VIEW */}
        {layoutMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#37476b] overflow-hidden transition-all duration-200 flex flex-col justify-between shadow-card hover:shadow-elevated"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div
                    className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c101d] cursor-pointer"
                    onClick={() => setActiveProject(project)}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#151b2c]/90 text-[#12BDF7] border border-[#24304c] shadow-sm">
                        {project.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm inline-flex items-center gap-1.5 ${getStatusBadge(
                          project.status
                        )}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getStatusDot(project.status)}`} />
                        <span>{project.status}</span>
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#12BDF7]">
                        <Eye className="w-4 h-4" />
                        <span>View gallery ({project.gallery.length} screenshots)</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3
                        onClick={() => setActiveProject(project)}
                        className="text-lg font-bold text-white group-hover:text-[#12BDF7] transition-colors cursor-pointer flex items-center justify-between"
                      >
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity shrink-0 text-[#12BDF7]" />
                      </h3>
                      <p className="text-xs font-semibold text-[#12BDF7] mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#12BDF7] shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[#1c2438] text-[11px] font-mono text-slate-200 border border-[#24304c]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-6 pb-6 pt-2 border-t border-[#24304c] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex items-center gap-1.5 text-xs font-bold text-[#12BDF7] hover:text-cyan-300 transition-colors py-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details & Gallery</span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-bold text-white px-3 py-1.5 rounded-lg bg-[#0284c7] hover:bg-[#0369a1] border border-[#12BDF7]/40 transition-all shadow-sm"
                    >
                      <span>Live</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal for In-Depth Screenshots */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </section>
  );
}
