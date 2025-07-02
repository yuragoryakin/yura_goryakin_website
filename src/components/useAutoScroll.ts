"use client";
import { useEffect, useRef } from "react";

export default function useAutoScroll() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // 50% visibility threshold
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log(`Section: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          // Get the section id and update URL hash
          const id = entry.target.id;
          console.log(`Scrolling to section: ${id}`);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  return null;
}
