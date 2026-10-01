"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function FeaturedVideo({ refForward, ...props }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: refForward, layoutEffect: false });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (val) => setProgress(val));

  return (
    <motion.div
      ref={ref}
      variants={{ initial: { scale: 1 }, animate: { scale: 1.05 } }}
      initial="initial"
      animate={progress > 0.5 ? "animate" : "initial"}
      className="relative w-full aspect-[3/4] md:aspect-[856/1024] overflow-hidden rounded-3xl shadow-2xl z-30 bg-gradient-to-br from-bg-alt to-[#181d2e] border border-theme-border/60 group"
      {...props}
    >
      <img
        src="/venkatesh-photo.png"
        alt="Venkateswarlu Kaki"
        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        onError={(e) => {
          e.target.src = '/avatar-logo.jpg';
        }}
      />
      {/* Decorative developer overlay card */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-90 pointer-events-none" />
      <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-bg-alt/90 backdrop-blur-md border border-theme-border flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-widest font-bold text-accent">BACKEND ENGINEER</span>
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <div className="font-bold text-lg text-fg tracking-tight">Venkateswarlu Kaki</div>
        <div className="text-xs text-fg-muted font-mono">Java • Spring Boot • PostgreSQL</div>
      </div>
    </motion.div>
  );
}
