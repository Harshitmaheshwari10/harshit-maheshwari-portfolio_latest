"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + Math.random() * 12 + 4;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] loader-bg flex flex-col items-center justify-center"
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(56,189,248,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-[#050A14] font-bold text-2xl font-mono shadow-glow-blue">
                HM
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(56,189,248,0)",
                    "0 0 40px rgba(56,189,248,0.4)",
                    "0 0 0px rgba(56,189,248,0)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-mono text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-1">
                Initializing
              </p>
              <h1 className="text-xl font-semibold text-[#F0F4FF] tracking-tight">
                Harshit Maheshwari
              </h1>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4 }}
              className="w-48 h-[2px] bg-[#1E2D4A] rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#38BDF8] to-[#818CF8] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-mono text-[#4A5A78] text-xs"
            >
              {Math.round(Math.min(progress, 100))}%
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
