"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { useEffect } from "react";
import { scrollSpy } from "react-scroll";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Section from "../components/Section";
import ScrollManager from "../components/ScrollManager";

// Force new build
export default function Home() {
  // This hook runs after the component mounts, ensuring the sections are in the DOM.
  // The interval repeatedly calls scrollSpy.update() to robustly handle
  // slow-loading content and correctly initialize the sidebar highlighting.
  useEffect(() => {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      scrollSpy.update();
      if (attempts >= 10) {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      {/* <ThemeSwitch /> */}
      <ScrollManager />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <Topbar />
      </header>
      <div className="flex flex-1 min-h-0 relative">
        {/* Sidebar */}
        <aside
          className="hidden md:flex w-56 min-w-[180px] bg-white h-full border-0 flex-col sticky"
          style={{
            top: 250,
            right: 160,
            alignSelf: "flex-start",
            position: "sticky",
          }}
        >
          <Sidebar />
        </aside>
        {/* Main content area with sections */}
        <main
          id="scrollContainer"
          className="flex-1 overflow-y-auto scroll-smooth flex flex-col items-start scroll-pt-20 md:pl-[240px] md:pr-[360px]"
          style={{
            scrollBehavior: "smooth",
          }}
        >
          <Section
            id="intro"
            title="Hi, I'm Yura — a Product Designer passionate about transforming complex challenges into good-looking and easy-to-use products."
          >
            {/* No additional content for intro section */}
            {/* Empty fragment to satisfy children prop */}
            <></>
          </Section>
          <Section id="experience" title="">
            <div className="mb-8">
              <p className="text-xl text-black">
                Dodo Brands{" "}
                <span className="text-lg text-gray-500">
                  April 2023 - March 2025
                </span>
              </p>
              <p className="text-xl text-gray-500">
                Product Designer (Previously UX/UI)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <div className="space-y-6">
                <p>
                  Designed and launched the UX/UI for a highly complex internal
                  software, emphasizing usability, accessibility, and visual
                  coherence for 1,000+ users.
                </p>
                <p>
                  Led product research initiatives, utilizing competitive
                  analysis, user interviews, surveys, heuristic evaluations, and
                  user journey testing to identify critical user pain points and
                  deliver user-backed insights to UX.
                </p>
                <p>
                  Built and maintained a design system in Figma, leveraging Auto
                  Layout, Dev Mode, and component libraries with HTML/CSS previews
                  to streamline engineer hand-off.
                </p>
                <p>
                  Established essential UX architecture for data-heavy
                  interactions, including role-based permissions and entity
                  relationships.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  Translated complex business logic into functional design
                  specifications through close partnership with developers and
                  stakeholders.
                </p>
                <p>
                  Expanded responsibilities beyond core design by leading
                  competitor analysis, feature prioritization, stakeholder
                  workshops, and requirements gathering, synchronizing business
                  objectives with technical execution.
                </p>
                <p>
                  Contributed to product strategy and feature prioritization,
                  directly influencing the development roadmap and optimizing
                  resource allocation within a lean team setting.
                </p>
                <p>
                  Revamped operational workflows, resulting in significant
                  improvements in company-wide efficiency.
                </p>
              </div>
            </div>
          </Section>
          <Section id="education" title="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <p>
                Moscow Architectural Institute
                <br />
                <span className="text-gray-500">Architecture</span>
              </p>
              <p>
                University of Padova
                <br />
                <span className="text-gray-500">Psychology</span>
              </p>
            </div>
          </Section>
          <Section id="skills" title="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <p>
                User research
                <br />
                User flows
                <br />
                Wireframing
                <br />
                Prototyping
                <br />
                Responsive design
                <br />
                Design systems
                <br />
                Design thinking
                <br />
                Accessibility
                <br />
                Low/no-code tools
                <br />
                Graphic design
                <br />
                Typography
                <br />
                Business Analysis
                <br />
                Requirements Gathering
                <br />
                English fluent
                <br />
                Russian native
              </p>
              <p>
                Figma
                <br />
                UXPin
                <br />
                Webflow
                <br />
                Framer
                <br />
                Adobe Suite
                <br />
                AI Copilots
                <br />
                Maze
                <br />
                ProtoPie
                <br />
                Origami Live
                <br />
                Atlassian suite
                <br />
                Slack
                <br />
                HTML/CSS
                <br />
                JavaScript
                <br />
                Storybook
              </p>
            </div>
          </Section>
          <Section id="about" title="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24">
              <div className="space-y-6">
                <p>
                  I had never understood why I was so bothered by poorly designed
                  mobile apps, websites, software, or game interfaces while other
                  people couldn&apos;t share my suffering and most of the time even
                  struggled to acknowledge its roots. Until I realized: I could be
                  the person who creates something better, who actually cares
                  about people on the other side of a product. Since then, my
                  emotional response to mediocre design hasn&apos;t changed much, but
                  now I can channel that into my profession instead of it being a
                  mere quirky fixation with interfaces.
                </p>
                <p>
                  Unique combination of traditional architectural education with
                  modern research-based psychology allows me to deeply understand
                  user thought processes and needs, thereby crafting experiences
                  that are both intuitive and visually compelling.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  I thrive on complex products. Whether it&apos;s diverse user needs
                  and stories, complex business logic, or dense data structures,
                  I love transforming them into clear, functional, and
                  user-friendly designs.
                </p>
                <p>
                  Outside of design, I find joy in composing music and playing
                  guitar, creating with my hands through woodworking, and
                  exploring nature with my wife and our twisted-tail dog, Beemo.
                </p>
                <div className="flex gap-4">
                  <Image
                    src="/images/about-1.JPG"
                    alt="Yura Goryakin with his dog"
                    width={400}
                    height={500}
                    className="w-1/2 rounded-lg"
                  />
                  <Image
                    src="/images/about-2.jpg"
                    alt="Yura Goryakin at his desk"
                    width={500}
                    height={500}
                    className="w-1/2 rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section id="contact" title="">
            <div>
              <p className="leading-loose">
                <a
                  href="https://yuragoryakin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  yuragoryakin.com
                </a>
                <br />
                yu.goryakin@gmail.com
                <br />
                +995557317256
              </p>
            </div>
          </Section>
        </main>
      </div>
      <footer className="py-6 text-center text-sm text-gray-500">
        <p>
          Designed and Developed by{" "}
          <a
            href="https://yuragoryakin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Yura Goryakin
          </a>
        </p>
        <p>© 2025</p>
      </footer>
    </div>
  );
}
