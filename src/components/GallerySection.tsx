"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type GalleryCategory =
  | "all"
  | "logo"
  | "poster"
  | "graphic"
  | "thumbnail"
  | "branding"
  | "website"
  | "video";

interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  image: string;
  videoSrc?: string;
  aspect: string; // e.g. 'aspect-[3/4]', 'aspect-[16/9]', 'aspect-square'
  description: string;
  tools: string[];
}

const GALLERY_ITEMS: GalleryItem[] = [
  // 1. LOGO DESIGN
  {
    id: "logo-vuzhavu",
    title: "Vuzhavu Organic Product Logo",
    category: "logo",
    categoryLabel: "LOGO DESIGN",
    image: "/images/vuzhavu/vuzhavu_logo_isolated.jpg",
    aspect: "aspect-square",
    description: "The logo represents soil protection through the hand in a soil-inspired tone, neem leaves as key fertilizer ingredient, and growing plant symbolizing healthy crop growth.",
    tools: ["Adobe Illustrator", "Vector Craft"],
  },
  {
    id: "logo-college",
    title: "College Project Website Logo",
    category: "logo",
    categoryLabel: "LOGO DESIGN",
    image: "/images/logos/logo_college_portal.png",
    aspect: "aspect-[16/6]",
    description: "Designed a custom logo for a college project website, focusing on creating a visually impactful identity aligning with the project's purpose and target audience.",
    tools: ["Adobe Illustrator"],
  },
  {
    id: "logo-attendance",
    title: "Student Attendance System Website Logo",
    category: "logo",
    categoryLabel: "LOGO DESIGN",
    image: "/images/logos/logo_student_attendance.png",
    aspect: "aspect-square",
    description: "Clean and functional visual identity reflecting organization, technology, and academic efficiency through thoughtful typography and modern design principles.",
    tools: ["Adobe Illustrator", "Photoshop"],
  },

  // 2. POSTER DESIGN
  {
    id: "poster-cinematic-01",
    title: "Cinematic Typographic Poster 01",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191152.png",
    aspect: "aspect-[3/4]",
    description: "Expressive editorial poster blending surreal composition, layered typography, and atmospheric lighting.",
    tools: ["Photoshop", "Illustrator"],
  },
  {
    id: "poster-cinematic-02",
    title: "Creative Visual Narrative Poster 02",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191227.png",
    aspect: "aspect-[3/4]",
    description: "High-contrast promotional visual exploring human connection, motion, and hot-pink typography accents.",
    tools: ["Photoshop", "Illustrator"],
  },
  {
    id: "poster-series-01",
    title: "Editorial Series Poster — Frame 01",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191359.png",
    aspect: "aspect-[3/4]",
    description: "Original poster concept with geometric structure, duotone palette, and modern publication styling.",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: "poster-series-02",
    title: "Editorial Series Poster — Frame 02",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191415.png",
    aspect: "aspect-[3/4]",
    description: "Dynamic typographic study with asymmetric grid alignment and textured gradient overlays.",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: "poster-series-03",
    title: "Editorial Series Poster — Frame 03",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191434.png",
    aspect: "aspect-[3/4]",
    description: "Minimalist black and hot-pink event poster with expressive negative space.",
    tools: ["Photoshop", "Illustrator"],
  },
  {
    id: "poster-series-04",
    title: "Editorial Series Poster — Frame 04",
    category: "poster",
    categoryLabel: "POSTER DESIGN",
    image: "/images/posters/Screenshot 2026-05-14 191535.png",
    aspect: "aspect-[3/4]",
    description: "Atmospheric visual artwork highlighting modern cultural event art direction.",
    tools: ["Photoshop", "Illustrator"],
  },

  // 3. GRAPHIC DESIGN
  {
    id: "graphic-collage-01",
    title: "Graphic Design Works Collage",
    category: "graphic",
    categoryLabel: "GRAPHIC DESIGN",
    image: "/images/collages/graphic-design-collage.png",
    aspect: "aspect-[16/10]",
    description: "Curated collage of commercial graphic designs, social media marketing assets, and promotional keys.",
    tools: ["Photoshop", "Illustrator", "Canva"],
  },
  {
    id: "graphic-banner-01",
    title: "Vuzhavu Brand Typography Banner",
    category: "graphic",
    categoryLabel: "GRAPHIC DESIGN",
    image: "/images/vuzhavu/brand-banner.png",
    aspect: "aspect-[16/5]",
    description: "Wide-format brand identity banner incorporating vector logomark and organic brand typography.",
    tools: ["Adobe Illustrator"],
  },

  // 4. YOUTUBE THUMBNAIL DESIGN
  {
    id: "thumb-01",
    title: "YouTube Thumbnail Design — Concept 01",
    category: "thumbnail",
    categoryLabel: "YOUTUBE THUMBNAILS",
    image: "/images/thumbnails/youtube_thumbnail_01.png",
    aspect: "aspect-[16/9]",
    description: "High-clickthrough YouTube thumbnail design engineered with bold typography hierarchy, contrast, and visual focal hooks.",
    tools: ["Photoshop", "Canva"],
  },
  {
    id: "thumb-02",
    title: "YouTube Thumbnail Design — Concept 02",
    category: "thumbnail",
    categoryLabel: "YOUTUBE THUMBNAILS",
    image: "/images/thumbnails/youtube_thumbnail_02.png",
    aspect: "aspect-[16/9]",
    description: "Original video thumbnail showcasing graphic composition, character emphasis, and engaging title treatments.",
    tools: ["Photoshop", "Canva"],
  },

  // 5. BRANDING & PACKAGING
  {
    id: "brand-oil-3d",
    title: "Herbal Oil 3D Packaging Series",
    category: "branding",
    categoryLabel: "BRANDING & PACKAGING",
    image: "/images/vuzhavu/vuzhavu_oil_packaging_3d.png",
    aspect: "aspect-[16/10]",
    description: "Commercial 3D product mockup series for Neem Oil, Neekar Bio Oil, and Karanja Oil in multiple packaging sizes.",
    tools: ["Illustrator", "Photoshop", "3D Mockup"],
  },
  {
    id: "brand-packet-front",
    title: "Agricultural Cake Powder Packet (Front)",
    category: "branding",
    categoryLabel: "BRANDING & PACKAGING",
    image: "/images/vuzhavu/vuzhavu_packet_front.png",
    aspect: "aspect-[3/4]",
    description: "Front packaging design for Neem Cake, Karanja Cake, Castor Cake, Mahua Cake, and Groundnut Cake Powder.",
    tools: ["Adobe Illustrator", "Photoshop"],
  },
  {
    id: "brand-packet-side",
    title: "Agricultural Packet Design (Side Views)",
    category: "branding",
    categoryLabel: "BRANDING & PACKAGING",
    image: "/images/vuzhavu/vuzhavu_packet_side.png",
    aspect: "aspect-[16/6]",
    description: "Side panels displaying ingredient composition, dosage guidelines, barcoding, and regulatory information.",
    tools: ["Adobe Illustrator"],
  },
  {
    id: "brand-pd-sheet",
    title: "Product Detail & Specification Sheet",
    category: "branding",
    categoryLabel: "BRANDING & PACKAGING",
    image: "/images/vuzhavu/vuzhavu_pd_sheet_pdf.jpg",
    aspect: "aspect-[3/4]",
    description: "Structured product information sheet presenting usage instructions, benefits, and specifications in a clean format.",
    tools: ["Adobe Illustrator", "InDesign"],
  },

  // 6. WEBSITE DESIGN
  {
    id: "web-adtrucks",
    title: "AD Trucks Responsive Website Platform",
    category: "website",
    categoryLabel: "WEBSITE DESIGN",
    image: "/images/adtrucks/adtrucks-hero.png",
    aspect: "aspect-[16/9]",
    description: "Modern responsive website for a truck advertising business, showcasing mobile branding services and client case studies.",
    tools: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    id: "web-responsive",
    title: "AD Trucks Multi-Device Presentation",
    category: "website",
    categoryLabel: "WEBSITE DESIGN",
    image: "/images/adtrucks/adtrucks-responsive.png",
    aspect: "aspect-[16/8]",
    description: "Responsive layouts adapted across mobile smartphones, tablets, and wide desktop screens.",
    tools: ["Next.js", "Responsive CSS"],
  },
  {
    id: "web-skincare-hero",
    title: "Skincare Brand E-Commerce Store",
    category: "website",
    categoryLabel: "WEBSITE DESIGN",
    image: "/images/skincare/skincare-hero.png",
    aspect: "aspect-[16/9]",
    description: "UI/UX website template for a luxury botanical skincare brand with minimalist aesthetic and clear user journey.",
    tools: ["Figma", "UI/UX Architecture"],
  },

  // 7. VIDEO EDITING
  {
    id: "video-motion-reel",
    title: "Cinematic Motion Collage & Video Reel",
    category: "video",
    categoryLabel: "VIDEO EDITING",
    image: "/images/collages/video-editing-collage.png",
    videoSrc: "/videos/mp4/video_editing.mp4",
    aspect: "aspect-[16/10]",
    description: "Motion collage featuring dynamic sequence cuts, kinetic typography, and rhythmic audio transitions.",
    tools: ["Premiere Pro", "After Effects"],
  },
  {
    id: "video-poster-motion",
    title: "Animated Poster Motion Graphic Sequence",
    category: "video",
    categoryLabel: "VIDEO EDITING",
    image: "/videos/video-editing/ezgif-frame-005.jpg",
    videoSrc: "/videos/mp4/collage_poster.mp4",
    aspect: "aspect-[16/9]",
    description: "Motion sequence bringing print poster artwork alive through 2.5D camera parallax and layered animation.",
    tools: ["After Effects", "Premiere Pro"],
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<GalleryCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const categories: { id: GalleryCategory; label: string; count: number }[] = [
    { id: "all", label: "ALL WORKS", count: GALLERY_ITEMS.length },
    { id: "logo", label: "1. LOGO DESIGN", count: 3 },
    { id: "poster", label: "2. POSTER DESIGN", count: 6 },
    { id: "graphic", label: "3. GRAPHIC DESIGN", count: 2 },
    { id: "thumbnail", label: "4. YOUTUBE THUMBNAILS", count: 2 },
    { id: "branding", label: "5. BRANDING & PACKAGING", count: 4 },
    { id: "website", label: "6. WEBSITE DESIGN", count: 3 },
    { id: "video", label: "7. VIDEO EDITING", count: 2 },
  ];

  const filteredItems =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-[#07060A] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[550px] h-[550px] rounded-full bg-[#1F0B24]/30 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full bg-[#FF1F8E]/10 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF1F8E] tracking-[0.2em] uppercase mb-2 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>05 // CREATIVE GALLERY</span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight uppercase">
              VISUAL REPERTOIRE
            </h2>
          </div>

          <p className="font-mono-code text-xs text-[#9B98A8] max-w-sm">
            All 7 disciplines restored from my portfolio: Logos, posters, thumbnails, packaging, web, and video motion.
          </p>
        </div>

        {/* 7 Category Switcher Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-2 rounded-full text-xs font-mono-code tracking-wider transition-all interactive ${
                activeFilter === cat.id
                  ? "bg-[#FF1F8E] text-white shadow-md shadow-[#FF1F8E]/30 font-bold"
                  : "bg-[#0E0C14] text-[#9B98A8] hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1.5 opacity-60 text-[10px]">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {filteredItems.map((item) => {
            const hasVideo = !!item.videoSrc;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setSelectedItem(item);
                  if (hasVideo) {
                    setPlayingVideo(item.videoSrc || null);
                  }
                }}
                className="group relative rounded-xl overflow-hidden bg-[#0E0C14] border border-white/10 hover:border-[#FF1F8E]/50 transition-all duration-300 cursor-pointer shadow-lg flex flex-col interactive"
              >
                {/* Media Image Box */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#07060A]`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-contain p-2 group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060A]/90 via-transparent to-transparent opacity-60" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-[#07060A]/85 backdrop-blur-md text-[9px] font-mono-code tracking-wider text-[#FF1F8E] uppercase border border-white/10 font-bold">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {hasVideo && (
                    <div className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-[#FF1F8E] text-white shadow-md">
                      <Play className="w-3 h-3 fill-current" />
                    </div>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-[#1A0924]/90 backdrop-blur-md text-white text-xs font-mono-code border border-[#FF1F8E]/40 flex items-center gap-1.5">
                      <Maximize2 className="w-3 h-3 text-[#FF1F8E]" /> View Details
                    </span>
                  </div>
                </div>

                {/* Card Information */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-[#FF1F8E] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#9B98A8] font-mono-code line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tools.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="text-[9px] font-mono-code px-1.5 py-0.5 rounded bg-white/5 text-[#D4D2DC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <span className="text-[11px] text-[#FF1F8E] font-mono-code group-hover:translate-x-0.5 transition-transform">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedItem(null);
              setPlayingVideo(null);
            }
          }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#0E0C14] border border-[#FF1F8E]/30 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 px-5 bg-[#07060A]/85 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1A0924] text-[9px] font-mono-code text-[#FF1F8E] uppercase tracking-wider border border-[#FF1F8E]/30 font-bold">
                  {selectedItem.categoryLabel}
                </span>
                <h4 className="font-display font-bold text-sm text-white truncate max-w-md">
                  {selectedItem.title}
                </h4>
              </div>

              <button
                onClick={() => {
                  setSelectedItem(null);
                  setPlayingVideo(null);
                }}
                className="p-1.5 rounded-full bg-white/10 hover:bg-[#FF1F8E] text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Media Body */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] bg-[#07060A] flex items-center justify-center p-3">
              {playingVideo ? (
                <video
                  src={playingVideo}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full max-h-[55vh] object-contain"
                />
              ) : (
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[440px]">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 900px"
                    className="object-contain p-2"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#0E0C14] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="max-w-xl">
                <p className="text-xs text-[#D4D2DC] leading-relaxed mb-1.5">
                  {selectedItem.description}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono-code text-[10px] text-[#9B98A8] uppercase">
                    Tools:
                  </span>
                  {selectedItem.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-[#1A0924] text-[#FF1F8E] border border-[#FF1F8E]/25"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {selectedItem.videoSrc && !playingVideo && (
                <button
                  onClick={() => setPlayingVideo(selectedItem.videoSrc || null)}
                  className="px-4 py-2 rounded-full bg-[#FF1F8E] text-white font-display font-bold text-xs tracking-wider flex items-center gap-1.5 shadow hover:scale-105 transition-transform"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>PLAY MOTION VIDEO</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
