"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2 } from "lucide-react";
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
    <div className="h-12 flex items-center justify-center">
      <span
        className="text-2xl md:text-3xl font-mono font-semibold grad-rick"
        style={{ filter: "drop-shadow(0 0 16px rgba(0,153,255,0.7)) drop-shadow(0 0 32px rgba(153,0,255,0.5))" }}
      >
        {displayed}
        <span className="animate-blink" style={{ color: "#ff0077", WebkitTextFillColor: "#ff0077", textShadow: "0 0 12px rgba(255,0,119,0.9)" }}>_</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* ── Full-screen Rick & Morty GIF background ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/port/rick-morty-vibe.gif"
          alt="Rick and Morty"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center" }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        {/* Dark gradient overlay so text stays readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,0,15,0.55) 0%, rgba(6,0,15,0.45) 40%, rgba(6,0,15,0.75) 80%, #06000f 100%)",
          }}
        />
        {/* Subtle color wash to keep the psychedelic vibe */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 30% 30%, rgba(255,0,119,0.4), transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(0,153,255,0.35), transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Dimension badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8 glass"
          style={{ border: "1px solid rgba(255,0,119,0.4)", boxShadow: "0 0 30px rgba(255,0,119,0.12)" }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#ff0077" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#ff0077" }} />
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: "#ff0077" }}>📡 DIMENSION C-137</span>
          <span className="text-sm" style={{ color: "#cbd5e1" }}>·</span>
          <span className="text-sm font-mono" style={{ color: "#e2e8f0" }}>Open to opportunities · India</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-7xl md:text-9xl font-black tracking-tight mb-4 leading-none"
        >
          <span
            className="block text-white animate-glitch"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(0,153,255,0.6), 0 0 80px rgba(0,153,255,0.4)" }}
          >
            Tanmay
          </span>
          <span
            className="block grad-psychedelic"
            style={{ filter: "drop-shadow(0 0 25px rgba(255,0,119,0.7)) drop-shadow(0 0 50px rgba(153,0,255,0.5))" }}
          >
            Mishra
          </span>
        </motion.h1>

        {/* Typed role */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }} className="mb-5">
          <TypedRole />
        </motion.div>

        {/* R&M quote */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}
          className="font-mono text-xs mb-6 tracking-wider italic px-4 font-bold"
          style={{ color: "#ff2e88", textShadow: "0 0 12px rgba(255,0,119,0.9), 0 0 24px rgba(255,0,119,0.5)" }}>
          "I'm sorry, but your opinion means very little to me." — Rick Sanchez, C-137
        </motion.p>

        {/* Bio */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
          className="max-w-lg mx-auto text-lg leading-relaxed mb-10 font-medium" style={{ color: "#ffffff", textShadow: "0 0 10px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,1)" }}>
          Building systems that scale across dimensions — distributed architectures,
          backend engineering, and cybersecurity.{" "}
          <span className="font-mono font-black" style={{ color: "#ffe600", textShadow: "0 0 14px rgba(255,204,0,0.9), 0 0 28px rgba(255,204,0,0.5)" }}>Wubba lubba dub dub! 🧪</span>
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
            style={{ border: "1px solid rgba(0,153,255,0.5)", color: "#33aaff", fontSize: "15px" }}
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
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#cbd5e1" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#ffdd33";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,204,0,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#cbd5e1";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
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
            { value: "1K+", label: "Events/sec", color: "#cc66ff", emoji: "⚡" },
            { value: "200+", label: "LeetCode Problems", color: "#33aaff", emoji: "🧠" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black mb-1" style={{ color: s.color, textShadow: `0 0 25px ${s.color}, 0 2px 12px rgba(0,0,0,0.8)` }}>
                {s.emoji} {s.value}
              </div>
              <div className="text-xs font-mono uppercase tracking-widest" style={{ color: "#94a3b8", textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
