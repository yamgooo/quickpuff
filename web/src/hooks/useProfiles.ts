import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { profileApi } from "../services/api/profileApi";
import { useProfileStore } from "../stores/useProfileStore";

export function useProfiles() {
  const setProfiles = useProfileStore((state) => state.setProfiles);
  const query = useQuery({ queryKey: ["profiles"], queryFn: profileApi.list, retry: false });

  useEffect(() => {
    if (query.data?.length) setProfiles(query.data);
  }, [query.data, setProfiles]);

  return query;
}
