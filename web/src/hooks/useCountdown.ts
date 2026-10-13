import { useEffect } from "react";
import { useSessionStore } from "../stores/useSessionStore";

export function useCountdown(isRunning: boolean) {
  const secondsLeft = useSessionStore((state) => state.sessionSecondsLeft);
  const setSecondsLeft = useSessionStore((state) => state.setSessionSecondsLeft);

  useEffect(() => {
    if (!isRunning) return;
    const timer = window.setInterval(() => setSecondsLeft(Math.max(0, secondsLeft - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [isRunning, secondsLeft, setSecondsLeft]);
}
