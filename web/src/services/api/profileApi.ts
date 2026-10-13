import type { Profile } from "../../types/device";
import { apiRequest } from "./httpClient";

export const profileApi = {
  list: () => apiRequest<Profile[]>("/profiles"),
  update: (profileId: string, payload: Partial<Profile>) =>
    apiRequest<Profile>(`/profiles/${profileId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
