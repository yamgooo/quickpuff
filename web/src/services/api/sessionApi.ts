import type { SessionRecord } from "../../types/session";
import { apiRequest } from "./httpClient";

export const sessionApi = {
  list: (limit = 50) => apiRequest<SessionRecord[]>(`/sessions?limit=${limit}`),
  saveNote: (sessionId: string, note: string) =>
    apiRequest<void>(`/sessions/${sessionId}/note`, {
      method: "PUT",
      body: JSON.stringify({ note }),
    }),
};
