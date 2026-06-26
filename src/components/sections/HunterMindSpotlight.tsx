"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Cpu, Network, Search, ArrowUpRight, Radio } from "lucide-react";

const modules = [
  {
    icon: Search,
    name: "Passive Recon",
    description: "Subdomain enumeration, DNS resolution, WHOIS, certificate transparency",
    color: "#3b82f6",
  },
  {
    icon: Network,
    name: "Active Enumeration",
    description: "Port scanning, service fingerprinting, technology detection",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    name: "Vulnerability Surface",
    description: "Parameter discovery, endpoint mapping, authentication boundary detection",
    color: "#ef4444",
  },
  {
    icon: Cpu,
    name: "AI Correlation Engine",
    description: "Cross-source data correlation, high-value target scoring, anomaly detection",
    color: "#f59e0b",
  },
  {
    icon: Radio,
    name: "Live Dashboard",
    description: "Real-time recon session monitoring, findings graph visualization",
    color: "#10b981",
  },
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
      {/* Subtle red background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(239,68,68,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <span className="text-xs font-mono font-semibold text-red-400 tracking-widest uppercase">
            Flagship Project
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
        </motion.div>

        {/* ── Header row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            {/* In Development badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05, duration: 0.6 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
                </span>
                <span className="text-xs text-red-400 font-mono">In Development</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl font-bold text-white leading-tight"
            >
              Hunter
              <span
                style={{
                  background: "linear-gradient(135deg, #ef4444, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mind
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.18, duration: 0.6 }}
              className="text-slate-500 font-mono text-sm mt-2"
            >
              AI-Powered Recon Automation Platform
            </motion.p>
          </div>

          {/* Follow button */}
          <motion.a
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }}
            href="https://github.com/tanmaymish"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-red-300 border border-red-500/20 bg-red-500/08 hover:bg-red-500/15 hover:border-red-500/35 transition-all duration-200 self-start md:self-auto"
          >
            Follow Development
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        {/* ── Description + stats ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8 mb-10"
        >
          {/* Description spans 2 cols */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-slate-400 leading-relaxed">
              Manual reconnaissance is time-consuming, inconsistent, and misses critical attack
              surface. HunterMind automates the entire recon pipeline — from passive enumeration to
              intelligent target scoring — giving security researchers a professional-grade edge.
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Designed for bug bounty hunters and red teams who need systematic, scalable, and
              stealthy reconnaissance. Each module is independently deployable and feeds a unified
              findings graph that the AI layer reasons over.
            </p>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Python", "Go", "React", "PostgreSQL", "Redis", "Docker", "REST APIs"].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-3 py-1 rounded-lg"
                  style={{
                    background: "rgba(239,68,68,0.08)",
                    color: "#f87171",
                    border: "1px solid rgba(239,68,68,0.15)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-3 content-start">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className="p-4 rounded-xl border"
                style={{ background: "rgba(239,68,68,0.06)", borderColor: "rgba(239,68,68,0.15)" }}
              >
                <div className="text-lg font-bold text-white">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Module pipeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4"
        >
          Module Pipeline
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={mod.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.07, duration: 0.5 }}
                className="group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300"
                style={{ background: "rgba(10,18,40,0.8)", borderColor: "rgba(255,255,255,0.07)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px ${mod.color}18`;
                  (e.currentTarget as HTMLElement).style.borderColor = `${mod.color}30`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${mod.color}15`, border: `1px solid ${mod.color}25` }}
                >
                  <Icon size={15} style={{ color: mod.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors truncate">
                      {mod.name}
                    </span>
                    <span className="text-xs font-mono text-slate-500 shrink-0">· planned</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{mod.description}</p>
                </div>
              </motion.div>
            );
          })}
          {/* 5 modules in 3-col grid leaves 1 empty — fill with a "more coming" card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 + 5 * 0.07, duration: 0.5 }}
            className="flex items-center justify-center p-4 rounded-xl border border-dashed"
            style={{ borderColor: "rgba(239,68,68,0.2)" }}
          >
            <span className="text-xs font-mono text-slate-500">+ more modules planned</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
