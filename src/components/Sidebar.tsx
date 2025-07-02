"use client";
import React from "react";
import { useActiveSection } from "./useActiveSection";

const sections = [
  { id: "intro", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <nav className="flex flex-col gap-2 text-gray-500 text-base font-normal mt-8 ml-10">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`transition-all duration-300 ease-in-out hover:text-black block leading-8 ${
            activeSection === section.id
              ? "text-lg font-medium text-black"
              : "text-base font-normal text-gray-500"
          }`}
          aria-current={activeSection === section.id ? "page" : undefined}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
