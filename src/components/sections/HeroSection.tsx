"use client";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, Terminal } from "lucide-react";
import { personalInfo, roles, stats } from "@/lib/data";
import { useTypewriter } from "@/hooks/useTypewriter";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const floatingIcons = [
  { icon: "⚛️", label: "React", x: "8%", y: "20%", delay: 0, rotate: -12 },
  { icon: "🐍", label: "Python", x: "88%", y: "18%", delay: 0.3, rotate: 8 },
  { icon: "🤖", label: "AI/ML", x: "5%", y: "65%", delay: 0.6, rotate: -6 },
  { icon: "⚡", label: "Next.js", x: "91%", y: "60%", delay: 0.9, rotate: 10 },
  { icon: "🛡️", label: "Patent", x: "14%", y: "85%", delay: 1.2, rotate: -8 },
  { icon: "📊", label: "Data", x: "82%", y: "82%", delay: 0.2, rotate: 6 },
];

export function HeroSection() {
  const typedRole = useTypewriter(roles, 80, 40, 2200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#38BDF8]/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-[#818CF8]/4 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-[#34D399]/4 blur-[80px]" />
      </div>

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon, label, x, y, delay, rotate }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 1.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute hidden lg:flex items-center justify-center w-11 h-11 glass rounded-xl text-xl pointer-events-none"
          style={{ left: x, top: y, rotate: `${rotate}deg` }}
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.span>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center gap-6">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-[#34D399]/20 text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
          </span>
          <span className="text-[#34D399] font-medium text-xs">Available for Internships & Opportunities</span>
          <Sparkles size={12} className="text-[#34D399]" />
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
            <span className="text-[#F0F4FF]">Hi, I&apos;m </span>
            <span className="gradient-text">Harshit</span>
            <br />
            <span className="text-[#F0F4FF]">Maheshwari</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="flex items-center gap-2 h-9"
        >
          <Terminal size={16} className="text-[#38BDF8] flex-shrink-0" />
          <span className="font-mono text-lg sm:text-xl text-[#8899BB]">
            <span className="text-[#38BDF8]">{typedRole}</span>
            <span className="animate-pulse text-[#38BDF8]">|</span>
          </span>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#8899BB] text-base sm:text-lg leading-relaxed max-w-2xl"
        >
          {personalInfo.tagline} B.Tech IT student at Manipal University Jaipur with a{" "}
          <span className="text-[#F0F4FF] font-medium">{personalInfo.gpa} GPA</span> and{" "}
          <span className="text-[#F0F4FF] font-medium">6× Dean&apos;s List</span> recognition.
          Building AI systems, full-stack apps, and patent-pending IoT hardware.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mt-2"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#050A14] font-semibold text-sm hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02]"
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Harshit_Maheshwari_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover border border-[#1E2D4A] text-[#F0F4FF] font-semibold text-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <Download size={15} className="text-[#38BDF8]" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass glass-hover border border-[#1E2D4A] text-[#8899BB] font-medium text-sm hover:text-[#F0F4FF] transition-all duration-300 hover:scale-[1.02]"
          >
            <Mail size={15} />
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex items-center gap-4 mt-1"
        >
          {[
            { href: personalInfo.githubUrl, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedinUrl, icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#4A5A78] hover:text-[#38BDF8] transition-colors text-xs font-medium"
              aria-label={label}
            >
              <Icon size={14} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mt-16 w-full max-w-3xl mx-auto px-6 lg:px-8"
      >
        <div className="glass rounded-2xl p-6 border border-[#1E2D4A] grid grid-cols-2 sm:grid-cols-4 gap-6 divide-x-0 sm:divide-x divide-[#1E2D4A]">
          {stats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#4A5A78] text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#38BDF8]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
