"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Menu, 
  X, 
  Download, 
  ArrowRight
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Active section tracking with offset
      const sections = ["hero", "about", "services", "skills", "projects", "experience", "education", "contact"];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f19]/90 backdrop-blur-md border-b border-[#24304c] py-3 shadow-card"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-10 h-10 flex-shrink-0 transition-transform group-hover:scale-105">
              <Image
                src={PERSONAL_INFO.brandIconPath}
                alt={PERSONAL_INFO.name}
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight group-hover:text-[#12BDF7] transition-colors text-base">
                  {PERSONAL_INFO.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping opacity-75 hidden sm:inline-block" />
              </div>
              <p className="text-[11px] text-slate-300 font-medium hidden sm:block">
                {PERSONAL_INFO.founderTitle}
              </p>
            </div>
          </Link>

          {/* Compact Elegant Navigation Bar with Fluid Active Pill */}
          <nav className="hidden md:flex items-center gap-1 bg-[#151b2c]/90 border border-[#24304c] rounded-full px-4 py-1.5 backdrop-blur-md shadow-subtle">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#12BDF7]"
                      : "text-slate-300 hover:text-white hover:bg-[#1c2438]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#12BDF7]/15 rounded-full border border-[#12BDF7]/35 shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="P_Pirunthan_Professional_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-slate-200 hover:text-white px-3.5 py-2 rounded-xl border border-[#24304c] hover:border-[#37476b] bg-[#151b2c] hover:bg-[#1c2438] transition-all shadow-subtle"
            >
              <Download className="w-3.5 h-3.5 text-[#12BDF7]" />
              <span>Download CV</span>
            </a>

            {/* Glowing Pill Gradient Button */}
            <a
              href="#contact"
              className="relative group p-[1.5px] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#12BDF7] via-blue-500 to-violet-500 blur-[2px] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 text-xs font-bold text-white px-5 py-2 rounded-full bg-[#151b2c] border border-white/20 shadow-brand-pill">
                <span>Contact Me</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#12BDF7] group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="P_Pirunthan_Professional_CV.pdf"
              className="p-2 rounded-xl border border-[#24304c] text-slate-200 hover:text-white bg-[#151b2c]"
              title="Download CV"
            >
              <Download className="w-4 h-4 text-[#12BDF7]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-[#24304c] text-slate-200 hover:text-white bg-[#151b2c] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#151b2c]/98 border-b border-[#24304c] backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-card animate-in fade-in slide-in-from-top-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "bg-[#12BDF7]/15 text-[#12BDF7] border border-[#12BDF7]/30"
                    : "text-slate-200 hover:bg-[#1c2438] hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#24304c] flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.cvDownloadPath}
              download="P_Pirunthan_Professional_CV.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[#24304c] bg-[#1c2438] text-sm font-semibold text-slate-200"
            >
              <Download className="w-4 h-4 text-[#12BDF7]" />
              <span>Download CV (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-[#12BDF7] to-violet-600 text-sm font-bold text-white shadow-brand-pill"
            >
              <span>Contact Me</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
