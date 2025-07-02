"use client";
import { useEffect } from "react";

export default function KeepScrollPosition() {
  useEffect(() => {
    // Save scroll position before unload
    const saveScroll = () => {
      sessionStorage.setItem("scrollY", String(window.scrollY));
      sessionStorage.setItem("scrollX", String(window.scrollX));
    };
    window.addEventListener("beforeunload", saveScroll);

    // Restore scroll position after reload
    const y = Number(sessionStorage.getItem("scrollY"));
    const x = Number(sessionStorage.getItem("scrollX"));
    if (!isNaN(y) || !isNaN(x)) {
      setTimeout(() => {
        window.scrollTo({ top: y || 0, left: x || 0, behavior: "auto" });
      }, 1);
    }
    return () => {
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);
  return null;
}
