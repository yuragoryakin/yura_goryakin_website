"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import icon from "@/app/icon.png";

export default function Topbar() {
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showTrigger, setShowTrigger] = useState(0);

  // Trigger effect on manual clicks
  const handleClick = () => {
    if (!isAnimating) {
      setShowTrigger((c) => c + 1);
    }
  };

  // Initial load animation
  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsIconVisible(false);
    }, 1000); // Stay visible for 1 second

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000 + 2000); // 1s visible + 2s animation duration

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, []);

  // Animation cycle for manual clicks
  useEffect(() => {
    if (showTrigger === 0) return; // Don't run on initial load

    setIsAnimating(true);
    setIsIconVisible(true);

    const visibilityTimer = setTimeout(() => {
      setIsIconVisible(false);
    }, 1000);

    const animationTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 1000 + 2000);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [showTrigger]);

  return (
    <header className="flex justify-between items-center w-full px-[40px] py-[20px] bg-white">
      <div className="relative">
        <button
          onClick={handleClick}
          disabled={isAnimating}
          className="text-[20px] font-normal text-gray-900 focus:outline-none"
        >
          Yura Goryakin
        </button>
        <Image
          src={icon}
          alt="Site Icon"
          width={512}
          height={512}
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50 rounded-full transition-opacity duration-[2000ms] ease-in-out ${
            isIconVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      </div>
      <a
        href="/Yura_Goryakin_CV.pdf"
        className="text-[16px] text-gray-700 hover:underline font-normal"
        download
      >
        Download CV
      </a>
    </header>
  );
}
