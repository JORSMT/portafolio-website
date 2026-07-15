import { useCallback, useEffect, useState } from "react";
import type { UseHeaderResult } from "./interface";

const DESKTOP_BREAKPOINT = 900;

export function useHeader(): UseHeaderResult {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT) setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return { scrolled, menuOpen, toggleMenu, closeMenu };
}
