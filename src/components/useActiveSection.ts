"use client";

import { useState, useEffect, useRef } from "react";

/**
 * A hook that uses the IntersectionObserver API to determine which section
 * is currently active on the page.
 * @returns The ID of the currently active section.
 */
export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // The root is the viewport, but we offset it by the height
        // of the fixed header to ensure the correct section is highlighted.
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return activeSection;
}