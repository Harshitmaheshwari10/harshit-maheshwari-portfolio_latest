"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  value: string;
  suffix: string;
  label: string;
}

function parseNum(val: string) {
  return parseFloat(val.replace(/[^0-9.]/g, ""));
}

export function AnimatedCounter({ value, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");
  const target = parseNum(value);
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const steps = duration / step;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplay(isDecimal ? current.toFixed(2) : Math.floor(current).toString());
    }, step);
    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-bold text-3xl sm:text-4xl text-[#F0F4FF] tracking-tight font-mono">
        <span className="gradient-text">{display}</span>
        <span className="text-[#38BDF8] text-2xl">{suffix}</span>
      </div>
      <p className="text-[#8899BB] text-sm mt-1 font-medium">{label}</p>
    </div>
  );
}
