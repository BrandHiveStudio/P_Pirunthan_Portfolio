"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FolderGit2, 
  ExternalLink, 
  Eye, 
  CheckCircle2, 
  ArrowUpRight,
  LayoutGrid,
  Layers,
  AlertCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [layoutMode, setLayoutMode] = useState<"storytelling" | "grid">("storytelling");
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0);
  const [activeThumbnails, setActiveThumbnails] = useState<Record<string, number>>({});

  const categories = ["All", "AI & Automation", "Web & SaaS", "Business Systems"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  // Performance: track the current index in a ref to avoid re-renders when index hasn't changed
  const activeIndexRef = useRef<number>(0);
  const rafIdRef = useRef<number>(0);

  // RAF-debounced scroll listener — only triggers setState when the computed index changes
  const handleScroll = useCallback(() => {
    if (rafIdRef.current) return; // already scheduled

    rafIdRef.current = requestAnimationFrame(() => {
      rafIdRef.current = 0;
      const container = scrollContainerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      const count = filteredProjects.length;
      if (count <= 1) {
        if (activeIndexRef.current !== 0) {
          activeIndexRef.current = 0;
          setActiveStoryIndex(0);
        }
        return;
      }

      const rawIdx = Math.floor(progress * count);
      const newIdx = Math.max(0, Math.min(count - 1, rawIdx));

      // Only trigger React re-render when the active project actually changes
      if (newIdx !== activeIndexRef.current) {
        activeIndexRef.current = newIdx;
        setActiveStoryIndex(newIdx);
      }
    });
  }, [filteredProjects.length]);

  useEffect(() => {
    if (layoutMode !== "storytelling") return;

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
  }, [handleScroll, layoutMode]);

  // Reset active index when category filter changes
  useEffect(() => {
    activeIndexRef.current = 0;
    setActiveStoryIndex(0);
  }, [selectedCategory]);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
        return "bg-emerald-950/70 text-emerald-300 border-emerald-700/60";
      case "Live Studio Platform":
        return "bg-[#12BDF7]/15 text-[#12BDF7] border-[#12BDF7]/40";
      case "Live Deployed System":
        return "bg-cyan-950/70 text-cyan-300 border-cyan-700/60";
      case "Live (Paper Mode)":
        return "bg-amber-950/70 text-amber-300 border-amber-600/60";
      default:
        return "bg-[#1c2438] text-slate-300 border-[#24304c]";
    }
  };

  const getStatusDot = (status: Project["status"]) => {
    switch (status) {
      case "Live Production":
        return "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]";
      case "Live Studio Platform":
        return "bg-[#12BDF7] shadow-[0_0_8px_rgba(18,189,247,0.7)]";
      case "Live Deployed System":
        return "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]";
      case "Live (Paper Mode)":
        return "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.7)]";
      default:
        return "bg-slate-400";
    }
  };

  // Jump to specific project scroll offset
  const jumpToProject = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerTop = window.scrollY + container.getBoundingClientRect().top;
    const totalScrollable = container.offsetHeight - window.innerHeight;
    const divisor = Math.max(1, filteredProjects.length - 1);
    const targetScroll = containerTop + (index / divisor) * totalScrollable;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
    activeIndexRef.current = index;
    setActiveStoryIndex(index);
  };

  const setProjectThumbnail = (projectId: string, thumbIdx: number) => {
    setActiveThumbnails((prev) => ({ ...prev, [projectId]: thumbIdx }));
  };

  const currentActiveProject = filteredProjects[activeStoryIndex] || filteredProjects[0];

  return (
    <section id="projects" className="relative bg-[#0c101d] text-white">
      {/* Dynamic Ambient Background Illumination — pure CSS for zero JS overhead */}
      <div 
        className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] pointer-events-none rounded-full animate-[ambientPulse_14s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-20 right-0 w-[550px] h-[550px] bg-[#12BDF7]/10 blur-[150px] pointer-events-none rounded-full animate-[ambientPulse_16s_ease-in-out_1s_infinite]" 
      />

      {/* 1. Header & Controls */}
      <div className="pt-24 pb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Cinematic Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            SELECTED <span className="text-gradient-cyan">PROJECTS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A scroll-driven chapter showcase of production web applications, context-grounded AI automations, offline-first systems, and quantitative paper scanners.
          </p>

          {/* Controls: Category Filter & View Mode Switcher */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-b border-[#24304c] pb-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count =
                  cat === "All"
                    ? PROJECTS.length
                    : PROJECTS.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                      isSelected
                        ? "text-slate-950"
                        : "bg-[#151b2c] text-slate-300 hover:text-white hover:bg-[#1c2438] border border-[#24304c]"
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeProjectCategoryPill"
                        className="absolute inset-0 bg-[#12BDF7] rounded-full shadow-brand-pill"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                    <span
                      className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isSelected
                          ? "bg-slate-950 text-white font-bold"
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
                onClick={() => setLayoutMode("storytelling")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  layoutMode === "storytelling"
                    ? "bg-[#12BDF7]/20 text-[#12BDF7] border border-[#12BDF7]/40 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Cinematic Scroll Showcase"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Story Stage</span>
              </button>
              <button
                onClick={() => setLayoutMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  layoutMode === "grid"
                    ? "bg-[#12BDF7]/20 text-[#12BDF7] border border-[#12BDF7]/40 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
                title="Grid Gallery View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. CINEMATIC SCROLL-DRIVEN STICKY SHOWCASE (DESKTOP) */}
      {layoutMode === "storytelling" && (
        <>
          {/* DESKTOP VIEW: PINNED VIEWPORT STAGE */}
          <div
            ref={scrollContainerRef}
            className="hidden lg:block relative"
            style={{ height: `${Math.max(350, filteredProjects.length * 80)}vh` }}
          >
            {/* The Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 px-6 lg:px-12 max-w-7xl mx-auto z-20">
              
              {/* Sticky Top Navigator Bar */}
              <div className="flex items-center justify-between gap-4 pt-1 pb-3 border-b border-[#24304c]/80 shrink-0">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#12BDF7] bg-[#151b2c] px-3 py-1 rounded-full border border-[#24304c]">
                    Chapter {String(activeStoryIndex + 1).padStart(2, "0")} of {String(filteredProjects.length).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Scroll down to advance scenes
                  </span>
                </div>

                {/* Project Quick Jump Tabs */}
                <div className="flex items-center gap-1.5 bg-[#151b2c] p-1 rounded-xl border border-[#24304c]">
                  {filteredProjects.map((p, idx) => {
                    const isCurrent = idx === activeStoryIndex;
                    return (
                      <button
                        key={p.id}
                        onClick={() => jumpToProject(idx)}
                        className={`relative px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                          isCurrent
                            ? "text-slate-950"
                            : "text-slate-400 hover:text-white hover:bg-[#1c2438]"
                        }`}
                        title={p.title}
                      >
                        {isCurrent && (
                          <motion.div
                            layoutId="activeStoryTabIndicator"
                            className="absolute inset-0 bg-[#12BDF7] rounded-lg shadow-sm"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                        <span className="relative z-10">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="relative z-10 hidden xl:inline text-[11px] font-sans font-medium truncate max-w-[90px]">
                          {p.title.split("—")[0].trim()}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Central Stage Area: Stacked Cross-Fading Scenes */}
              <div className="relative flex-1 my-auto flex items-center py-2">
                <div className="w-full grid grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Story Chapter & Information (Stacked Layers) */}
                  <div className="col-span-6 relative min-h-[440px] flex items-center">
                    {filteredProjects.map((proj, idx) => {
                      const isActive = idx === activeStoryIndex;
                      const isPaperMode = proj.status === "Live (Paper Mode)";

                      return (
                        <div
                          key={proj.id}
                          className={`w-full transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform] ${
                            isActive
                              ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                              : "opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none"
                          }`}
                        >
                          <div className="space-y-3.5 pr-2">
                            {/* Chapter Number & Status Row */}
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <span className="text-4xl lg:text-5xl font-black font-mono text-[#12BDF7] drop-shadow-[0_0_15px_rgba(18,189,247,0.4)]">
                                  {String(idx + 1).padStart(2, "0")}
                                </span>
                                <div className="h-6 w-[2px] bg-[#24304c]" />
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                                  {proj.timeline}
                                </span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1c2438] text-slate-300 border border-[#24304c]">
                                  {proj.category}
                                </span>
                                <span
                                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-sm ${getStatusBadge(
                                    proj.status
                                  )}`}
                                >
                                  <span className={`w-2 h-2 rounded-full shrink-0 ${getStatusDot(proj.status)}`} />
                                  <span>{proj.status}</span>
                                </span>
                              </div>
                            </div>

                            {/* Title & Role */}
                            <div>
                              <h3 className="text-2xl lg:text-3xl font-black text-white tracking-tight font-display leading-tight">
                                {proj.title}
                              </h3>
                              <p className="text-xs sm:text-sm font-semibold text-[#12BDF7] mt-1">
                                {proj.subtitle} • <span className="text-slate-300">{proj.role}</span>
                              </p>
                            </div>

                            {/* Narrative Summary */}
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                              {proj.longDescription || proj.description}
                            </p>

                            {/* Key Architectural Highlights */}
                            <div className="space-y-1.5 pt-1">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                Key Architectural Highlights
                              </h4>
                              {proj.highlights.slice(0, 3).map((item, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#12BDF7] shrink-0 mt-0.5" />
                                  <span className="leading-snug">{item}</span>
                                </div>
                              ))}
                            </div>

                            {/* Technologies Applied */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {proj.technologies.slice(0, 5).map((tech) => (
                                <span
                                  key={tech}
                                  className="px-2.5 py-0.5 rounded-lg bg-[#1c2438] text-[11px] font-mono text-slate-200 border border-[#24304c] font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Strict Paper Mode / Privacy Notice */}
                            {proj.privacyNotice && (
                              <div className={`p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-2 ${
                                isPaperMode
                                  ? "bg-amber-950/50 border-amber-600/60 text-amber-200"
                                  : "bg-[#1c2438]/80 border-[#24304c] text-slate-300"
                              }`}>
                                <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                                  isPaperMode ? "text-amber-400" : "text-[#12BDF7]"
                                }`} />
                                <div>
                                  <strong className="block font-bold">
                                    {isPaperMode ? "Paper-Trading Simulator Notice" : "Privacy Notice"}
                                  </strong>
                                  <span>{proj.privacyNotice}</span>
                                </div>
                              </div>
                            )}

                            {/* Action Triggers */}
                            <div className="pt-2 flex flex-wrap items-center gap-3">
                              <button
                                onClick={() => setActiveProject(proj)}
                                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-[#12BDF7] to-cyan-500 text-slate-950 font-bold text-xs shadow-brand-pill hover:shadow-brand-glow transition-all hover:scale-[1.02] active:scale-[0.98]"
                              >
                                <Eye className="w-4 h-4" />
                                <span>Inspect Case Study & Gallery ({proj.gallery.length} Images)</span>
                              </button>

                              {proj.liveUrl && (
                                <a
                                  href={proj.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c2438] hover:bg-[#24304c] text-white font-bold text-xs border border-[#24304c] hover:border-[#12BDF7]/50 transition-all shadow-subtle"
                                >
                                  <span>Visit Live Platform</span>
                                  <ExternalLink className="w-3.5 h-3.5 text-[#12BDF7]" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Column: Large Interactive Visual Showcase (Stacked Layers) */}
                  <div className="col-span-6 relative min-h-[420px] flex items-center">
                    {filteredProjects.map((proj, idx) => {
                      const isActive = idx === activeStoryIndex;
                      const activeThumb = activeThumbnails[proj.id] || 0;
                      const currentImage = proj.gallery[activeThumb]?.url || proj.thumbnail;
                      const currentCaption = proj.gallery[activeThumb]?.caption || proj.title;

                      return (
                        <div
                          key={proj.id}
                          className={`w-full transition-[opacity,transform] duration-500 ease-out will-change-[opacity,transform] ${
                            isActive
                              ? "opacity-100 scale-100 translate-y-0 relative z-10 pointer-events-auto"
                              : "opacity-0 scale-95 translate-y-4 absolute inset-0 z-0 pointer-events-none"
                          }`}
                        >
                          <div className="space-y-3">
                            {/* Browser Mockup Frame */}
                            <div
                              className="rounded-2xl bg-[#0e1322] border border-[#24304c] hover:border-[#12BDF7]/50 transition-all duration-300 overflow-hidden shadow-elevated cursor-pointer group"
                              onClick={() => setActiveProject(proj)}
                            >
                              {/* Browser Window Header */}
                              <div className="px-4 py-2 bg-[#151b2c] border-b border-[#24304c] flex items-center justify-between gap-3">
                                <div className="flex items-center gap-1.5">
                                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                                </div>
                                <div className="px-3 py-0.5 rounded-md bg-[#0c101d] text-[11px] font-mono text-slate-400 truncate max-w-[240px] border border-[#24304c]/60">
                                  {proj.title.toLowerCase().replace(/\s+/g, "-")}.app
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">
                                  Scene {activeThumb + 1}/{proj.gallery.length}
                                </span>
                              </div>

                              {/* Main Screenshot Visual */}
                              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0c101d]">
                                <Image
                                  src={currentImage}
                                  alt={currentCaption}
                                  fill
                                  priority={idx === 0}
                                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                  sizes="(max-width: 1200px) 50vw, 600px"
                                />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#151b2c]/95 text-[#12BDF7] text-xs font-bold border border-[#12BDF7]/50 shadow-elevated">
                                    <Eye className="w-4 h-4" />
                                    <span>Click to Expand Full Screen Gallery</span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Interactive Thumbnail Strip */}
                            {proj.gallery.length > 1 && (
                              <div className="flex items-center gap-2.5 pt-1">
                                {proj.gallery.map((img, thumbIdx) => {
                                  const isThumbActive = thumbIdx === activeThumb;
                                  return (
                                    <button
                                      key={thumbIdx}
                                      onClick={() => setProjectThumbnail(proj.id, thumbIdx)}
                                      className={`relative aspect-video w-20 rounded-lg overflow-hidden bg-[#0c101d] border transition-all ${
                                        isThumbActive
                                          ? "border-[#12BDF7] shadow-brand-glow scale-105"
                                          : "border-[#24304c] hover:border-slate-400 opacity-70 hover:opacity-100"
                                      }`}
                                      title={img.caption}
                                    >
                                      <Image
                                        src={img.url}
                                        alt={img.caption || "Screenshot"}
                                        fill
                                        className="object-cover object-top"
                                        sizes="80px"
                                      />
                                    </button>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Progress Bar & Navigation Controls */}
              <div className="pt-2 border-t border-[#24304c]/80 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => jumpToProject(Math.max(0, activeStoryIndex - 1))}
                    disabled={activeStoryIndex === 0}
                    className="p-1.5 rounded-lg bg-[#151b2c] border border-[#24304c] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Previous Project"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => jumpToProject(Math.min(filteredProjects.length - 1, activeStoryIndex + 1))}
                    disabled={activeStoryIndex === filteredProjects.length - 1}
                    className="p-1.5 rounded-lg bg-[#151b2c] border border-[#24304c] text-slate-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    title="Next Project"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    {currentActiveProject?.title}
                  </span>
                </div>

                {/* Overall Scroll Progress Bar */}
                <div className="flex-1 max-w-md mx-4 h-1.5 bg-[#151b2c] rounded-full overflow-hidden border border-[#24304c]">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-[#12BDF7] to-cyan-400 transition-all duration-300 ease-out"
                    style={{
                      width: `${((activeStoryIndex + 1) / Math.max(1, filteredProjects.length)) * 100}%`,
                    }}
                  />
                </div>

                <div className="text-xs font-medium text-slate-400">
                  {activeStoryIndex + 1} / {filteredProjects.length} Chapters
                </div>
              </div>

            </div>
          </div>

          {/* MOBILE VIEW: SEQUENTIAL STORY CARDS (Smooth flowing cards for phone screens) */}
          <div className="lg:hidden max-w-2xl mx-auto px-4 space-y-12 pb-16">
            {filteredProjects.map((project, idx) => {
              const formattedNumber = String(idx + 1).padStart(2, "0");
              const isPaperMode = project.status === "Live (Paper Mode)";

              return (
                <article
                  key={project.id}
                  className="rounded-3xl p-6 bg-[#151b2c] border border-[#24304c] shadow-card space-y-5"
                >
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#24304c]">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-black font-mono text-[#12BDF7]">
                        {formattedNumber}
                      </span>
                      <span className="text-xs font-bold text-slate-300">
                        {project.timeline}
                      </span>
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${getStatusBadge(
                        project.status
                      )}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${getStatusDot(project.status)}`} />
                      <span>{project.status}</span>
                    </span>
                  </div>

                  {/* Visual Frame */}
                  <div
                    onClick={() => setActiveProject(project)}
                    className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#0c101d] border border-[#24304c] cursor-pointer"
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
                      <div className="px-3 py-1.5 rounded-full bg-[#151b2c]/90 text-[#12BDF7] text-xs font-bold border border-[#12BDF7]/50 shadow-md flex items-center gap-1.5">
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Gallery ({project.gallery.length})</span>
                      </div>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-xl font-black text-white font-display">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#12BDF7] mt-1">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#12BDF7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-[#1c2438] text-[10px] font-mono text-slate-200 border border-[#24304c]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Paper mode warning */}
                  {project.privacyNotice && (
                    <div className={`p-3 rounded-xl border text-[11px] leading-relaxed ${
                      isPaperMode
                        ? "bg-amber-950/50 border-amber-600/60 text-amber-200"
                        : "bg-[#1c2438]/80 border-[#24304c] text-slate-300"
                    }`}>
                      <p>{project.privacyNotice}</p>
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-[#12BDF7] to-cyan-500 text-slate-950 font-bold text-xs shadow-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Details</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2.5 rounded-xl bg-[#1c2438] text-white text-xs font-bold border border-[#24304c]"
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3 h-3 text-[#12BDF7]" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </>
      )}

      {/* 3. GRID GALLERY VIEW (When visitor toggles to Grid) */}
      {layoutMode === "grid" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl bg-[#151b2c] border border-[#24304c] hover:border-[#12BDF7]/40 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-card hover:shadow-elevated"
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
        </div>
      )}

      {/* Modal for In-Depth Screenshots */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
