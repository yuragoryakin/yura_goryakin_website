"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * This component provides a section-by-section scroll effect. It listens for
 * mouse wheel events and smoothly animates to the next or previous section.
 */
export default function ScrollManager() {
  const isWheeling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleWheel = useCallback((e: WheelEvent) => {
    // If an animation is already in progress, do nothing.
    if (isWheeling.current) {
      e.preventDefault();
      return;
    }

    const direction = e.deltaY > 0 ? "down" : "up";

    const sections = Array.from(
      document.querySelectorAll("section[id]")
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const headerOffset = 80;
    let currentSectionIndex = 0;

    // Find the current section.
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top <= headerOffset && rect.bottom > headerOffset) {
        currentSectionIndex = i;
        break;
      }
    }

    let nextSectionIndex = currentSectionIndex;
    if (direction === "down") {
      nextSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
    } else {
      nextSectionIndex = Math.max(0, currentSectionIndex - 1);
    }

    // If we are already at the top or bottom, do nothing.
    if (nextSectionIndex === currentSectionIndex) return;
    
    // Prevent the default wheel scroll and start our animation.
    e.preventDefault();
    isWheeling.current = true;

    const targetElement = sections[nextSectionIndex];
    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // After a delay, allow wheel events again.
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      isWheeling.current = false;
    }, 700); // A 0.7-second cooldown to prevent rapid-fire scrolls.
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    // Initial check in case the page loads with a hash
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [handleWheel]);

  return null;
} 