"use client";

import { ArrowUp, Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#050407] border-t border-white/10 relative z-10 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-black text-2xl tracking-wider text-white">
                VAISHNAVI SAKTHI
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#1A0924] text-[10px] font-mono-code text-[#FF1F8E] border border-[#FF1F8E]/30">
                CREATIVE STUDIO
              </span>
            </div>
            <p className="font-mono-code text-xs text-[#9B98A8] max-w-md">
              &quot;I create experiences people don&apos;t just see. They feel.&quot;
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0E0C14] hover:bg-[#FF1F8E] border border-white/10 hover:border-[#FF1F8E] text-white text-xs font-mono-code tracking-wider transition-all interactive"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#5A5768]">
          <p>
            &copy; 2024&ndash;2026 Vaishnavi Sakthi. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Crafted for immersive digital storytelling
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F8E] inline-block" />
          </p>
        </div>
      </div>
    </footer>
  );
}
