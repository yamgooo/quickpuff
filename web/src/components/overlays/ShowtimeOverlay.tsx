import { motion } from "framer-motion";
import { OverlayPortal } from "../common/OverlayPortal";

export function ShowtimeOverlay({ open, mode }: { open: boolean; mode: "off" | "corner" | "stage" }) {
  if (!open || mode === "off") return null;

  return (
    <OverlayPortal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className={`absolute ${mode === "stage" ? "inset-0" : "right-6 top-6 w-[380px]"} rounded-2xl border border-fuchsia-300/30 bg-black/45 p-6 backdrop-blur-md`}>
          <p className="text-sm tracking-[0.2em] text-fuchsia-200">SHOWTIME</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">Session in progress</h3>
          <p className="text-white/75">Glow, particles, countdown and ready-state transitions live here.</p>
        </div>
      </motion.div>
    </OverlayPortal>
  );
}
