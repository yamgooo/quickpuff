interface TabOption {
  value: string;
  label: string;
}

export function SegmentedTabs({ value, options, onChange }: { value: string; options: TabOption[]; onChange: (value: string) => void }) {
  return (
    <div className="grid grid-cols-5 gap-2 rounded-xl border border-white/10 bg-black/25 p-1">
      {options.map((option) => (
        <button
          key={option.value}
          className={`rounded-lg px-3 py-2 text-sm transition ${value === option.value ? "bg-fuchsia-500/80 text-white" : "text-white/70 hover:bg-white/10"}`}
          onClick={() => onChange(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
