"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECT_CARDS = [
  {
    id: "01",
    title: "Online Event Booking System – Backend",
    timeline: "Aug 2026 – Dec 2026",
    category: "Distributed Backend & Booking Engine",
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
    highlights: [
      { label: "Architecture", val: "Layered (Controller-Service-Repo)" },
      { label: "Data Integrity", val: "Transactional Consistency" },
      { label: "Status", val: "Production Architecture • Private System" }
    ]
  },
  {
    id: "02",
    title: "Hospital Management System – Backend",
    timeline: "Jan 2026 – Mar 2026",
    category: "Healthcare Operations & Records Platform",
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
    highlights: [
      { label: "Modules", val: "Patient, Doctor, Appointment & Billing" },
      { label: "Security & ORM", val: "Hibernate ORM & Spring Data" },
      { label: "Status", val: "Production Architecture • Private System" }
    ]
  },
  {
    id: "03",
    title: "Salesforce CRM Integration Engine",
    timeline: "Enterprise System",
    category: "Enterprise Cloud & REST Integrations",
    tech: [
      "Salesforce Certified",
      "Spring Boot",
      "RESTful APIs",
      "Webhook Handlers",
      "OAuth 2.0",
      "Postman"
    ],
    image: null,
    bullets: [
      "Automated enterprise business workflows and seamless bidirectional data sync between internal databases and Salesforce CRM.",
      "Engineered secure, rate-limited REST integration endpoints for real-time customer and lead data ingestion.",
      "Built resilient error recovery pipelines, automated payload validation, and comprehensive audit logs for mission-critical operations."
    ],
    highlights: [
      { label: "Certification", val: "Salesforce Certified Developer" },
      { label: "API Standard", val: "Enterprise REST & Webhooks" },
      { label: "Status", val: "Enterprise Architecture • Private System" }
    ]
  },
  {
    id: "04",
    title: "Production Layered CRUD & API Test Suite",
    timeline: "Core Backend Standard",
    category: "Standardized Framework & Tooling",
    tech: [
      "Spring Boot",
      "Controller-Service-Repo",
      "Postman",
      "Maven",
      "JUnit 5",
      "Global Exception Handling"
    ],
    image: null,
    bullets: [
      "Architected clean, decoupled Layered Architecture featuring DTO mappers, standardized JSON response structures, and centralized @ControllerAdvice error handling.",
      "Configured automated Postman test suites and CI-friendly Maven build lifecycles for repeatable endpoint regression testing.",
      "Enforced strict relational schema modeling, foreign key cascades, and high-efficiency indexed JPA query execution."
    ],
    highlights: [
      { label: "Pattern", val: "Controller-Service-Repository" },
      { label: "Testing", val: "Automated Postman & JUnit" },
      { label: "Status", val: "Backend Framework • Private System" }
    ]
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
      const getScrollDistance = () => {
        // Distance needed to scroll all cards completely into view
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        return Math.max(trackWidth - windowWidth + 120, 0);
      };

      const dist = getScrollDistance();

      // Pin the section and animate track moving horizontally to the LEFT on scroll down
      const tween = gsap.to(track, {
        x: () => -dist,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.max(dist * 1.15, window.innerHeight * 1.5)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Move heading smoothly left as you scroll down
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          x: -60,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${Math.max(dist * 1.15, window.innerHeight * 1.5)}`,
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
      className="relative w-full h-screen min-h-[680px] overflow-hidden select-none flex flex-col justify-between py-6 sm:py-10 bg-transparent"
    >
      {/* Section Header */}
      <div className="w-full px-6 sm:px-12 lg:px-20 flex items-end justify-between border-b border-theme-border/60 pb-4 flex-shrink-0">
        <div className="flex flex-col gap-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            PROJECTS &amp; SYSTEMS
          </span>
          <h2
            ref={titleRef}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase will-change-transform"
          >
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

      {/* Horizontal Cards Track */}
      <div className="w-full flex-grow flex items-center overflow-hidden my-auto py-2">
        <div
          ref={trackRef}
          className="flex items-center gap-6 sm:gap-10 pl-6 sm:pl-12 lg:pl-20 pr-16 sm:pr-32 will-change-transform"
          style={{ width: "max-content" }}
        >
          {PROJECT_CARDS.map((proj) => (
            <article
              key={proj.id}
              className="w-[86vw] sm:w-[560px] lg:w-[620px] xl:w-[660px] h-[520px] sm:h-[540px] max-h-[72vh] flex-shrink-0 bg-bg-alt/90 backdrop-blur-md border border-theme-border/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl hover:border-accent transition-all duration-300"
            >
              {/* Card Top: Number, Title, Timeline */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm sm:text-base font-bold text-accent">
                      {proj.id}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-xs font-bold uppercase tracking-widest text-fg-muted">
                      {proj.category}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full bg-btn-dark-bg text-btn-dark-text border border-theme-border">
                    {proj.timeline}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-fg leading-snug">
                  {proj.title}
                </h3>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-md bg-bg/85 border border-theme-border text-fg shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Optional Preview Image Banner */}
              {proj.image && (
                <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden border border-theme-border my-2 flex-shrink-0 bg-bg/60">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              )}

              {/* Card Body: Resume Bullet Points */}
              <ul className="flex flex-col gap-2 my-2 overflow-y-auto pr-1">
                {proj.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-[13.5px] leading-relaxed text-fg font-medium">
                      {b}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Card Footer: Architecture & Status (No broken repo links) */}
              <div className="pt-3 border-t border-theme-border/60 flex items-center justify-between flex-wrap gap-2 text-[11px] sm:text-xs font-semibold text-fg-muted">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-fg font-semibold">Enterprise Architecture</span>
                </div>
                <span className="font-mono text-fg-muted">
                  Private Production Codebase
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Section Bottom Indicator */}
      <div className="w-full px-6 sm:px-12 lg:px-20 flex items-center justify-between text-xs text-fg-muted font-medium flex-shrink-0">
        <span>04 Engineered Systems &amp; Architectures</span>
        <span className="font-mono text-[11px]">Next: Contact &amp; Opportunities ↓</span>
      </div>
    </section>
  );
}
