"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import icon from "@/app/icon.png";
import { Link } from "react-scroll";

export default function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);
  const [showTrigger, setShowTrigger] = useState(0);

  // Trigger effect on manual clicks
  const handleClick = () => {
    if (!isAnimating) {
      setShowTrigger((c) => c + 1);
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
    <>
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
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={handleMenuToggle} className="text-black focus:outline-none">
            {/* Hamburger Icon */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-4 6h10" />
            </svg>
          </button>
        </div>
        {/* Desktop CV Link */}
        <a
          href="/Yura_Goryakin_CV.pdf"
          className="hidden md:block text-[16px] text-gray-700 hover:underline font-normal"
          download
        >
          Download CV
        </a>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="flex flex-col items-center p-4 space-y-4">
            <a
              href="/Yura_Goryakin_CV.pdf"
              download
              className="text-gray-700 hover:text-black w-full text-center py-2 rounded-md"
              onClick={handleMenuToggle}
            >
              Download CV
            </a>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-black w-full text-center py-2 rounded-md"
              offset={-100}
              onClick={handleMenuToggle}
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 hover:text-black w-full text-center py-2 rounded-md"
              offset={-100}
              onClick={handleMenuToggle}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
