import { create } from "zustand";

interface SettingsStore {
  themeLight: boolean;
  musicLight: boolean;
  stealthMode: boolean;
  lanternOn: boolean;
  brightness: number;
  setSetting: <K extends keyof Omit<SettingsStore, "setSetting">>(key: K, value: SettingsStore[K]) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  themeLight: false,
  musicLight: false,
  stealthMode: false,
  lanternOn: true,
  brightness: 80,
  setSetting: (key, value) => set({ [key]: value } as Partial<SettingsStore>),
}));
