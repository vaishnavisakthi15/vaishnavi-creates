"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, ArrowDown, Sparkles, ChevronRight, Monitor, Film, Palette } from "lucide-react";

interface SequenceConfig {
  id: string;
  name: string;
  category: string;
  icon: typeof Film;
  frames: string[];
  fps: number;
}

const SEQUENCES: SequenceConfig[] = [
  {
    id: "video-editing",
    name: "Video Editing & Motion",
    category: "01 // MOTION ARCHITECTURE",
    icon: Film,
    fps: 8,
    frames: [
      "/videos/video-editing/ezgif-frame-002.jpg",
      "/videos/video-editing/ezgif-frame-003.jpg",
      "/videos/video-editing/ezgif-frame-004.jpg",
      "/videos/video-editing/ezgif-frame-005.jpg",
      "/videos/video-editing/ezgif-frame-006.jpg",
      "/videos/video-editing/ezgif-frame-007.jpg",
      "/videos/video-editing/ezgif-frame-008.jpg",
      "/videos/video-editing/ezgif-frame-009.jpg",
      "/videos/video-editing/ezgif-frame-010.jpg",
    ],
  },
  {
    id: "graphic-design",
    name: "Graphic & Brand Design",
    category: "02 // VISUAL IDENTITY",
    icon: Palette,
    fps: 8,
    frames: [
      "/videos/graphic-design/ezgif-frame-001.jpg",
      "/videos/graphic-design/ezgif-frame-002.jpg",
      "/videos/graphic-design/ezgif-frame-003.jpg",
      "/videos/graphic-design/ezgif-frame-004.jpg",
      "/videos/graphic-design/ezgif-frame-005.jpg",
      "/videos/graphic-design/ezgif-frame-006.jpg",
      "/videos/graphic-design/ezgif-frame-007.jpg",
      "/videos/graphic-design/ezgif-frame-008.jpg",
      "/videos/graphic-design/ezgif-frame-009.jpg",
      "/videos/graphic-design/ezgif-frame-010.jpg",
      "/videos/graphic-design/ezgif-frame-011.jpg",
      "/videos/graphic-design/ezgif-frame-012.jpg",
      "/videos/graphic-design/ezgif-frame-013.jpg",
      "/videos/graphic-design/ezgif-frame-014.jpg",
      "/videos/graphic-design/ezgif-frame-015.jpg",
    ],
  },
  {
    id: "website-design",
    name: "Website & Digital Experiences",
    category: "03 // DIGITAL INTERACTION",
    icon: Monitor,
    fps: 9,
    frames: [
      "/videos/website-design/ezgif-frame-001.jpg",
      "/videos/website-design/ezgif-frame-002.jpg",
      "/videos/website-design/ezgif-frame-003.jpg",
      "/videos/website-design/ezgif-frame-004.jpg",
      "/videos/website-design/ezgif-frame-005.jpg",
      "/videos/website-design/ezgif-frame-006.jpg",
      "/videos/website-design/ezgif-frame-007.jpg",
      "/videos/website-design/ezgif-frame-008.jpg",
      "/videos/website-design/ezgif-frame-009.jpg",
      "/videos/website-design/ezgif-frame-010.jpg",
      "/videos/website-design/ezgif-frame-011.jpg",
      "/videos/website-design/ezgif-frame-012.jpg",
      "/videos/website-design/ezgif-frame-013.jpg",
      "/videos/website-design/ezgif-frame-014.jpg",
      "/videos/website-design/ezgif-frame-015.jpg",
      "/videos/website-design/ezgif-frame-016.jpg",
      "/videos/website-design/ezgif-frame-017.jpg",
      "/videos/website-design/ezgif-frame-018.jpg",
      "/videos/website-design/ezgif-frame-019.jpg",
      "/videos/website-design/ezgif-frame-020.jpg",
    ],
  },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeSeqIdx, setActiveSeqIdx] = useState(0);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);

  // Cached HTMLImageElement arrays for all sequences
  const imagesCacheRef = useRef<Record<string, HTMLImageElement[]>>({});
  const isPlayingRef = useRef(isPlaying);
  isPlayingRef.current = isPlaying;

  // Preload all frames on mount
  useEffect(() => {
    let totalFrames = 0;
    SEQUENCES.forEach((seq) => (totalFrames += seq.frames.length));
    let loadedCount = 0;

    const cache: Record<string, HTMLImageElement[]> = {};

    SEQUENCES.forEach((seq) => {
      cache[seq.id] = seq.frames.map((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          setProgressPercent(Math.round((loadedCount / totalFrames) * 100));
          if (loadedCount >= totalFrames * 0.4) {
            // Can start rendering once at least 40% is ready
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
        };
        return img;
      });
    });

    imagesCacheRef.current = cache;

    return () => {
      // Cleanup image references
      imagesCacheRef.current = {};
    };
  }, []);

  // Main sequence animation loop
  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp = 0;

    const render = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const currentSeq = SEQUENCES[activeSeqIdx];
      const frameInterval = 1000 / currentSeq.fps;

      if (isPlayingRef.current && timestamp - lastTimestamp >= frameInterval) {
        lastTimestamp = timestamp;

        setCurrentFrameIdx((prevFrame) => {
          const nextFrame = prevFrame + 1;
          if (nextFrame >= currentSeq.frames.length) {
            // Move to next sequence in order: video-editing -> graphic-design -> website-design -> video-editing
            setActiveSeqIdx((prevSeq) => (prevSeq + 1) % SEQUENCES.length);
            return 0;
          }
          return nextFrame;
        });
      }

      // Draw current frame to canvas
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        const seqCache = imagesCacheRef.current[SEQUENCES[activeSeqIdx].id];
        const currentImg = seqCache?.[currentFrameIdx];

        if (ctx && currentImg && currentImg.complete && currentImg.naturalWidth > 0) {
          const cw = canvas.width;
          const ch = canvas.height;
          const iw = currentImg.naturalWidth;
          const ih = currentImg.naturalHeight;

          // Object-fit: cover calculation
          const scale = Math.max(cw / iw, ch / ih);
          const nw = iw * scale;
          const nh = ih * scale;
          const nx = (cw - nw) / 2;
          const ny = (ch - nh) / 2;

          ctx.clearRect(0, 0, cw, ch);
          ctx.drawImage(currentImg, nx, ny, nw, nh);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeSeqIdx, currentFrameIdx]);

  // Resize canvas according to window size
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentSequence = SEQUENCES[activeSeqIdx];

  const handleSelectSequence = (index: number) => {
    setActiveSeqIdx(index);
    setCurrentFrameIdx(0);
  };

  const creativeRoles = [
    "Creative Designer",
    "Graphic Designer",
    "Video Editor",
    "Website Designer",
    "Storyteller",
    "AI Creative Creator",
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#07060A]"
    >
      {/* Cinematic Background Canvas Sequence */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none filter brightness-75 contrast-110 saturate-110"
      />

      {/* Cinematic Overlays: Plum + Hot Pink glow + Deep Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#07060A] via-[#07060A]/70 to-[#07060A]/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07060A]/95 via-transparent to-[#07060A]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,14,71,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 flex flex-col justify-between min-h-screen">
        {/* Top Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0E0C14]/80 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FF1F8E] animate-pulse" />
            <span className="font-mono-code text-[11px] tracking-widest text-[#D4D2DC] uppercase">
              Multidisciplinary Creative Studio
            </span>
          </div>

          {/* Sequence Indicator badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-[#FF1F8E]/30 backdrop-blur-md">
            <span className="font-mono-code text-[11px] text-[#FF1F8E] font-medium tracking-wider">
              SEQUENCE: {activeSeqIdx + 1}/3
            </span>
            <span className="text-white/30 text-xs">•</span>
            <span className="font-mono-code text-[11px] text-white/80 tracking-wider">
              {currentSequence.name}
            </span>
          </div>
        </div>

        {/* Central Editorial Headline */}
        <div className="my-auto py-10 max-w-5xl">
          {/* Designer Name Banner */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-12 bg-gradient-to-r from-[#FF1F8E] to-transparent" />
            <h2 className="font-mono-code text-xs sm:text-sm tracking-[0.25em] text-[#FF1F8E] uppercase font-bold">
              VAISHNAVI SAKTHI
            </h2>
          </div>

          {/* Main Statement */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.98] text-white uppercase drop-shadow-2xl">
            I create <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4D2DC] to-[#9B98A8]">experiences</span>{" "}
            people don&apos;t just see.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1F8E] via-[#FF47A3] to-[#C026D3] underline decoration-[#FF1F8E]/40 decoration-wavy decoration-2">
              They feel.
            </span>
          </h1>

          {/* Creative Roles Pill Chips */}
          <div className="mt-8 flex flex-wrap gap-2.5 items-center">
            {creativeRoles.map((role, idx) => (
              <span
                key={role}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono-code tracking-wider bg-[#161224]/80 text-[#D4D2DC] border border-white/10 hover:border-[#FF1F8E]/50 hover:text-white transition-all duration-300"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden text-sm font-display font-black tracking-widest text-white bg-gradient-to-r from-[#FF1F8E] to-[#48145F] shadow-[0_0_30px_rgba(255,31,142,0.4)] hover:shadow-[0_0_45px_rgba(255,31,142,0.7)] transition-all duration-300 hover:scale-[1.02] interactive"
            >
              <span>VIEW MY WORK</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-display font-bold tracking-widest text-white bg-[#0F0D17]/80 hover:bg-[#1A0924] border border-white/15 hover:border-[#FF1F8E]/60 transition-all duration-300 interactive backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-[#FF1F8E]" />
              <span>LET&apos;S CONNECT</span>
            </a>
          </div>
        </div>

        {/* Bottom Interactive Sequence Dock & Scroll Indicator */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Interactive Sequence Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-full bg-[#1A0924] border border-[#FF1F8E]/40 text-white hover:text-[#FF1F8E] transition-colors interactive focus:outline-none"
              title={isPlaying ? "Pause cinematic sequence" : "Play cinematic sequence"}
              aria-label={isPlaying ? "Pause cinematic sequence" : "Play cinematic sequence"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            </button>

            {SEQUENCES.map((seq, idx) => {
              const Icon = seq.icon;
              const isActive = activeSeqIdx === idx;
              return (
                <button
                  key={seq.id}
                  onClick={() => handleSelectSequence(idx)}
                  className={`group flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-mono-code tracking-wider transition-all duration-300 interactive ${
                    isActive
                      ? "bg-[#FF1F8E] text-white shadow-[0_0_15px_rgba(255,31,142,0.5)] font-semibold"
                      : "bg-[#0F0D17]/70 text-[#9B98A8] hover:text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#FF1F8E]"}`} />
                  <span className="hidden sm:inline">{seq.name}</span>
                  <span className="sm:hidden">{seq.id.split("-")[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Frame Progress Bar & Scroll Cue */}
          <div className="flex items-center gap-6 self-end md:self-auto">
            <div className="hidden sm:flex flex-col items-end">
              <span className="font-mono-code text-[10px] text-[#9B98A8] tracking-widest uppercase">
                Sequence Frame {currentFrameIdx + 1} / {currentSequence.frames.length}
              </span>
              <div className="w-32 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF1F8E] to-[#C026D3] transition-all duration-150"
                  style={{
                    width: `${((currentFrameIdx + 1) / currentSequence.frames.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <a
              href="#about"
              className="flex items-center gap-2 text-xs font-mono-code tracking-widest text-[#9B98A8] hover:text-white transition-colors interactive"
            >
              <span>SCROLL</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#FF1F8E] animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
