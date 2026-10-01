"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PROJECTS = [
  {
    name: "Online Event Booking System",
    href: "https://github.com/venkateswarlukaki",
    role: "Java • Spring Boot • Spring Data JPA • PostgreSQL • REST APIs",
    kind: "Backend",
    note: "Engineered scalable event booking backend managing events, ticket reservations, booking history, and real-time seat availability.",
    image: "/images/projects/event-booking.jpg"
  },
  {
    name: "Hospital Management System",
    href: "https://github.com/venkateswarlukaki",
    role: "Java • Spring Boot • Hibernate • PostgreSQL • REST APIs",
    kind: "Backend",
    note: "Healthcare backend platform managing patient registration, doctor scheduling, appointment tracking, and automated billing records.",
    image: "/images/projects/hospital-management.jpg"
  },
  {
    name: "Salesforce CRM Integration Engine",
    href: "https://github.com/venkateswarlukaki",
    role: "Salesforce Certified • REST APIs • Enterprise Workflows",
    kind: "Enterprise",
    note: "Automated business workflows and integrated external RESTful endpoints with Salesforce CRM ecosystem.",
    image: null
  },
  {
    name: "Layered CRUD & API Test Suite",
    href: "https://github.com/venkateswarlukaki",
    role: "Spring Boot • Postman • Maven • Layered Architecture",
    kind: "API Suite",
    note: "Production-ready Controller-Service-Repository architecture with global exception handling, DTO mapping, and Postman collections.",
    image: null
  }
];

const VENTURES = [
  {
    name: "Enterprise RESTful API Architectures",
    role: "Controller-Service-Repository Pattern",
    href: "https://github.com/venkateswarlukaki",
    kind: "Capability",
    note: "Clean layered backend systems featuring robust validation, standardized responses, and automated Postman test suites."
  },
  {
    name: "Relational Database Design & Tuning",
    role: "PostgreSQL & MySQL Data Engineering",
    href: "https://github.com/venkateswarlukaki",
    kind: "Capability",
    note: "Optimized table schemas, normalization, foreign keys, indexing, and high-performance Spring Data JPA queries."
  },
  {
    name: "High-Concurrency Booking Engines",
    role: "Transactional Integrity & Concurrency",
    href: "https://github.com/venkateswarlukaki",
    kind: "Capability",
    note: "Event ticket reservation workflows with inventory tracking, conflict resolution, and booking history auditing."
  },
  {
    name: "Automated Testing & Build Automation",
    role: "Maven, Git, GitHub & Postman",
    href: null,
    kind: "Capability",
    note: "Streamlined Maven project dependencies, version control best practices, and repeatable testing workflows."
  }
];

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href);
  const Wrapper = hasLink ? "a" : "div";

  return (
    <li className="pj-row">
      <Wrapper
        className={`pj-link${hasLink ? "" : " pj-link--static"}`}
        {...(hasLink ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
      >
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-14 sm:w-28 sm:h-18 object-contain shrink-0 bg-bg-alt/60 border border-theme-border rounded-xl"
          />
        )}
        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note">{item.note}</span>}
        </div>
        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow">
          {hasLink ? (
            <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17 17 7m-9 0h9v9" />
            </svg>
          ) : (
            "•"
          )}
        </span>
      </Wrapper>
    </li>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".pj-row"), {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Move headings to the right when scrolling down, matching the first heading
      const heads = sectionRef.current.querySelectorAll(".pj-head");
      heads.forEach((head) => {
        const title = head.querySelector(".pj-title");
        if (!title) return;
        gsap.to(title, {
          x: 75,
          ease: "power1.out",
          scrollTrigger: {
            trigger: head,
            start: "top 95%",
            end: "bottom 15%",
            scrub: 0.8,
          },
        });
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div className="pj-head">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>
      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row key={p.name} item={p} index={i} />
        ))}
      </ul>
      <div id="ventures" className="pj-head pj-head--secondary mt-16 sm:mt-24">
        <span className="pj-label">WHAT I BUILD</span>
        <h2 className="pj-title">capabilities &amp; systems</h2>
      </div>
      <ul className="pj-list">
        {VENTURES.map((v, i) => (
          <Row key={v.name} item={v} index={i} />
        ))}
      </ul>
    </section>
  );
}
