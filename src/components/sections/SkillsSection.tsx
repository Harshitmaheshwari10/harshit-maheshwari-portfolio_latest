"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

type SkillCategory = keyof typeof skills;

const categories: { key: SkillCategory; label: string; emoji: string; color: string }[] = [
  { key: "languages", label: "Languages", emoji: "{ }", color: "#38BDF8" },
  { key: "webDev", label: "Web Dev", emoji: "⚛", color: "#818CF8" },
  { key: "aiMl", label: "AI / ML", emoji: "🤖", color: "#34D399" },
  { key: "databases", label: "Databases", emoji: "🗄", color: "#F59E0B" },
  { key: "tools", label: "Tools", emoji: "⚙", color: "#A78BFA" },
];

function SkillBar({ name, level, color, inView }: { name: string; level: number; color: string; inView: boolean }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-[#F0F4FF] text-sm font-medium group-hover:text-[#38BDF8] transition-colors">
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {inView ? level : 0}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#1E2D4A] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}aa, ${color})` }}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory>("languages");
  const contentRef = useRef<HTMLDivElement>(null);
  const inView = useInView(contentRef, { once: true, margin: "-60px" });

  const activeCategory = categories.find((c) => c.key === active)!;
  const activeSkills = skills[active];

  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          subtitle="Hands-on across the full stack — from model training to deployed interfaces."
          accentColor="#818CF8"
        />

        <div className="grid lg:grid-cols-[280px,1fr] gap-6">
          {/* Category tabs */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {categories.map(({ key, label, emoji, color }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex-shrink-0 border ${
                  active === key
                    ? "text-[#F0F4FF] border-[#1E2D4A]"
                    : "text-[#8899BB] border-transparent hover:border-[#1E2D4A] hover:text-[#F0F4FF]"
                }`}
                style={
                  active === key
                    ? { background: `${color}12`, borderColor: `${color}30` }
                    : {}
                }
              >
                <span className="text-base leading-none">{emoji}</span>
                <span>{label}</span>
                {active === key && (
                  <div
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ background: color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Skill bars panel */}
          <motion.div
            key={active}
            ref={contentRef}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl border border-[#1E2D4A] p-6 lg:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                style={{ background: `${activeCategory.color}15` }}
              >
                {activeCategory.emoji}
              </div>
              <div>
                <h3 className="text-[#F0F4FF] font-semibold">{activeCategory.label}</h3>
                <p className="text-[#4A5A78] text-xs">{activeSkills.length} technologies</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {activeSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <SkillBar
                    name={skill.name}
                    level={skill.level}
                    color={activeCategory.color}
                    inView={inView}
                  />
                </motion.div>
              ))}
            </div>

            {/* Tech tag cloud */}
            <div className="mt-8 pt-6 border-t border-[#1E2D4A]">
              <p className="text-[#4A5A78] text-xs mb-3 font-mono uppercase tracking-wider">
                Quick reference
              </p>
              <div className="flex flex-wrap gap-2">
                {activeSkills.map((skill) => (
                  <span key={skill.name} className="tech-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
