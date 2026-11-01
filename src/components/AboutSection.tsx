"use client";

import Image from "next/image";
import { Sparkles, FileText, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative w-full py-20 md:py-24 bg-[#07060A] overflow-hidden border-t border-white/5">
      {/* Background Plum Ambience */}
      <div className="absolute top-1/4 -left-48 w-80 h-80 rounded-full bg-[#2A0E38]/25 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-80 h-80 rounded-full bg-[#FF1F8E]/10 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF1F8E] tracking-[0.2em] uppercase mb-2 font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>02 // ABOUT THE CREATOR</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight uppercase mb-8">
          VAISHNAVI SAKTHI
        </h2>

        {/* Main Grid: Portrait + Concise Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: Authentic Portrait Photo */}
          <div className="md:col-span-5 relative">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-[#FF1F8E] via-[#48145F] to-transparent opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0E0C14] shadow-2xl">
                <div className="aspect-[4/5] relative w-full overflow-hidden">
                  <Image
                    src="/images/profile/vaishnavi.jpeg"
                    alt="Vaishnavi Sakthi — Creative Designer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center filter contrast-105 group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07060A]/80 via-transparent to-transparent" />
                </div>

                <div className="p-4 bg-[#0E0C14] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-white">
                      Vaishnavi Sakthi J
                    </h3>
                    <p className="font-mono-code text-[11px] text-[#FF1F8E]">
                      Creative Designer &middot; AI &amp; Data Science
                    </p>
                  </div>
                  <a
                    href="/docs/vaishnavi-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-[#FF1F8E] text-white transition-colors interactive border border-white/10"
                    title="Download Resume PDF"
                  >
                    <FileText className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Supporting Visuals Strip */}
            <div className="mt-4 grid grid-cols-3 gap-2.5">
              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0E0C14]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/collages/graphic-design-collage.png"
                    alt="Graphic Design"
                    fill
                    sizes="(max-width: 768px) 30vw, 150px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="block text-[9px] font-mono-code text-center py-1 text-[#9B98A8] bg-[#07060A]/90">
                  Graphics
                </span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0E0C14]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/collages/website-design-collage.png"
                    alt="Website Design"
                    fill
                    sizes="(max-width: 768px) 30vw, 150px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="block text-[9px] font-mono-code text-center py-1 text-[#9B98A8] bg-[#07060A]/90">
                  Websites
                </span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0E0C14]">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/collages/video-editing-collage.png"
                    alt="Video Editing"
                    fill
                    sizes="(max-width: 768px) 30vw, 150px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="block text-[9px] font-mono-code text-center py-1 text-[#9B98A8] bg-[#07060A]/90">
                  Motion
                </span>
              </div>
            </div>
          </div>

          {/* Right: Concise Storytelling & Background */}
          <div className="md:col-span-7 flex flex-col justify-center space-y-5">
            <blockquote className="font-display font-medium text-lg sm:text-xl text-white leading-snug border-l-2 border-[#FF1F8E] pl-4">
              &quot;Blending creativity, storytelling, and design with intention. From meaningful visuals to compelling content and motion.&quot;
            </blockquote>

            <p className="text-sm text-[#D4D2DC] leading-relaxed">
              I am a multidisciplinary creative designer with an engineering foundation in{" "}
              <span className="text-white font-medium">Artificial Intelligence &amp; Data Science</span> from Sona College of Technology, Anna University.
              My creative work spans commercial brand architecture, product packaging design, responsive web development, and motion storytelling.
            </p>

            <p className="text-sm text-[#D4D2DC] leading-relaxed">
              From designing complete organic identities and 3D packaging for commercial fertilizers to engineering responsive digital platforms like AD Trucks, I combine computational precision with deep visual intuition to create work people truly feel.
            </p>

            {/* Quick Milestones */}
            <div className="pt-2 grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-[#0E0C14] border border-white/10">
                <span className="font-display font-bold text-xl text-white block">10+</span>
                <span className="font-mono-code text-[10px] text-[#9B98A8] uppercase">Disciplines</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0E0C14] border border-white/10">
                <span className="font-display font-bold text-xl text-[#FF1F8E] block">03</span>
                <span className="font-mono-code text-[10px] text-[#9B98A8] uppercase">Core Studies</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#0E0C14] border border-white/10">
                <span className="font-display font-bold text-xl text-white block">100%</span>
                <span className="font-mono-code text-[10px] text-[#9B98A8] uppercase">Authentic</span>
              </div>
            </div>

            <div className="pt-1 flex items-center gap-4">
              <a
                href="#tools"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#FF1F8E] hover:text-white transition-colors interactive"
              >
                <span>View Creative Stack &rarr;</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <a
                href="/docs/vaishnavi-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#9B98A8] hover:text-white transition-colors interactive"
              >
                <span>Original Portfolio PDF</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
