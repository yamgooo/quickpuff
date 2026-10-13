import { GlassCard } from "../common/GlassCard";

export function CarePanel() {
  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Care</h3>
      <div className="grid gap-2 text-sm text-white/75">
        <p>• Sesiones hasta limpieza: 4</p>
        <p>• Recordatorio Q-tip: activado</p>
        <p>• Salud batería: 92%</p>
        <button type="button" className="mt-2 rounded-xl border border-white/20 bg-white/6 px-3 py-2 hover:bg-white/10">Mark Cleaned</button>
      </div>
    </GlassCard>
  );
}
