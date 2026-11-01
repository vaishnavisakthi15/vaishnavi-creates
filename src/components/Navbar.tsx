"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, FileDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ["hero", "about", "tools", "projects", "gallery", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "01 // INTRO" },
    { id: "about", label: "02 // ABOUT" },
    { id: "tools", label: "03 // TOOLS" },
    { id: "projects", label: "04 // PROJECTS" },
    { id: "gallery", label: "05 // GALLERY" },
    { id: "contact", label: "06 // CONNECT" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#07060A]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/80"
            : "py-6 bg-gradient-to-b from-[#07060A]/90 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#hero"
            className="group flex items-center gap-3 interactive focus:outline-none"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF1F8E] via-[#48145F] to-[#07060A] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07060A] rounded-full flex items-center justify-center">
                <span className="font-display font-black text-xs tracking-tighter text-[#FF1F8E] group-hover:text-white transition-colors">
                  VS
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm md:text-base tracking-wider text-white group-hover:text-[#FF1F8E] transition-colors">
                VAISHNAVI SAKTHI
              </span>
              <span className="font-mono-code text-[10px] tracking-widest text-[#9B98A8] uppercase">
                Creative Designer & AI Creator
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs font-mono-code tracking-widest transition-all duration-300 relative py-1 interactive ${
                  activeSection === link.id
                    ? "text-[#FF1F8E] font-semibold"
                    : "text-[#D4D2DC] hover:text-[#FF1F8E]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF1F8E] shadow-[0_0_8px_#FF1F8E]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="/docs/vaishnavi-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-code tracking-wider text-[#D4D2DC] hover:text-white border border-white/10 hover:border-[#FF1F8E]/40 transition-all duration-300 interactive"
              title="View Original Portfolio PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-[#FF1F8E] group-hover:translate-y-0.5 transition-transform" />
              <span>PDF Portfolio</span>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full overflow-hidden text-xs font-display font-bold tracking-wider text-white bg-[#1A0924] border border-[#FF1F8E]/50 shadow-[0_0_15px_rgba(255,31,142,0.25)] hover:shadow-[0_0_25px_rgba(255,31,142,0.5)] transition-all duration-300 interactive"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF1F8E] to-[#48145F] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-3.5 h-3.5 text-[#FF1F8E] group-hover:text-white relative z-10" />
              <span className="relative z-10">LET&apos;S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:text-[#FF1F8E] border border-white/10 hover:border-[#FF1F8E]/30 transition-colors interactive focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#07060A]/95 backdrop-blur-2xl flex flex-col justify-center px-8 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6 max-w-sm mx-auto w-full">
            <span className="font-mono-code text-xs text-[#FF1F8E] tracking-widest uppercase">
              // Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-2xl font-bold tracking-tight transition-colors py-1 ${
                  activeSection === link.id
                    ? "text-[#FF1F8E]"
                    : "text-white hover:text-[#FF1F8E]"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href="/docs/vaishnavi-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-sm font-mono-code text-white hover:border-[#FF1F8E]"
              >
                <span>Original Portfolio PDF</span>
                <FileDown className="w-4 h-4 text-[#FF1F8E]" />
              </a>

              <a
                href="/docs/vaishnavi-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-sm font-mono-code text-white hover:border-[#FF1F8E]"
              >
                <span>Resume (PDF)</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF1F8E]" />
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center py-3.5 rounded-full bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white font-display font-bold text-sm tracking-wider shadow-lg shadow-[#FF1F8E]/25"
              >
                LET&apos;S CONNECT
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
