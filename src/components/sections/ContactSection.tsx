"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Download, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#38BDF8",
  },
  {
    icon: Github,
    label: "GitHub",
    value: `@${personalInfo.github}`,
    href: personalInfo.githubUrl,
    color: "#F0F4FF",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Harshit Maheshwari",
    href: personalInfo.linkedinUrl,
    color: "#818CF8",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, MP, India",
    href: null,
    color: "#34D399",
  },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's Connect"
          subtitle="Open to internships, collaborations, and interesting problems. Reach out any time."
          accentColor="#38BDF8"
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-[#F0F4FF] font-semibold text-lg mb-2">
                Currently available for internships
              </h3>
              <p className="text-[#8899BB] leading-relaxed">
                I&apos;m actively seeking SWE, AI/ML, and full-stack engineering internship
                opportunities. Whether you have a role, a project, or just want to talk tech — my
                inbox is open.
              </p>
            </div>

            {/* Social links */}
            <div className="grid sm:grid-cols-2 gap-3">
              {socials.map(({ icon: Icon, label, value, href, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 glass glass-hover rounded-xl border border-[#1E2D4A] group transition-all"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#4A5A78] text-xs mb-0.5">{label}</p>
                        <p className="text-[#F0F4FF] text-sm font-medium truncate group-hover:text-white transition-colors">
                          {value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-4 glass rounded-xl border border-[#1E2D4A]">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${color}15` }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div>
                        <p className="text-[#4A5A78] text-xs mb-0.5">{label}</p>
                        <p className="text-[#F0F4FF] text-sm font-medium">{value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Resume download */}
            <a
              href={personalInfo.resumeUrl}
              download="Harshit_Maheshwari_Resume.pdf"
              className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gradient-to-r from-[#38BDF8]/10 to-[#818CF8]/10 border border-[#38BDF8]/20 hover:from-[#38BDF8]/20 hover:to-[#818CF8]/20 transition-all group"
            >
              <Download size={16} className="text-[#38BDF8]" />
              <span className="text-[#F0F4FF] font-semibold text-sm">
                Download Full Resume (PDF)
              </span>
            </a>
          </div>

          {/* Right: form */}
          <div className="glass rounded-2xl border border-[#1E2D4A] p-6 lg:p-8">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#34D399]/15 flex items-center justify-center">
                  <CheckCircle size={32} className="text-[#34D399]" />
                </div>
                <h3 className="text-[#F0F4FF] font-bold text-xl">Message sent!</h3>
                <p className="text-[#8899BB] text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[#38BDF8] text-sm hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-[#F0F4FF] font-semibold text-lg mb-6">Send a message</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#8899BB] text-xs font-medium mb-1.5 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1526] border border-[#1E2D4A] text-[#F0F4FF] text-sm placeholder-[#4A5A78] focus:outline-none focus:border-[#38BDF8]/50 focus:bg-[#111D35] transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-[#8899BB] text-xs font-medium mb-1.5 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0D1526] border border-[#1E2D4A] text-[#F0F4FF] text-sm placeholder-[#4A5A78] focus:outline-none focus:border-[#38BDF8]/50 focus:bg-[#111D35] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#8899BB] text-xs font-medium mb-1.5 block">Subject</label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Internship opportunity at Acme Corp"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D1526] border border-[#1E2D4A] text-[#F0F4FF] text-sm placeholder-[#4A5A78] focus:outline-none focus:border-[#38BDF8]/50 focus:bg-[#111D35] transition-all"
                  />
                </div>

                <div>
                  <label className="text-[#8899BB] text-xs font-medium mb-1.5 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hi Harshit, I came across your portfolio and wanted to reach out about..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0D1526] border border-[#1E2D4A] text-[#F0F4FF] text-sm placeholder-[#4A5A78] focus:outline-none focus:border-[#38BDF8]/50 focus:bg-[#111D35] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#050A14] font-semibold text-sm hover:opacity-90 transition-all disabled:opacity-70 hover:shadow-glow-blue"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-[#050A14]/30 border-t-[#050A14] rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {loading ? "Sending…" : "Send Message"}
                </button>

                <p className="text-[#4A5A78] text-xs text-center">
                  Or reach me directly at{" "}
                  <a href={`mailto:${personalInfo.email}`} className="text-[#38BDF8] hover:underline">
                    {personalInfo.email}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
