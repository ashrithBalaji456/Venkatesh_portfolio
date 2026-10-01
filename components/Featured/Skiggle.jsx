"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Skiggle({ containerRef }) {
  const pathRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  // Draws progressively from About section (0.18) down through Projects section (1.0)
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.18, 1]);

  return (
    <svg
      className="squigggle absolute top-0 left-1/2 -translate-x-1/2 w-[125vw] max-w-[1920px] h-full z-0 pointer-events-none opacity-85"
      viewBox="-200 0 1950 2480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMin slice"
    >
      <motion.path
        ref={pathRef}
        d="M -189.5 31.5 C -189.5 31.5 -81.5 179 82.5 66 C 246.5 -47 707.5 167.5 677.5 547.5 C 647.5 927.5 396 976.3 260 993 C 106.8 1011.8 65.5 916.5 64 866.5 C 73.2 792.5 146.4 676.4 366 804 C 640.5 963.5 642.5 1175.5 827 1142.5 C 1011.5 1109.5 972.5 908.5 1145.5 942.5 C 1318.5 976.5 1300 1279.5 1413 1288.5 C 1503.4 1295.7 1563.5 1002.5 1588 1052.5 C 1615 1115 1530 1230 1380 1310 C 1200 1400 860 1350 650 1445 C 430 1545 235 1710 185 1890 C 130 2070 270 2220 510 2270 C 760 2320 1060 2190 1275 2250 C 1460 2305 1600 2385 1720 2450"
        style={{
          pathLength,
          strokeWidth: 48,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
        stroke="url(#paint0_linear_ribbon)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_ribbon"
          x1="-100"
          y1="50"
          x2="1700"
          y2="2450"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#0016EC" />
          <stop offset="35%" stopColor="#1D4ED8" />
          <stop offset="70%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
