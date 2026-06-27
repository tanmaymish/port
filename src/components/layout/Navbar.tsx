"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActiveSection(id); break; }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4"
      >
        <nav
          className={`w-full max-w-5xl transition-all duration-500 rounded-2xl ${
            scrolled ? "glass-strong" : "bg-transparent border-transparent"
          }`}
          style={{
            border: scrolled ? "1px solid rgba(0,255,136,0.12)" : "none",
            boxShadow: scrolled ? "0 4px 40px rgba(0,255,136,0.05)" : "none",
          }}
        >
          <div className="flex items-center justify-between px-6 py-3">
            <a href="#hero" className="font-mono text-sm font-bold tracking-tight transition-colors"
              style={{ color: "#e2e8f0" }}>
              <span style={{ color: "#00ff88" }}>@</span>tanmay
            </a>

            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium transition-colors rounded-lg"
                    style={{
                      color: activeSection === link.href.slice(1) ? "#00ff88" : "#94a3b8",
                    }}
                    onMouseEnter={(e) => { if (activeSection !== link.href.slice(1)) (e.currentTarget as HTMLElement).style.color = "#e2e8f0"; }}
                    onMouseLeave={(e) => { if (activeSection !== link.href.slice(1)) (e.currentTarget as HTMLElement).style.color = "#94a3b8"; }}
                  >
                    {activeSection === link.href.slice(1) && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg"
                        style={{ background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.15)" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200"
                style={{
                  background: "rgba(0,255,136,0.1)",
                  border: "1px solid rgba(0,255,136,0.25)",
                  color: "#00ff88",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.18)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,255,136,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.1)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                Hire Me
              </a>
            </div>

            <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu">
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                  style={{ background: "#00ff88" }} />
                <span className={`block h-0.5 bg-slate-400 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
                  style={{ background: "#00ff88" }} />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-2xl p-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.href} href={link.href}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center px-4 py-3 text-sm rounded-xl transition-colors"
                style={{ color: "#94a3b8" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#00ff88"; (e.currentTarget as HTMLElement).style.background = "rgba(0,255,136,0.06)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#94a3b8"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="mt-2 pt-2" style={{ borderTop: "1px solid rgba(0,255,136,0.1)" }}>
              <a href={`mailto:${personal.email}`}
                className="flex items-center justify-center px-4 py-3 text-sm font-semibold rounded-xl transition-all"
                style={{ color: "#00ff88", background: "rgba(0,255,136,0.08)", border: "1px solid rgba(0,255,136,0.2)" }}
                onClick={() => setMenuOpen(false)}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
