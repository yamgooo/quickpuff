import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { HeatPoint } from "../../types/stats";
import { GlassCard } from "../common/GlassCard";

export function HeatGraphCard({ points }: { points: HeatPoint[] }) {
  return (
    <GlassCard>
      <h3 className="mb-3 text-lg font-semibold">Heat Graph</h3>
      <div className="h-64">
        <ResponsiveContainer>
          <LineChart data={points}>
            <XAxis dataKey="second" stroke="#b7b7bf" />
            <YAxis stroke="#b7b7bf" />
            <Tooltip />
            <Line dataKey="tempF" stroke="#ff4fa3" strokeWidth={3} dot={false} />
            <Line dataKey="targetF" stroke="#3b9eff" strokeWidth={2} strokeDasharray="6 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
