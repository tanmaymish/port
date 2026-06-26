"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Cpu, Network, Search, ArrowUpRight, Radio } from "lucide-react";

const modules = [
  {
    icon: Search,
    name: "Passive Recon",
    description: "Subdomain enumeration, DNS resolution, WHOIS, certificate transparency",
    status: "planned",
    color: "#3b82f6",
  },
  {
    icon: Network,
    name: "Active Enumeration",
    description: "Port scanning, service fingerprinting, technology detection",
    status: "planned",
    color: "#8b5cf6",
  },
  {
    icon: Shield,
    name: "Vulnerability Surface",
    description: "Parameter discovery, endpoint mapping, authentication boundary detection",
    status: "planned",
    color: "#ef4444",
  },
  {
    icon: Cpu,
    name: "AI Correlation Engine",
    description: "Cross-source data correlation, high-value target scoring, anomaly detection",
    status: "planned",
    color: "#f59e0b",
  },
  {
    icon: Radio,
    name: "Live Dashboard",
    description: "Real-time recon session monitoring, findings graph visualization",
    status: "planned",
    color: "#10b981",
  },
];

export default function HunterMindSpotlight() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(239,68,68,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-semibold text-red-400 tracking-widest uppercase">
            Flagship Project
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: description */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20">
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
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-5xl font-bold text-white mb-2 leading-tight"
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
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-slate-500 font-mono text-sm mb-6"
            >
              AI-Powered Recon Automation Platform
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="text-slate-400 leading-relaxed mb-6"
            >
              Manual reconnaissance is time-consuming, inconsistent, and misses critical attack
              surface. HunterMind automates the entire recon pipeline — from passive enumeration to
              intelligent target scoring — giving security researchers a professional-grade edge.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-slate-500 text-sm leading-relaxed mb-8"
            >
              Designed for bug bounty hunters and red teams who need systematic, scalable, and
              stealthy reconnaissance. Each module is independently deployable and feeds a unified
              findings graph that the AI layer reasons over.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {["Python", "Go", "React", "PostgreSQL", "Redis", "Docker", "REST APIs"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(239,68,68,0.08)",
                      color: "#f87171",
                      border: "1px solid rgba(239,68,68,0.15)",
                    }}
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              href="https://github.com/tanmaymish"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium text-red-300 border border-red-500/20 bg-red-500/08 hover:bg-red-500/15 hover:border-red-500/35 transition-all duration-200"
            >
              Follow Development
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          </div>

          {/* Right: module pipeline */}
          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-4"
            >
              Module Pipeline
            </motion.div>
            {modules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={mod.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.09, duration: 0.5 }}
                  className="group flex items-start gap-4 p-4 glass rounded-xl border border-white/08 hover:border-white/15 transition-all duration-300"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${mod.color}12`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${mod.color}12`,
                      border: `1px solid ${mod.color}20`,
                    }}
                  >
                    <Icon size={14} style={{ color: mod.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {mod.name}
                      </span>
                      <span className="text-xs font-mono text-slate-700">· planned</span>
                    </div>
                    <p className="text-xs text-slate-600">{mod.description}</p>
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
