import { create } from "zustand";

interface SessionStore {
  sessionSecondsLeft: number;
  readyAnimation: "rocket" | "confetti" | "lava" | "aurora" | "fireworks" | "smoke" | "neon" | "off";
  showtimeMode: "off" | "corner" | "stage";
  setSessionSecondsLeft: (seconds: number) => void;
  setReadyAnimation: (value: SessionStore["readyAnimation"]) => void;
  setShowtimeMode: (value: SessionStore["showtimeMode"]) => void;
}

export const useSessionStore = create<SessionStore>((set) => ({
  sessionSecondsLeft: 45,
  readyAnimation: "rocket",
  showtimeMode: "corner",
  setSessionSecondsLeft: (sessionSecondsLeft) => set({ sessionSecondsLeft }),
  setReadyAnimation: (readyAnimation) => set({ readyAnimation }),
  setShowtimeMode: (showtimeMode) => set({ showtimeMode }),
}));
