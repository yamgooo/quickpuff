import { create } from "zustand";
import type { Profile } from "../types/device";

interface ProfileStore {
  profiles: Profile[];
  setProfiles: (profiles: Profile[]) => void;
  updateProfile: (id: string, patch: Partial<Profile>) => void;
}

const defaultProfiles: Profile[] = [
  { id: "profile-low", name: "Low", temperatureF: 490, durationSec: 40, boostTempF: 8, boostTimeSec: 10, vaporLevel: "smooth", color: "#3b9eff" },
  { id: "profile-med", name: "Med", temperatureF: 510, durationSec: 45, boostTempF: 10, boostTimeSec: 15, vaporLevel: "bold", color: "#3dd68c" },
  { id: "profile-high", name: "High", temperatureF: 530, durationSec: 50, boostTempF: 12, boostTimeSec: 15, vaporLevel: "intense", color: "#ff4d4d" },
  { id: "profile-peak", name: "Peak", temperatureF: 545, durationSec: 55, boostTempF: 14, boostTimeSec: 20, vaporLevel: "extreme", color: "#ffffff" },
];

export const useProfileStore = create<ProfileStore>((set) => ({
  profiles: defaultProfiles,
  setProfiles: (profiles) => set({ profiles }),
  updateProfile: (id, patch) =>
    set((state) => ({ profiles: state.profiles.map((profile) => (profile.id === id ? { ...profile, ...patch } : profile)) })),
}));
