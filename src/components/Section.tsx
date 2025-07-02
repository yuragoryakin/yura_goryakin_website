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
      className={`flex flex-col w-full min-h-screen scroll-mt-20`}
      tabIndex={-1}
    >
      <div className="w-full flex flex-col pt-[240px]">
      {isIntro ? (
          <h1
            className="font-semibold text-[72px] font-[Rethink Sans,sans-serif] m-0 p-0 text-black text-left"
            style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 600,
              fontSize: 72,
              lineHeight: "110%",
              margin: 0,
              padding: 0,
            }}
            >
              {title}
            </h1>
        ) : (
          <div className="text-[18px] font-normal space-y-6 transform -translate-y-9">
            {title && title.length > 0 && (
            <h2
                className="font-semibold text-[72px] font-[Rethink Sans,sans-serif] m-0 p-0 text-gray-900 text-left mb-10"
                style={{
                  fontFamily: "Rethink Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: 72,
                  lineHeight: "110%",
                  margin: 0,
                  padding: 0,
                }}
            >
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
