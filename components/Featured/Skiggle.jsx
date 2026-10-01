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

    // Prepare stroke dash properties
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Show initial 15% peeking into the hero-to-about section transition
    const startOffset = length * 0.86;
    gsap.set(path, { strokeDashoffset: startOffset });

    // Target the shared experience-flow container spanning About, Projects & Education
    const triggerElem = document.getElementById("experience-flow") || svgRef.current;

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: triggerElem,
        start: "top 85%",
        end: "bottom 75%",
        scrub: 1.2,
        invalidateOnRefresh: true,
      },
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="squigggle absolute top-0 left-1/2 -translate-x-1/2 w-[125vw] max-w-[1920px] h-full z-0 pointer-events-none opacity-85"
      viewBox="-200 0 1950 3500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
    >
      <path
        ref={pathRef}
        d="M -150 40 C -50 180, 80 80, 100 80 C 250 -40, 710 160, 680 540 C 650 920, 390 970, 260 990 C 100 1010, 60 910, 60 860 C 70 790, 150 670, 370 800 C 640 960, 640 1170, 830 1140 C 1010 1110, 970 910, 1150 940 C 1320 980, 1300 1280, 1420 1290 C 1510 1300, 1570 1010, 1600 1060 C 1620 1180, 1480 1320, 1280 1380 C 1080 1440, 720 1360, 520 1480 C 320 1600, 180 1780, 160 1960 C 140 2140, 340 2260, 600 2220 C 860 2180, 1140 2060, 1320 2160 C 1500 2260, 1620 2360, 1540 2480 C 1460 2600, 1180 2720, 880 2760 C 580 2800, 320 2740, 240 2880 C 160 3020, 260 3160, 480 3220 C 700 3280, 1020 3180, 1260 3260 C 1440 3320, 1580 3390, 1720 3450"
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
          y1="40"
          x2="1700"
          y2="3450"
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
