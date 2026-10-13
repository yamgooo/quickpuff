import type { ReactNode } from "react";

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`rounded-2xl border border-white/15 bg-white/5 p-4 shadow-[0_16px_40px_rgba(0,0,0,0.35)] backdrop-blur-md ${className}`}>
      {children}
    </section>
  );
}
