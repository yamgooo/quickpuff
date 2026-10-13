import { motion } from "framer-motion";

export function ProgressRing({ progress, size = 180 }: { progress: number; size?: number }) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="transparent" stroke="rgba(255,255,255,0.1)" strokeWidth={8} />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="url(#ringGradient)"
        strokeWidth={8}
        strokeLinecap="round"
        initial={false}
        animate={{ strokeDashoffset: circumference * (1 - progress) }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        strokeDasharray={circumference}
      />
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff4fa3" />
          <stop offset="100%" stopColor="#3b9eff" />
        </linearGradient>
      </defs>
    </svg>
  );
}
