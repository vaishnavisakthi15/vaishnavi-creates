"use client";

import { useState } from "react";
import {
  Sparkles,
  Palette,
  Package,
  Layers,
  FileImage,
  Flame,
  Globe,
  Layout,
  Video,
  Bot,
  MessageSquareQuote,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Capability {
  id: string;
  num: string;
  title: string;
  category: string;
  icon: typeof Palette;
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
}

const CAPABILITIES: Capability[] = [
  {
    id: "brand-design",
    num: "01",
    title: "Brand Design",
    category: "IDENTITY & ARCHITECTURE",
    icon: Flame,
    tagline: "Cohesive visual ecosystems that define brand authority.",
    description:
      "Creating entire visual identities, typographic guidelines, tailored color palettes, and brand books that communicate brand values with clarity and distinction.",
    tools: ["Adobe Illustrator", "Photoshop", "Canva"],
    deliverables: ["Brand Style Guides", "Color Systems", "Typography Hierarchy", "Collateral Assets"],
  },
  {
    id: "packaging-design",
    num: "02",
    title: "Packaging Design",
    category: "PHYSICAL & 3D PRODUCT",
    icon: Package,
    tagline: "Market-ready packaging that commands physical shelf presence.",
    description:
      "Full packaging suites for agricultural, wellness, and commercial consumer goods. Die-lines, multi-size bottle label adaptations, 3D product mockups, and structured ingredient detail sheets.",
    tools: ["Adobe Illustrator", "Photoshop", "Dimension / 3D"],
    deliverables: ["Bottle Label Adaptations", "Box & Pouch Die-lines", "3D Product Mockups", "Product Detail Sheets"],
  },
  {
    id: "graphic-design",
    num: "03",
    title: "Graphic Design",
    category: "VISUAL EXPRESSION",
    icon: Layers,
    tagline: "High-impact visual communication across print and digital media.",
    description:
      "Designing expressive marketing collages, social media advertising, promotional keys, and editorial publications that capture and sustain consumer attention.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    deliverables: ["Marketing Banners", "Creative Collages", "Publication Layouts", "Digital Ad Creatives"],
  },
  {
    id: "poster-design",
    num: "04",
    title: "Poster Design",
    category: "EDITORIAL ARTWORK",
    icon: FileImage,
    tagline: "Cinematic, bold artwork for campaigns and cultural events.",
    description:
      "Crafting dramatic, editorial-grade posters with intricate typographic composition, layered textures, and emotive color stories.",
    tools: ["Photoshop", "Illustrator", "Generative AI"],
    deliverables: ["Cinematic Event Posters", "Promotional Artwork", "Digital Exhibition Keys", "Typographic Posters"],
  },
  {
    id: "logo-design",
    num: "05",
    title: "Logo Design",
    category: "SYMBOLIC LOGOMARKS",
    icon: Palette,
    tagline: "Distilled, memorable symbols engineered for longevity.",
    description:
      "Developing bespoke brand marks, organic soil-inspired logos (like Vuzhavu), and tech-focused application marks (such as college portals and student attendance systems).",
    tools: ["Adobe Illustrator", "Vector Craft"],
    deliverables: ["Vector Logomarks", "Monograms & Favicons", "Application Logos", "Responsive Variants"],
  },
  {
    id: "website-design",
    num: "06",
    title: "Website Design",
    category: "DIGITAL PRESENCE",
    icon: Globe,
    tagline: "Modern, high-conversion web experiences tailored for businesses.",
    description:
      "Designing and engineering responsive websites for businesses (e.g. AD Trucks mobile advertising portal) with intuitive user flows, crisp layouts, and seamless mobile adaptation.",
    tools: ["Next.js", "React", "Tailwind CSS", "HTML/CSS/JS"],
    deliverables: ["Responsive Websites", "Service Presentation Pages", "Landing Pages", "Full Deployment"],
  },
  {
    id: "ui-ux-design",
    num: "07",
    title: "UI/UX Design",
    category: "INTERACTION & INTERFACES",
    icon: Layout,
    tagline: "User-centric interfaces combining intuitive utility with beauty.",
    description:
      "Designing detailed application and e-commerce templates (e.g. Skincare E-commerce store), including wireframing, component libraries, interaction states, and checkout flows.",
    tools: ["Figma", "Design Systems", "Prototyping"],
    deliverables: ["E-Commerce Screens", "Wireframes & Prototypes", "Component Systems", "User Flow Maps"],
  },
  {
    id: "video-editing",
    num: "08",
    title: "Video Editing",
    category: "MOTION & PACING",
    icon: Video,
    tagline: "Cinematic cutting, dynamic rhythm, and visual motion storytelling.",
    description:
      "Pacing, sequence assembly, motion transitions, collage animation, and audio-synced video production that brings still designs to life.",
    tools: ["Premiere Pro", "After Effects", "Motion Tools"],
    deliverables: ["Motion Collage Reels", "Promotional Teasers", "Brand Video Sequences", "Social Cutdowns"],
  },
  {
    id: "ai-creative-production",
    num: "09",
    title: "AI Creative Production",
    category: "GENERATIVE SYNTHESIS",
    icon: Bot,
    tagline: "Supercharged concept ideation and visual generation pipelines.",
    description:
      "Harnessing state-of-the-art generative AI models for rapid moodboarding, photorealistic mockup generation, prompt-driven texture creation, and conceptual art direction.",
    tools: ["Generative AI Pipelines", "Prompt Engineering", "Custom Models"],
    deliverables: ["AI Conceptual Art", "Photorealistic Mockups", "Moodboard Direction", "Rapid Visual Prototyping"],
  },
  {
    id: "content-storytelling",
    num: "10",
    title: "Content Storytelling",
    category: "NARRATIVE ARCHITECTURE",
    icon: MessageSquareQuote,
    tagline: "Connecting product value to deep audience emotion.",
    description:
      "Architecting brand narratives, copywriting frameworks, visual sequence pacing, and campaign messaging that resonates deeply with target audiences.",
    tools: ["Creative Strategy", "Narrative Structuring", "Content Frameworks"],
    deliverables: ["Brand Narratives", "Product Value Propositions", "Campaign Angles", "Visual Storyboards"],
  },
];

export default function CapabilitiesSection() {
  const [selectedCap, setSelectedCap] = useState<Capability>(CAPABILITIES[0]);

  return (
    <section id="capabilities" className="relative w-full py-28 md:py-36 bg-[#07060A] overflow-hidden">
      {/* Background Plum Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#1F0B24]/40 blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF1F8E] tracking-[0.25em] uppercase mb-3 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // CREATIVE CAPABILITIES</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              SERVICES &amp; EXPERTISE
            </h2>
          </div>

          <p className="font-mono-code text-xs md:text-sm text-[#9B98A8] max-w-md">
            An expansive multidisciplinary stack spanning brand architecture, physical packaging, digital products, and cinematic motion.
          </p>
        </div>

        {/* Editorial Layout: Left List + Right Interactive Feature Panel */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Editorial List */}
          <div className="lg:col-span-7 divide-y divide-white/10 border-y border-white/10">
            {CAPABILITIES.map((cap) => {
              const isSelected = selectedCap.id === cap.id;
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onClick={() => setSelectedCap(cap)}
                  className={`group py-5 px-4 -mx-4 rounded-xl cursor-pointer transition-all duration-300 flex items-center justify-between gap-4 interactive ${
                    isSelected
                      ? "bg-[#1A0924]/80 border-l-4 border-[#FF1F8E] pl-6"
                      : "hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className={`font-mono-code text-xs sm:text-sm font-bold tracking-widest transition-colors ${
                        isSelected ? "text-[#FF1F8E]" : "text-[#5A5768] group-hover:text-white"
                      }`}
                    >
                      {cap.num}
                    </span>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3
                          className={`font-display font-bold text-lg sm:text-xl transition-colors ${
                            isSelected ? "text-white" : "text-[#D4D2DC] group-hover:text-white"
                          }`}
                        >
                          {cap.title}
                        </h3>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F8E] animate-ping" />
                        )}
                      </div>
                      <span className="font-mono-code text-[11px] text-[#9B98A8] tracking-wider uppercase">
                        {cap.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline-block font-mono-code text-xs text-[#5A5768] group-hover:text-[#D4D2DC]">
                      {cap.tools[0]}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-[#FF1F8E] text-white"
                          : "bg-white/5 text-[#9B98A8] group-hover:text-white group-hover:bg-white/10"
                      }`}
                    >
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Detail Showcase Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-2xl p-8 bg-[#0F0D17] border border-[#FF1F8E]/30 shadow-2xl shadow-black/80 relative overflow-hidden group">
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#FF1F8E]/20 to-transparent blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <span className="font-mono-code text-xs text-[#FF1F8E] tracking-widest uppercase font-bold">
                  // CAPABILITY SPOTLIGHT [{selectedCap.num}]
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#1A0924] border border-[#FF1F8E]/40 flex items-center justify-center text-[#FF1F8E]">
                  <selectedCap.icon className="w-5 h-5" />
                </div>
              </div>

              <h4 className="font-display font-black text-2xl sm:text-3xl text-white mb-2 uppercase">
                {selectedCap.title}
              </h4>
              <p className="font-mono-code text-xs text-[#FF1F8E] tracking-wider mb-4">
                {selectedCap.tagline}
              </p>

              <p className="text-sm text-[#D4D2DC] leading-relaxed mb-6 font-normal">
                {selectedCap.description}
              </p>

              {/* Deliverables List */}
              <div className="mb-6 pt-6 border-t border-white/10">
                <span className="font-mono-code text-[11px] text-[#9B98A8] tracking-widest uppercase block mb-3 font-semibold">
                  Key Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCap.deliverables.map((del) => (
                    <div key={del} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF1F8E] shrink-0" />
                      <span className="text-xs text-white/90">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Chips */}
              <div className="pt-6 border-t border-white/10">
                <span className="font-mono-code text-[11px] text-[#9B98A8] tracking-widest uppercase block mb-3 font-semibold">
                  Tools &amp; Stack Utilized
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedCap.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-xs font-mono-code bg-[#1A0924] text-[#D4D2DC] border border-[#FF1F8E]/25"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Inquiry CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="font-mono-code text-xs text-[#9B98A8]">
                  Need this capability?
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-display font-bold text-[#FF1F8E] hover:text-white transition-colors interactive"
                >
                  <span>REQUEST PROPOSAL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
