"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    id: "01",
    title: "Online Event Booking System – Backend",
    timeline: "Aug 2026 – Dec 2026",
    category: "High-Concurrency Booking Engine & REST Architecture",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "REST APIs"
    ],
    image: "/images/projects/event-booking.jpg",
    bullets: [
      "Developed an online event booking application using Java and Spring Boot to manage events, users, and ticket reservations.",
      "Implemented REST APIs for event creation, updating, viewing, and deleting using Spring Boot.",
      "Designed and managed MySQL database tables for users, events, and booking details using Spring Data JPA.",
      "Implemented ticket booking, booking history, and event availability features to improve the user experience."
    ],
    badge: "Enterprise Architecture • Private Production Codebase"
  },
  {
    id: "02",
    title: "Hospital Management System – Backend",
    timeline: "Jan 2026 – Mar 2026",
    category: "Clinical Data Platform & Healthcare Operations",
    tech: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "PostgreSQL",
      "MySQL",
      "REST APIs"
    ],
    image: "/images/projects/hospital-management.jpg",
    bullets: [
      "Developed a hospital management application using Java and Spring Boot to manage patients, doctors, and appointments.",
      "Implemented REST APIs for patient registration, doctor management, and appointment scheduling.",
      "Designed and managed MySQL database tables for patients, doctors, appointments, and medical records using Spring Data JPA.",
      "Implemented patient record management, appointment tracking, and billing features to improve hospital operations."
    ],
    badge: "Enterprise Architecture • Private Production Codebase"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getDist = () => {
        return Math.max(track.scrollWidth - window.innerWidth + 140, 300);
      };

      // Pin the section and glide the 2 project cards horizontally to the LEFT on scroll
      gsap.to(track, {
        x: () => -getDist(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(getDist() * 1.35, window.innerHeight * 1.3)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Heading glides smoothly to the left on scroll
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: -60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(getDist() * 1.35, window.innerHeight * 1.3)}`,
            scrub: 0.8,
          },
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects-section"
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden select-none flex flex-col justify-between py-6 sm:py-8 bg-transparent"
    >
      {/* Section Header */}
      <div className="w-full px-6 sm:px-12 lg:px-20 flex items-end justify-between border-b border-theme-border/60 pb-3 flex-shrink-0">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            PROJECTS
          </span>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase will-change-transform"
          >
            selected work
          </h2>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-wider text-fg-muted uppercase">
          <span>Scroll to explore projects</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Horizontal Curved Glass Cards Track */}
      <div className="w-full flex-grow flex items-center overflow-hidden my-auto py-2">
        <div
          ref={trackRef}
          className="flex items-center gap-8 sm:gap-12 pl-6 sm:pl-14 lg:pl-20 pr-16 sm:pr-32 will-change-transform"
          style={{ width: "max-content" }}
        >
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className="glass-card w-[88vw] sm:w-[620px] lg:w-[700px] xl:w-[740px] max-h-[76vh] flex-shrink-0 p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Soft ambient glass specular sheen */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/30 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-white/20 rounded-full blur-3xl pointer-events-none" />

              {/* Card Top: Number, Category, Timeline */}
              <div className="flex flex-col gap-3 relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base sm:text-lg font-extrabold text-accent">
                      {proj.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#242732]">
                      {proj.category}
                    </span>
                  </div>
                  <span className="glass-pill px-3.5 py-1 text-[11px] sm:text-xs font-mono font-bold text-[#111317] rounded-full">
                    {proj.timeline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111317] leading-tight">
                  {proj.title}
                </h3>

                {/* Glass Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="glass-pill px-3 py-0.5 text-xs font-semibold text-[#111317] rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Preview Image Banner */}
              {proj.image && (
                <div className="w-full h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/60 my-3 flex-shrink-0 shadow-md bg-black/5 relative z-10">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Resume Bullet Points (No inner scrollbar, clear legible text) */}
              <ul className="flex flex-col gap-2 sm:gap-2.5 my-2 relative z-10">
                {proj.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0 shadow-sm" />
                    <p className="text-xs sm:text-sm lg:text-[14px] leading-relaxed text-[#161820] font-medium">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Card Footer: Enterprise Status (No broken repo links) */}
              <div className="pt-3 border-t border-white/40 flex items-center justify-between flex-wrap gap-2 text-xs font-semibold text-[#282c38] relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[#111317] font-bold">Enterprise Architecture Verified</span>
                </div>
                <span className="font-mono text-[#282c38]">
                  Private Production Codebase
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Section Bottom Indicator */}
      <div className="w-full px-6 sm:px-12 lg:px-20 flex items-center justify-between text-xs text-fg-muted font-medium flex-shrink-0">
        <span>02 Production Projects (Online Event Booking &amp; Hospital Management)</span>
        <span className="font-mono text-[11px]">Scroll down for Contact ↓</span>
      </div>
    </section>
  );
}
