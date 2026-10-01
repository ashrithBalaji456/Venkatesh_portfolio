"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Skiggle() {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !pathRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set stroke dasharray to exact length
    path.style.strokeDasharray = `${length}`;
    // Start 100% hidden so NOTHING is pre-drawn before scrolling
    path.style.strokeDashoffset = `${length}`;

    const triggerElem = document.getElementById("experience-flow");
    if (!triggerElem) return;

    // Dynamically draw the ribbon strictly as the user scrolls
    const tween = gsap.fromTo(
      path,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: triggerElem,
          start: "top 65%",
          end: "bottom 35%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      }
    );

    // Refresh after layout and images settle
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 300);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", handleResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="squigggle absolute top-0 left-1/2 -translate-x-1/2 w-[125vw] max-w-[1920px] h-full z-0 pointer-events-none opacity-85"
      viewBox="-200 0 1950 3550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
    >
      <path
        ref={pathRef}
        d="M -120 60 C -20 180, 120 70, 180 80 C 340 100, 720 180, 680 520 C 640 860, 380 940, 240 960 C 80 980, 40 880, 60 820 C 80 740, 200 660, 420 790 C 680 940, 700 1140, 900 1110 C 1080 1080, 1020 900, 1200 930 C 1360 960, 1380 1240, 1480 1260 C 1580 1280, 1640 1040, 1680 1120 C 1720 1220, 1540 1360, 1320 1420 C 1100 1480, 760 1400, 540 1520 C 320 1640, 140 1820, 120 2000 C 100 2180, 280 2300, 540 2260 C 800 2220, 1080 2100, 1280 2200 C 1480 2300, 1600 2400, 1540 2520 C 1480 2640, 1220 2740, 920 2780 C 620 2820, 340 2740, 180 2860 C 40 2960, 30 3100, 120 3220 C 220 3340, 560 3380, 880 3360 C 1200 3340, 1480 3420, 1680 3520"
        stroke="url(#blue_ribbon_dynamic_grand)"
        strokeWidth="48"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          willChange: "stroke-dashoffset",
        }}
      />
      <defs>
        <linearGradient
          id="blue_ribbon_dynamic_grand"
          x1="-100"
          y1="60"
          x2="1700"
          y2="3520"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0016EC" />
          <stop offset="25%" stopColor="#1D4ED8" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="80%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
