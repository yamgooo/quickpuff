import { useEffect } from "react";
import { websocketClient } from "../services/ws/websocketClient";
import { useDeviceStore } from "../stores/useDeviceStore";
import { useSessionStore } from "../stores/useSessionStore";

export function useWebSocketFeed() {
  const setDevice = useDeviceStore((state) => state.setDevice);
  const setSessionSecondsLeft = useSessionStore((state) => state.setSessionSecondsLeft);

  useEffect(() => {
    websocketClient.connect();
    const unsubscribeDevice = websocketClient.subscribe<{ temperatureF: number; state: "idle" | "preheat" | "ready" | "session" | "cooling" }>(
      "device.status",
      (payload) => setDevice({ temperatureF: payload.temperatureF, state: payload.state }),
    );

    const unsubscribeTimer = websocketClient.subscribe<{ secondsLeft: number }>(
      "session.timer",
      (payload) => setSessionSecondsLeft(payload.secondsLeft),
    );

    return () => {
      unsubscribeDevice();
      unsubscribeTimer();
    };
  }, [setDevice, setSessionSecondsLeft]);
}
