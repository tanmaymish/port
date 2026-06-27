"use client";

import { useEffect, useRef } from "react";

const COLORS = [
  "#ff0077", "#ff00cc", "#9900ff", "#0099ff", "#00eeff",
  "#39ff14", "#ffcc00", "#ff6600", "#ffffff", "#cc00ff",
];

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = window.innerWidth;
    const H = Math.max(document.body.scrollHeight, window.innerHeight * 4);
    canvas.width = W;
    canvas.height = H;

    const stars = Array.from({ length: 320 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speed: Math.random() * 0.012 + 0.003,
      phase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;
    let animId: number;

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = frame * 0.015;
      for (const s of stars) {
        const opacity = 0.25 + 0.75 * Math.abs(Math.sin(t * s.speed * 60 + s.phase));
        ctx.globalAlpha = opacity;
        ctx.fillStyle = s.color;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = s.r > 1.3 ? 8 : 0;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
      frame++;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
