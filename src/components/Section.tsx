import React from "react";

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const isIntro = id === "intro";

  return (
    <section
      id={id}
      className={`flex flex-col w-full min-h-screen scroll-mt-20 px-6`}
      tabIndex={-1}
    >
      <div className="w-full flex flex-col pt-[240px]">
      {isIntro ? (
          <h1 className="font-semibold text-5xl md:text-7xl font-[Rethink Sans,sans-serif] m-0 p-0 text-black text-left">
            {title}
          </h1>
        ) : (
          <div className="text-base md:text-lg font-normal space-y-6 transform -translate-y-9">
            {title && title.length > 0 && (
            <h2 className="font-semibold text-5xl md:text-7xl font-[Rethink Sans,sans-serif] m-0 p-0 text-gray-900 text-left mb-10">
              {title}
            </h2>
          )}
            {children}
        </div>
      )}
      </div>
    </section>
  );
}
