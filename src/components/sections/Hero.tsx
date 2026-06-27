"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = personal.roles;

function Portal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Ring 1 outer */}
      <div className="absolute rounded-full" style={{
        width: 720, height: 720,
        background: "conic-gradient(from 0deg, #ff0077 0%, #9900ff 16%, #0099ff 33%, #39ff14 50%, #ffcc00 66%, #ff0077 83%, #9900ff 100%)",
        filter: "blur(8px)",
        animation: "portal-rotate 3s linear infinite",
        WebkitMaskImage: "radial-gradient(circle, transparent 43%, black 47%, black 100%)",
        maskImage: "radial-gradient(circle, transparent 43%, black 47%, black 100%)",
        opacity: 0.9,
      }} />
      {/* Ring 2 mid reverse */}
      <div className="absolute rounded-full" style={{
        width: 620, height: 620,
        background: "conic-gradient(from 120deg, #0099ff 0%, #39ff14 20%, #ffcc00 40%, #ff0077 60%, #9900ff 80%, #0099ff 100%)",
        filter: "blur(5px)",
        animation: "portal-rotate 2s linear infinite reverse",
        WebkitMaskImage: "radial-gradient(circle, transparent 42%, black 46%, black 100%)",
        maskImage: "radial-gradient(circle, transparent 42%, black 46%, black 100%)",
        opacity: 0.85,
      }} />
      {/* Ring 3 inner fast */}
      <div className="absolute rounded-full" style={{
        width: 500, height: 500,
        background: "conic-gradient(from 240deg, #9900ff 0%, #ff0077 25%, #ffcc00 50%, #0099ff 75%, #9900ff 100%)",
        filter: "blur(3px)",
        animation: "portal-rotate 1.2s linear infinite",
        WebkitMaskImage: "radial-gradient(circle, transparent 41%, black 45%, black 100%)",
        maskImage: "radial-gradient(circle, transparent 41%, black 45%, black 100%)",
        opacity: 0.8,
      }} />
      {/* Glow aura */}
      <div className="absolute rounded-full" style={{
        width: 740, height: 740,
        boxShadow: "0 0 80px rgba(255,0,119,0.4), 0 0 160px rgba(153,0,255,0.25), 0 0 240px rgba(0,153,255,0.15)",
      }} />
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
        <span className="animate-blink" style={{ color: "#ff0077" }}>_</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <Portal />

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #06000f, transparent)" }} />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">

        {/* ── Rick & Morty GIF ── drop /public/rick-morty-vibe.gif to activate */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 rounded-2xl overflow-hidden"
          style={{
            width: 460,
            maxWidth: "90vw",
            border: "2px solid transparent",
            background: "linear-gradient(#06000f, #06000f) padding-box, linear-gradient(135deg, #ff0077, #9900ff, #0099ff, #39ff14, #ffcc00) border-box",
            boxShadow: "0 0 60px rgba(255,0,119,0.35), 0 0 120px rgba(153,0,255,0.2)",
            animation: "rainbow-border 3s linear infinite",
          }}
        >
          <img
            src="/port/rick-morty-vibe.gif"
            alt="Rick and Morty"
            style={{ width: "100%", display: "block" }}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        </motion.div>

        {/* Dimension badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 glass"
          style={{ border: "1px solid rgba(255,0,119,0.4)", boxShadow: "0 0 30px rgba(255,0,119,0.12)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#ff0077" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#ff0077" }} />
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: "#ff0077" }}>📡 DIMENSION C-137</span>
          <span className="text-sm" style={{ color: "#64748b" }}>·</span>
          <span className="text-sm font-mono" style={{ color: "#94a3b8" }}>Open to opportunities · India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-black tracking-tight mb-4 leading-none"
        >
          <span className="block text-white animate-glitch">Tanmay</span>
          <span className="block grad-portal">Mishra</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mb-5">
          <TypedRole />
        </motion.div>

        {/* R&M quote */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className="font-mono text-xs mb-6 tracking-wider italic px-4"
          style={{ color: "#ff0077", textShadow: "0 0 12px rgba(255,0,119,0.5)" }}>
          "I'm sorry, but your opinion means very little to me." — Rick Sanchez, C-137
        </motion.p>

        {/* Bio */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
          className="max-w-lg mx-auto text-lg leading-relaxed mb-10" style={{ color: "#94a3b8" }}>
          Building systems that scale across dimensions — distributed architectures,
          backend engineering, and cybersecurity.{" "}
          <span className="font-mono font-bold" style={{ color: "#ffcc00" }}>Wubba lubba dub dub! 🧪</span>
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #8800cc, #ff0077)",
              color: "#fff",
              boxShadow: "0 0 40px rgba(255,0,119,0.5), 0 0 80px rgba(153,0,255,0.25)",
              fontSize: "15px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(255,0,119,0.7), 0 0 120px rgba(153,0,255,0.4)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05) translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255,0,119,0.5), 0 0 80px rgba(153,0,255,0.25)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            🚀 View Projects
          </a>

          <a href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(0,153,255,0.5)", color: "#0099ff", fontSize: "15px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,153,255,0.3)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,153,255,0.8)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,153,255,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <a href={`https://github.com/${personal.social.github}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#64748b" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ffcc00";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,204,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#64748b";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
            aria-label="GitHub">
            <Link2 size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center gap-10 flex-wrap">
          {[
            { value: "4+", label: "Production Projects", color: "#ff0077", emoji: "🚀" },
            { value: "1K+", label: "Events/sec", color: "#9900ff", emoji: "⚡" },
            { value: "200+", label: "LeetCode Problems", color: "#0099ff", emoji: "🧠" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 25px ${s.color}80` }}>
                {s.emoji} {s.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "#475569" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
