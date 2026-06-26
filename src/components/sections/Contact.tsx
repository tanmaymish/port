"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, ArrowUpRight, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: "#3b82f6",
  },
  {
    icon: Link2,
    label: "GitHub",
    value: `@${personal.social.github}`,
    href: `https://github.com/${personal.social.github}`,
    color: "#a78bfa",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    value: `in/${personal.social.linkedin}`,
    href: `https://linkedin.com/in/${personal.social.linkedin}`,
    color: "#06b6d4",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="section relative" ref={ref}>
      {/* Top gradient */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(139,92,246,0.2), transparent)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-semibold text-blue-400 tracking-widest uppercase">
            06 / Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Let's build
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                something real.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-slate-400 text-lg leading-relaxed mb-6"
            >
              I'm actively looking for roles in distributed systems, backend engineering, and
              cybersecurity. If you're building something that needs to scale, secure, and
              endure — I want to hear about it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <MapPin size={13} />
              <span>India · Open to remote opportunities globally</span>
            </motion.div>
          </div>

          {/* Right: contact cards */}
          <div className="space-y-4">
            {links.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="group flex items-center gap-5 p-6 glass rounded-2xl border border-white/08 hover:border-white/18 transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${link.color}12`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${link.color}12`,
                      border: `1px solid ${link.color}25`,
                    }}
                  >
                    <Icon size={20} style={{ color: link.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-slate-600 mb-0.5">{link.label}</div>
                    <div className="text-slate-300 font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 group-hover:text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 pt-8 border-t border-white/06 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-slate-500">@tanmay</span>
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
