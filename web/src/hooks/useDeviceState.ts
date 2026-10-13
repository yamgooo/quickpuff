import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { deviceApi } from "../services/api/deviceApi";
import { useDeviceStore } from "../stores/useDeviceStore";

export function useDeviceState() {
  const setDevice = useDeviceStore((state) => state.setDevice);

  const query = useQuery({
    queryKey: ["device-state"],
    queryFn: deviceApi.getState,
    retry: false,
  });

  useEffect(() => {
    if (query.data) setDevice(query.data);
  }, [query.data, setDevice]);

  return query;
}
