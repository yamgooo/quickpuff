import { motion } from "framer-motion";
import type { Profile } from "../../types/device";
import { formatDuration } from "../../utils/format";

export function ProfileCard({ profile, active }: { profile: Profile; active: boolean }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      className={`rounded-2xl border p-4 ${active ? "border-fuchsia-400 bg-fuchsia-500/15" : "border-white/10 bg-white/5"}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{profile.name}</h3>
        <span className="h-3 w-3 rounded-full" style={{ background: profile.color }} />
      </div>
      <dl className="grid grid-cols-2 gap-2 text-sm text-white/80">
        <div><dt className="text-white/50">Temp</dt><dd>{profile.temperatureF}°F</dd></div>
        <div><dt className="text-white/50">Duration</dt><dd>{formatDuration(profile.durationSec)}</dd></div>
        <div><dt className="text-white/50">Boost Temp</dt><dd>+{profile.boostTempF}°F</dd></div>
        <div><dt className="text-white/50">Boost Time</dt><dd>+{profile.boostTimeSec}s</dd></div>
        <div><dt className="text-white/50">Vapor</dt><dd className="capitalize">{profile.vaporLevel}</dd></div>
      </dl>
    </motion.article>
  );
}
