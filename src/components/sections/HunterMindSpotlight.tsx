"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Cpu, Network, Search, ArrowUpRight, Radio } from "lucide-react";

const modules = [
  { icon: Search, name: "Passive Recon", description: "Subdomain enumeration, DNS resolution, WHOIS, certificate transparency", color: "#00ff88" },
  { icon: Network, name: "Active Enumeration", description: "Port scanning, service fingerprinting, technology detection", color: "#00d4ff" },
  { icon: Shield, name: "Vulnerability Surface", description: "Parameter discovery, endpoint mapping, authentication boundary detection", color: "#8b30ff" },
  { icon: Cpu, name: "AI Correlation Engine", description: "Cross-source data correlation, high-value target scoring, anomaly detection", color: "#ffb800" },
  { icon: Radio, name: "Live Dashboard", description: "Real-time recon session monitoring, findings graph visualization", color: "#e040fb" },
];

const stats = [
  { label: "Modules Planned", value: "5+" },
  { label: "Target Audience", value: "Bug Bounty" },
  { label: "Architecture", value: "Modular" },
  { label: "Status", value: "Building" },
];

export default function HunterMindSpotlight() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,255,136,0.04) 0%, rgba(139,48,255,0.03) 50%, transparent 70%)",
      }} />

      <div className="max-w-6xl mx-auto px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono font-bold tracking-widest uppercase neon-green">
            Flagship Project
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,255,136,0.3), transparent)" }} />
        </motion.div>

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.05, duration: 0.6 }}
              className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
                style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00ff88" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00ff88" }} />
                </span>
                <span className="text-xs font-mono" style={{ color: "#00ff88" }}>In Development</span>
              </div>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl font-bold text-white leading-tight">
              Hunter
              <span style={{
                background: "linear-gradient(135deg, #00ff88, #00d4ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Mind</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.18, duration: 0.6 }}
              className="font-mono text-sm mt-2" style={{ color: "#475569" }}>
              AI-Powered Recon Automation Platform
            </motion.p>
          </div>

          <motion.a initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.25, duration: 0.6 }}
            href="https://github.com/tanmaymish" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 self-start md:self-auto"
            style={{ color: "#00ff88", border: "1px solid rgba(0,255,136,0.2)", background: "rgba(0,255,136,0.06)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.12)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,255,136,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.06)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Follow Development
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* Description + stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8 mb-10">
          <div className="md:col-span-2 space-y-3">
            <p className="leading-relaxed" style={{ color: "#94a3b8" }}>
              Manual reconnaissance is time-consuming, inconsistent, and misses critical attack
              surface. HunterMind automates the entire recon pipeline — from passive enumeration to
              intelligent target scoring — giving security researchers a professional-grade edge.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
              Designed for bug bounty hunters and red teams who need systematic, scalable, and
              stealthy reconnaissance. Each module is independently deployable and feeds a unified
              findings graph that the AI layer reasons over.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "Go", "React", "PostgreSQL", "Redis", "Docker", "REST APIs"].map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1 rounded-lg"
                  style={{ background: "rgba(0,255,136,0.07)", color: "#00ff88", border: "1px solid rgba(0,255,136,0.15)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 content-start">
            {stats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className="p-4 rounded-xl"
                style={{ background: "rgba(0,255,136,0.05)", border: "1px solid rgba(0,255,136,0.12)" }}>
                <div className="text-lg font-bold" style={{ color: "#00ff88" }}>{s.value}</div>
                <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Module pipeline */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#475569" }}>
          Module Pipeline
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div key={mod.name}
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300"
                style={{ background: "rgba(8,2,20,0.9)", border: `1px solid ${mod.color}12` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${mod.color}15`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${mod.color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = `${mod.color}12`;
                }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${mod.color}12`, border: `1px solid ${mod.color}25` }}>
                  <Icon size={15} style={{ color: mod.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium transition-colors truncate" style={{ color: "#cbd5e1" }}>{mod.name}</span>
                    <span className="text-xs font-mono shrink-0" style={{ color: "#475569" }}>· planned</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#94a3b8" }}>{mod.description}</p>
                </div>
              </motion.div>
            );
          })}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 + 5 * 0.07, duration: 0.5 }}
            className="flex items-center justify-center p-4 rounded-xl border border-dashed"
            style={{ borderColor: "rgba(0,255,136,0.15)" }}>
            <span className="text-xs font-mono" style={{ color: "#475569" }}>+ more modules planned</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
