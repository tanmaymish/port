"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight * 3; // tall enough for full page

    canvas.width = w;
    canvas.height = h;

    const resize = () => {
      w = window.innerWidth;
      h = Math.max(document.body.scrollHeight, window.innerHeight * 3);
      canvas.width = w;
      canvas.height = h;
    };
    window.addEventListener("resize", resize);
    setTimeout(resize, 1000);

    type Star = { x: number; y: number; r: number; opacity: number; speed: number; phase: number; color: string };

    const COLORS = ["#39ff14", "#cc00ff", "#00b4ff", "#ffe000", "#ff0077", "#ffffff"];

    const stars: Star[] = Array.from({ length: 280 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.8 + 0.1,
      speed: 0.003 + Math.random() * 0.008,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.7 ? COLORS[Math.floor(Math.random() * 5)] : "#ffffff",
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.016;
      for (const s of stars) {
        const glow = (Math.sin(t * s.speed * 60 + s.phase) + 1) / 2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r + glow * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = s.color === "#ffffff" ? `rgba(255,255,255,${s.opacity * (0.4 + glow * 0.6)})` : s.color + Math.floor((s.opacity * (0.3 + glow * 0.5)) * 255).toString(16).padStart(2, "0");
        ctx.fill();
        if (glow > 0.85 && s.r > 1) {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
          g.addColorStop(0, s.color + "40");
          g.addColorStop(1, "transparent");
          ctx.fillStyle = g;
          ctx.fill();
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full pointer-events-none"
      style={{ zIndex: 0, top: 0, left: 0, height: "100%" }}
      aria-hidden="true"
    />
  );
}
