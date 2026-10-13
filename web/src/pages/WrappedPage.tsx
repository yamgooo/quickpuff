import { useState } from "react";
import { ShareCard } from "../components/wrapped/ShareCard";
import { WrappedSlides } from "../components/wrapped/WrappedSlides";

export function WrappedPage() {
  const [index, setIndex] = useState(0);

  return (
    <div className="grid gap-4">
      <WrappedSlides index={index} />
      <div className="flex gap-2">
        <button type="button" className="rounded-lg border border-white/20 px-3 py-2 text-white" onClick={() => setIndex((s) => Math.max(0, s - 1))}>Prev</button>
        <button type="button" className="rounded-lg border border-white/20 px-3 py-2 text-white" onClick={() => setIndex((s) => Math.min(5, s + 1))}>Next</button>
      </div>
      <ShareCard />
    </div>
  );
}
