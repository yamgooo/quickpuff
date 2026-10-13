export interface SessionRecord {
  id: string;
  startedAt: string;
  durationSec: number;
  profileName: string;
  temperatureF: number;
  note?: string;
}
