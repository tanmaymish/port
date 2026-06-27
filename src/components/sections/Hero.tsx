"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Link2 } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = personal.roles;

function Portal() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Ring 1 — outer conic ring masked to only show outer band */}
      <div
        className="absolute rounded-full"
        style={{
          width: 680,
          height: 680,
          background:
            "conic-gradient(from 0deg, #39ff14 0%, #00ff88 8%, #001a00 18%, #39ff14 28%, #00ff44 38%, #002800 48%, #39ff14 58%, #00ff88 68%, #001a00 78%, #39ff14 88%, #00ff44 100%)",
          filter: "blur(6px)",
          animation: "portal-rotate 2.2s linear infinite",
          WebkitMaskImage: "radial-gradient(circle, transparent 44%, black 47%, black 100%)",
          maskImage: "radial-gradient(circle, transparent 44%, black 47%, black 100%)",
          opacity: 1,
        }}
      />
      {/* Ring 2 — mid reverse spin */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "conic-gradient(from 90deg, #003300 0%, #39ff14 15%, #004400 30%, #00ff66 45%, #002200 60%, #39ff14 75%, #005500 90%, #00ff44 100%)",
          filter: "blur(4px)",
          animation: "portal-rotate 1.4s linear infinite reverse",
          WebkitMaskImage: "radial-gradient(circle, transparent 43%, black 47%, black 100%)",
          maskImage: "radial-gradient(circle, transparent 43%, black 47%, black 100%)",
          opacity: 0.9,
        }}
      />
      {/* Ring 3 — inner fast spin */}
      <div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "conic-gradient(from 180deg, #39ff14 0%, #001800 25%, #00ff44 50%, #002200 75%, #39ff14 100%)",
          filter: "blur(3px)",
          animation: "portal-rotate 0.9s linear infinite",
          WebkitMaskImage: "radial-gradient(circle, transparent 42%, black 46%, black 100%)",
          maskImage: "radial-gradient(circle, transparent 42%, black 46%, black 100%)",
          opacity: 0.85,
        }}
      />
      {/* Outer glow aura */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          boxShadow:
            "0 0 60px rgba(57,255,20,0.6), 0 0 120px rgba(57,255,20,0.3), 0 0 200px rgba(57,255,20,0.15)",
        }}
      />
    </div>
  );
}

function RickSVG() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      style={{ animation: "float 4s ease-in-out infinite" }}
      className="hidden lg:block absolute right-12 bottom-24 z-20 pointer-events-none select-none"
    >
      <svg viewBox="0 0 110 230" width="110" height="230">
        {/* Spiky white hair */}
        <path d="M28,48 L18,18 L33,34 L26,4 L40,26 L38,2 L52,24 L54,2 L66,26 L64,4 L78,34 L70,18 L72,48" fill="#d0d0d0" stroke="#aaa" strokeWidth="1" />
        {/* Head */}
        <ellipse cx="50" cy="62" rx="24" ry="22" fill="#e8dcc8" stroke="#c8b89a" strokeWidth="1" />
        {/* Eyes big */}
        <ellipse cx="41" cy="58" rx="6" ry="7" fill="white" stroke="#888" strokeWidth="0.5" />
        <ellipse cx="59" cy="58" rx="6" ry="7" fill="white" stroke="#888" strokeWidth="0.5" />
        <circle cx="42" cy="59" r="3.5" fill="#1a1a6e" />
        <circle cx="60" cy="59" r="3.5" fill="#1a1a6e" />
        <circle cx="43" cy="57.5" r="1.2" fill="white" />
        <circle cx="61" cy="57.5" r="1.2" fill="white" />
        {/* Unibrow */}
        <path d="M35,50 Q41,47 47,50" stroke="#555" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M53,50 Q59,47 65,50" stroke="#555" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Mouth and drool */}
        <path d="M44,72 Q50,76 56,72" stroke="#888" strokeWidth="1.5" fill="none" />
        <path d="M49,74 L49,82" stroke="#39ff14" strokeWidth="2.5" strokeLinecap="round" />
        <ellipse cx="49" cy="83" rx="3" ry="2" fill="#39ff14" opacity="0.8" />
        {/* Lab coat body */}
        <rect x="26" y="84" width="48" height="68" rx="10" fill="#f0f0f0" stroke="#ccc" strokeWidth="1" />
        {/* Shirt under */}
        <rect x="38" y="84" width="24" height="68" rx="5" fill="#b8d4b8" />
        {/* Lab coat lapels */}
        <path d="M38,84 L32,110" stroke="#ccc" strokeWidth="1" fill="none" />
        <path d="M62,84 L68,110" stroke="#ccc" strokeWidth="1" fill="none" />
        {/* Left arm */}
        <rect x="6" y="88" width="20" height="12" rx="6" fill="#f0f0f0" stroke="#ccc" strokeWidth="1" />
        <ellipse cx="6" cy="94" rx="5" ry="6" fill="#e8dcc8" stroke="#c8b89a" strokeWidth="1" />
        {/* Right arm - holding portal gun */}
        <rect x="74" y="86" width="20" height="12" rx="6" fill="#f0f0f0" stroke="#ccc" strokeWidth="1" />
        {/* Portal gun */}
        <rect x="90" y="88" width="22" height="10" rx="4" fill="#444" stroke="#333" strokeWidth="1" />
        <rect x="96" y="96" width="8" height="5" rx="2" fill="#444" />
        <circle cx="112" cy="93" r="7" fill="#39ff14" opacity="0.9" />
        <circle cx="112" cy="93" r="4" fill="#00ff88" />
        <circle cx="112" cy="93" r="2" fill="white" opacity="0.8" />
        {/* Legs */}
        <rect x="30" y="150" width="18" height="42" rx="9" fill="#4a4a6a" />
        <rect x="52" y="150" width="18" height="42" rx="9" fill="#4a4a6a" />
        {/* Shoes */}
        <ellipse cx="39" cy="194" rx="12" ry="6" fill="#333" />
        <ellipse cx="61" cy="194" rx="12" ry="6" fill="#333" />
      </svg>
    </motion.div>
  );
}

function MortySVG() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
      className="hidden lg:block absolute left-12 bottom-24 z-20 pointer-events-none select-none"
    >
      <svg viewBox="0 0 90 200" width="80" height="180">
        {/* Round head */}
        <ellipse cx="45" cy="55" rx="28" ry="28" fill="#f5e6c8" stroke="#ddc8a0" strokeWidth="1" />
        {/* Ears */}
        <ellipse cx="17" cy="55" rx="6" ry="8" fill="#f5e6c8" stroke="#ddc8a0" strokeWidth="1" />
        <ellipse cx="73" cy="55" rx="6" ry="8" fill="#f5e6c8" stroke="#ddc8a0" strokeWidth="1" />
        {/* Eyes */}
        <ellipse cx="36" cy="50" rx="6" ry="7" fill="white" stroke="#888" strokeWidth="0.5" />
        <ellipse cx="54" cy="50" rx="6" ry="7" fill="white" stroke="#888" strokeWidth="0.5" />
        <circle cx="37" cy="51" r="3.5" fill="#4a3020" />
        <circle cx="55" cy="51" r="3.5" fill="#4a3020" />
        <circle cx="38" cy="49.5" r="1.2" fill="white" />
        <circle cx="56" cy="49.5" r="1.2" fill="white" />
        {/* Scared/shocked brows */}
        <path d="M30,42 Q36,38 42,42" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M48,42 Q54,38 60,42" stroke="#8B6914" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Mouth open scared */}
        <path d="M36,66 Q45,72 54,66" stroke="#888" strokeWidth="1.5" fill="#cc8866" />
        {/* Body yellow shirt */}
        <rect x="20" y="83" width="50" height="58" rx="10" fill="#ffe000" stroke="#ccb800" strokeWidth="1" />
        {/* Shirt stripe */}
        <rect x="30" y="83" width="8" height="58" rx="3" fill="#cc0000" opacity="0.6" />
        {/* Arms */}
        <rect x="4" y="86" width="16" height="10" rx="5" fill="#ffe000" stroke="#ccb800" strokeWidth="1" />
        <rect x="70" y="86" width="16" height="10" rx="5" fill="#ffe000" stroke="#ccb800" strokeWidth="1" />
        {/* Legs */}
        <rect x="24" y="139" width="16" height="38" rx="8" fill="#5a8a6a" />
        <rect x="50" y="139" width="16" height="38" rx="8" fill="#5a8a6a" />
        {/* Shoes */}
        <ellipse cx="32" cy="178" rx="11" ry="6" fill="#333" />
        <ellipse cx="58" cy="178" rx="11" ry="6" fill="#333" />
      </svg>
    </motion.div>
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
      <Portal />
      <RickSVG />
      <MortySVG />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #03000a, transparent)" }}
      />

      {/* Rick & Morty GIF — place file at /public/rick-morty-vibe.gif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        style={{ width: 480, maxWidth: "90vw" }}
      >
        <img
          src="/port/rick-morty-vibe.gif"
          alt="Rick and Morty"
          style={{
            width: "100%",
            borderRadius: "24px",
            border: "2px solid rgba(57,255,20,0.4)",
            boxShadow: "0 0 60px rgba(57,255,20,0.3), 0 0 120px rgba(204,0,255,0.2)",
          }}
        />
      </motion.div>

      <div className="relative z-20 max-w-3xl mx-auto px-8 text-center" style={{ paddingTop: "340px" }}>
        {/* Dimension badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-10 glass"
          style={{ border: "1px solid rgba(57,255,20,0.5)", boxShadow: "0 0 30px rgba(57,255,20,0.15)" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#39ff14" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#39ff14" }} />
          </span>
          <span className="text-sm font-mono font-bold" style={{ color: "#39ff14" }}>📡 DIMENSION C-137</span>
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-6"
        >
          <TypedRole />
        </motion.div>

        {/* R&M quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="font-mono text-xs mb-6 tracking-widest italic"
          style={{ color: "#39ff14", textShadow: "0 0 10px rgba(57,255,20,0.4)" }}
        >
          "I'm not the nicest guy in the universe because I'm the smartest, and being nice is something stupid people do to hedge their bets."
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="max-w-xl mx-auto text-lg leading-relaxed mb-12"
          style={{ color: "#94a3b8" }}
        >
          Building systems that scale across dimensions — distributed architectures,
          backend engineering, and cybersecurity.{" "}
          <span className="font-mono font-bold" style={{ color: "#ffe000" }}>Wubba lubba dub dub! 🧪</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-sm transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #004d00, #39ff14)",
              color: "#000",
              boxShadow: "0 0 40px rgba(57,255,20,0.5), 0 0 80px rgba(57,255,20,0.2)",
              fontSize: "15px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(57,255,20,0.7), 0 0 120px rgba(57,255,20,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(57,255,20,0.5), 0 0 80px rgba(57,255,20,0.2)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            🚀 View Projects
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(204,0,255,0.5)", color: "#e040fb", fontSize: "15px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(204,0,255,0.3)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,255,0.8)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(204,0,255,0.5)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <Mail size={16} />
            Get in Touch
          </a>

          <a
            href={`https://github.com/${personal.social.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-2xl text-sm glass transition-all duration-200"
            style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#64748b" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#39ff14";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(57,255,20,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#64748b";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
            }}
            aria-label="GitHub"
          >
            <Link2 size={18} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 flex justify-center gap-10 flex-wrap"
        >
          {[
            { value: "4+", label: "Production Projects", color: "#39ff14", emoji: "⚡" },
            { value: "1K+", label: "Events/sec", color: "#cc00ff", emoji: "🌀" },
            { value: "200+", label: "LeetCode Problems", color: "#00b4ff", emoji: "🧠" },
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
