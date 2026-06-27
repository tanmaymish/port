import Link from "next/link";

export const metadata = {
  title: "404 — Lost in another dimension",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* subtle accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(52,232,158,0.06), transparent 70%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/port/rick-facepalm.gif"
          alt="Rick facepalming"
          width={200}
          className="rounded-2xl mb-8"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
          }}
        />

        <h1 className="text-7xl md:text-8xl font-bold mb-3">
          <span className="grad-portal">404</span>
        </h1>

        <p className="text-lg font-medium text-white mb-2">
          This page exists in a different dimension.
        </p>
        <p className="max-w-md text-sm mb-8" style={{ color: "#94a3b8" }}>
          The link you followed is broken or the page was moved. Even Rick can&apos;t
          portal you to a page that doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="btn-glass inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm"
          style={{
            background: "rgba(52,232,158,0.12)",
            border: "1px solid rgba(52,232,158,0.4)",
            color: "#5eead4",
          }}
        >
          ← Take me home
        </Link>

        <p className="mt-10 font-mono text-[11px] tracking-wide" style={{ color: "#3a4a44" }}>
          <span style={{ color: "#34e89e", opacity: 0.5 }}>$</span> exit code 404 · dimension not found
        </p>
      </div>
    </main>
  );
}
