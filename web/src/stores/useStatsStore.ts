import { create } from "zustand";
import type { SessionRecord } from "../types/session";
import type { UsageStats } from "../types/stats";

interface StatsStore {
  usage: UsageStats;
  sessions: SessionRecord[];
  setUsage: (usage: UsageStats) => void;
  setSessions: (sessions: SessionRecord[]) => void;
}

const initialUsage: UsageStats = {
  today: 4,
  week: 27,
  month: 102,
  lifetime: 1480,
  averageTempF: 523,
  averageDurationSec: 47,
  favoriteProfile: "High",
  peakHour: 21,
  streakDays: 8,
};

export const useStatsStore = create<StatsStore>((set) => ({
  usage: initialUsage,
  sessions: [],
  setUsage: (usage) => set({ usage }),
  setSessions: (sessions) => set({ sessions }),
}));
