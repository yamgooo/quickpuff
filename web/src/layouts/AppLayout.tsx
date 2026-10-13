import { motion } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDeviceState } from "../hooks/useDeviceState";
import { useProfiles } from "../hooks/useProfiles";
import { useUsageStats } from "../hooks/useUsageStats";
import { useWebSocketFeed } from "../hooks/useWebSocketFeed";
import { useDeviceStore } from "../stores/useDeviceStore";
import { SegmentedTabs } from "../components/common/SegmentedTabs";

const nav = [
  { value: "control", label: "Control" },
  { value: "lights", label: "Lights" },
  { value: "usage", label: "Usage" },
  { value: "care", label: "Care" },
  { value: "device", label: "Device" },
];

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const device = useDeviceStore((state) => state.device);

  useDeviceState();
  useProfiles();
  useUsageStats();
  useWebSocketFeed();

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1400px] flex-col gap-4 p-4 lg:p-6">
      <header className="rounded-3xl border border-white/15 bg-white/5 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}>
            <p className="text-xs tracking-[0.2em] text-white/65">QUICKPUFF DASHBOARD</p>
            <h1 className="text-3xl font-semibold text-white">{device.name}</h1>
            <p className="text-white/70">{device.connection.toUpperCase()} · {device.temperatureF}°F · {Math.round(device.preheatProgress * 100)}%</p>
          </motion.div>
          <div className="rounded-2xl border border-white/15 bg-black/25 px-4 py-2 text-right">
            <p className="text-xs text-white/60">Battery</p>
            <p className="text-2xl font-semibold text-white">{device.battery}%</p>
          </div>
        </div>
        <div className="mt-4">
          <SegmentedTabs value={location.pathname.replace("/", "") || "control"} options={nav} onChange={(value) => navigate(`/${value}`)} />
        </div>
      </header>
      <main className="pb-4"><Outlet /></main>
    </div>
  );
}
