"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const trailingPos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const animIdRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const startFollowLoop = () => {
      if (animIdRef.current !== null) return;

      const follow = () => {
        const dx = mousePos.current.x - trailingPos.current.x;
        const dy = mousePos.current.y - trailingPos.current.y;

        // Smooth easing towards mouse position
        trailingPos.current.x += dx * 0.2;
        trailingPos.current.y += dy * 0.2;

        if (ring) {
          ring.style.transform = `translate3d(${trailingPos.current.x}px, ${trailingPos.current.y}px, 0) translate(-50%, -50%)`;
        }

        // If very close to target, stop loop to save CPU & battery
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          trailingPos.current.x = mousePos.current.x;
          trailingPos.current.y = mousePos.current.y;
          if (ring) {
            ring.style.transform = `translate3d(${trailingPos.current.x}px, ${trailingPos.current.y}px, 0) translate(-50%, -50%)`;
          }
          animIdRef.current = null;
          return;
        }

        animIdRef.current = requestAnimationFrame(follow);
      };

      animIdRef.current = requestAnimationFrame(follow);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        trailingPos.current.x = e.clientX;
        trailingPos.current.y = e.clientY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }

      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(${isHoveredRef.current ? 1.5 : 1})`;

      const target = e.target as HTMLElement | null;
      const isInteractive = Boolean(
        target &&
          (target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") ||
            target.closest("a") ||
            target.getAttribute("role") === "button" ||
            target.classList.contains("interactive"))
      );

      if (isInteractive !== isHoveredRef.current) {
        isHoveredRef.current = isInteractive;
        if (isInteractive) {
          ring.style.width = "56px";
          ring.style.height = "56px";
          ring.style.borderColor = "rgba(255, 31, 142, 0.9)";
          ring.style.backgroundColor = "rgba(255, 31, 142, 0.08)";
          dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(1.5)`;
        } else {
          ring.style.width = "36px";
          ring.style.height = "36px";
          ring.style.borderColor = "rgba(255, 31, 142, 0.4)";
          ring.style.backgroundColor = "transparent";
          dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%) scale(1)`;
        }
      }

      startFollowLoop();
    };

    const handleMouseLeave = () => {
      isVisibleRef.current = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      if (animIdRef.current !== null) {
        cancelAnimationFrame(animIdRef.current);
        animIdRef.current = null;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animIdRef.current !== null) {
        cancelAnimationFrame(animIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          top: 0,
          left: 0,
          opacity: 0,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="custom-cursor-ring"
        style={{
          top: 0,
          left: 0,
          opacity: 0,
          willChange: "transform",
        }}
      />
    </>
  );
}
