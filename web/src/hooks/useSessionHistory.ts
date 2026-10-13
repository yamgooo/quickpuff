import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { sessionApi } from "../services/api/sessionApi";
import { useStatsStore } from "../stores/useStatsStore";

export function useSessionHistory(limit = 80) {
  const setSessions = useStatsStore((state) => state.setSessions);
  const query = useQuery({ queryKey: ["sessions", limit], queryFn: () => sessionApi.list(limit), retry: false });

  useEffect(() => {
    if (query.data) setSessions(query.data);
  }, [query.data, setSessions]);

  return query;
}
