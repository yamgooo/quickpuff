import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Modal({ open, title, children, onClose }: { open: boolean; title: string; children: ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[1000] grid place-items-center bg-black/65 p-4" onClick={onClose}>
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-white/15 bg-[#131520] p-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
