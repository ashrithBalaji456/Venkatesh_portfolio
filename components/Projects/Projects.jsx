"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    id: "01",
    title: "Online Event Booking System",
    date: "Aug 2026 – Dec 2026",
    badge: "Backend API",
    glowGradient: "from-cyan-400 via-blue-500 to-purple-500",
    glowShadow: "rgba(6, 182, 212, 0.4)",
    image: "/images/projects/event-booking.jpg",
    problemTag: "Problem Solved",
    description: "Built a high-concurrency Event Booking Platform in Java and Spring Boot to manage real-time ticket reservations, booking history, event lifecycles, and seat availability.",
    bullets: [
      "Implemented REST APIs for event creation, updating, viewing, and deleting using Spring Boot.",
      "Designed and managed MySQL & PostgreSQL database tables for users, events, and booking details using Spring Data JPA.",
      "Implemented transactional seat booking, booking history auditing, and conflict resolution."
    ],
    tech: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "REST APIs", "Maven"]
  },
  {
    id: "02",
    title: "Hospital Management System",
    date: "Jan 2026 – Mar 2026",
    badge: "Backend API",
    glowGradient: "from-emerald-400 via-teal-400 to-indigo-500",
    glowShadow: "rgba(16, 185, 129, 0.4)",
    image: "/images/projects/hospital-management.jpg",
    problemTag: "Problem Solved",
    description: "Full-stack healthcare backend platform managing patient registration, doctor scheduling, clinical appointments, and automated medical records billing.",
    bullets: [
      "Developed a hospital management application using Java and Spring Boot to manage patients, doctors, and appointments.",
      "Implemented REST APIs for patient registration, doctor management, and appointment scheduling.",
      "Designed and managed relational database tables for patients, doctors, and medical billing records using Spring Data JPA."
    ],
    tech: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "MySQL", "REST APIs"]
  }
];

export default function Projects() {
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
      id="projects-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-transparent z-10"
    >
      {/* Section Header */}
      <div className="w-full mb-10 sm:mb-14 flex items-end justify-between border-b border-theme-border/50 pb-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-1 pl-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            PROJECTS
          </span>
          <h2
            ref={titleRef}
            className="pj-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase will-change-transform"
          >
            selected work
          </h2>
        </div>
        <div className="text-xs font-semibold tracking-wider text-fg-muted uppercase font-mono">
          02 Production Projects
        </div>
      </div>

      {/* 2 Projects Grid: Side-by-Side on Desktop, Stacked on Mobile (100% visible, no cut-off) */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 max-w-7xl mx-auto items-stretch">
        {PROJECTS.map((proj) => (
          <article
            key={proj.id}
            className="project-card relative bg-[#1a1d24] border border-white/10 rounded-[22px] p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
            style={{
              boxShadow: `0 20px 40px -15px rgba(0, 0, 0, 0.45), 0 0 24px -6px ${proj.glowShadow}`
            }}
          >
            {/* Top Glowing Gradient Accent Line */}
            <div
              className={`absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r ${proj.glowGradient} rounded-t-[22px]`}
              style={{
                boxShadow: `0 0 14px ${proj.glowShadow}`
              }}
            />

            {/* Top Meta Row */}
            <div>
              <div className="flex items-center justify-between gap-2 pt-1 mb-3">
                <span className="text-amber-300 font-bold text-xs sm:text-[13px] tracking-wide font-mono">
                  {proj.date}
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400">
                    {proj.badge}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/15 text-amber-200/90 flex items-center gap-1 cursor-default">
                    <span>Details</span>
                    <span>↗</span>
                  </span>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                {proj.title}
              </h3>

              {/* Preview Image with "Problem Solved" floating badge */}
              <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-white/10 my-4 bg-black/60 shadow-inner group">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Floating Pill Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#2a1b3d]/90 backdrop-blur-md text-amber-200 border border-purple-400/40 flex items-center gap-1.5 shadow-lg">
                  <span>💡</span>
                  <span>{proj.problemTag}</span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3">
                {proj.description}
              </p>

              {/* Resume Bullets */}
              <ul className="flex flex-col gap-2 mb-4">
                {proj.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Pills */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/15 text-zinc-300 hover:border-white/30 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
