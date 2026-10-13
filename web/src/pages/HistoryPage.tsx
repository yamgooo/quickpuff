import { HistoryTable } from "../components/usage/HistoryTable";
import { useSessionHistory } from "../hooks/useSessionHistory";

export function HistoryPage() {
  useSessionHistory();
  return <HistoryTable />;
}
