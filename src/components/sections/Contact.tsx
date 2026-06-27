"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, ArrowUpRight, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const links = [
  { icon: Mail, label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#34e89e" },
  { icon: Link2, label: "GitHub", value: `@${personal.social.github}`, href: `https://github.com/${personal.social.github}`, color: "#2dd4bf" },
  { icon: Link2, label: "LinkedIn", value: "in/tanmay-mishra", href: `https://linkedin.com/in/${personal.social.linkedin}`, color: "#38bdf8" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section relative" ref={ref}>
      <div className="absolute top-0 inset-x-0 h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(52,232,158,0.2), rgba(45,212,191,0.2), transparent)",
      }} />
      {/* Portal bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(52,232,158,0.04) 0%, transparent 60%)",
      }} />

      <div className="max-w-6xl mx-auto px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase accent-glow">
            // 06 · CONTACT
          </span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(52,232,158,0.5))" }} />
            <span style={{ color: "#34e89e" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(52,232,158,0.5))" }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Let's build
              <br />
              <span style={{
                background: "linear-gradient(120deg, #34e89e, #5eead4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                something real.
              </span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.6 }}
              className="text-lg leading-relaxed mb-6" style={{ color: "#94a3b8" }}>
              I'm actively looking for roles in distributed systems, backend engineering, and
              cybersecurity. If you're building something that needs to scale, secure, and
              endure — I want to hear about it.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35, duration: 0.6 }}
              className="flex items-center gap-2 text-sm" style={{ color: "#475569" }}>
              <MapPin size={13} style={{ color: "#34e89e" }} />
              <span>India · Open to remote opportunities globally</span>
            </motion.div>
          </div>

          <div className="space-y-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a key={link.label} href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="group flex items-center gap-5 p-6 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.035)", border: `1px solid ${link.color}12` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${link.color}15`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${link.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = `${link.color}12`;
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}10`, border: `1px solid ${link.color}25` }}>
                    <Icon size={20} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs mb-0.5" style={{ color: "#475569" }}>{link.label}</div>
                    <div className="font-medium transition-colors" style={{ color: "#cbd5e1" }}>{link.value}</div>
                  </div>
                  <ArrowUpRight size={16} className="transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "#334155" }} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", color: "#475569" }}>
          <div className="flex items-center gap-2">
            <span className="font-mono" style={{ color: "#34e89e" }}>@tanmay</span>
            <span>·</span>
            <span>Tanmay Mishra</span>
            <span>·</span>
            <span>2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, TypeScript, Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
