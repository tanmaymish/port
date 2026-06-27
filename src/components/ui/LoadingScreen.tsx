"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Skip loading on repeat visits using sessionStorage
    if (sessionStorage.getItem("loaded")) {
      setDone(true);
      return;
    }

    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("loaded", "1");
        }, 300);
      }
      setProgress(Math.min(p, 100));
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0c]"
        >
          {/* Zen Rick */}
          <motion.img
            src="/port/rick-zen.gif"
            alt=""
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 rounded-2xl"
            style={{
              width: 220,
              border: "1px solid rgba(52,232,158,0.25)",
              boxShadow: "0 0 40px rgba(52,232,158,0.15)",
            }}
          />

          {/* Logo / name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-center"
          >
            <div className="font-mono text-2xl font-bold text-white mb-1">
              <span style={{ color: "#34e89e" }}>@</span>tanmay
            </div>
            <div className="text-xs text-slate-600 tracking-widest uppercase font-mono">
              Entering the portal
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #34e89e, #5eead4)",
                width: `${progress}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-mono text-xs text-slate-700"
          >
            {Math.round(progress)}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
