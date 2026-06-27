"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

const categories = [
  { label: "Languages", color: "#39ff14", items: skills.languages, description: "Python, Java, JS/TS, Go" },
  { label: "Frameworks", color: "#cc00ff", items: skills.frameworks, description: "Backend-first, full-stack capable" },
  { label: "Databases", color: "#00b4ff", items: skills.databases, description: "Relational, document, in-memory" },
  { label: "DevOps & Infra", color: "#ffe000", items: skills.infrastructure, description: "Containers, messaging, distributed" },
  { label: "Cybersecurity", color: "#ff0077", items: skills.cybersecurity, description: "Offensive mindset, defensive build" },
  { label: "CS Fundamentals", color: "#e040fb", items: skills.cs, description: "Core theory, not just frameworks" },
];

const PROFICIENCY: Record<string, number> = {
  Python: 88, Java: 90, JavaScript: 82, TypeScript: 68, SQL: 80, Bash: 75, Go: 40,
  "Spring Boot": 88, Flask: 75, "Node.js": 78, React: 72, "Next.js": 70,
  PostgreSQL: 82, MongoDB: 76, Redis: 72,
  Docker: 78, Kafka: 82, Linux: 82, Git: 85,
};

function SkillBar({ name, color }: { name: string; color: string }) {
  const pct = PROFICIENCY[name];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  if (!pct) return null;
  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-xs">
        <span style={{ color: "#cbd5e1" }}>{name}</span>
        <span style={{ color: "#64748b" }}>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}70, ${color})`, boxShadow: `0 0 8px ${color}60` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="skills" className="section" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Centered section label */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest uppercase neon-green">// 02 · SKILLS · INTERDIMENSIONAL TECH</span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(57,255,20,0.5))" }} />
            <span style={{ color: "#39ff14", textShadow: "0 0 10px rgba(57,255,20,0.5)" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(57,255,20,0.5))" }} />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="text-center mb-12">
          <h2 className="text-4xl font-black text-white mb-3">🛸 Interdimensional Tech Arsenal</h2>
          <p className="max-w-xl mx-auto" style={{ color: "#94a3b8" }}>A deliberately chosen toolkit. Each layer picked for production viability across dimensions.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              className="p-6 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(10,3,30,0.92)", border: `1px solid ${cat.color}30` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}60`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cat.color}20, 0 8px 40px rgba(0,0,0,0.4)`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}30`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-white text-sm">{cat.label}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold"
                  style={{ background: `${cat.color}18`, color: cat.color, border: `1px solid ${cat.color}40` }}>
                  {cat.items.length}
                </span>
              </div>
              <p className="text-xs mb-5" style={{ color: "#64748b" }}>{cat.description}</p>
              <div className="space-y-2.5 mb-5">
                {cat.items.slice(0, 4).map((item) => PROFICIENCY[item] ? <SkillBar key={item} name={item} color={cat.color} /> : null)}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-lg font-mono"
                    style={{ background: `${cat.color}10`, color: cat.color, border: `1px solid ${cat.color}25` }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
