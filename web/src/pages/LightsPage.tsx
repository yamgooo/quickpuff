import { CyclePanel } from "../components/lights/CyclePanel";
import { ColorPalettePanel } from "../components/lights/ColorPalettePanel";
import { LightsControlPanel } from "../components/lights/LightsControlPanel";

export function LightsPage() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 lg:grid-cols-2">
        <LightsControlPanel />
        <ColorPalettePanel />
      </div>
      <CyclePanel />
    </div>
  );
}
