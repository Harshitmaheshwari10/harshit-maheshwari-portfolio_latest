"use client";
import { useState, useRef, MouseEvent } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Zap, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = ["All", "AI/ML", "Full-Stack", "Data Science", "IoT"];

const categoryEmojis: Record<string, string> = {
  "AI/ML": "🤖",
  "Full-Stack": "⚛️",
  "Data Science": "📊",
  IoT: "⚡",
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-60px" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -6;
    const rotateY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative glass rounded-2xl border border-[#1E2D4A] overflow-hidden group transition-all duration-300"
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
          opacity: 0,
          transition: "opacity 0.3s",
        }}
        ref={(el) => {
          if (el) {
            cardRef.current?.addEventListener("mouseenter", () => (el.style.opacity = "1"));
            cardRef.current?.addEventListener("mouseleave", () => (el.style.opacity = "0"));
          }
        }}
      />

      {/* Banner */}
      <div
        className="h-36 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.accentColor}18, ${project.accentColor}05, transparent)`,
        }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(${project.accentColor}15 1px, transparent 1px), linear-gradient(90deg, ${project.accentColor}15 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}30`,
              color: project.accentColor,
            }}
          >
            <span>{categoryEmojis[project.category]}</span>
            {project.category}
          </span>
        </div>

        {/* Impact badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono bg-[#050A14]/60 text-[#8899BB] border border-[#1E2D4A]">
            <Zap size={10} style={{ color: project.accentColor }} />
            {project.impact}
          </span>
        </div>

        {/* Period */}
        <div className="absolute bottom-4 left-4 text-xs text-[#4A5A78] font-mono">
          {project.period}
        </div>

        {/* Glow */}
        <div
          className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-30"
          style={{ background: project.accentColor }}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-[#F0F4FF] font-bold text-base leading-tight mb-2 group-hover:text-white transition-colors">
            {project.shortTitle}
          </h3>
          <p className="text-[#8899BB] text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Key features */}
        <ul className="space-y-1.5">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-start gap-2 text-xs text-[#8899BB]">
              <span
                className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: project.accentColor }}
              />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tech-tag" style={{
              background: `${project.accentColor}08`,
              borderColor: `${project.accentColor}20`,
              color: project.accentColor,
            }}>
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="tech-tag text-[#4A5A78] border-[#1E2D4A] bg-transparent">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1 border-t border-[#1E2D4A]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#8899BB] hover:text-[#F0F4FF] transition-colors"
          >
            <Github size={13} />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
              style={{ color: project.accentColor }}
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            <span className="text-xs text-[#4A5A78]">No live demo</span>
          )}
          <div className="ml-auto flex items-center gap-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: project.accentColor }}>
            Details <ArrowRight size={11} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I've shipped"
          title="Featured Projects"
          subtitle="End-to-end builds — AI platforms, stock screeners, IoT systems, and more."
          accentColor="#34D399"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 border ${
                filter === cat
                  ? "bg-[#38BDF8]/10 border-[#38BDF8]/30 text-[#38BDF8]"
                  : "glass border-[#1E2D4A] text-[#8899BB] hover:text-[#F0F4FF] hover:border-[#38BDF8]/20"
              }`}
            >
              {cat === "All" ? "All Projects" : `${categoryEmojis[cat]} ${cat}`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Harshitmaheshwari10"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass glass-hover rounded-xl border border-[#1E2D4A] text-[#8899BB] hover:text-[#F0F4FF] text-sm font-medium transition-all"
          >
            <Github size={15} className="text-[#38BDF8]" />
            See all repositories on GitHub
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
