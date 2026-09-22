"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUp, 
  Mail, 
  MessageCircle, 
  Download
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/p-pirunthan-8143b63a5/",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    href: "https://github.com/BrandHiveStudio",
    label: "GitHub",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    href: "https://www.facebook.com/brandhivestudiolk",
    label: "Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: "https://www.instagram.com/brandhivestudiolk",
    label: "Instagram",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 1 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 1 1-2.882 0 1.441 1.441 0 0 1 2.882 0z",
  },
  {
    href: "https://www.tiktok.com/@brandhivestudiolk",
    label: "TikTok",
    path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
  },
];

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
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={PERSONAL_INFO.brandIconPath}
                  alt={PERSONAL_INFO.name}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
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
                download="P_Pirunthan_Professional_CV.pdf"
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

        {/* Social Media Links */}
        <div className="pt-8 pb-6 flex items-center justify-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              title={social.label}
              aria-label={social.label}
              className="p-2.5 rounded-xl bg-[#151b2c] border border-[#24304c] text-slate-400 hover:text-[#12BDF7] hover:border-[#12BDF7]/50 hover:bg-[#1c2438] transition-all duration-200 shadow-subtle"
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d={social.path} />
              </svg>
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#24304c]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
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
