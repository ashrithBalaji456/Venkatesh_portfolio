"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Cloud, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

export default function Certifications() {
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
      id="certifications-section"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-transparent z-10"
    >
      {/* Section Header */}
      <div className="w-full mb-10 sm:mb-14 flex items-end justify-between border-b border-theme-border/50 pb-4 max-w-7xl mx-auto">
        <div className="flex flex-col gap-1 pl-1">
          <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-fg-muted">
            CREDENTIALS
          </span>
          <h2
            ref={titleRef}
            className="pj-title text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-fg lowercase will-change-transform"
          >
            certifications
          </h2>
        </div>
        <div className="text-xs font-semibold tracking-wider text-fg-muted uppercase font-mono">
          01 Verified Credential
        </div>
      </div>

      {/* Single Featured Certification Card */}
      <div className="w-full max-w-4xl mx-auto">
        <article
          className="relative bg-[#1a1d24] border border-white/10 rounded-[24px] p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
          style={{
            boxShadow:
              "0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 24px -6px rgba(14, 165, 233, 0.35)",
          }}
        >
          {/* Top Glowing Gradient Accent Line matching Salesforce Sky Blue */}
          <div
            className="absolute top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 rounded-t-[24px]"
            style={{
              boxShadow: "0 0 14px rgba(14, 165, 233, 0.6)",
            }}
          />

          {/* Top Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1 mb-6 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                <Cloud className="w-5 h-5" />
              </div>
              <div>
                <span className="text-amber-300 font-bold text-xs sm:text-sm tracking-wide font-mono">
                  Apr 2025
                </span>
                <div className="text-[11px] text-zinc-400 font-mono">Issuing Authority</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Credential</span>
              </span>
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/15 text-zinc-300 flex items-center gap-1">
                <span>Salesforce</span>
              </span>
            </div>
          </div>

          {/* Credential Title & Details */}
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                Salesforce Certification
              </h3>
            </div>
            <p className="text-sm sm:text-base font-semibold text-sky-400/90 flex items-center gap-2">
              <span>Salesforce</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-300 font-normal">Cloud Platform &amp; Architecture</span>
            </p>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mt-1">
              Professional credential certified by Salesforce, demonstrating proven competencies in cloud CRM architectures, business process automation, secure relational data modeling, role-based access hierarchies, and enterprise RESTful API integrations.
            </p>
          </div>

          {/* Key Verified Competencies */}
          <div className="mb-6 bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5">
            <div className="text-xs uppercase tracking-wider font-bold text-zinc-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Core Competencies Validated</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <li className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                <span>Cloud Platform &amp; Custom Object Data Modeling</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                <span>Workflow Rules &amp; Business Process Automation</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                <span>Enterprise Security &amp; Role Hierarchy Governance</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                <span>External System Integration via REST APIs</span>
              </li>
            </ul>
          </div>

          {/* Bottom Tech Pills & Verified Badge */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {[
                "Salesforce",
                "Cloud Architecture",
                "CRM Data Modeling",
                "Process Automation",
                "REST APIs",
                "Security Controls"
              ].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/15 text-zinc-300 hover:border-white/30 transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 font-mono">
              <span>Official License</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
