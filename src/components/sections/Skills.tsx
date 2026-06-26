"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

type SkillCategory = {
  label: string;
  color: string;
  bgColor: string;
  items: string[];
  description: string;
};

const categories: SkillCategory[] = [
  {
    label: "Languages",
    color: "#60a5fa",
    bgColor: "rgba(59,130,246,0.08)",
    items: skills.languages,
    description: "Primary: Python, Java, JS/TS · Learning: Go",
  },
  {
    label: "Frameworks & Runtimes",
    color: "#a78bfa",
    bgColor: "rgba(139,92,246,0.08)",
    items: skills.frameworks,
    description: "Backend-first, full-stack capable",
  },
  {
    label: "Databases & Storage",
    color: "#34d399",
    bgColor: "rgba(16,185,129,0.08)",
    items: skills.databases,
    description: "Relational, document, and in-memory",
  },
  {
    label: "Infrastructure & DevOps",
    color: "#38bdf8",
    bgColor: "rgba(6,182,212,0.08)",
    items: skills.infrastructure,
    description: "Containerization, messaging, distributed systems",
  },
  {
    label: "Cybersecurity",
    color: "#fb923c",
    bgColor: "rgba(251,146,60,0.08)",
    items: skills.cybersecurity,
    description: "Offensive mindset, defensive implementation",
  },
  {
    label: "Computer Science",
    color: "#f472b6",
    bgColor: "rgba(244,114,182,0.08)",
    items: skills.cs,
    description: "Core fundamentals, not just frameworks",
  },
];

const PROFICIENCY: Record<string, number> = {
  Python: 88, Java: 85, JavaScript: 82, TypeScript: 78, SQL: 80, Bash: 75, Go: 40,
  "Spring Boot": 85, Flask: 75, "Node.js": 78, React: 72, "Next.js": 70,
  PostgreSQL: 82, MongoDB: 76, Redis: 72,
  Docker: 78, Kafka: 80, Linux: 82, Git: 85,
};

function SkillBar({ name, color }: { name: string; color: string }) {
  const pct = PROFICIENCY[name];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  if (!pct) return null;
  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-xs text-slate-500">
        <span className="text-slate-400">{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section relative" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-semibold text-blue-400 tracking-widest uppercase">
            02 / Skills
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">Engineering Stack</h2>
          <p className="text-slate-400 max-w-xl">
            A deliberately chosen toolkit — each layer chosen for production viability, not
            trend-chasing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              className="group p-6 glass rounded-2xl border border-white/08 hover:border-white/15 transition-all duration-300"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cat.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-slate-200 text-sm">{cat.label}</h3>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-mono"
                  style={{ background: cat.bgColor, color: cat.color }}
                >
                  {cat.items.length}
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-5">{cat.description}</p>

              {/* Proficiency bars for key skills */}
              <div className="space-y-2.5 mb-5">
                {cat.items.slice(0, 4).map((item) =>
                  PROFICIENCY[item] ? (
                    <SkillBar key={item} name={item} color={cat.color} />
                  ) : null
                )}
              </div>

              {/* All tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-lg font-mono transition-all duration-200"
                    style={{
                      background: cat.bgColor,
                      color: cat.color,
                      border: `1px solid ${cat.color}20`,
                    }}
                  >
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
