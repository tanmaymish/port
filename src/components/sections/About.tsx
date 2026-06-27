"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, GraduationCap, Code2, Shield, Server, Cpu } from "lucide-react";
import { personal } from "@/data/portfolio";

const pillars = [
  { icon: Server, title: "Distributed Systems", description: "Fault tolerance, horizontal scalability, graceful degradation. CAP theorem is a design constraint, not a limitation.", color: "#39ff14", glow: "rgba(57,255,20,0.2)" },
  { icon: Shield, title: "Cybersecurity", description: "OWASP, network security, recon automation, cloud security. Attack surfaces and trust boundaries, not just features.", color: "#cc00ff", glow: "rgba(204,0,255,0.2)" },
  { icon: Code2, title: "Backend Engineering", description: "Production-grade APIs, microservices, data pipelines. Correctness first, performance second, maintainability always.", color: "#00b4ff", glow: "rgba(0,180,255,0.2)" },
  { icon: Cpu, title: "Systems Thinking", description: "From compiler design to operating systems — I understand what runs below the application layer.", color: "#ffe000", glow: "rgba(255,224,0,0.2)" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase neon-green">// 01 · ABOUT</span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(57,255,20,0.4), transparent)" }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div className="space-y-6">
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl font-black leading-tight text-white">
              Not just another<br />
              <span className="grad-portal">software developer.</span>
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
              className="text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
              I enjoy building systems. Distributed systems, backend services, cybersecurity
              tooling, automation. I want to understand how things break before I build them —
              and I want the systems I build to be resilient when they do.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.7 }}
              className="leading-relaxed" style={{ color: "#64748b" }}>
              Currently finishing my B.Tech in CSE at KIIT University. Every project is designed
              to solve a real problem and operate under real constraints.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col gap-3 pt-4">
              {[
                { icon: GraduationCap, color: "#39ff14", title: personal.education.degree, sub: `${personal.education.university} · ${personal.education.period} · GPA ${personal.education.gpa}` },
                { icon: MapPin, color: "#cc00ff", title: `${personal.location} · Available for remote roles globally`, sub: null },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}30` }}>
                      <Icon size={16} style={{ color: item.color }} />
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.title}</div>
                      {item.sub && <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{item.sub}</div>}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div key={p.title}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="p-5 rounded-2xl transition-all duration-300 cursor-default"
                  style={{ background: "rgba(10,3,30,0.92)", border: `1px solid ${p.color}25` }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${p.glow}, 0 0 80px ${p.color}08`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${p.color}50`;
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    (e.currentTarget as HTMLElement).style.borderColor = `${p.color}25`;
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}30` }}>
                    <Icon size={18} style={{ color: p.color }} />
                  </div>
                  <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{p.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
