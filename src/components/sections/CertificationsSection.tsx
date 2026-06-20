"use client";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CertificationsSection() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Industry-recognized credentials across AI, cloud, and software development."
          accentColor="#A78BFA"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={`${cert.title}-${cert.org}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass glass-hover rounded-xl p-5 border border-[#1E2D4A] group relative overflow-hidden"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${cert.color}10, transparent 70%)` }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-6 right-6 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: cert.color }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cert.color}15` }}
                >
                  <Award size={18} style={{ color: cert.color }} />
                </div>

                {/* Text */}
                <h3 className="text-[#F0F4FF] font-semibold text-sm leading-snug mb-1 group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium mb-1" style={{ color: cert.color }}>
                  {cert.org}
                </p>
                <p className="text-[#4A5A78] text-xs font-mono">{cert.year}</p>

                {/* CTA */}
                <button className="mt-4 flex items-center gap-1.5 text-xs text-[#4A5A78] hover:text-[#F0F4FF] transition-colors opacity-0 group-hover:opacity-100">
                  <ExternalLink size={11} />
                  View certificate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
