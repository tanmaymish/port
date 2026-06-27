"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, GraduationCap, Code2, Shield, Server, Cpu } from "lucide-react";
import { personal } from "@/data/portfolio";

const pillars = [
  { icon: Server, title: "Distributed Systems", description: "Fault tolerance, horizontal scalability, graceful degradation.", color: "#39ff14" },
  { icon: Shield, title: "Cybersecurity", description: "OWASP, recon automation, cloud security, trust boundaries.", color: "#ff0077" },
  { icon: Code2, title: "Backend Engineering", description: "Production-grade APIs, microservices, data pipelines.", color: "#0099ff" },
  { icon: Cpu, title: "Systems Thinking", description: "From compiler design to OS — I know what's below the stack.", color: "#ffcc00" },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Centered label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase neon-pink">// 01 · ABOUT · DIMENSION C-137</span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(255,0,119,0.6))" }} />
            <span style={{ color: "#ff0077" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(255,0,119,0.6))" }} />
          </div>
        </motion.div>

        {/* Centered heading */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-black leading-tight text-white mb-4">
            Not just another<br />
            <span className="grad-portal">software developer.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#94a3b8" }}>
            I enjoy building systems. Distributed systems, backend services, cybersecurity tooling, automation.
            I want to understand how things break before I build them.
          </p>
          {/* Rick quote */}
          <div className="inline-block mt-5 px-5 py-3 rounded-xl"
            style={{ background: "rgba(255,0,119,0.07)", border: "1px solid rgba(255,0,119,0.25)" }}>
            <p className="text-sm font-mono italic" style={{ color: "#ff0077" }}>
              🧪 "Nobody exists on purpose. Nobody belongs anywhere. But I still ship to prod." — Rick
            </p>
          </div>
        </motion.div>

        {/* Info row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-14">
          {[
            { icon: GraduationCap, color: "#39ff14", title: personal.education.degree, sub: `${personal.education.university} · GPA ${personal.education.gpa}` },
            { icon: MapPin, color: "#9900ff", title: `${personal.location}`, sub: "Available for remote roles globally" },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl text-sm"
                style={{ background: "rgba(8,2,24,0.92)", border: `1px solid ${item.color}30` }}>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}30` }}>
                  <Icon size={16} style={{ color: item.color }} />
                </div>
                <div>
                  <div className="font-medium text-white">{item.title}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{item.sub}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* CENTERED pillar cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                className="w-full p-5 rounded-2xl text-center transition-all duration-300 cursor-default"
                style={{ background: "rgba(8,2,24,0.92)", border: `1px solid ${p.color}30` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 0 50px ${p.color}25, 0 0 100px ${p.color}10`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}60`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = `${p.color}30`;
                  (e.currentTarget as HTMLElement).style.transform = "none";
                }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${p.color}15`, border: `1px solid ${p.color}35` }}>
                  <Icon size={20} style={{ color: p.color }} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
