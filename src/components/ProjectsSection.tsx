"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Eye,
  ShieldCheck,
} from "lucide-react";

interface ProjectMedia {
  src: string;
  caption: string;
  badge: string;
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"vuzhavu" | "adtrucks" | "skincare">("vuzhavu");

  const [vuzhavuIdx, setVuzhavuIdx] = useState(0);
  const [adTrucksIdx, setAdTrucksIdx] = useState(0);
  const [skincareIdx, setSkincareIdx] = useState(0);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // PROJECT 1: VUZHAVU FERTILIZER PRODUCTS (Strictly mapped from PDF Page 2)
  const vuzhavuMedia: ProjectMedia[] = [
    {
      src: "/images/vuzhavu/vuzhavu_logo_isolated.jpg",
      caption: "Original Vuzhavu Logo: Soil Protection Hand, Neem Leaves & Growing Plant",
      badge: "ORIGINAL LOGO",
    },
    {
      src: "/images/vuzhavu/vuzhavu_oil_packaging_3d.png",
      caption: "Herbal Oil Packaging Design — 3D Product Mockup Series (Neem, Neekar Bio, Karanja)",
      badge: "PACKAGING MOCKUP",
    },
    {
      src: "/images/vuzhavu/vuzhavu_packet_front.png",
      caption: "Front View of Agricultural Packet Design",
      badge: "PACKET DESIGN",
    },
    {
      src: "/images/vuzhavu/vuzhavu_packet_side.png",
      caption: "Side Views of the Packet Design & Information Hierarchy",
      badge: "SIDE VIEWS",
    },
    {
      src: "/images/vuzhavu/vuzhavu_packet_nomockup.png",
      caption: "Packet Design Without Mockup — Print-Ready Die-line Flat",
      badge: "FLAT PACKET",
    },
    {
      src: "/images/vuzhavu/vuzhavu_cake_packaging_pdf.png",
      caption: "Agricultural Cake Powder Packaging Series (Neem, Karanja, Castor, Mahua, Groundnut, Panchakavya)",
      badge: "PRODUCT RANGE",
    },
    {
      src: "/images/vuzhavu/vuzhavu_pd_sheet_pdf.jpg",
      caption: "Structured Product Detail Sheet Design (Usage, Benefits, Composition)",
      badge: "DETAIL SHEET",
    },
    {
      src: "/images/vuzhavu/vermicompost-pd-details.png",
      caption: "Vermicompost Product Detail & Specification Sheet (High Resolution)",
      badge: "FULL SPEC SHEET",
    },
    {
      src: "/images/vuzhavu/range-lineup-mockup.png",
      caption: "Multi-Size Bottle Lineup Presentation (100ml, 200ml, 500ml, 1000ml)",
      badge: "MULTI-SIZE BOTTLES",
    },
  ];

  // PROJECT 2: AD TRUCKS (Strictly mapped from PDF Pages 2 & 3)
  const adTrucksMedia: ProjectMedia[] = [
    {
      src: "/images/adtrucks/adtrucks-hero.png",
      caption: "Homepage: Modern Responsive Mobile Branding Presentation",
      badge: "HOMEPAGE",
    },
    {
      src: "/images/adtrucks/adtrucks-desktop.png",
      caption: "Desktop Web Application Presentation & Service Catalog",
      badge: "DESKTOP VIEW",
    },
    {
      src: "/images/adtrucks/adtrucks-responsive.png",
      caption: "Multi-Device Responsive Presentation (Desktop & Mobile Viewports)",
      badge: "RESPONSIVE SCREENS",
    },
    {
      src: "/images/adtrucks/adtrucks-workflow.png",
      caption: "Project Workflow & Operational Stages Visualization",
      badge: "WORKFLOW VISUALS",
    },
    {
      src: "/images/adtrucks/adtrucks-detail.png",
      caption: "Website Feature Details & Service Offering Breakdown",
      badge: "DETAIL SCREENS",
    },
    {
      src: "/images/adtrucks/adtrucks-preview.png",
      caption: "Live Website Interface (https://adtrucks.in/)",
      badge: "LIVE PREVIEW",
    },
  ];

  // PROJECT 3: SKINCARE E-COMMERCE CONCEPT (Strictly mapped from PDF Pages 4, 5, 6)
  const skincareMedia: ProjectMedia[] = [
    {
      src: "/images/skincare/skincare-hero.png",
      caption: "Homepage & Hero Screen: Botanical Aesthetics & Brand Storytelling",
      badge: "HERO SCREEN",
    },
    {
      src: "/images/skincare/skincare-catalog.png",
      caption: "Product Catalog Grid: Minimalist E-Commerce Navigation & Pricing",
      badge: "CATALOG GRID",
    },
    {
      src: "/images/skincare/skincare-product.png",
      caption: "Product Detail View: Botanical Formulations & Ingredients Breakdown",
      badge: "PRODUCT DETAIL",
    },
    {
      src: "/images/skincare/skincare-benefits.png",
      caption: "Value Proposition Screen: Natural Formulations & Brand Philosophy",
      badge: "BENEFITS SCREEN",
    },
    {
      src: "/images/skincare/skincare-checkout.png",
      caption: "Streamlined Bag & Checkout User Experience Flow",
      badge: "CHECKOUT FLOW",
    },
  ];

  const vuzhavuColors = [
    { name: "LOGO", hex: "#5E7F2A" },
    { name: "MAIN TITLE", hex: "#006B3C" },
    { name: "BORDER", hex: "#8CB12A" },
    { name: "BACKGROUND", hex: "#F9F8F3", textDark: true },
    { name: "INFO PANEL", hex: "#D8E6B8", textDark: true },
    { name: "FLORALS", hex: "#EEDFD5", textDark: true },
    { name: "LEAF GRAPHICS", hex: "#D7E5E7", textDark: true },
    { name: "ILLUSTRATION", hex: "#9B6B43" },
    { name: "BODY TEXT", hex: "#2F2F2F" },
  ];

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 bg-[#07060A] overflow-hidden border-t border-white/5">
      {/* Background Plum Ambience */}
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-[#2A0E38]/25 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-60 w-[500px] h-[500px] rounded-full bg-[#FF1F8E]/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF1F8E] tracking-[0.2em] uppercase mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 // CASE STUDIES</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          <p className="font-mono-code text-xs text-[#9B98A8] max-w-sm">
            Grouped and ordered according to my original six-page portfolio PDF workflows.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2.5 p-1.5 rounded-xl bg-[#0E0C14] border border-white/10 max-w-xl">
          <button
            onClick={() => setActiveTab("vuzhavu")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-display font-bold tracking-wider transition-all interactive ${
              activeTab === "vuzhavu"
                ? "bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white shadow-md shadow-[#FF1F8E]/25"
                : "text-[#9B98A8] hover:text-white"
            }`}
          >
            01. VUZHAVU FERTILIZERS
          </button>

          <button
            onClick={() => setActiveTab("adtrucks")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-display font-bold tracking-wider transition-all interactive ${
              activeTab === "adtrucks"
                ? "bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white shadow-md shadow-[#FF1F8E]/25"
                : "text-[#9B98A8] hover:text-white"
            }`}
          >
            02. AD TRUCKS
          </button>

          <button
            onClick={() => setActiveTab("skincare")}
            className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-display font-bold tracking-wider transition-all interactive ${
              activeTab === "skincare"
                ? "bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white shadow-md shadow-[#FF1F8E]/25"
                : "text-[#9B98A8] hover:text-white"
            }`}
          >
            03. SKINCARE UI/UX
          </button>
        </div>

        {/* =========================================================================
            PROJECT 1: VUZHAVU FERTILIZER PRODUCTS (PDF Page 2)
        ========================================================================== */}
        {activeTab === "vuzhavu" && (
          <div className="mt-10 space-y-8 animate-in fade-in duration-300">
            {/* Overview & Standalone Logo Showcase */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0C14] border border-[#FF1F8E]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-[#FF1F8E] font-mono-code text-[11px] tracking-wider uppercase font-semibold">
                  PDF Page 2 &middot; Commercial Packaging &amp; Branding
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Organic Product Branding for Vuzhavu
                </h3>
                <p className="text-xs sm:text-sm text-[#D4D2DC] leading-relaxed">
                  Designed a premium packaging series for an organic herbal wellness and fertilizer brand featuring Neem Oil, Neekar Bio Oil, and Karanja Oil across multiple packaging sizes (100ml, 200ml, 500ml, 1000ml), agricultural cake powder packaging, and structured product information sheets.
                </p>

                <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono-code text-[11px]">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[#9B98A8] block">Brand</span>
                    <span className="text-white font-semibold">Vuzhavu Fertilizers</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[#9B98A8] block">Type</span>
                    <span className="text-white">Commercial Concept</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[#9B98A8] block">Tools</span>
                    <span className="text-[#FF1F8E]">Illustrator, Photoshop, Canva</span>
                  </div>
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                    <span className="text-[#9B98A8] block">Timeline</span>
                    <span className="text-white">15 Days</span>
                  </div>
                </div>
              </div>

              {/* Standalone Logo Display */}
              <div className="md:col-span-4 p-5 rounded-2xl bg-[#07060A] border border-[#FF1F8E]/40 flex flex-col items-center text-center shadow-xl">
                <span className="font-mono-code text-[10px] text-[#FF1F8E] tracking-widest uppercase mb-3 font-semibold">
                  // ORIGINAL VUZHAVU LOGO
                </span>
                <div
                  onClick={() => setPreviewImage("/images/vuzhavu/vuzhavu_logo_isolated.jpg")}
                  className="relative w-36 h-36 rounded-2xl overflow-hidden bg-white/5 p-2 border border-white/10 cursor-pointer group"
                >
                  <Image
                    src="/images/vuzhavu/vuzhavu_logo_isolated.jpg"
                    alt="Vuzhavu Original Logo"
                    fill
                    sizes="144px"
                    loading="lazy"
                    className="object-contain p-2 group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Maximize2 className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="mt-3 font-mono-code text-[11px] text-[#9B98A8] leading-tight">
                  Hand in soil tone, neem leaves &amp; growing plant
                </p>
              </div>
            </div>

            {/* Asset Carousel */}
            <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#1A0924] text-[10px] font-mono-code text-[#FF1F8E] border border-[#FF1F8E]/30 font-semibold">
                    {vuzhavuMedia[vuzhavuIdx].badge}
                  </span>
                  <span className="font-mono-code text-xs text-[#D4D2DC] truncate max-w-sm sm:max-w-md">
                    {vuzhavuMedia[vuzhavuIdx].caption}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setVuzhavuIdx((prev) => (prev > 0 ? prev - 1 : vuzhavuMedia.length - 1))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setVuzhavuIdx((prev) => (prev < vuzhavuMedia.length - 1 ? prev + 1 : 0))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewImage(vuzhavuMedia[vuzhavuIdx].src)}
                    className="p-1.5 rounded-full bg-[#1A0924] hover:bg-[#FF1F8E] text-[#FF1F8E] hover:text-white transition-colors border border-[#FF1F8E]/30"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image Box */}
              <div
                onClick={() => setPreviewImage(vuzhavuMedia[vuzhavuIdx].src)}
                className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#07060A] border border-white/10 cursor-pointer group"
              >
                <Image
                  src={vuzhavuMedia[vuzhavuIdx].src}
                  alt={vuzhavuMedia[vuzhavuIdx].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  loading="lazy"
                  className="object-contain p-3 group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FF1F8E] text-white text-xs font-mono-code flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Fullscreen View
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 sm:grid-cols-9 gap-2 pt-2">
                {vuzhavuMedia.map((m, idx) => (
                  <button
                    key={m.src}
                    onClick={() => setVuzhavuIdx(idx)}
                    className={`relative aspect-square rounded-lg overflow-hidden border transition-all ${
                      vuzhavuIdx === idx
                        ? "border-[#FF1F8E] ring-2 ring-[#FF1F8E]/40 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={m.src} alt={m.caption} fill sizes="80px" loading="lazy" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Design Highlights & Official Color Palette Tokens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-display font-bold text-base">
                  <ShieldCheck className="w-4 h-4 text-[#FF1F8E]" />
                  <span>Logo Concept &amp; Agricultural Meaning</span>
                </div>
                <p className="text-xs text-[#D4D2DC] leading-relaxed">
                  &quot;The logo represents soil protection through the hand in a soil-inspired tone, neem leaves as the key fertilizer ingredient, and the growing plant symbolizing healthy crop growth and sustainable agriculture.&quot;
                </p>
                <ul className="pt-2 space-y-1.5 text-xs text-[#9B98A8] font-mono-code">
                  <li>&bull; Hand Motif: Sustainable soil stewardship</li>
                  <li>&bull; Neem Foliage: Authentic herbal potency</li>
                  <li>&bull; Emerging Sprout: Robust agricultural yield</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-white font-display font-bold text-base">
                  <Layers className="w-4 h-4 text-[#FF1F8E]" />
                  <span>Packaging Scope &amp; Specifications</span>
                </div>
                <ul className="space-y-2 text-xs text-[#D4D2DC]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF1F8E] shrink-0 mt-0.5" />
                    <span>3 Oil Variants: Neem Oil, Neekar Bio Oil, Karanja Oil.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF1F8E] shrink-0 mt-0.5" />
                    <span>4 Bottle Sizes: 100ml, 200ml, 500ml, and 1000ml adaptations.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF1F8E] shrink-0 mt-0.5" />
                    <span>6 Cake Powder Packets: Neem, Karanja, Castor, Mahua, Groundnut, Panchakavya.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#FF1F8E] shrink-0 mt-0.5" />
                    <span>Structured detail sheets presenting composition and usage.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Preserved Color Palette */}
            <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10">
              <span className="font-mono-code text-[11px] text-[#FF1F8E] tracking-widest uppercase block mb-3 font-semibold">
                // Official Oil Label Color Palette (From PDF Page 2)
              </span>
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2">
                {vuzhavuColors.map((c) => (
                  <div
                    key={c.name}
                    className="p-2.5 rounded-lg border border-white/10 flex flex-col justify-between h-20 transition-transform hover:scale-105"
                    style={{ backgroundColor: c.hex }}
                  >
                    <span
                      className={`text-[8px] font-mono-code font-bold ${
                        c.textDark ? "text-neutral-900" : "text-white"
                      }`}
                    >
                      {c.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono-code font-extrabold ${
                        c.textDark ? "text-neutral-900" : "text-white"
                      }`}
                    >
                      {c.hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PROJECT 2: AD TRUCKS (PDF Page 2 & 3)
        ========================================================================== */}
        {activeTab === "adtrucks" && (
          <div className="mt-10 space-y-8 animate-in fade-in duration-300">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0C14] border border-[#FF1F8E]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-[#FF1F8E] font-mono-code text-[11px] tracking-wider uppercase font-semibold">
                  PDF Pages 2 &amp; 3 &middot; Live Production Website
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  AD Trucks Responsive Website
                </h3>
                <p className="text-xs sm:text-sm text-[#D4D2DC] leading-relaxed">
                  &quot;Created a modern responsive website for a truck advertising business, showcasing their mobile branding services through clean UI design, strategic layouts, and engaging digital presentation.&quot;
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href="https://adtrucks.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF1F8E] to-[#48145F] text-white font-display font-bold text-xs tracking-wider shadow-lg shadow-[#FF1F8E]/25 hover:scale-105 transition-transform interactive"
                  >
                    <span>VISIT LIVE: ADTRUCKS.IN</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="font-mono-code text-xs text-[#9B98A8]">Scope: Design, Development, Deployment</span>
                </div>
              </div>

              <div className="md:col-span-4 p-5 rounded-2xl bg-[#07060A] border border-white/10 space-y-2 font-mono-code text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#9B98A8]">Live Link:</span>
                  <span className="text-[#FF1F8E]">adtrucks.in</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#9B98A8]">Industry:</span>
                  <span className="text-white">Transit Advertising</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#9B98A8]">Role:</span>
                  <span className="text-white">Full-Stack Production</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#9B98A8]">Status:</span>
                  <span className="text-green-400 font-bold">&bull; Live in Production</span>
                </div>
              </div>
            </div>

            {/* AD Trucks Carousel */}
            <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#1A0924] text-[10px] font-mono-code text-[#FF1F8E] border border-[#FF1F8E]/30 font-semibold">
                    {adTrucksMedia[adTrucksIdx].badge}
                  </span>
                  <span className="font-mono-code text-xs text-[#D4D2DC] truncate max-w-sm sm:max-w-md">
                    {adTrucksMedia[adTrucksIdx].caption}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setAdTrucksIdx((prev) => (prev > 0 ? prev - 1 : adTrucksMedia.length - 1))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setAdTrucksIdx((prev) => (prev < adTrucksMedia.length - 1 ? prev + 1 : 0))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewImage(adTrucksMedia[adTrucksIdx].src)}
                    className="p-1.5 rounded-full bg-[#1A0924] hover:bg-[#FF1F8E] text-[#FF1F8E] hover:text-white transition-colors border border-[#FF1F8E]/30"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div
                onClick={() => setPreviewImage(adTrucksMedia[adTrucksIdx].src)}
                className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#07060A] border border-white/10 cursor-pointer group"
              >
                <Image
                  src={adTrucksMedia[adTrucksIdx].src}
                  alt={adTrucksMedia[adTrucksIdx].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  loading="lazy"
                  className="object-contain p-2 group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FF1F8E] text-white text-xs font-mono-code flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Fullscreen View
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2 pt-2">
                {adTrucksMedia.map((m, idx) => (
                  <button
                    key={m.src}
                    onClick={() => setAdTrucksIdx(idx)}
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                      adTrucksIdx === idx
                        ? "border-[#FF1F8E] ring-2 ring-[#FF1F8E]/40 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={m.src} alt={m.caption} fill sizes="120px" loading="lazy" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            PROJECT 3: SKINCARE E-COMMERCE CONCEPT (PDF Pages 4, 5, 6)
        ========================================================================== */}
        {activeTab === "skincare" && (
          <div className="mt-10 space-y-8 animate-in fade-in duration-300">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0C14] border border-[#FF1F8E]/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-[#FF1F8E] font-mono-code text-[11px] tracking-wider uppercase font-semibold">
                  PDF Pages 4, 5 &amp; 6 &middot; UI/UX Design &middot; Figma
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-tight">
                  Skincare Brand E-Commerce Template
                </h3>
                <p className="text-xs sm:text-sm text-[#D4D2DC] leading-relaxed">
                  &quot;Created a sample UI/UX website template for a skincare brand, showcasing elegant visual design, intuitive user experience, and modern e-commerce aesthetics.&quot;
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#FF1F8E]">
                    Tools Used: Figma
                  </span>
                  <span className="font-mono-code text-xs text-[#9B98A8]">Minimalist Botanical Aesthetics</span>
                </div>
              </div>

              <div className="md:col-span-4 p-5 rounded-2xl bg-[#07060A] border border-white/10 space-y-2 font-mono-code text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#9B98A8]">Tool:</span>
                  <span className="text-white font-semibold">Figma</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-[#9B98A8]">Screens:</span>
                  <span className="text-white">Hero, Grid, Detail, Bag</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#9B98A8]">Category:</span>
                  <span className="text-[#FF1F8E]">UI/UX Store Concept</span>
                </div>
              </div>
            </div>

            {/* Skincare Carousel */}
            <div className="p-6 rounded-2xl bg-[#0E0C14] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#1A0924] text-[10px] font-mono-code text-[#FF1F8E] border border-[#FF1F8E]/30 font-semibold">
                    {skincareMedia[skincareIdx].badge}
                  </span>
                  <span className="font-mono-code text-xs text-[#D4D2DC] truncate max-w-sm sm:max-w-md">
                    {skincareMedia[skincareIdx].caption}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      setSkincareIdx((prev) => (prev > 0 ? prev - 1 : skincareMedia.length - 1))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setSkincareIdx((prev) => (prev < skincareMedia.length - 1 ? prev + 1 : 0))
                    }
                    className="p-1.5 rounded-full bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPreviewImage(skincareMedia[skincareIdx].src)}
                    className="p-1.5 rounded-full bg-[#1A0924] hover:bg-[#FF1F8E] text-[#FF1F8E] hover:text-white transition-colors border border-[#FF1F8E]/30"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Image */}
              <div
                onClick={() => setPreviewImage(skincareMedia[skincareIdx].src)}
                className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-[#07060A] border border-white/10 cursor-pointer group"
              >
                <Image
                  src={skincareMedia[skincareIdx].src}
                  alt={skincareMedia[skincareIdx].caption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1000px"
                  loading="lazy"
                  className="object-contain p-2 group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#FF1F8E] text-white text-xs font-mono-code flex items-center gap-1.5 shadow-lg">
                    <Eye className="w-3.5 h-3.5" /> Fullscreen View
                  </span>
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-5 gap-2 pt-2">
                {skincareMedia.map((m, idx) => (
                  <button
                    key={m.src}
                    onClick={() => setSkincareIdx(idx)}
                    className={`relative aspect-[16/10] rounded-lg overflow-hidden border transition-all ${
                      skincareIdx === idx
                        ? "border-[#FF1F8E] ring-2 ring-[#FF1F8E]/40 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={m.src} alt={m.caption} fill sizes="120px" loading="lazy" className="object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center cursor-zoom-out animate-in fade-in duration-200"
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={previewImage}
              alt="Fullscreen Preview"
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 px-4 py-2 rounded-full bg-white/10 hover:bg-[#FF1F8E] text-white text-xs font-mono-code tracking-widest uppercase transition-colors"
          >
            [Close &times;]
          </button>
        </div>
      )}
    </section>
  );
}
