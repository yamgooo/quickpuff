import { create } from "zustand";
import type { DeviceState } from "../types/device";

interface DeviceStore {
  device: DeviceState;
  setDevice: (device: Partial<DeviceState>) => void;
}

const initialDevice: DeviceState = {
  name: "Peak Pro",
  connection: "offline",
  battery: 0,
  pluggedIn: false,
  temperatureF: 72,
  targetTemperatureF: 530,
  preheatProgress: 0,
  profileId: "profile-low",
  state: "idle",
};

export const useDeviceStore = create<DeviceStore>((set) => ({
  device: initialDevice,
  setDevice: (next) => set((state) => ({ device: { ...state.device, ...next } })),
}));
