import { useDeviceStore } from "../../stores/useDeviceStore";
import { GlassCard } from "../common/GlassCard";

export function DevicePanel() {
  const device = useDeviceStore((state) => state.device);
  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Device</h3>
      <dl className="grid gap-2 text-sm text-white/80">
        <div className="flex justify-between"><dt>Name</dt><dd>{device.name}</dd></div>
        <div className="flex justify-between"><dt>Status</dt><dd>{device.connection}</dd></div>
        <div className="flex justify-between"><dt>Battery</dt><dd>{device.battery}%</dd></div>
        <div className="flex justify-between"><dt>Profile</dt><dd>{device.profileId}</dd></div>
      </dl>
    </GlassCard>
  );
}
