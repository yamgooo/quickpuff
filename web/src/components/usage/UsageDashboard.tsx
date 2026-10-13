import { useStatsStore } from "../../stores/useStatsStore";
import { StatCard } from "../common/StatCard";

export function UsageDashboard() {
  const usage = useStatsStore((state) => state.usage);

  return (
    <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
      <StatCard label="Today" value={usage.today} />
      <StatCard label="Week" value={usage.week} accent="#3b9eff" />
      <StatCard label="Month" value={usage.month} accent="#3dd68c" />
      <StatCard label="Lifetime" value={usage.lifetime} accent="#a855f7" />
      <StatCard label="Avg Temp" value={`${usage.averageTempF}°F`} accent="#ff9f43" />
      <StatCard label="Streak" value={`${usage.streakDays}d`} accent="#ff4d4d" />
    </div>
  );
}
