import { OverlayPortal } from "../common/OverlayPortal";

export function WrappedOverlay({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <OverlayPortal>
      <div className="absolute inset-0 grid place-items-center pointer-events-none bg-black/35">
        <div className="rounded-2xl border border-white/20 bg-[#131520]/85 px-8 py-6 text-white backdrop-blur-lg">
          QUICKPUFF WRAPPED LIVE OVERLAY
        </div>
      </div>
    </OverlayPortal>
  );
}
