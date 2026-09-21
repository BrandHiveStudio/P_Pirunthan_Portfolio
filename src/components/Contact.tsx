"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  Check, 
  Copy, 
  Download, 
  MessageCircle, 
  Sparkles,
  ArrowRight,
  Loader2,
  AlertCircle
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
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
    } catch (err: unknown) {
      // Form inputs are preserved on failure
      setErrorMessage(
        "Network connection error. Please check your connection or contact me directly on WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0b0f19]">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#12BDF7]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#151b2c] border border-[#24304c] text-xs font-bold text-[#12BDF7] uppercase tracking-wider shadow-subtle">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries & Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
            LET'S GET <span className="text-gradient-cyan">IN TOUCH</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, need intelligent AI automations, or seeking a full-stack engineer for your business? Connect directly with me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details & Direct Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="p-7 sm:p-8 rounded-3xl bg-[#151b2c] border border-[#24304c] space-y-6 shadow-card">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#12BDF7]" />
                <span>Contact Channels</span>
              </h3>

              <div className="space-y-3.5">
                {/* Email Channel */}
                <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center justify-between group hover:border-[#37476b] transition-colors">
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
                </div>

                {/* WhatsApp & Phone Channel */}
                <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center justify-between group hover:border-[#37476b] transition-colors">
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
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#1c2438] border border-[#24304c] flex items-center gap-3.5">
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
                </div>
              </div>

              {/* CV Download Card */}
              <div className="pt-2 border-t border-[#24304c]">
                <a
                  href={PERSONAL_INFO.cvDownloadPath}
                  download="P_Pirunthan_Professional_CV.pdf"
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-[#1c2438] hover:bg-[#24304c] text-white font-bold text-xs sm:text-sm border border-[#24304c] hover:border-[#37476b] shadow-subtle transition-all"
                >
                  <Download className="w-4 h-4 text-[#12BDF7]" />
                  <span>Download Complete CV (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Project Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
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
                        setSubmittedData(null);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#151b2c] hover:bg-[#1c2438] text-slate-300 hover:text-white text-xs font-semibold border border-[#24304c] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300">
                      Fill out this quick form or reach out directly via WhatsApp for an immediate response.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] text-white text-sm focus:outline-none focus:border-[#12BDF7] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300 block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] text-white text-sm focus:outline-none focus:border-[#12BDF7] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Service / Inquired Area
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] text-white text-sm focus:outline-none focus:border-[#12BDF7] transition-colors"
                    >
                      <option value="Web Development">Full-Stack Web App (Next.js / TypeScript)</option>
                      <option value="AI Chatbots & Agents">AI Chatbots & WhatsApp Agents</option>
                      <option value="Offline POS & ERP">Offline-First ERP / POS System</option>
                      <option value="BrandHive Studio Services">BrandHive Studio Packages & Consultation</option>
                      <option value="Other Collaboration">Other Project Collaboration</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-300 block">
                      Project Details & Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Briefly describe your project requirements, scope, or timeline..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#1c2438] border border-[#24304c] text-white text-sm focus:outline-none focus:border-[#12BDF7] transition-colors resize-none"
                    />
                  </div>

                  {/* Error Notification Alert */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 flex items-start gap-2.5 text-rose-300 text-xs leading-relaxed">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <strong className="block text-rose-200 font-bold mb-0.5">
                          Delivery Note
                        </strong>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#12BDF7] to-blue-600 hover:from-[#0369a1] hover:to-[#12BDF7] text-white font-bold text-xs sm:text-sm shadow-brand-pill hover:shadow-brand-glow transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <span className="text-xs text-slate-400 text-center sm:text-right">
                      Direct WhatsApp:{" "}
                      <a
                        href={PERSONAL_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:underline font-bold"
                      >
                        +94 70 390 5441
                      </a>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
