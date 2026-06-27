"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink, Link2, Zap } from "lucide-react";
import { personal } from "@/data/portfolio";

const ROLES = personal.roles;

function PortalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = Math.min(55, Math.floor((width * height) / 18000));
    const MAX_DIST = 180;

    type Node = { x: number; y: number; vx: number; vy: number; r: number; pulse: number; pulseSpeed: number; color: number };

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.5 + 0.8,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.01 + Math.random() * 0.02,
      color: Math.random() > 0.6 ? 1 : Math.random() > 0.5 ? 2 : 0,
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    window.addEventListener("mousemove", handleMouse, { passive: true });

    const COLORS = ["0,255,136", "139,48,255", "0,212,255"];

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        n.pulse += n.pulseSpeed;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0,255,136,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        const mdx = nodes[i].x - mouseX;
        const mdy = nodes[i].y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MAX_DIST * 1.5) {
          const alpha = (1 - mdist / (MAX_DIST * 1.5)) * 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(139,48,255,${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const glow = Math.sin(n.pulse) * 0.3 + 0.7;
        const c = COLORS[n.color];
        const gradient = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 4);
        gradient.addColorStop(0, `rgba(${c},${0.6 * glow})`);
        gradient.addColorStop(1, "transparent");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c},${0.9 * glow})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" aria-hidden="true" />;
}

function TypedRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="h-12 flex items-center justify-center">
      <span className="text-2xl md:text-3xl font-light tracking-wide" style={{ color: "#00ff88" }}>
        {displayed}
        <span className="animate-blink ml-0.5" style={{ color: "#00d4ff" }}>|</span>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
      <PortalCanvas />

      {/* Portal glow center */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,136,0.04) 0%, rgba(139,48,255,0.03) 50%, transparent 70%)",
      }} />
      <div className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #030008, transparent)" }} />
      <div className="absolute top-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #030008, transparent)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-10"
          style={{ border: "1px solid rgba(0,255,136,0.2)", color: "#94a3b8" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00ff88" }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00ff88" }} />
          </span>
          <Zap size={12} style={{ color: "#00ff88" }} />
          Open to opportunities · India
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-4 leading-none"
        >
          <span className="block text-white">Tanmay</span>
          <span className="block" style={{
            background: "linear-gradient(135deg, #00ff88 0%, #00d4ff 50%, #8b30ff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Mishra
          </span>
        </motion.h1>

        {/* Typed role */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="mb-8">
          <TypedRole />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.6 }}
          className="max-w-2xl mx-auto text-lg leading-relaxed mb-12" style={{ color: "#94a3b8" }}
        >
          Building systems that scale under pressure. Distributed architectures, backend
          engineering, and cybersecurity — from design to deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #00c864, #00ff88)",
              color: "#030008",
              boxShadow: "0 0 30px rgba(0,255,136,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(0,255,136,0.5), inset 0 1px 0 rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,255,136,0.35), inset 0 1px 0 rgba(255,255,255,0.15)"; }}
          >
            <span>View Projects</span>
            <ExternalLink size={15} />
          </a>

          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 glass"
            style={{ border: "1px solid rgba(0,255,136,0.15)", color: "#94a3b8" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00ff88"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.35)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.15)"; }}
          >
            <Mail size={15} />
            Get in Touch
          </a>

          <a
            href={`https://github.com/${personal.social.github}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm transition-all duration-200 glass"
            style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#64748b" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00ff88"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.2)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#64748b"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            aria-label="GitHub profile"
          >
            <Link2 size={16} />
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: "4+", label: "Production Projects" },
            { value: "1K+", label: "Events/sec Processed" },
            { value: "200+", label: "LeetCode Problems" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: "#00ff88" }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wider" style={{ color: "#475569" }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "#2d4a3e" }}>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
