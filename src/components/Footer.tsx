"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowUp, 
  Mail, 
  MessageCircle, 
  Download
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b0f19] border-t border-[#24304c] pt-16 pb-12 relative overflow-hidden text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#24304c]">
          {/* Brand Col: 5 cols */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-[#12BDF7] to-violet-600 p-[1.5px] shadow-brand-glow">
                <div className="w-full h-full bg-[#151b2c] rounded-[10px] flex items-center justify-center font-bold text-white tracking-wider text-xs font-display">
                  {PERSONAL_INFO.monogram}
                </div>
              </div>
              <div>
                <span className="font-bold text-white tracking-tight text-base block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-[#12BDF7] block font-semibold">
                  {PERSONAL_INFO.headline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              Founder of <strong className="text-white font-semibold">BrandHive Studio</strong>. Engineering resilient web applications, intelligent AI workflows, and practical business-first systems from Negombo, Sri Lanka.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#151b2c] border border-[#24304c] text-emerald-400 hover:text-emerald-300 hover:border-emerald-600/50 transition-colors shadow-subtle"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#151b2c] border border-[#24304c] text-[#12BDF7] hover:text-cyan-300 hover:border-[#12BDF7]/50 transition-colors shadow-subtle"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.cvDownloadPath}
                download="P_Pirunthan_CV.pdf"
                className="p-2.5 rounded-xl bg-[#151b2c] border border-[#24304c] text-slate-200 hover:text-white hover:border-[#37476b] transition-colors shadow-subtle"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links: 3 cols */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#hero" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Home / Overview
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Technical Arsenal
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Selected Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Professional Experience
                </Link>
              </li>
              <li>
                <Link href="#education" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Education & Languages
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-[#12BDF7] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Ventures: 4 cols */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Key Ventures & Tools
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#151b2c] border border-[#24304c] shadow-subtle">
                <span className="font-bold text-white block text-sm">
                  BrandHive Studio
                </span>
                <span className="text-xs text-slate-300 mt-0.5 block">
                  Digital agency delivering web & AI solutions.
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#151b2c] border border-[#24304c] shadow-subtle">
                <span className="font-bold text-white block text-sm">
                  UZEE TECH ScreenGuard Finder
                </span>
                <span className="text-xs text-slate-300 mt-0.5 block">
                  Live at finder.uzeetech.com.lk
                </span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#151b2c] border border-[#24304c] shadow-subtle">
                <span className="font-bold text-white block text-sm">
                  HIVE AI Assistant
                </span>
                <span className="text-xs text-slate-300 mt-0.5 block">
                  Knowledge-grounded conversational agent.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-bold">{PERSONAL_INFO.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-xs text-slate-400">
              Built with Next.js 15 & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#151b2c] hover:bg-[#1c2438] border border-[#24304c] text-slate-200 hover:text-white transition-colors shadow-subtle"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#12BDF7]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
