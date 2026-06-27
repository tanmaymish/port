"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, GraduationCap, Code2, Shield, Server, Cpu } from "lucide-react";
import { personal } from "@/data/portfolio";

const pillars = [
  {
    icon: Server,
    title: "Distributed Systems",
    description: "Designing systems with fault tolerance, horizontal scalability, and graceful degradation. CAP theorem is a design constraint, not a limitation.",
    color: "#00ff88",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "OWASP, network security, recon automation, and cloud security. I think in attack surfaces and trust boundaries, not just features.",
    color: "#8b30ff",
  },
  {
    icon: Code2,
    title: "Backend Engineering",
    description: "Production-grade APIs, microservices, and data pipelines. Built for correctness first, performance second, and maintainability always.",
    color: "#00d4ff",
  },
  {
    icon: Cpu,
    title: "Systems Thinking",
    description: "From compiler design to operating systems — I understand what runs below the application layer and how to exploit it for performance.",
    color: "#ffb800",
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="section relative" ref={ref}>
      {/* subtle portal bg glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 70% 40% at 30% 50%, rgba(0,255,136,0.03) 0%, transparent 60%)",
      }} />
      <div className="max-w-6xl mx-auto px-8 relative">
        {/* Section label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "#00ff88" }}>
            01 / About
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,255,136,0.3), transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <div className="space-y-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold leading-tight">
              Not just another
              <br />
              <span style={{
                background: "linear-gradient(135deg, #00ff88, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                software developer.
              </span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              I enjoy building systems. Distributed systems, backend services, cybersecurity
              tooling, automation. I want to understand how things break before I build
              them — and I want the systems I build to be resilient when they do.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}
              className="leading-relaxed" style={{ color: "#64748b" }}>
              Currently finishing my B.Tech in CSE at KIIT University, I've spent the last three
              years deliberately building production-grade systems rather than tutorial projects.
              Every project is designed to solve a real problem and operate under real constraints.
            </motion.p>

            {/* Info cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3 text-sm" style={{ color: "#94a3b8" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)" }}>
                  <GraduationCap size={15} style={{ color: "#00ff88" }} />
                </div>
                <div>
                  <div className="font-medium" style={{ color: "#e2e8f0" }}>{personal.education.degree}</div>
                  <div className="text-xs" style={{ color: "#475569" }}>
                    {personal.education.university} · {personal.education.period} · GPA {personal.education.gpa}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm" style={{ color: "#94a3b8" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.15)" }}>
                  <MapPin size={15} style={{ color: "#00d4ff" }} />
                </div>
                <span>{personal.location} · Available for remote roles globally</span>
              </div>
            </motion.div>
          </div>

          {/* Right: engineering pillars */}
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="group flex gap-4 p-5 rounded-2xl transition-all duration-300"
                  style={{ background: "rgba(8,2,20,0.85)", border: `1px solid ${pillar.color}15` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${pillar.color}15`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${pillar.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = `${pillar.color}15`;
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${pillar.color}12`, border: `1px solid ${pillar.color}25` }}>
                    <Icon size={18} style={{ color: pillar.color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5 transition-colors" style={{ color: "#e2e8f0" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = pillar.color; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}>
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>{pillar.description}</p>
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
