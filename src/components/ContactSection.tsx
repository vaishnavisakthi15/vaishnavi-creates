"use client";

import { useState } from "react";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  FileDown,
  Loader2,
  AlertCircle,
} from "lucide-react";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Branding & Identity",
    budget: "",
    message: "",
    bot_check: "", // Honeypot spam protection
  });

  const verifiedEmail = "vaishnavisakthijagadeeswaran@gmail.com";
  const verifiedPhone = "+91 9790565991";
  const verifiedLinkedIn = "https://www.linkedin.com/in/vaishnavi-sakthi-j";
  const verifiedGitHub = "https://github.com/vaishnavisakthi15";

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    setFormSuccess(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again or email directly.");
      }

      setFormSuccess(data.message || "Thank you! Your enquiry has been sent to Vaishnavi Sakthi.");
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "Branding & Identity",
        budget: "",
        message: "",
        bot_check: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please email directly.";
      setFormError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    "Branding & Identity",
    "Logo Design",
    "Poster Design",
    "Graphic Design",
    "Packaging Design",
    "Website Design",
    "UI/UX Design",
    "Video Editing",
    "AI Creative Production",
    "Other",
  ];

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 bg-[#07060A] overflow-hidden border-t border-white/5">
      {/* Background Plum & Pink Ambient Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#2A0E38]/40 via-[#FF1F8E]/10 to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto pb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-[#FF1F8E] font-mono-code text-xs tracking-widest uppercase mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>06 // CLIENT ENQUIRY</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[0.98]">
            Have an idea?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] via-[#FF47A3] to-[#C026D3]">
              Let&apos;s make something unforgettable.
            </span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-[#9B98A8] font-mono-code max-w-xl mx-auto leading-relaxed">
            Submit a direct project enquiry below or connect directly through verified email and professional channels.
          </p>
        </div>

        {/* Contact Layout: Left Details + Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Email */}
            <div className="p-5 rounded-2xl bg-[#0E0C14] border border-white/10 hover:border-[#FF1F8E]/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A0924] flex items-center justify-center text-[#FF1F8E]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider">
                    Direct Email
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(verifiedEmail, "email")}
                  className="p-1.5 rounded bg-white/5 hover:bg-[#FF1F8E] text-[#9B98A8] hover:text-white transition-colors interactive"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`mailto:${verifiedEmail}`}
                className="font-mono-code text-xs text-white hover:text-[#FF1F8E] transition-colors break-all block font-semibold"
              >
                {verifiedEmail}
              </a>
            </div>

            {/* Direct Phone */}
            <div className="p-5 rounded-2xl bg-[#0E0C14] border border-white/10 hover:border-[#FF1F8E]/40 transition-all">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#1A0924] flex items-center justify-center text-[#FF1F8E]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider">
                    Phone &middot; WhatsApp
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(verifiedPhone, "phone")}
                  className="p-1.5 rounded bg-white/5 hover:bg-[#FF1F8E] text-[#9B98A8] hover:text-white transition-colors interactive"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <a
                href={`tel:${verifiedPhone}`}
                className="font-mono-code text-xs text-white hover:text-[#FF1F8E] transition-colors block font-semibold"
              >
                {verifiedPhone}
              </a>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={verifiedLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E0C14] border border-white/10 hover:border-[#FF1F8E]/40 transition-all flex items-center justify-between interactive"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#FF1F8E] fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="font-display font-bold text-xs text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9B98A8]" />
              </a>

              <a
                href={verifiedGitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0E0C14] border border-white/10 hover:border-[#FF1F8E]/40 transition-all flex items-center justify-between interactive"
              >
                <div className="flex items-center gap-2.5">
                  <svg className="w-4 h-4 text-[#FF1F8E] fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="font-display font-bold text-xs text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#9B98A8]" />
              </a>
            </div>

            {/* Location & PDFs */}
            <div className="p-5 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#D4D2DC]">
                <MapPin className="w-4 h-4 text-[#FF1F8E]" />
                <span>Salem, Tamil Nadu, India &middot; Remote Worldwide</span>
              </div>

              <div className="pt-2 border-t border-white/5 flex gap-2">
                <a
                  href="/docs/vaishnavi-portfolio.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-[#FF1F8E] text-white text-[11px] font-mono-code flex items-center justify-center gap-1.5 transition-colors interactive"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Portfolio PDF</span>
                </a>

                <a
                  href="/docs/vaishnavi-resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-[#FF1F8E] text-white text-[11px] font-mono-code flex items-center justify-center gap-1.5 transition-colors interactive"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0C14] border border-[#FF1F8E]/30 relative shadow-2xl">
              <span className="font-mono-code text-[11px] text-[#FF1F8E] tracking-widest uppercase font-bold block mb-4">
                // CLIENT ENQUIRY FORM
              </span>

              {formSuccess ? (
                <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-[#1A0924] border border-[#FF1F8E] mx-auto flex items-center justify-center text-[#FF1F8E] shadow-[0_0_20px_#FF1F8E]">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white">
                    Enquiry Received
                  </h3>
                  <p className="font-mono-code text-xs text-[#D4D2DC] max-w-md mx-auto leading-relaxed">
                    {formSuccess}
                  </p>
                  <button
                    onClick={() => setFormSuccess(null)}
                    className="mt-3 px-5 py-2 rounded-full bg-white/10 hover:bg-[#FF1F8E] text-white text-xs font-mono-code transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot hidden input */}
                  <input
                    type="text"
                    name="website"
                    value={formData.bot_check}
                    onChange={(e) => setFormData({ ...formData, bot_check: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {formError && (
                    <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 flex items-center gap-2 text-xs text-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Maya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="client@brand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                        Company / Brand Name <span className="opacity-50">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vuzhavu Agri"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                        Project Budget <span className="opacity-50">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹25k - ₹50k or $1k+"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#07060A]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono-code text-[11px] text-[#9B98A8] uppercase tracking-wider mb-1.5">
                      Project Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share your goals, product requirements, timeline, or reference links..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07060A] border border-white/10 text-white placeholder-white/20 text-xs focus:outline-none focus:border-[#FF1F8E] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white font-display font-bold text-xs tracking-wider uppercase shadow-md shadow-[#FF1F8E]/25 hover:shadow-[#FF1F8E]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 interactive"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING ENQUIRY...</span>
                      </>
                    ) : (
                      <>
                        <span>SUBMIT ENQUIRY</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
