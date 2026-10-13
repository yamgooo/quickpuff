import { useSettingsStore } from "../../stores/useSettingsStore";
import { GlassCard } from "../common/GlassCard";

export function LightsControlPanel() {
  const { lanternOn, stealthMode, brightness, setSetting } = useSettingsStore();
  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Lights</h3>
      <div className="grid gap-3">
        <label className="flex items-center justify-between"><span>Lantern</span><input type="checkbox" checked={lanternOn} onChange={(e) => setSetting("lanternOn", e.target.checked)} /></label>
        <label className="flex items-center justify-between"><span>Stealth Mode</span><input type="checkbox" checked={stealthMode} onChange={(e) => setSetting("stealthMode", e.target.checked)} /></label>
        <label className="grid gap-1"><span>Brightness</span><input type="range" min={0} max={100} value={brightness} onChange={(e) => setSetting("brightness", Number(e.target.value))} /></label>
      </div>
    </GlassCard>
  );
}
