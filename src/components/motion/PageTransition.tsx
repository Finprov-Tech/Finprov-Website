import { useLocation } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    const lenis = (window as typeof window & {
      __lenis?: { scrollTo: (target: number, options?: { immediate?: boolean }) => void };
    }).__lenis;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  // Do not hold route outlets inside AnimatePresence. Lazy route chunks can
  // suspend during client navigation, leaving the exiting page removed while
  // the incoming outlet never becomes visible until a full refresh.
  return <>{children}</>;
}
