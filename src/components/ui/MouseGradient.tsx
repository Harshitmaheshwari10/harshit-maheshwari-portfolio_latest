"use client";
import { useEffect, useRef } from "react";

export function MouseGradient() {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, rgba(56,189,248,0.04), transparent 50%)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={gradientRef}
      aria-hidden="true"
      className="fixed inset-0 z-[2] pointer-events-none transition-none"
    />
  );
}
