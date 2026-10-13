export interface UsageStats {
  today: number;
  week: number;
  month: number;
  lifetime: number;
  averageTempF: number;
  averageDurationSec: number;
  favoriteProfile: string;
  peakHour: number;
  streakDays: number;
}

export interface HeatPoint {
  second: number;
  tempF: number;
  targetF: number;
}
