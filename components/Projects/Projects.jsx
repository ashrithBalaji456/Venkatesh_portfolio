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
  const trackRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate how far track needs to travel left
      const getTravelDistance = () => {
        const trackW = track.scrollWidth;
        const windowW = window.innerWidth;
        return Math.max(trackW - windowW + 100, 160);
      };

      const travelDist = getTravelDistance();

      // Buttery smooth, responsive GSAP scroll with low scrub and zero lag
      gsap.to(track, {
        x: () => -travelDist,
        ease: "power1.out",
        scrollTrigger: {
          trigger: section,
          start: "top 12%",
          end: () => `+=${Math.min(travelDist * 1.2, 500)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.4, // Snappy 0.4s response, eliminates dragging lag
          anticipatePin: 0,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 overflow-hidden select-none bg-transparent"
    >
      {/* Section Header */}
      <div className="w-full px-6 sm:px-12 lg:px-20 mb-8 sm:mb-12 flex items-end justify-between border-b border-theme-border/50 pb-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            PROJECTS
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase">
            selected work
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wider text-fg-muted uppercase">
          <span>Scroll to explore</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Horizontal Cards Track (Hardware-accelerated, zero lag) */}
      <div className="w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-stretch gap-6 sm:gap-10 pl-6 sm:pl-12 lg:pl-20 pr-12 sm:pr-24"
          style={{ width: "max-content", willChange: "transform", transform: "translateZ(0)" }}
        >
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className="relative w-[88vw] sm:w-[500px] md:w-[540px] lg:w-[560px] bg-[#1a1d24] border border-white/10 rounded-[22px] p-6 sm:p-7 shadow-2xl flex flex-col justify-between overflow-hidden flex-shrink-0 transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                boxShadow: `0 20px 40px -15px rgba(0, 0, 0, 0.4), 0 0 20px -5px ${proj.glowShadow}`
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
                <div className="relative w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-white/10 my-4 bg-black/60 shadow-inner group">
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
              <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5 sm:gap-2">
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
      </div>
    </section>
  );
}
