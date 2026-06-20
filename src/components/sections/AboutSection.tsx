"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Cpu, FlaskConical, Lightbulb, Award, MapPin, GraduationCap } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const traits = [
  {
    icon: Cpu,
    title: "AI/ML Systems",
    desc: "Building production-grade ML pipelines — from raw data to deployed model — with XGBoost, NLP, and LLM integrations.",
    color: "#38BDF8",
  },
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    desc: "End-to-end web apps with React, Next.js, FastAPI, and PostgreSQL, deployed on Vercel.",
    color: "#818CF8",
  },
  {
    icon: FlaskConical,
    title: "IoT & Embedded",
    desc: "Hardware-software co-design using Arduino, GPS/GSM modules — with a patent filing to show for it.",
    color: "#34D399",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Hackathon finalist mindset: delivering clean, working solutions under tight constraints and real-world pressure.",
    color: "#F59E0B",
  },
];

const highlights = [
  { icon: GraduationCap, text: "B.Tech IT · Manipal University Jaipur · GPA 9.28/10" },
  { icon: Award, text: "Dean's List of Excellence — 6 consecutive semesters" },
  { icon: MapPin, text: "Bhopal, Madhya Pradesh, India · Open to relocation" },
];

export function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const imgInView = useInView(imgRef, { once: true, margin: "-60px" });

  return (
    <SectionWrapper id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Who I am"
          title="About Me"
          subtitle="A developer who ships — not just prototypes."
          accentColor="#38BDF8"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile card */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imgInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar placeholder */}
            <div className="relative">
              <div className="w-48 h-48 rounded-2xl glass border border-[#1E2D4A] overflow-hidden flex items-center justify-center relative">
                {/* Gradient placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/20 via-[#818CF8]/20 to-[#34D399]/20" />
                <div className="relative z-10 text-6xl">👨‍💻</div>

                {/* Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent -skew-x-12 animate-shimmer bg-[length:200%_100%]" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 border border-[#1E2D4A] flex items-center gap-1.5">
                <Award size={12} className="text-[#F59E0B]" />
                <span className="text-[#F0F4FF] text-xs font-semibold">6× Dean&apos;s List</span>
              </div>

              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ boxShadow: "0 0 40px rgba(56,189,248,0.1)" }} />
            </div>

            {/* Quick facts */}
            <div className="flex flex-col gap-3 w-full">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#8899BB]">
                  <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-[#38BDF8]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>

            {/* GitHub CTA */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 glass glass-hover rounded-xl border border-[#1E2D4A] text-sm font-medium text-[#8899BB] hover:text-[#F0F4FF] transition-all"
            >
              <Code2 size={14} className="text-[#38BDF8]" />
              github.com/Harshitmaheshwari10
            </a>
          </motion.div>

          {/* Text + trait cards */}
          <div className="flex flex-col gap-6">
            <div className="space-y-4 text-[#8899BB] leading-relaxed">
              <p className="text-[#F0F4FF] text-lg font-medium">
                I build things that actually work in production — not just on localhost.
              </p>
              <p>
                I&apos;m a 3rd-year Information Technology student at Manipal University Jaipur with
                a consistent 9.28 GPA and six Dean&apos;s List awards. My work spans ML classification
                engines, real-time financial dashboards, stock screeners, and a patent-pending IoT
                geofencing system.
              </p>
              <p>
                I care deeply about the full engineering lifecycle — architecture decisions, clean
                APIs, explainable models, and UI that doesn&apos;t get in the way. Whether it&apos;s
                a hackathon under pressure or a solo project at 2 AM, I ship.
              </p>
            </div>

            {/* Traits grid */}
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {traits.map(({ icon: Icon, title, desc, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass glass-hover rounded-xl p-4 border border-[#1E2D4A] group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={16} style={{ color }} />
                  </div>
                  <h3 className="text-[#F0F4FF] text-sm font-semibold mb-1">{title}</h3>
                  <p className="text-[#8899BB] text-xs leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
