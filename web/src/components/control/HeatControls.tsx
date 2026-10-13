import { Flame, StopCircle, Zap } from "lucide-react";
import { deviceApi } from "../../services/api/deviceApi";

function ControlButton({ label, Icon, onClick, accent }: { label: string; Icon: typeof Flame; onClick: () => void; accent: string }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-white transition hover:scale-[1.02]"
      style={{ boxShadow: `0 0 24px ${accent}45` }}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}

export function HeatControls() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      <ControlButton label="Heat" Icon={Flame} onClick={() => void deviceApi.startHeat()} accent="#ff4fa3" />
      <ControlButton label="Stop" Icon={StopCircle} onClick={() => void deviceApi.stopHeat()} accent="#ff4d4d" />
      <ControlButton label="Boost" Icon={Zap} onClick={() => void deviceApi.boost()} accent="#3b9eff" />
    </div>
  );
}
