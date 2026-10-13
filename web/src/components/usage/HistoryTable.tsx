import { useMemo, useState } from "react";
import { useStatsStore } from "../../stores/useStatsStore";
import { Modal } from "../common/Modal";

export function HistoryTable() {
  const sessions = useStatsStore((state) => state.sessions);
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(
    () => sessions.filter((s) => `${s.profileName} ${s.note ?? ""}`.toLowerCase().includes(query.toLowerCase())),
    [query, sessions],
  );

  const selected = filtered.find((s) => s.id === selectedId);

  return (
    <div className="rounded-2xl border border-white/12 bg-white/4 p-4">
      <div className="mb-3 flex gap-2">
        <input
          className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2 text-white"
          placeholder="Buscar sesión o nota"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm text-white/85">
          <thead className="text-white/60"><tr><th>Fecha</th><th>Perfil</th><th>Temp</th><th>Duración</th><th>Nota</th></tr></thead>
          <tbody>
            {filtered.map((session) => (
              <tr key={session.id} onClick={() => setSelectedId(session.id)} className="cursor-pointer border-t border-white/8 hover:bg-white/5">
                <td>{new Date(session.startedAt).toLocaleString()}</td>
                <td>{session.profileName}</td>
                <td>{session.temperatureF}°F</td>
                <td>{session.durationSec}s</td>
                <td>{session.note ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={Boolean(selected)} title="Editar nota" onClose={() => setSelectedId(null)}>
        <textarea defaultValue={selected?.note ?? ""} rows={4} className="w-full rounded-lg border border-white/15 bg-black/35 p-2 text-white" />
      </Modal>
    </div>
  );
}
