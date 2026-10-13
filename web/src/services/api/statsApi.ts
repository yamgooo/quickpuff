import type { UsageStats, HeatPoint } from "../../types/stats";
import { apiRequest } from "./httpClient";

export const statsApi = {
  getUsage: () => apiRequest<UsageStats>("/stats/usage"),
  getHeatTrace: () => apiRequest<HeatPoint[]>("/stats/heat-trace"),
};
