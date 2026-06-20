"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
    );

    links.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050A14]/90 backdrop-blur-xl border-b border-[#1E2D4A]/60 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              aria-label="Home"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-[#050A14] font-bold text-sm font-mono">
                HM
              </div>
              <span className="font-semibold text-[#F0F4FF] hidden sm:block tracking-tight">
                Harshit<span className="text-[#38BDF8]">.</span>dev
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {links.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative ${
                    activeSection === href.slice(1)
                      ? "text-[#38BDF8]"
                      : "text-[#8899BB] hover:text-[#F0F4FF]"
                  }`}
                >
                  {label}
                  {activeSection === href.slice(1) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 bg-[#38BDF8]/10 rounded-md border border-[#38BDF8]/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumeUrl}
                download="Harshit_Maheshwari_Resume.pdf"
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-sm font-medium hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/40 transition-all duration-200"
              >
                <Download size={14} />
                Resume
              </a>
              <button
                className="lg:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-[#8899BB] hover:text-[#F0F4FF] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 w-72 z-40 glass border-l border-[#1E2D4A] pt-20 px-6 pb-8 flex flex-col gap-2 lg:hidden"
          >
            {links.map(({ href, label }, i) => (
              <motion.a
                key={href}
                href={href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeSection === href.slice(1)
                    ? "bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20"
                    : "text-[#8899BB] hover:text-[#F0F4FF] hover:bg-[#1E2D4A]/40"
                }`}
              >
                {label}
              </motion.a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Harshit_Maheshwari_Resume.pdf"
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#050A14] text-sm font-semibold"
            >
              <Download size={14} />
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
