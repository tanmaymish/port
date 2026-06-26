"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, Hash, User, Code2, Mail, Link2 } from "lucide-react";

type Command = {
  id: string;
  label: string;
  description?: string;
  icon: React.ElementType;
  action: () => void;
  category: string;
};

const COMMANDS: Command[] = [
  {
    id: "about",
    label: "Go to About",
    description: "Learn about Tanmay",
    icon: User,
    action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    category: "Navigation",
  },
  {
    id: "skills",
    label: "View Skills",
    description: "Engineering stack and expertise",
    icon: Hash,
    action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }),
    category: "Navigation",
  },
  {
    id: "projects",
    label: "View Projects",
    description: "Production systems and engineering work",
    icon: Code2,
    action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    category: "Navigation",
  },
  {
    id: "contact",
    label: "Get in Touch",
    description: "Send an email",
    icon: Mail,
    action: () => window.open("mailto:tanmaymish78@gmail.com"),
    category: "Actions",
  },
  {
    id: "github",
    label: "Open GitHub",
    description: "View repositories",
    icon: Link2,
    action: () => window.open("https://github.com/tanmaymish", "_blank"),
    category: "Actions",
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const filtered = query
    ? COMMANDS.filter(
        (c) =>
          c.label.toLowerCase().includes(query.toLowerCase()) ||
          c.description?.toLowerCase().includes(query.toLowerCase())
      )
    : COMMANDS;

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  const execute = useCallback(
    (cmd: Command) => {
      close();
      cmd.action();
    },
    [close]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") close();
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && filtered[selected]) {
        execute(filtered[selected]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, filtered, selected, close, execute]);

  return (
    <>
      {/* Trigger hint */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-3 py-2 glass-strong rounded-xl border border-white/12 text-xs text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Open command palette"
      >
        <Search size={12} />
        <span className="hidden sm:block">Search</span>
        <span className="hidden sm:flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 bg-white/05 rounded text-[10px] font-mono">⌘</kbd>
          <kbd className="px-1.5 py-0.5 bg-white/05 rounded text-[10px] font-mono">K</kbd>
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={close}
            />

            {/* Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[20%] left-1/2 -translate-x-1/2 z-50 w-full max-w-lg mx-4"
            >
              <div className="glass-strong rounded-2xl border border-white/15 overflow-hidden shadow-2xl shadow-black/50">
                {/* Search input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/08">
                  <Search size={16} className="text-slate-500 flex-shrink-0" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search commands..."
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setSelected(0);
                    }}
                    className="flex-1 bg-transparent text-slate-200 placeholder-slate-600 text-sm outline-none"
                  />
                  <kbd className="text-xs text-slate-600 font-mono">ESC</kbd>
                </div>

                {/* Commands */}
                <div className="py-2 max-h-72 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="px-4 py-6 text-center text-sm text-slate-600">
                      No commands found
                    </div>
                  ) : (
                    filtered.map((cmd, i) => {
                      const Icon = cmd.icon;
                      return (
                        <button
                          key={cmd.id}
                          onClick={() => execute(cmd)}
                          onMouseEnter={() => setSelected(i)}
                          className={`w-full flex items-center gap-3 px-4 py-3 transition-colors text-left ${
                            selected === i ? "bg-white/06" : "hover:bg-white/03"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                              selected === i
                                ? "bg-blue-500/15 text-blue-400"
                                : "bg-white/05 text-slate-500"
                            }`}
                          >
                            <Icon size={14} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-slate-300">{cmd.label}</div>
                            {cmd.description && (
                              <div className="text-xs text-slate-600 truncate">{cmd.description}</div>
                            )}
                          </div>
                          {selected === i && <ArrowRight size={14} className="text-blue-400 flex-shrink-0" />}
                        </button>
                      );
                    })
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
