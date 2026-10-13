import { useProfileStore } from "../../stores/useProfileStore";
import { GlassCard } from "../common/GlassCard";

const palette = ["#ff4fa3", "#3b9eff", "#3dd68c", "#ff4d4d", "#a855f7", "#f6d32d", "#ffffff", "#ff6a1a"];

export function ColorPalettePanel() {
  const profiles = useProfileStore((state) => state.profiles);
  const updateProfile = useProfileStore((state) => state.updateProfile);
  const active = profiles[0];

  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Palette</h3>
      <div className="grid grid-cols-8 gap-2">
        {palette.map((color) => (
          <button key={color} onClick={() => active && updateProfile(active.id, { color })} type="button" className="h-9 rounded-full border border-white/25" style={{ background: color }} />
        ))}
      </div>
    </GlassCard>
  );
}
