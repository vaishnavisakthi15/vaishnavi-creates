"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers } from "lucide-react";

interface ToolItem {
  id: string;
  name: string;
  category: string;
  description: string;
  iconBg: string;
  borderColor: string;
  logoUrl?: string;
  iconType: "ai" | "ps" | "pr" | "canva" | "figma" | "gflow" | "stitch" | "wix" | "elevenlabs";
}

const TOOLS: ToolItem[] = [
  {
    id: "illustrator",
    name: "Adobe Illustrator",
    category: "Vector & Brand Design",
    description: "Vector branding, packaging die-lines, organic logomarks, and typography systems.",
    iconBg: "#330000",
    borderColor: "#FF9A00",
    iconType: "ai",
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    category: "Raster & Photo Art",
    description: "Commercial product mockup styling, cinematic posters, and visual retouching.",
    iconBg: "#001E36",
    borderColor: "#31A8FF",
    iconType: "ps",
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    category: "Video Editing & Motion",
    description: "Cinematic pacing, sequence editing, dynamic cuts, and motion graphic collages.",
    iconBg: "#00005B",
    borderColor: "#9999FF",
    iconType: "pr",
  },
  {
    id: "canva",
    name: "Canva",
    category: "Collateral & Layouts",
    description: "Rapid marketing collateral, client presentation sheets, and promotional templates.",
    iconBg: "#00C4CC",
    borderColor: "#7D2AE8",
    iconType: "canva",
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX & Prototyping",
    description: "E-commerce interfaces, component libraries, responsive design, and user flows.",
    iconBg: "#1E1E1E",
    borderColor: "#F24E1E",
    iconType: "figma",
  },
  {
    id: "gflow",
    name: "Google Flow",
    category: "User Flows & Architecture",
    description: "Information architecture, sitemaps, and interactive user experience journey mapping.",
    iconBg: "#1A1A24",
    borderColor: "#4285F4",
    iconType: "gflow",
  },
  {
    id: "stitch",
    name: "Stitch",
    category: "Design Systems & Assembly",
    description: "Design-to-code assembly, asset synchronization, and creative workflow pipelines.",
    iconBg: "#1A1128",
    borderColor: "#A855F7",
    iconType: "stitch",
  },
  {
    id: "wix",
    name: "Wix",
    category: "Web Publishing",
    description: "Rapid web development, landing pages, and interactive client web portals.",
    iconBg: "#0C0C12",
    borderColor: "#FFFFFF",
    iconType: "wix",
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "AI Audio & Voice",
    description: "Generative voice synthesis, atmospheric narrative audio, and video voiceovers.",
    iconBg: "#12121A",
    borderColor: "#FF1F8E",
    iconType: "elevenlabs",
  },
];

export default function ToolsSection() {
  const [activeTool, setActiveTool] = useState<ToolItem>(TOOLS[0]);

  // Render individual tool logo badge
  const renderToolIcon = (tool: ToolItem) => {
    switch (tool.iconType) {
      case "ai":
        return (
          <div className="w-full h-full rounded-xl bg-[#330000] border border-[#FF9A00]/50 flex items-center justify-center font-display font-black text-xs text-[#FF9A00]">
            Ai
          </div>
        );
      case "ps":
        return (
          <div className="w-full h-full rounded-xl bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center font-display font-black text-xs text-[#31A8FF]">
            Ps
          </div>
        );
      case "pr":
        return (
          <div className="w-full h-full rounded-xl bg-[#00005B] border border-[#9999FF]/50 flex items-center justify-center font-display font-black text-xs text-[#9999FF]">
            Pr
          </div>
        );
      case "canva":
        return (
          <div className="w-full h-full rounded-xl bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center font-display font-bold text-[11px] text-white">
            Canva
          </div>
        );
      case "figma":
        return (
          <div className="w-full h-full rounded-xl bg-[#1E1E1E] border border-white/20 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-6">
              <span className="w-2 h-2 rounded-l-full bg-[#F24E1E]" />
              <span className="w-2 h-2 rounded-r-full bg-[#FF7262]" />
              <span className="w-2 h-2 rounded-l-full bg-[#A259FF]" />
              <span className="w-2 h-2 rounded-full bg-[#1ABCFE]" />
              <span className="w-2 h-2 rounded-l-full bg-[#0ACF83]" />
            </div>
          </div>
        );
      case "gflow":
        return (
          <div className="w-full h-full rounded-xl bg-[#1A1A24] border border-[#4285F4]/40 flex items-center justify-center font-mono-code text-[10px] text-[#4285F4] font-bold">
            Flow
          </div>
        );
      case "stitch":
        return (
          <div className="w-full h-full rounded-xl bg-[#1A1128] border border-[#A855F7]/40 flex items-center justify-center font-display font-extrabold text-xs text-[#A855F7]">
            Stitch
          </div>
        );
      case "wix":
        return (
          <div className="w-full h-full rounded-xl bg-black border border-white/30 flex items-center justify-center font-display font-black text-[11px] text-white tracking-tighter">
            WiX
          </div>
        );
      case "elevenlabs":
        return (
          <div className="w-full h-full rounded-xl bg-[#12121A] border border-[#FF1F8E]/50 flex items-center justify-center font-mono-code font-bold text-xs text-[#FF1F8E]">
            II Labs
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="tools" className="relative w-full py-24 md:py-32 bg-[#07060A] overflow-hidden border-t border-white/5">
      {/* Background Plum & Pink Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#1A0924]/50 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-[#FF1F8E] font-mono-code text-xs tracking-widest uppercase mb-3 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03 // MY CREATIVE STACK</span>
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase mb-3">
            TOOLS &amp; CREATIVE ECOSYSTEM
          </h2>
          <p className="font-mono-code text-xs text-[#9B98A8] leading-relaxed">
            Recreated from Page 1 of my original portfolio PDF: A multidisciplinary orbit of digital creation, AI synthesis, and UI/UX engineering.
          </p>
        </div>

        {/* Circular / Orbit Arrangement (Desktop & Tablet) */}
        <div className="relative w-full max-w-2xl mx-auto aspect-square hidden sm:flex items-center justify-center my-6">
          {/* Subtle Orbital Circles */}
          <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none" />
          <div className="absolute inset-20 rounded-full border border-dashed border-[#FF1F8E]/25 pointer-events-none" />
          <div className="absolute inset-36 rounded-full border border-white/5 pointer-events-none" />

          {/* Center: Vaishnavi's Photograph */}
          <div className="relative z-20 w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-[#FF1F8E] via-[#48145F] to-[#07060A] shadow-[0_0_40px_rgba(255,31,142,0.35)] group cursor-pointer">
            <div className="w-full h-full rounded-full overflow-hidden relative bg-[#07060A]">
              <Image
                src="/images/profile/vaishnavi.jpg"
                alt="Vaishnavi Sakthi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07060A]/70 via-transparent to-transparent" />
            </div>

            {/* Center Label Pill */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#0E0C14] border border-[#FF1F8E]/50 text-[10px] font-mono-code text-white whitespace-nowrap shadow-lg">
              <span className="text-[#FF1F8E] font-bold">VS</span> &middot; CREATIVE CORE
            </div>
          </div>

          {/* 9 Orbital Tool Nodes (Angles: 0, 40, 80, 120, 160, 200, 240, 280, 320 degrees) */}
          {TOOLS.map((tool, idx) => {
            const angle = (idx * (360 / TOOLS.length) - 90) * (Math.PI / 180);
            const radius = 220; // Radius in pixels from center
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isSelected = activeTool.id === tool.id;

            return (
              <div
                key={tool.id}
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
                onClick={() => setActiveTool(tool)}
                className={`absolute top-1/2 left-1/2 z-30 transition-all duration-300 cursor-pointer group interactive ${
                  isSelected ? "scale-110 z-40" : "hover:scale-105"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl p-1.5 transition-all duration-300 shadow-xl ${
                    isSelected
                      ? "bg-[#1A0924] ring-2 ring-[#FF1F8E] shadow-[0_0_20px_rgba(255,31,142,0.5)]"
                      : "bg-[#0E0C14] border border-white/10 group-hover:border-[#FF1F8E]/50"
                  }`}
                >
                  {renderToolIcon(tool)}
                </div>

                {/* Subtle Tool Name Pill */}
                <span
                  className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono-code whitespace-nowrap px-1.5 py-0.5 rounded bg-black/80 transition-colors ${
                    isSelected ? "text-[#FF1F8E] font-bold" : "text-[#9B98A8] group-hover:text-white"
                  }`}
                >
                  {tool.name.split(" ")[tool.name.split(" ").length - 1]}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Fallback: Central Photo + Circular Grid */}
        <div className="sm:hidden flex flex-col items-center gap-6 my-4">
          <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-tr from-[#FF1F8E] via-[#48145F] to-[#07060A] shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src="/images/profile/vaishnavi.jpg"
                alt="Vaishnavi Sakthi"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            {TOOLS.map((tool) => {
              const isSelected = activeTool.id === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveTool(tool)}
                  className={`p-2.5 rounded-xl flex flex-col items-center gap-1.5 transition-all ${
                    isSelected
                      ? "bg-[#1A0924] border border-[#FF1F8E]"
                      : "bg-[#0E0C14] border border-white/10"
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg">{renderToolIcon(tool)}</div>
                  <span className="text-[10px] font-mono-code text-white/90 truncate max-w-full">
                    {tool.name.replace("Adobe ", "")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tool Spotlight Information Card */}
        <div className="mt-12 max-w-xl mx-auto p-5 rounded-2xl bg-[#0E0C14] border border-[#FF1F8E]/30 text-center relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-7 h-7 rounded-lg">{renderToolIcon(activeTool)}</div>
            <h3 className="font-display font-bold text-base text-white">
              {activeTool.name}
            </h3>
            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#1A0924] text-[#FF1F8E] border border-[#FF1F8E]/30">
              {activeTool.category}
            </span>
          </div>

          <p className="font-mono-code text-xs text-[#D4D2DC] leading-relaxed max-w-md mx-auto">
            {activeTool.description}
          </p>
        </div>
      </div>
    </section>
  );
}
