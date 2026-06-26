"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Code2, Shield, Trophy } from "lucide-react";
import { timeline } from "@/data/portfolio";

const TYPE_CONFIG = {
  education: { icon: GraduationCap, color: "#60a5fa", label: "Education" },
  engineering: { icon: Code2, color: "#34d399", label: "Engineering" },
  security: { icon: Shield, color: "#a78bfa", label: "Security" },
  achievement: { icon: Trophy, color: "#fbbf24", label: "Achievement" },
};

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: (typeof timeline)[0];
  index: number;
  isLast: boolean;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const config = TYPE_CONFIG[item.type];
  const Icon = config.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6"
    >
      {/* Line */}
      {!isLast && (
        <div
          className="absolute left-5 top-12 w-px"
          style={{
            height: "calc(100% - 12px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          }}
        />
      )}

      {/* Icon */}
      <div className="flex-shrink-0 relative">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.2, type: "spring", bounce: 0.4 }}
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: `${config.color}12`,
            border: `1px solid ${config.color}25`,
          }}
        >
          <Icon size={16} style={{ color: config.color }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${config.color}12`, color: config.color }}
          >
            {item.year}
          </span>
          <span
            className="text-xs text-slate-600"
            style={{ color: `${config.color}60` }}
          >
            {config.label}
          </span>
        </div>
        <h3 className="font-semibold text-slate-200 mb-1.5">{item.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="timeline" className="section relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono font-semibold text-blue-400 tracking-widest uppercase">
            04 / Timeline
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-x-20 gap-y-0">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-3">Engineering Journey</h2>
              <p className="text-slate-400">
                A deliberate path through distributed systems, security, and backend
                engineering — each year building on the last.
              </p>
            </motion.div>

            {timeline.slice(0, Math.ceil(timeline.length / 2)).map((item, i) => (
              <TimelineItem key={item.year + item.title} item={item} index={i} isLast={false} />
            ))}
          </div>

          {/* Right column */}
          <div className="lg:pt-32">
            {timeline.slice(Math.ceil(timeline.length / 2)).map((item, i) => (
              <TimelineItem
                key={item.year + item.title}
                item={item}
                index={Math.ceil(timeline.length / 2) + i}
                isLast={i === timeline.slice(Math.ceil(timeline.length / 2)).length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
