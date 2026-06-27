"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Link2,
  ChevronDown,
  Layers,
  Zap,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { projects } from "@/data/portfolio";

const STATUS_LABELS = {
  production: { label: "Production", color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  building: { label: "In Development", color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  finalist: { label: "SIH Finalist", color: "#8b5cf6", bg: "rgba(139,92,246,0.1)" },
};

function MetricCard({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="flex flex-col p-4 rounded-xl border" style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.07)" }}>
      <span className="text-xs text-slate-500 mb-1">{label}</span>
      <div className="flex items-end gap-1">
        <span className="text-2xl font-bold text-white leading-none">{value}</span>
        {unit && <span className="text-xs text-slate-500 mb-0.5">{unit}</span>}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const status = STATUS_LABELS[project.status];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group rounded-2xl border transition-all duration-300 overflow-hidden"
      style={{
        background: "rgba(10,3,30,0.92)",
        borderColor: "rgba(57,255,20,0.15)",
        backdropFilter: "blur(20px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 60px ${project.color}18`;
        (e.currentTarget as HTMLElement).style.borderColor = `rgba(57,255,20,0.3)`;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = `rgba(57,255,20,0.15)`;
      }}
    >
      {/* Accent line */}
      <div
        className="h-px w-full opacity-60"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        }}
      />

      <div className="p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span
                className="text-xs font-medium px-2.5 py-1 rounded-full"
                style={{ background: status.bg, color: status.color }}
              >
                {status.label}
              </span>
              {project.id === "huntermind" && (
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  Flagship
                </span>
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
              {project.title}
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: project.color }}
            >
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 ml-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <Link2 size={16} />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl glass border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Live demo"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {project.metrics.map((m) => (
            <MetricCard key={m.label} label={m.label} value={m.value} unit={m.unit} />
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono px-3 py-1.5 rounded-lg border"
              style={{
                background: `${project.color}08`,
                color: `${project.color}cc`,
                borderColor: `${project.color}20`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Expand button */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          <span>{expanded ? "Hide" : "View"} Architecture & Deep Dive</span>
          <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={15} />
          </motion.div>
        </button>

        {/* Expandable deep dive */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-6 grid md:grid-cols-2 gap-6 border-t border-white/06 mt-4">
                {/* Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle size={14} className="text-amber-400" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Problem
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.problem}</p>
                </div>

                {/* Architecture */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={14} style={{ color: "#00ff88" }} />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Architecture
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{project.architecture}</p>
                </div>

                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Zap size={14} className="text-purple-400" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Challenges
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.challenges.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-red-400/60 mt-0.5 text-xs">✕</span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle size={14} className="text-emerald-400" />
                    <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Solutions
                    </span>
                  </div>
                  <ul className="space-y-1.5">
                    {project.solutions.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="text-emerald-400/60 mt-0.5 text-xs">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="section relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: "#ffcc00", textShadow: "0 0 10px rgba(255,204,0,0.5)" }}>
            // 03 · PROJECTS · INTERDIMENSIONAL BUILDS
          </span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(255,204,0,0.6))" }} />
            <span style={{ color: "#ffcc00" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(255,204,0,0.6))" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">🚀 Production Systems</h2>
          <p className="max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Every project solves a real problem with a production-grade design. Click any card
            to explore architecture decisions, engineering challenges, and solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 justify-items-center">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
