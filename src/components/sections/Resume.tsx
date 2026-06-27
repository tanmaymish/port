"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FileText, Download, ExternalLink, GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

const RESUME_URL = "/port/tanmay-mishra-resume.pdf";

const highlights = [
  { icon: Briefcase, label: "L&T Graduate Engineer Trainee", sub: "Offer secured · 2026" },
  { icon: GraduationCap, label: "B.Tech CSE — KIIT", sub: "2022–2026 · GPA 7.52" },
  { icon: Award, label: "SIH 2024 Finalist", sub: "Top 30 @ KIIT (2023, 2024)" },
  { icon: Code2, label: "200+ DSA Problems", sub: "Arrays, graphs, DP · LeetCode" },
];

export default function Resume() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="resume" className="section relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Centered label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest uppercase" style={{ color: "#34e89e", textShadow: "0 0 14px rgba(52,232,158,0.35)" }}>
            // RÉSUMÉ
          </span>
          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(52,232,158,0.5))" }} />
            <span style={{ color: "#34e89e" }}>◈</span>
            <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(52,232,158,0.5))" }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-3">The Full Picture</h2>
          <p className="max-w-xl mx-auto" style={{ color: "#94a3b8" }}>
            Backend-focused software developer building scalable APIs, microservices, and
            distributed systems. Here&apos;s the one-page version — view it inline or take a copy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Highlights + actions */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(52,232,158,0.1)", border: "1px solid rgba(52,232,158,0.25)" }}
                  >
                    <Icon size={17} style={{ color: "#34e89e" }} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{h.label}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{h.sub}</div>
                  </div>
                </div>
              );
            })}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm"
                style={{ background: "rgba(52,232,158,0.12)", border: "1px solid rgba(52,232,158,0.4)", color: "#5eead4" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(52,232,158,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(52,232,158,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <ExternalLink size={15} />
                Open Full Page
              </a>
              <a
                href={RESUME_URL}
                download="Tanmay-Mishra-Resume.pdf"
                className="btn-glass inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", color: "#e2e8f0" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <Download size={15} />
                Download PDF
              </a>
            </div>
          </motion.div>

          {/* Embedded PDF preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.02)" }}
            >
              {/* Faux window bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-3 inline-flex items-center gap-1.5 text-xs font-mono" style={{ color: "#64748b" }}>
                  <FileText size={12} />
                  tanmay-mishra-resume.pdf
                </span>
              </div>
              <iframe
                src={`${RESUME_URL}#view=FitH&toolbar=0`}
                title="Tanmay Mishra Résumé"
                className="w-full"
                style={{ height: 560, border: "none", background: "#fff" }}
              />
            </div>
            <p className="text-center text-xs mt-3" style={{ color: "#475569" }}>
              Preview not loading?{" "}
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" style={{ color: "#34e89e" }}>
                Open it in a new tab
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
