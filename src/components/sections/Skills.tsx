"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from "@/data/portfolio";

type SkillCategory = { label: string; color: string; bgColor: string; items: string[]; description: string; };

const categories: SkillCategory[] = [
  { label: "Languages", color: "#00ff88", bgColor: "rgba(0,255,136,0.07)", items: skills.languages, description: "Primary: Python, Java, JS/TS · Learning: Go" },
  { label: "Frameworks & Runtimes", color: "#8b30ff", bgColor: "rgba(139,48,255,0.07)", items: skills.frameworks, description: "Backend-first, full-stack capable" },
  { label: "Databases & Storage", color: "#00d4ff", bgColor: "rgba(0,212,255,0.07)", items: skills.databases, description: "Relational, document, and in-memory" },
  { label: "Infrastructure & DevOps", color: "#ffb800", bgColor: "rgba(255,184,0,0.07)", items: skills.infrastructure, description: "Containerization, messaging, distributed systems" },
  { label: "Cybersecurity", color: "#ff6b35", bgColor: "rgba(255,107,53,0.07)", items: skills.cybersecurity, description: "Offensive mindset, defensive implementation" },
  { label: "Computer Science", color: "#e040fb", bgColor: "rgba(224,64,251,0.07)", items: skills.cs, description: "Core fundamentals, not just frameworks" },
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
      <div className="flex justify-between text-xs" style={{ color: "#64748b" }}>
        <span style={{ color: "#94a3b8" }}>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.04)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(139,48,255,0.03) 0%, transparent 60%)",
      }} />
      <div className="max-w-6xl mx-auto px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest uppercase" style={{ color: "#00ff88" }}>
            02 / Skills
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(0,255,136,0.3), transparent)" }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.7 }} className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-3">Engineering Stack</h2>
          <p className="max-w-xl" style={{ color: "#94a3b8" }}>
            A deliberately chosen toolkit — each layer chosen for production viability, not trend-chasing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={cat.label}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.6 }}
              className="group p-6 rounded-2xl transition-all duration-300"
              style={{ background: "rgba(8,2,20,0.85)", border: `1px solid ${cat.color}12` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${cat.color}10`;
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}25`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}12`;
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-semibold text-sm" style={{ color: "#e2e8f0" }}>{cat.label}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                  style={{ background: cat.bgColor, color: cat.color }}>
                  {cat.items.length}
                </span>
              </div>
              <p className="text-xs mb-5" style={{ color: "#64748b" }}>{cat.description}</p>
              <div className="space-y-2.5 mb-5">
                {cat.items.slice(0, 4).map((item) => PROFICIENCY[item] ? <SkillBar key={item} name={item} color={cat.color} /> : null)}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-lg font-mono transition-all duration-200"
                    style={{ background: cat.bgColor, color: cat.color, border: `1px solid ${cat.color}20` }}>
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
