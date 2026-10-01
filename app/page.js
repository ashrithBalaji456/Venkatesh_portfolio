"use client";
import { Suspense, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import SmoothScroll from "@/components/SmoothScroll";
import Projects from "@/components/Projects/Projects";
import Education from "@/components/Education/Education";
import HorizontalScroll from "@/components/HorizontalScroll/HorizontalScroll";
import Contact from "@/components/Contact/Contact";
import SiteFooter from "@/components/SiteFooter/SiteFooter";
import Skiggle from "@/components/Featured/Skiggle";
import Header from "@/components/Featured/Header";
import FeaturedVideo from "@/components/Featured/FeaturedVideo";
import SubHeader from "@/components/Featured/SubHeader";

export default function Home() {
  const ref = useRef(null);
  const aboutProjectsRef = useRef(null);

  return (
    <SmoothScroll>
      <Suspense
        fallback={
          <div className="w-screen bg-bg h-screen text-fg text-2xl flex items-center justify-center font-Aeonik">
            Loading...
          </div>
        }
      >
        <div className="text-fg h-auto w-screen overflow-x-hidden">
          <Navbar />
          <HeroSection />

          {/* Shared container spanning About, Projects, and Education for seamless flowing Blue Ribbon */}
          <div id="experience-flow" ref={aboutProjectsRef} className="relative w-full overflow-hidden">
            <Skiggle containerRef={aboutProjectsRef} />

            <div
              id="about"
              className="h-auto relative mt-8 md:mt-16 px-6 sm:px-12 lg:px-20 pb-20 z-10 flex flex-col gap-8 md:gap-12 animate-fade-in"
              ref={ref}
            >
              <Header />
              <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">
                <div className="w-full md:w-[42%] lg:w-[38%] flex-shrink-0 flex justify-center md:justify-start">
                  <FeaturedVideo refForward={ref} />
                </div>
                <div className="w-full md:flex-grow">
                  <SubHeader />
                </div>
              </div>
            </div>

            <Projects />
            <Education />
          </div>

          <HorizontalScroll />
          <Contact />
          <SiteFooter />
        </div>
      </Suspense>
    </SmoothScroll>
  );
}
