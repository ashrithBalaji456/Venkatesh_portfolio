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
    scoreBadgeColor: "text-amber-300",
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
    scoreBadgeColor: "text-emerald-400",
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
      <div className="w-full max-w-7xl mx-auto">
        {/* Desktop View (Continuous vertical line passing directly through centered dots) */}
        <div className="hidden lg:flex flex-col">
          {EDUCATION.map((item, idx) => (
            <div
              key={item.id}
              className="grid grid-cols-[1.1fr_120px_48px_1.5fr] items-center gap-8 xl:gap-12 py-8 group"
            >
              {/* Column 1: Degree & Institution (Uniform deep text-fg color, high contrast) */}
              <div className="flex flex-col">
                <h3 className="text-2xl xl:text-3xl font-bold text-fg tracking-tight leading-snug">
                  {item.degree}
                </h3>
                <div className="text-sm xl:text-base font-semibold text-accent mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span>{item.institution}</span>
                </div>
                <div className="mt-3.5 flex items-center gap-2.5">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#1c1f26] border border-white/10 ${item.scoreBadgeColor} shadow-md`}
                  >
                    {item.scoreBadge}
                  </span>
                  <span className="text-xs font-semibold text-fg-muted uppercase tracking-wider font-mono">
                    {item.date}
                  </span>
                </div>
              </div>

              {/* Column 2: Big Display Year */}
              <div className="text-right pr-2">
                <div className="text-5xl xl:text-6xl font-extrabold text-fg tracking-tight font-Aeonik leading-none">
                  {item.year}
                </div>
                <div className="text-xs font-bold text-fg-muted uppercase tracking-wider font-mono mt-1.5">
                  {item.period}
                </div>
              </div>

              {/* Column 3: Timeline Line & Centered Dot (Line passes directly through the dot) */}
              <div className="relative flex flex-col items-center justify-center h-full min-h-[170px] self-stretch">
                {/* Connecting Line between the two dots */}
                <div
                  className={`absolute w-[2px] bg-gradient-to-b from-accent via-blue-500 to-accent/60 ${
                    idx === 0 ? "top-1/2 bottom-0" : "top-0 bottom-1/2"
                  }`}
                  style={{
                    boxShadow: "0 0 8px rgba(0, 22, 236, 0.45)"
                  }}
                />
                {/* The Dot sitting right at the center of the line */}
                <div className="relative z-10 flex items-center justify-center">
                  <div
                    className="w-4 h-4 rounded-full bg-accent border-[3px] border-[#8e9097] shadow-[0_0_12px_rgba(0,22,236,0.9)] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
              </div>

              {/* Column 4: Description Paragraph & Tech Pills (Crisp, high contrast text) */}
              <div className="flex flex-col gap-3 pl-2">
                <p className="text-sm xl:text-base text-fg font-normal leading-relaxed">
                  {item.id === "01" ? (
                    <>
                      Completing Bachelor of Technology in Computer Science and Engineering (IoT) in{" "}
                      <span className="font-bold text-fg underline decoration-accent/60 underline-offset-4">
                        May 2026
                      </span>{" "}
                      with{" "}
                      <span className="font-bold text-fg font-mono px-2 py-0.5 rounded bg-black/10">
                        {item.scoreHighlight}
                      </span>
                      , establishing strong engineering foundations in core Java backend architectures, relational database schema design, and distributed RESTful microservices.
                    </>
                  ) : (
                    <>
                      Completed intermediate education in Mathematics, Physics, and Chemistry (MPC) in{" "}
                      <span className="font-bold text-fg underline decoration-accent/60 underline-offset-4">
                        March 2022
                      </span>{" "}
                      with{" "}
                      <span className="font-bold text-fg font-mono px-2 py-0.5 rounded bg-black/10">
                        {item.scoreHighlight}
                      </span>
                      , developing rigorous mathematical reasoning, analytical problem-solving, and scientific logic.
                    </>
                  )}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[#1c1f26] text-zinc-200 border border-white/10 shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View (Line connects through centered dots on left) */}
        <div className="lg:hidden flex flex-col">
          {EDUCATION.map((item, idx) => (
            <div key={item.id} className="relative flex gap-5 sm:gap-6 pb-12 last:pb-4">
              {/* Mobile Timeline Column */}
              <div className="relative flex flex-col items-center">
                <div
                  className={`absolute w-[2px] bg-gradient-to-b from-accent via-blue-500 to-accent/60 ${
                    idx === 0 ? "top-2 bottom-0" : "top-0 bottom-auto h-4"
                  }`}
                  style={{
                    boxShadow: "0 0 6px rgba(0, 22, 236, 0.45)"
                  }}
                />
                <div className="relative z-10 mt-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-[#8e9097] shadow-[0_0_8px_rgba(0,22,236,0.9)] flex-shrink-0" />
              </div>

              {/* Mobile Content */}
              <div className="flex-1 flex flex-col gap-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-fg font-Aeonik leading-none">
                    {item.year}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold font-mono bg-[#1c1f26] border border-white/10 ${item.scoreBadgeColor}`}
                  >
                    {item.scoreBadge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-fg tracking-tight leading-snug">
                    {item.degree}
                  </h3>
                  <div className="text-sm font-semibold text-accent mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                  <div className="text-xs text-fg-muted font-mono mt-0.5">
                    {item.period} ({item.date})
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-fg leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1c1f26] text-zinc-200 border border-white/10"
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
    </section>
  );
}
