import { useState } from "react";
import { ReadyOverlay } from "../components/overlays/ReadyOverlay";
import { ShowtimeOverlay } from "../components/overlays/ShowtimeOverlay";
import { WrappedOverlay } from "../components/overlays/WrappedOverlay";

export function ShowtimePage() {
  const [showReady, setShowReady] = useState(false);
  const [showSession, setShowSession] = useState(false);
  const [showWrapped, setShowWrapped] = useState(false);

  return (
    <div className="grid gap-4 rounded-2xl border border-white/15 bg-white/5 p-6">
      <h2 className="text-2xl font-semibold text-white">Showtime & Overlays</h2>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-lg bg-fuchsia-500 px-3 py-2 text-white" onClick={() => setShowReady((s) => !s)}>Toggle Ready</button>
        <button type="button" className="rounded-lg bg-sky-500 px-3 py-2 text-white" onClick={() => setShowSession((s) => !s)}>Toggle Session</button>
        <button type="button" className="rounded-lg bg-violet-500 px-3 py-2 text-white" onClick={() => setShowWrapped((s) => !s)}>Toggle Wrapped</button>
      </div>
      <ReadyOverlay open={showReady} variant="rocket" />
      <ShowtimeOverlay open={showSession} mode="stage" />
      <WrappedOverlay open={showWrapped} />
    </div>
  );
}
