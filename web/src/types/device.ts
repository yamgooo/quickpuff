export type DeviceConnection = "online" | "offline" | "connecting";

export interface Profile {
  id: string;
  name: string;
  temperatureF: number;
  durationSec: number;
  boostTempF: number;
  boostTimeSec: number;
  vaporLevel: "smooth" | "bold" | "intense" | "extreme";
  color: string;
}

export interface DeviceState {
  name: string;
  connection: DeviceConnection;
  battery: number;
  pluggedIn: boolean;
  temperatureF: number;
  targetTemperatureF: number;
  preheatProgress: number;
  profileId: string;
  state: "idle" | "preheat" | "ready" | "session" | "cooling";
}
