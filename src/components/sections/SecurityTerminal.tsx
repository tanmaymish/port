"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LINES = [
  { delay: 0, prefix: "$", text: "whoami", color: "#39ff14" },
  { delay: 600, prefix: ">", text: "tanmay_mishra  [software_engineer | security_researcher]", color: "#94a3b8" },
  { delay: 1200, prefix: "$", text: "cat skills.txt | grep -i security", color: "#39ff14" },
  { delay: 1800, prefix: ">", text: "OWASP · Burp Suite · Network Security · Recon · Bug Bounty · DDoS Defense · Cloud Security", color: "#8b30ff" },
  { delay: 2400, prefix: "$", text: "ping distributed-systems.io", color: "#39ff14" },
  { delay: 3000, prefix: ">", text: "PING distributed-systems.io: 56 bytes", color: "#94a3b8" },
  { delay: 3200, prefix: ">", text: "64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=2.1 ms", color: "#39ff14" },
  { delay: 3400, prefix: ">", text: "64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=1.8 ms", color: "#39ff14" },
  { delay: 3600, prefix: ">", text: "Round-trip min/avg/max = 1.8/1.95/2.1 ms  ✓ All nodes reachable", color: "#39ff14" },
  { delay: 4200, prefix: "$", text: "docker ps --format 'table {{.Names}}\\t{{.Status}}'", color: "#39ff14" },
  { delay: 4800, prefix: ">", text: "doms-order-service     Up 47 days   HEALTHY", color: "#94a3b8" },
  { delay: 5000, prefix: ">", text: "kafka-broker-1         Up 47 days   HEALTHY", color: "#94a3b8" },
  { delay: 5200, prefix: ">", text: "postgres-primary       Up 47 days   HEALTHY", color: "#94a3b8" },
  { delay: 5800, prefix: "$", text: "nmap -sV --open target.example.com -p 1-1000", color: "#39ff14" },
  { delay: 6400, prefix: ">", text: "Starting Nmap 7.94 scan...", color: "#94a3b8" },
  { delay: 6600, prefix: ">", text: "22/tcp  open  ssh     OpenSSH 8.9", color: "#ffb800" },
  { delay: 6800, prefix: ">", text: "80/tcp  open  http    nginx 1.24.0", color: "#ffb800" },
  { delay: 7000, prefix: ">", text: "443/tcp open  https   nginx 1.24.0  [TLS 1.3]", color: "#39ff14" },
  { delay: 7600, prefix: "$", text: "█", color: "#39ff14" },
];

export default function SecurityTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    LINES.forEach((line, i) => {
      setTimeout(() => setVisibleCount(i + 1), line.delay);
    });
  }, [inView]);

  return (
    <section className="relative py-16" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-2xl  overflow-hidden"
          style={{ boxShadow: "0 0 60px rgba(0,255,136,0.06)" }}
        >
          {/* Terminal titlebar */}
          <div className="flex items-center gap-2 px-5 py-3.5 border-b">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <span className="ml-3 text-xs text-slate-600 font-mono">tanmay@engineering ~ zsh</span>
            <div className="flex-1" />
            <span className="text-xs text-slate-700 font-mono">Security · Systems</span>
          </div>

          {/* Terminal body */}
          <div className="p-6 font-mono text-sm leading-6 min-h-[320px]">
            {LINES.slice(0, visibleCount).map((line, i) => (
              <div key={i} className="flex gap-3">
                <span
                  className="flex-shrink-0 select-none"
                  style={{ color: line.prefix === "$" ? "#3b82f6" : "#475569" }}
                >
                  {line.prefix}
                </span>
                <span style={{ color: line.color }}>
                  {i === visibleCount - 1 && line.text === "█" ? (
                    <span className="animate-blink">█</span>
                  ) : (
                    line.text
                  )}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
