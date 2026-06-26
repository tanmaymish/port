"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, GraduationCap, Code2, Shield, Server, Cpu } from "lucide-react";
import { personal } from "@/data/portfolio";

const pillars = [
  {
    icon: Server,
    title: "Distributed Systems",
    description:
      "Designing systems with fault tolerance, horizontal scalability, and graceful degradation. CAP theorem is a design constraint, not a limitation.",
    color: "#3b82f6",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "OWASP, network security, recon automation, and cloud security. I think in attack surfaces and trust boundaries, not just features.",
    color: "#8b5cf6",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "Production-grade APIs, microservices, and data pipelines. Built for correctness first, performance second, and maintainability always.",
    color: "#06b6d4",
  },
  {
    icon: Cpu,
    title: "Systems Thinking",
    description:
      "From compiler design to operating systems — I understand what runs below the application layer and how to exploit it for performance.",
    color: "#10b981",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-semibold text-blue-400 tracking-widest uppercase">
            01 / About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Not just another
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60a5fa, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                software developer.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-slate-400 leading-relaxed text-lg"
            >
              I enjoy building systems. Distributed systems, backend services, cybersecurity
              tooling, automation. I want to understand how things break before I build
              them — and I want the systems I build to be resilient when they do.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-slate-500 leading-relaxed"
            >
              Currently finishing my B.Tech in CSE at KIIT University, I've spent the last three
              years deliberately building production-grade systems rather than tutorial projects.
              Every project is designed to solve a real problem and operate under real constraints.
            </motion.p>

            {/* Info cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col gap-3 pt-4"
            >
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center glass border border-white/10">
                  <GraduationCap size={15} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-slate-300 font-medium">{personal.education.degree}</div>
                  <div className="text-slate-500 text-xs">
                    {personal.education.university} · {personal.education.period} · GPA{" "}
                    {personal.education.gpa}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center glass border border-white/10">
                  <MapPin size={15} className="text-blue-400" />
                </div>
                <span>{personal.location} · Available for remote roles globally</span>
              </div>
            </motion.div>
          </div>

          {/* Right: engineering pillars */}
          <div className="grid grid-cols-1 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="group flex gap-4 p-5 glass rounded-2xl border border-white/08 hover:border-white/15 transition-all duration-300"
                  style={{
                    ["--hover-glow" as string]: `${pillar.color}20`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      `0 0 30px ${pillar.color}15`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: `${pillar.color}15`,
                      border: `1px solid ${pillar.color}25`,
                    }}
                  >
                    <Icon size={18} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-200 mb-1.5 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{pillar.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
