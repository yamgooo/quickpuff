import { GlassCard } from "../common/GlassCard";

export function CyclePanel() {
  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Cycles</h3>
      <div className="grid grid-cols-2 gap-2 text-sm text-white/80 md:grid-cols-4">
        {["Fade", "Spin", "Breathe", "Disco", "Split", "Fill", "Lava", "Confetti"].map((style) => (
          <button key={style} className="rounded-lg border border-white/15 bg-white/5 p-2 hover:bg-white/10" type="button">{style}</button>
        ))}
      </div>
    </GlassCard>
  );
}
