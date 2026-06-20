"use client";
import { motion } from "framer-motion";
import { Trophy, Zap, Flag, Shield, Briefcase } from "lucide-react";
import { experience, achievements } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ElementType> = {
  trophy: Trophy,
  zap: Zap,
  flag: Flag,
  shield: Shield,
};

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Track record"
          title="Experience & Achievements"
          subtitle="Where I've worked, what I've won, and what I've built that matters."
          accentColor="#F59E0B"
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Experience timeline */}
          <div>
            <h3 className="text-[#F0F4FF] font-semibold text-lg mb-6 flex items-center gap-2">
              <Briefcase size={18} className="text-[#38BDF8]" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/40 via-[#1E2D4A] to-transparent" />

              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative pl-14"
                  >
                    {/* Dot */}
                    <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full bg-[#38BDF8] border-2 border-[#050A14] shadow-[0_0_12px_rgba(56,189,248,0.5)]" />

                    {/* Card */}
                    <div className="glass rounded-xl p-5 border border-[#1E2D4A] hover:border-[#38BDF8]/20 transition-all">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <h4 className="text-[#F0F4FF] font-semibold text-sm">{exp.role}</h4>
                          <p className="text-[#38BDF8] text-xs font-medium">{exp.company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className="font-mono text-[#4A5A78] text-xs block">{exp.period}</span>
                          <span className="text-[#8899BB] text-xs">{exp.type}</span>
                        </div>
                      </div>
                      <ul className="mt-3 space-y-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-xs text-[#8899BB] leading-relaxed">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-[#38BDF8] flex-shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}

                {/* Future placeholder */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative pl-14"
                >
                  <div className="absolute left-3.5 top-1 w-3 h-3 rounded-full border-2 border-dashed border-[#1E2D4A] flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-[#4A5A78]" />
                  </div>
                  <div className="glass rounded-xl p-4 border border-dashed border-[#1E2D4A]">
                    <p className="text-[#4A5A78] text-sm font-medium">Your company?</p>
                    <p className="text-[#4A5A78] text-xs mt-0.5">Actively seeking SWE / AI-ML internship opportunities</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-[#F0F4FF] font-semibold text-lg mb-6 flex items-center gap-2">
              <Trophy size={18} className="text-[#F59E0B]" />
              Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, i) => {
                const Icon = iconMap[ach.icon] || Trophy;
                return (
                  <motion.div
                    key={ach.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass rounded-xl p-5 border border-[#1E2D4A] hover:border-opacity-60 transition-all group"
                    style={{ "--hover-color": ach.color } as React.CSSProperties}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${ach.color}15` }}
                      >
                        <Icon size={18} style={{ color: ach.color }} />
                      </div>
                      <div>
                        <h4 className="text-[#F0F4FF] font-semibold text-sm mb-0.5 group-hover:text-white transition-colors">
                          {ach.title}
                        </h4>
                        <p className="text-xs font-medium mb-1.5" style={{ color: ach.color }}>
                          {ach.org}
                        </p>
                        <p className="text-[#8899BB] text-xs leading-relaxed">{ach.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
