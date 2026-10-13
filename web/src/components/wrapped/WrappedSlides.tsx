import { AnimatePresence, motion } from "framer-motion";

interface Slide {
  title: string;
  value: string;
  subtitle: string;
}

const slides: Slide[] = [
  { title: "TOTAL SESSIONS", value: "1,480", subtitle: "Tu año en QuickPuff" },
  { title: "FAVORITE PROFILE", value: "HIGH", subtitle: "36% de tus sesiones" },
  { title: "HOTTEST SESSION", value: "575°F", subtitle: "Heat-up promedio: 32s" },
  { title: "STREAK", value: "14 DÍAS", subtitle: "No aflojaste" },
  { title: "PEAK HOUR", value: "21:00", subtitle: "Prime time" },
  { title: "CUSTOM TITLE", value: "NIGHT ALCHEMIST", subtitle: "Comparte tu card" },
];

export function WrappedSlides({ index }: { index: number }) {
  const slide = slides[index] ?? slides[0];
  return (
    <AnimatePresence mode="wait">
      <motion.article
        key={slide.title}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.45 }}
        className="rounded-3xl border border-white/20 bg-gradient-to-br from-fuchsia-500/20 to-sky-500/15 p-10 text-center"
      >
        <p className="text-sm tracking-[0.2em] text-white/70">{slide.title}</p>
        <h2 className="my-4 text-6xl font-bold text-white">{slide.value}</h2>
        <p className="text-xl text-white/80">{slide.subtitle}</p>
      </motion.article>
    </AnimatePresence>
  );
}
