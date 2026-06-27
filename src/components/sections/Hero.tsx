"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, ArrowRight, ArrowDown } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = personal.roles;

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
    <div className="h-10 flex items-center justify-center">
      <span className="text-xl md:text-2xl font-mono font-light" style={{ color: "#cbd5e1" }}>
        {displayed}
        <span className="animate-blink" style={{ color: "#34e89e" }}>_</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Full-screen Rick & Morty GIF — dimmed to an ambient living texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/port/rick-morty-vibe.gif"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.85) brightness(0.7)" }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        {/* Strong dark overlay for a clean, readable, professional surface */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,12,0.82) 0%, rgba(10,10,12,0.78) 35%, rgba(10,10,12,0.9) 75%, #0a0a0c 100%)",
          }}
        />
        {/* Faint accent vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(52,232,158,0.06), transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-20 w-full max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-10 glass"
          style={{ border: "1px solid rgba(52,232,158,0.25)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#34e89e" }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#34e89e" }} />
          </span>
          <span className="text-xs font-medium tracking-wide" style={{ color: "#cbd5e1" }}>
            Open to opportunities
          </span>
          <span className="text-xs" style={{ color: "#475569" }}>·</span>
          <span className="text-xs" style={{ color: "#94a3b8" }}>India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-5 leading-[1.05]"
        >
          <span className="text-white">Tanmay </span>
          <span className="grad-portal">Mishra</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.6 }} className="mb-7">
          <TypedRole />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10"
          style={{ color: "#94a3b8" }}
        >
          Software engineer focused on distributed systems, backend engineering, and
          cybersecurity — building systems that scale, stay secure, and endure.
        </motion.p>

        {/* CTAs — frosted glass */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="btn-glass group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
            style={{
              background: "rgba(52,232,158,0.12)",
              border: "1px solid rgba(52,232,158,0.4)",
              color: "#5eead4",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(52,232,158,0.2)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(52,232,158,0.18)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(52,232,158,0.12)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Projects
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="btn-glass inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#e2e8f0",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Mail size={15} />
            Get in Touch
          </a>

          <a
            href={`https://github.com/${personal.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass inline-flex items-center justify-center w-12 h-12 rounded-xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#94a3b8",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
              (e.currentTarget as HTMLElement).style.color = "#94a3b8";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
            aria-label="GitHub"
          >
            <Link2 size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="mt-16 flex justify-center gap-12 flex-wrap"
        >
          {[
            { value: "4+", label: "Production Projects" },
            { value: "1K+", label: "Events / sec" },
            { value: "200+", label: "LeetCode Solved" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{s.value}</div>
              <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "#64748b" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Easter egg — small, subtle R&M nod */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-14 font-mono text-[11px] tracking-wide"
          style={{ color: "#3a4a44" }}
        >
          {/* wubba lubba dub dub */}
          <span style={{ color: "#34e89e", opacity: 0.5 }}>$</span> whoami → dimension C-137
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        style={{ color: "#475569" }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
