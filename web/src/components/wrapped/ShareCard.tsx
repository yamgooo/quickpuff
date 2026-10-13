import { useRef } from "react";

export function ShareCard() {
  const ref = useRef<HTMLDivElement>(null);

  const downloadPng = async () => {
    if (!ref.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1600;
    canvas.height = 900;
    const context = canvas.getContext("2d");
    if (!context) return;
    const gradient = context.createLinearGradient(0, 0, 1600, 900);
    gradient.addColorStop(0, "#1a0f18");
    gradient.addColorStop(1, "#40255e");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1600, 900);
    context.fillStyle = "#fff";
    context.font = "bold 82px Rajdhani";
    context.fillText("QUICKPUFF WRAPPED", 90, 150);
    context.font = "56px Rajdhani";
    context.fillText("NIGHT ALCHEMIST", 90, 250);
    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `quickpuff-wrapped-${Date.now()}.png`;
    link.href = url;
    link.click();
  };

  return (
    <div className="grid gap-3">
      <div ref={ref} className="rounded-3xl border border-white/20 bg-gradient-to-br from-fuchsia-700/25 to-blue-700/20 p-8">
        <h3 className="text-sm tracking-[0.2em] text-white/70">QUICKPUFF WRAPPED</h3>
        <p className="mt-2 text-4xl font-bold text-white">NIGHT ALCHEMIST</p>
      </div>
      <button type="button" onClick={() => void downloadPng()} className="rounded-xl bg-fuchsia-500 px-4 py-2 text-sm font-semibold text-white">
        Download Share Card PNG
      </button>
    </div>
  );
}
