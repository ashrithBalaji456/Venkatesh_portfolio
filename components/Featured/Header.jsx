"use client";
import React, { useEffect, useState, useRef } from "react";
import { a, useSpring } from "@react-spring/web";
import { motion, useScroll, useTransform } from "framer-motion";
import { Trail } from "./TrailText";

export default function Header() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const x2 = useTransform(scrollYProgress, [0, 1], [20, 0]);

  const [open, set] = useState(false);
  useEffect(() => { set(true); }, []);
  const [horizontal, api] = useSpring(() => ({ from: { transform: 'translateX(5%)' } }));

  return (
    <div
      ref={containerRef}
      className="w-full z-10 relative px-4 md:px-0 md:pl-6 font-semibold text-5xl sm:text-6xl md:text-[9rem] text-center md:text-left leading-[0.95] md:leading-none"
      style={{ letterSpacing: "-0.07em" }}
    >
      <Trail callback={(isOpen) => api.start({ transform: `translateX(${isOpen ? '-3%' : '0%'})` })}>
        <motion.div style={{ x: x1 }}>
          <a.div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap" style={horizontal}>
            <div>Building&nbsp;</div><div>Real&nbsp;</div>
          </a.div>
        </motion.div>
        <motion.div style={{ x: x2 }}>
          <div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap">
            <div>Digital&nbsp;</div><div>Systems&nbsp;</div>
          </div>
        </motion.div>
      </Trail>
    </div>
  );
}
