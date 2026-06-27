"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = personal.roles;

function PortalSwirl() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Outer ring */}
      <div className="absolute rounded-full border-2 opacity-15 animate-float"
        style={{
          width: 700, height: 700,
          borderColor: "#39ff14",
          boxShadow: "0 0 60px rgba(57,255,20,0.15), inset 0 0 60px rgba(57,255,20,0.05)",
          animation: "portal-rotate 20s linear infinite",
        }}
      />
      {/* Middle ring */}
      <div className="absolute rounded-full border opacity-10"
        style={{
          width: 520, height: 520,
          borderColor: "#cc00ff",
          boxShadow: "0 0 40px rgba(204,0,255,0.12)",
          animation: "portal-rotate 14s linear infinite reverse",
        }}
      />
      {/* Inner ring */}
      <div className="absolute rounded-full border opacity-20"
        style={{
          width: 340, height: 340,
          borderColor: "#00b4ff",
          boxShadow: "0 0 30px rgba(0,180,255,0.15)",
          animation: "portal-rotate 9s linear infinite",
        }}
      />
      {/* Core glow */}
      <div className="absolute rounded-full opacity-5"
        style={{
          width: 200, height: 200,
          background: "radial-gradient(circle, #39ff14 0%, #00b4ff 40%, #cc00ff 70%, transparent 100%)",
          animation: "portal-pulse 4s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function TypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 38);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="h-12 flex items-center justify-center">
      <span className="text-2xl md:text-3xl font-mono font-light grad-rick">
        {displayed}
        <span className="animate-blink" style={{ color: "#39ff14" }}>_</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <PortalSwirl />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #03000a, transparent)" }} />

      <div className="relative z-20 max-w-5xl mx-auto px-8 text-center">
        {/* Dimension badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 glass"
          style={{ border: "1px solid rgba(57,255,20,0.3)", boxShadow: "0 0 20px rgba(57,255,20,0.08)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#39ff14" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#39ff14" }} />
          </span>
          <span className="text-sm font-mono" style={{ color: "#39ff14" }}>DIMENSION C-137</span>
          <span className="text-sm" style={{ color: "#64748b" }}>·</span>
          <span className="text-sm" style={{ color: "#94a3b8" }}>Open to opportunities · India</span>
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-black tracking-tight mb-4 leading-none">
          <span className="block text-white animate-glitch">Tanmay</span>
          <span className="block grad-portal">Mishra</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mb-10">
          <TypedRole />
        </motion.div>

        {/* Bio */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
          className="max-w-xl mx-auto text-lg leading-relaxed mb-12" style={{ color: "#94a3b8" }}>
          Building systems that scale under pressure — distributed architectures, backend engineering, and cybersecurity.
          <span className="font-mono ml-2" style={{ color: "#39ff14" }}>Wubba lubba dub dub.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #1a7a00, #39ff14)",
              color: "#03000a",
              boxShadow: "0 0 35px rgba(57,255,20,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
              fontSize: "15px",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(57,255,20,0.6), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(57,255,20,0.4), inset 0 1px 0 rgba(255,255,255,0.2)"; }}
          >
            <ExternalLink size={16} />
            View Projects
          </a>

          <a href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(204,0,255,0.4)", color: "#e040fb", fontSize: "15px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(204,0,255,0.2)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,255,0.7)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,255,0.4)"; }}
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <a href={`https://github.com/${personal.social.github}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#64748b" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#39ff14"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.3)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            aria-label="GitHub">
            <Link2 size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 flex justify-center gap-12 flex-wrap">
          {[
            { value: "4+", label: "Production Projects", color: "#39ff14" },
            { value: "1K+", label: "Events/sec", color: "#cc00ff" },
            { value: "200+", label: "LeetCode Problems", color: "#00b4ff" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 20px ${s.color}60` }}>{s.value}</div>
              <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "#475569" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20" style={{ color: "#1a4d00" }}>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
