import { useEffect, useMemo } from "react";
import type { ReactNode } from "react";
import { createPortal } from "react-dom";

export function OverlayPortal({ children }: { children: ReactNode }) {
  const root = useMemo(() => {
    const element = document.createElement("div");
    element.style.position = "fixed";
    element.style.inset = "0";
    element.style.zIndex = "9999";
    element.style.pointerEvents = "none";
    return element;
  }, []);

  useEffect(() => {
    document.body.appendChild(root);
    return () => root.remove();
  }, [root]);

  return createPortal(children, root);
}
