"use client";
import { Github, Linkedin, Mail, Download, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-[#1E2D4A]/60 bg-[#050A14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-[#050A14] font-bold text-xs font-mono">
                HM
              </div>
              <span className="font-semibold text-[#F0F4FF] text-sm tracking-tight">
                Harshit Maheshwari
              </span>
            </div>
            <p className="text-[#4A5A78] text-xs text-center md:text-left max-w-xs">
              Building intelligent systems that bridge AI and real-world impact.
            </p>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[#8899BB] hover:text-[#38BDF8] text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-[#8899BB] hover:text-[#F0F4FF] hover:border-[#38BDF8]/30 transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-[#8899BB] hover:text-[#F0F4FF] hover:border-[#38BDF8]/30 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-[#8899BB] hover:text-[#F0F4FF] hover:border-[#38BDF8]/30 transition-all"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={personalInfo.resumeUrl}
              download="Harshit_Maheshwari_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-2 glass rounded-lg text-[#38BDF8] hover:bg-[#38BDF8]/10 transition-all text-xs font-medium"
            >
              <Download size={13} />
              Resume
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E2D4A]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#4A5A78] text-xs">
            © {new Date().getFullYear()} Harshit Maheshwari. All rights reserved.
          </p>
          <p className="text-[#4A5A78] text-xs flex items-center gap-1">
            Crafted with <Heart size={11} className="text-[#EF4444] fill-[#EF4444]" /> using Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
