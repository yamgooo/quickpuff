import { GlassCard } from "./GlassCard";

export function StatCard({ label, value, accent = "#ff4fa3" }: { label: string; value: string | number; accent?: string }) {
  return (
    <GlassCard className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1" style={{ background: accent }} />
      <p className="text-xs tracking-[0.18em] text-white/55">{label}</p>
      <p className="mt-1 text-3xl font-semibold text-white">{value}</p>
    </GlassCard>
  );
}
