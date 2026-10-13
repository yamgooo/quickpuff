import type { DeviceState } from "../../types/device";
import { apiRequest } from "./httpClient";

export const deviceApi = {
  getState: () => apiRequest<DeviceState>("/device/state"),
  startHeat: () => apiRequest<void>("/device/heat/start", { method: "POST" }),
  stopHeat: () => apiRequest<void>("/device/heat/stop", { method: "POST" }),
  boost: () => apiRequest<void>("/device/heat/boost", { method: "POST" }),
};
