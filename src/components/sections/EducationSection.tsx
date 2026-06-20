"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { education } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const colors = ["#38BDF8", "#818CF8", "#34D399"];

export function EducationSection() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
          subtitle="Strong academic foundation with consistent top-of-class performance."
          accentColor="#38BDF8"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8]/40 via-[#1E2D4A] to-transparent" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex ${
                  i % 2 === 0
                    ? "sm:flex-row flex-row pl-14 sm:pl-0 sm:pr-[calc(50%+2rem)]"
                    : "sm:flex-row-reverse flex-row pl-14 sm:pl-0 sm:pl-[calc(50%+2rem)]"
                }`}
              >
                {/* Dot on timeline */}
                <div
                  className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-4 w-4 h-4 rounded-full border-2 border-[#050A14] shadow-lg"
                  style={{
                    background: colors[i],
                    boxShadow: `0 0 16px ${colors[i]}60`,
                  }}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 border border-[#1E2D4A] hover:border-opacity-70 transition-all w-full group">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${colors[i]}15` }}
                    >
                      <GraduationCap size={16} style={{ color: colors[i] }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#F0F4FF] font-bold text-sm leading-snug">{edu.degree}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: colors[i] }}>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-[#4A5A78] text-xs">{edu.period}</span>
                    <span
                      className="px-2 py-0.5 rounded-md text-xs font-semibold font-mono"
                      style={{ background: `${colors[i]}15`, color: colors[i] }}
                    >
                      {edu.gpa}
                    </span>
                  </div>

                  {/* Highlight */}
                  <p className="text-[#8899BB] text-xs mb-3">🏆 {edu.highlight}</p>

                  {/* Courses */}
                  {edu.courses.length > 0 && (
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <BookOpen size={11} className="text-[#4A5A78]" />
                        <span className="text-[#4A5A78] text-xs uppercase tracking-wider font-mono">
                          Relevant Coursework
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-0.5 rounded text-xs bg-[#1E2D4A]/60 text-[#8899BB] border border-[#1E2D4A]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
