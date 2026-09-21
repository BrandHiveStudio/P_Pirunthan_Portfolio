"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  X, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  UserCheck, 
  AlertCircle
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentGalleryItem = project.gallery[activeImageIndex] || {
    url: project.thumbnail,
    caption: project.title,
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto">
      {/* Dismiss backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#151b2c] border border-[#24304c] rounded-3xl shadow-elevated overflow-hidden z-10 my-auto flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#24304c] bg-[#111726]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#12BDF7]/15 text-[#12BDF7] border border-[#12BDF7]/30">
              {project.category}
            </span>
            <span className="text-xs font-medium text-slate-300">
              {project.timeline}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1c2438] hover:bg-[#24304c] text-slate-300 hover:text-white transition-colors border border-[#24304c]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-7 space-y-6">
          {/* Gallery Showcase Viewport */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0c101d] border border-[#24304c]">
            <div className="relative aspect-video w-full">
              <Image
                src={currentGalleryItem.url}
                alt={currentGalleryItem.caption || project.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 900px"
              />

              {/* Navigation Controls */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#151b2c]/90 hover:bg-[#1c2438] border border-[#24304c] text-white shadow-card transition-transform hover:scale-105"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#151b2c]/90 hover:bg-[#1c2438] border border-[#24304c] text-white shadow-card transition-transform hover:scale-105"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Bar */}
            <div className="px-4 py-3 bg-[#111726] border-t border-[#24304c] flex items-center justify-between text-xs">
              <span className="text-slate-200 font-semibold truncate">
                {currentGalleryItem.caption}
              </span>
              <span className="text-slate-400 font-mono font-bold shrink-0 ml-2">
                {activeImageIndex + 1} / {project.gallery.length}
              </span>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {project.gallery.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {project.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                    idx === activeImageIndex
                      ? "border-[#12BDF7] scale-105 shadow-brand-pill"
                      : "border-[#24304c] opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.caption}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Project Header Info */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-bold text-[#12BDF7] mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0284c7] to-[#12BDF7] hover:from-[#0369a1] hover:to-[#12BDF7] text-white text-xs font-bold shadow-brand-pill transition-all"
                >
                  <span>Visit Live Tool</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-[#24304c]">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#12BDF7]" />
                <span>Role: <strong className="text-white font-semibold">{project.role}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-violet-400" />
                <span>Timeline: <strong className="text-white font-semibold">{project.timeline}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Status: <strong className="text-white font-semibold">{project.status}</strong></span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Architecture & Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Key Deliverables & Technical Highlights
            </h4>
            <div className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#12BDF7] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[#1c2438] text-slate-200 text-xs font-mono border border-[#24304c]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Privacy & Operational Notice */}
          {project.privacyNotice && (
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/50 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-200/95 leading-relaxed">
                <strong className="text-amber-300 font-bold block mb-0.5">
                  {project.id === "trading-automation"
                    ? "Operational Notice (Paper Mode Only):"
                    : "Privacy & Data Protection Notice:"}
                </strong>
                {project.privacyNotice}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#111726] border-t border-[#24304c] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#1c2438] hover:bg-[#24304c] text-slate-200 text-xs font-semibold transition-colors border border-[#24304c]"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
