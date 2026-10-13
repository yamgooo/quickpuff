import { OverlayPortal } from "../common/OverlayPortal";

export function ReadyOverlay({ open, variant }: { open: boolean; variant: string }) {
  if (!open) return null;
  return (
    <OverlayPortal>
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="rounded-3xl border border-white/20 bg-black/45 px-10 py-6 text-center backdrop-blur-md">
          <p className="text-xs tracking-[0.25em] text-white/60">READY MOMENT</p>
          <h2 className="text-5xl font-bold text-white">{variant.toUpperCase()}</h2>
        </div>
      </div>
    </OverlayPortal>
  );
}
