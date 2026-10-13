import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { HeatControls } from "../components/control/HeatControls";
import { HeatGraphCard } from "../components/control/HeatGraphCard";
import { ProfileCard } from "../components/control/ProfileCard";
import { GlassCard } from "../components/common/GlassCard";
import { ProgressRing } from "../components/common/ProgressRing";
import { useCountdown } from "../hooks/useCountdown";
import { statsApi } from "../services/api/statsApi";
import { useDeviceStore } from "../stores/useDeviceStore";
import { useProfileStore } from "../stores/useProfileStore";
import { useSessionStore } from "../stores/useSessionStore";
import { formatDuration } from "../utils/format";

export function ControlPage() {
  const device = useDeviceStore((state) => state.device);
  const profiles = useProfileStore((state) => state.profiles);
  const secondsLeft = useSessionStore((state) => state.sessionSecondsLeft);
  useCountdown(device.state === "preheat" || device.state === "session");

  const { data: points = [] } = useQuery({ queryKey: ["heat-trace"], queryFn: statsApi.getHeatTrace, retry: false });

  return (
    <div className="grid gap-4 xl:grid-cols-[1fr_420px]">
      <div className="grid gap-4">
        <HeatControls />
        <HeatGraphCard points={points} />
        <div className="grid gap-3 md:grid-cols-2">
          {profiles.map((profile) => <ProfileCard key={profile.id} profile={profile} active={profile.id === device.profileId} />)}
        </div>
      </div>
      <GlassCard className="grid place-items-center">
        <div className="relative grid place-items-center">
          <ProgressRing progress={device.preheatProgress || 0} />
          <motion.div className="absolute text-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
            <p className="text-xs tracking-[0.2em] text-white/60">COUNTDOWN</p>
            <p className="text-5xl font-bold text-white">{formatDuration(secondsLeft)}</p>
          </motion.div>
        </div>
      </GlassCard>
    </div>
  );
}
