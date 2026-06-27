"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Lock, Cloud, Wifi, Trophy, Code, Briefcase } from "lucide-react";
import { certifications, achievements } from "@/data/portfolio";

const CERT_ICONS: Record<string, React.ElementType> = {
  shield: Shield,
  lock: Lock,
  cloud: Cloud,
  network: Wifi,
};

const ACHIEVEMENT_ICONS: Record<string, React.ElementType> = {
  briefcase: Briefcase,
  trophy: Trophy,
  code: Code,
};

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="certifications" className="section relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: "#ff6600", textShadow: "0 0 10px rgba(255,102,0,0.5)" }}>
            // 05 · RECOGNITION · EARNED
          </span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(255,102,0,0.6))" }} />
            <span style={{ color: "#ff6600" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(255,102,0,0.6))" }} />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2 text-center">🏆 Certifications</h2>
              <p className="text-slate-500 text-sm text-center">Security-focused professional credentials</p>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, i) => {
                const Icon = CERT_ICONS[cert.icon] || Shield;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="group flex items-start gap-4 p-5 glass rounded-2xl border  hover:border-white/15 transition-all duration-300"
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${cert.color}12`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${cert.color}12`,
                        border: `1px solid ${cert.color}25`,
                      }}
                    >
                      <Icon size={17} style={{ color: cert.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors mb-0.5">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-1.5">{cert.issuer}</p>
                      <p className="text-sm text-slate-500">{cert.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-white mb-2 text-center">⚡ Achievements</h2>
              <p className="text-slate-500 text-sm text-center">Milestones that reflect engineering commitment</p>
            </motion.div>

            <div className="space-y-4">
              {achievements.map((ach, i) => {
                const Icon = ACHIEVEMENT_ICONS[ach.icon] || Trophy;
                return (
                  <motion.div
                    key={ach.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="group relative flex items-start gap-4 p-5 glass rounded-2xl border  hover:border-white/15 transition-all duration-300"
                  >
                    {ach.highlight && (
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(59,130,246,0.03), rgba(139,92,246,0.03))",
                        }}
                      />
                    )}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-amber-500/10 border border-amber-500/20">
                      <Icon size={17} className="text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-0.5">
                        <h3 className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                          {ach.title}
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">{ach.year}</span>
                      </div>
                      <p className="text-xs text-slate-500 mb-1.5">{ach.org}</p>
                      <p className="text-sm text-slate-500">{ach.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
