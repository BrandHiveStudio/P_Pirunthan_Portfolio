"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  Download, 
  MessageCircle, 
  Sparkles,
  Loader2,
  AlertCircle
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const handY = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const handRotate = useTransform(scrollYProgress, [0, 1], [-8, 6]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    service: string;
    message: string;
  } | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const getWhatsAppUrl = () => {
    const data = submittedData || formState;
    const message = [
      `Hi Pirunthan, I just submitted an inquiry through your portfolio website:`,
      ``,
      `*Name:* ${data.name}`,
      `*Email:* ${data.email}`,
      `*Service:* ${data.service}`,
      ``,
      `*Message:*`,
      `${data.message}`,
    ].join("\n");

    return `https://wa.me/94703905441?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setErrorMessage("Please complete your name, email address, and project message.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        // Form inputs are preserved on failure
        setErrorMessage(
          data?.error ||
            "Unable to deliver your inquiry at this moment. Please verify your details, or contact me directly on WhatsApp."
        );
        return;
      }

      // Confirmed email acceptance by the API
      setSubmittedData({ ...formState });
      setIsSubmitted(true);
    } catch {
      // Form inputs are preserved on failure
      setErrorMessage(
        "Network connection error. Please check your connection or contact me directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-32 relative overflow-hidden bg-[#0b0f19] text-white"
    >
      {/* Subtle ambient lighting — pure CSS for zero JS overhead */}
      <div 
        className="absolute top-1/3 right-0 w-[550px] h-[550px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full animate-[ambientPulse_10s_ease-in-out_infinite]" 
      />
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#12BDF7]/10 blur-[140px] pointer-events-none rounded-full animate-[ambientPulse_12s_ease-in-out_1s_infinite]" 
      />

      {/* 3D Hand Touch Element (Reference Video Composition Frame 17) */}
      <motion.div
        style={{ y: handY, rotate: handRotate }}
        className="hidden lg:block absolute left-4 xl:left-12 top-28 w-44 xl:w-56 h-44 xl:h-56 pointer-events-none select-none z-0 opacity-80"
      >
        <div className="relative w-full h-full drop-shadow-[0_20px_35px_rgba(18,189,247,0.3)]">
          <Image
            src="/assets/3d/hand_touch_transparent.png"
            alt="3D Interactive Touch"
            fill
            className="object-contain"
            sizes="224px"
          />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Reference Video "TOUCH" Inspired Composition */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>The Closing Scene</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase font-display">
            GET IN <span className="text-gradient-cyan">TOUCH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need intelligent AI automations, or seeking a full-stack engineer for your business? Connect directly with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-[#151b2c] border border-[#24304c] space-y-6 shadow-card">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#12BDF7]" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-3.5">
                {/* Email Channel */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center justify-between group hover:border-[#12BDF7]/40 hover:bg-[#1e273d] transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#12BDF7]/15 border border-[#12BDF7]/30 flex items-center justify-center text-[#12BDF7]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-white hover:text-[#12BDF7] transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#151b2c] hover:bg-[#24304c] text-slate-300 hover:text-white transition-colors border border-[#24304c]"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </motion.div>

                {/* WhatsApp & Phone Channel */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center justify-between group hover:border-emerald-500/40 hover:bg-[#1e273d] transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">
                        Phone & WhatsApp
                      </span>
                      <a
                        href={PERSONAL_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                      >
                        {PERSONAL_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={PERSONAL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 text-xs font-bold hover:bg-emerald-900 transition-colors shadow-sm"
                    >
                      Chat
                    </a>
                    <button
                      onClick={handleCopyPhone}
                      className="p-2 rounded-xl bg-[#151b2c] hover:bg-[#24304c] text-slate-300 hover:text-white transition-colors border border-[#24304c]"
                      title="Copy Phone Number"
                    >
                      {copiedPhone ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div 
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center gap-3.5 hover:border-rose-500/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-600/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Base Location
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* CV Download Card */}
              <div className="pt-2 border-t border-[#24304c]">
                <a
                  href={PERSONAL_INFO.cvDownloadPath}
                  download="P_Pirunthan_Professional_CV.pdf"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#1c2438] hover:bg-[#24304c] text-white font-bold text-xs sm:text-sm border border-[#24304c] hover:border-[#12BDF7]/50 shadow-subtle hover:shadow-brand-glow transition-all"
                >
                  <Download className="w-4 h-4 text-[#12BDF7]" />
                  <span>Download Complete CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Project Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-[#151b2c] border border-[#24304c] shadow-card">
              {isSubmitted ? (
                <div className="py-10 text-center space-y-5">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Inquiry Delivered Successfully!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for reaching out, <span className="text-white font-semibold">{submittedData?.name || "there"}</span>. Your inquiry has been routed to my primary inbox and I will get back to you within 24 hours.
                    </p>
                  </div>

                  {/* Optional WhatsApp Fast-Track */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#1c2438] border border-[#24304c] max-w-lg mx-auto space-y-3 text-left">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider">
                      <MessageCircle className="w-4 h-4" />
                      <span>Optional: Fast-Track via WhatsApp</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Want an instant reply? You can also send a pre-formatted copy of this inquiry directly to my WhatsApp.
                    </p>
                    <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-brand-pill transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Also Send via WhatsApp</span>
                      </a>
                      <span className="text-[11px] text-slate-400 sm:max-w-[200px] leading-tight text-center sm:text-left">
                        Opens WhatsApp with your message pre-filled. Tap Send manually.
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage(null);
                        setFormState({
                          name: "",
                          email: "",
                          service: "Web Development",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#1c2438] hover:bg-[#24304c] text-slate-200 text-xs font-bold border border-[#24304c] transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-[#12BDF7]" />
                      <span>Project & Collaboration Inquiry</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Direct delivery to piru.exports@gmail.com via authenticated SMTP.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-800 text-rose-200 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="font-bold">Delivery Notice</span>
                        <p>{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Alex Turner"
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] focus:border-[#12BDF7] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] focus:border-[#12BDF7] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service" className="text-xs font-bold text-slate-300">
                      Primary Scope / Service Required
                    </label>
                    <select
                      id="service"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] focus:border-[#12BDF7] focus:outline-none text-white text-sm transition-colors cursor-pointer"
                    >
                      <option value="Web Development">Full-Stack Web Application (Next.js / TypeScript)</option>
                      <option value="AI Workflow & Chatbots">AI Automations, RAG & WhatsApp Cloud Agents</option>
                      <option value="Offline-First ERP / POS">Offline-First ERP, POS & Inventory Systems</option>
                      <option value="Technical Project Architecture">Technical Planning, Schemas & Scoping</option>
                      <option value="BrandHive Turnkey Solution">BrandHive Studio Turnkey Agency Delivery</option>
                      <option value="Other Commercial Project">Other Engineering / Advisory Project</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-300">
                      Project Details & Timeline *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Briefly describe your objectives, key features, target timeline, or existing technical setup..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] focus:border-[#12BDF7] focus:outline-none text-white text-sm placeholder:text-slate-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-[#12BDF7] to-cyan-500 text-slate-950 font-bold text-sm shadow-brand-pill hover:shadow-brand-glow transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry via Gmail SMTP...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
