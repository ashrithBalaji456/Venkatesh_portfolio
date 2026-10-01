"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EDUCATION = [
  {
    id: "01",
    year: "2026",
    date: "May 2026",
    period: "2022 – 2026",
    degree: "B.Tech in Computer Science and Engineering (IoT)",
    institution: "QIS College of Engineering and Technology, Ongole",
    scoreBadge: "CGPA: 7.5 / 10",
    scoreHighlight: "7.5 / 10 CGPA",
    description:
      "Completing Bachelor of Technology in Computer Science and Engineering (IoT) in May 2026 with 7.5 / 10 CGPA, establishing strong engineering foundations in core Java backend architectures, relational database schema design, and distributed RESTful microservices.",
    skills: ["Java 17", "Spring Boot", "Spring Data JPA", "PostgreSQL", "REST APIs", "Maven"]
  },
  {
    id: "02",
    year: "2022",
    date: "Mar 2022",
    period: "2020 – 2022",
    degree: "Intermediate (MPC)",
    institution: "Sri Saraswathi Junior College, Ongole",
    scoreBadge: "Percentage: 85.4%",
    scoreHighlight: "85.4% aggregate",
    description:
      "Completed intermediate education in Mathematics, Physics, and Chemistry (MPC) in March 2022 with 85.4% aggregate, developing rigorous mathematical reasoning, analytical problem-solving, and scientific logic.",
    skills: ["Mathematics", "Physics", "Chemistry", "Analytical Logic"]
  }
];

export default function Education() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !titleRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const startX = window.innerWidth < 640 ? 35 : 75;
      gsap.fromTo(
        titleRef.current,
        { x: startX },
        {
          x: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            end: "top 25%",
            scrub: 0.8,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="education-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-transparent z-10"
    >
      {/* Section Header */}
      <div className="w-full mb-12 sm:mb-16 flex items-end justify-between border-b border-theme-border/50 pb-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-1 pl-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            ACADEMIC BACKGROUND
          </span>
          <h2
            ref={titleRef}
            className="pj-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase will-change-transform"
          >
            education
          </h2>
        </div>
        <div className="text-xs font-semibold tracking-wider text-fg-muted uppercase font-mono">
          02 Qualifications
        </div>
      </div>

      {/* Main Education Timeline */}
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Desktop View (Grid matching reference layout with center vertical line & glowing points) */}
        <div className="hidden lg:flex flex-col relative">
          {/* Continuous vertical timeline line connecting all points */}
          <div
            className="absolute left-[calc(42%+70px)] top-12 bottom-12 w-[2px] bg-gradient-to-b from-accent via-blue-500/60 to-accent/20 z-0 pointer-events-none"
            style={{
              boxShadow: "0 0 10px rgba(0, 22, 236, 0.3)"
            }}
          />

          <div className="flex flex-col gap-16 xl:gap-20 relative z-10">
            {EDUCATION.map((item, idx) => (
              <div
                key={item.id}
                className="grid grid-cols-[1.1fr_120px_60px_1.5fr] items-center gap-8 group p-6 -mx-6 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]"
              >
                {/* Column 1: Degree & Institution */}
                <div className="flex flex-col">
                  <h3 className="text-2xl xl:text-3xl font-bold text-fg tracking-tight leading-snug group-hover:text-accent transition-colors">
                    {item.degree}
                  </h3>
                  <div className="text-sm xl:text-base font-semibold text-accent/95 mt-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-bg-alt/80 border border-theme-border text-fg shadow-sm">
                      {item.scoreBadge}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-fg-muted uppercase tracking-wider font-mono">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Column 2: Big Year */}
                <div className="text-right pr-2">
                  <div className="text-5xl xl:text-6xl font-extrabold text-fg tracking-tight font-Aeonik leading-none">
                    {item.year}
                  </div>
                  <div className="text-xs font-bold text-fg-muted uppercase tracking-wider font-mono mt-1">
                    {item.period}
                  </div>
                </div>

                {/* Column 3: Timeline Node Point with Glowing Halo */}
                <div className="flex items-center justify-center relative">
                  {/* Glowing Ambient Halo (like in reference image) */}
                  <div className="absolute w-10 h-10 rounded-full bg-accent/25 blur-md group-hover:bg-accent/45 transition-all duration-300" />
                  {/* Glowing Point Node */}
                  <div
                    className="relative w-4 h-4 rounded-full bg-accent border-[3px] border-[#9e9fa3] shadow-[0_0_14px_rgba(0,22,236,0.8)] group-hover:scale-125 transition-transform duration-300"
                    style={{
                      boxShadow: "0 0 16px rgba(0, 22, 236, 0.85)"
                    }}
                  />
                </div>

                {/* Column 4: Description Paragraph */}
                <div className="flex flex-col gap-3 pl-4">
                  <p className="text-sm xl:text-base text-fg-muted leading-relaxed font-normal">
                    {item.id === "01" ? (
                      <>
                        Completing Bachelor of Technology in Computer Science and Engineering (IoT) in{" "}
                        <span className="font-semibold text-fg">May 2026</span> with{" "}
                        <span className="font-bold text-fg bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">
                          {item.scoreHighlight}
                        </span>
                        , establishing strong engineering foundations in core Java backend architectures, relational database schema design, and distributed RESTful microservices.
                      </>
                    ) : (
                      <>
                        Completed intermediate education in Mathematics, Physics, and Chemistry (MPC) in{" "}
                        <span className="font-semibold text-fg">March 2022</span> with{" "}
                        <span className="font-bold text-fg bg-accent/10 px-1.5 py-0.5 rounded border border-accent/20">
                          {item.scoreHighlight}
                        </span>
                        , developing rigorous mathematical reasoning, analytical problem-solving, and scientific logic.
                      </>
                    )}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-bg-alt/60 border border-theme-border/60 text-fg-muted font-mono"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet View (Responsive timeline with left vertical line and glowing points) */}
        <div className="lg:hidden flex flex-col relative pl-6 sm:pl-8">
          {/* Continuous vertical timeline line on mobile */}
          <div
            className="absolute left-2.5 sm:left-3.5 top-3 bottom-8 w-[2px] bg-gradient-to-b from-accent via-blue-500/60 to-accent/20"
            style={{
              boxShadow: "0 0 8px rgba(0, 22, 236, 0.3)"
            }}
          />

          <div className="flex flex-col gap-12">
            {EDUCATION.map((item) => (
              <div key={item.id} className="relative flex flex-col gap-3">
                {/* Timeline Point Dot */}
                <div className="absolute -left-6 sm:-left-8 top-1 flex items-center justify-center">
                  <div className="absolute w-7 h-7 rounded-full bg-accent/25 blur-sm" />
                  <div className="relative w-3.5 h-3.5 rounded-full bg-accent border-2 border-[#9e9fa3] shadow-[0_0_10px_rgba(0,22,236,0.8)]" />
                </div>

                {/* Mobile Year & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-fg font-Aeonik leading-none">
                    {item.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-bg-alt/80 border border-theme-border text-fg">
                    {item.scoreBadge}
                  </span>
                </div>

                {/* Mobile Degree & Institution */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-fg tracking-tight leading-snug">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-accent mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="text-xs text-fg-muted font-mono mt-0.5">
                    {item.period} ({item.date})
                  </div>
                </div>

                {/* Mobile Description */}
                <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mt-1">
                  {item.description}
                </p>

                {/* Mobile Skills Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-bg-alt/60 border border-theme-border/60 text-fg-muted font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
