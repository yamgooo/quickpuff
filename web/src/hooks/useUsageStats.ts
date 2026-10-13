import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { statsApi } from "../services/api/statsApi";
import { useStatsStore } from "../stores/useStatsStore";

export function useUsageStats() {
  const setUsage = useStatsStore((state) => state.setUsage);
  const query = useQuery({ queryKey: ["usage"], queryFn: statsApi.getUsage, retry: false });

  useEffect(() => {
    if (query.data) setUsage(query.data);
  }, [query.data, setUsage]);

  return query;
}
