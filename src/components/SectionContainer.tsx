"use client";
import React, { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
}

export default function SectionContainer({ id, children }: SectionContainerProps) {
  return (
    <div 
      id={id} 
      className="min-h-screen w-full scroll-mt-20 snap-start"
    >
      {children}
    </div>
  );
}
