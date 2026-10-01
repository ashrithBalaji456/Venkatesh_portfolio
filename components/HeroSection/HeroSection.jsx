"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const loaderRef = useRef(null);
  const [loaderDone, setLoaderDone] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentText, setCurrentText] = useState("వెంకటేశ్వర్లు పోర్ట్‌ఫోలియో");

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
    gsap.set(videoContainerRef.current, { autoAlpha: 0, scale: 1.05 });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderDone(true);
        document.body.style.overflow = "";
      },
    });

    tl.to(loaderRef.current, { y: "-100%", duration: 1.1, ease: "power3.out" }, "start+=2.6");
    tl.to(videoContainerRef.current, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "start+=2.8");

    const t1 = setTimeout(() => setCurrentText("वेंकटेश्वर पोर्टफोलियो"), 900);
    const t2 = setTimeout(() => setCurrentText("VENKATESWARLU PORTFOLIO"), 1800);

    return () => {
      tl.kill();
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects-section") || document.getElementById("about");
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.4 });
    } else {
      target?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = false;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Video playback error:", err));
    }
  };

  return (
    <>
      {/* Intro Loader */}
      <div
        id="loader"
        ref={loaderRef}
        style={{
          backgroundColor: "#08080a",
          zIndex: 100002,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-bold text-2xl text-accent mb-6 shadow-2xl">
            VK
          </div>
          <div className="h-12 flex items-center justify-center overflow-hidden">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="text-[#F5F1EA] text-2xl sm:text-4xl font-extrabold tracking-widest uppercase"
            >
              {currentText}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" ref={sectionRef} className="relative w-full h-screen min-h-[600px] overflow-hidden select-none">
        {/* Dynamic Background */}
        <div ref={videoContainerRef} className="absolute inset-0 w-full h-full bg-[#0a0a0e] overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-bg-video.mp4"
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen"
          />
          {/* Subtle Ambient Backend Architecture Glow & Grids */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,22,236,0.25),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate={loaderDone ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-20 z-10 max-w-[560px] p-6 rounded-2xl bg-bg/85 lg:bg-transparent lg:p-0 backdrop-blur-sm lg:backdrop-blur-none"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              HELLO, I'M VENKATESWARLU
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          <div className="w-12 h-[2px] bg-accent mb-6" />

          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black uppercase leading-[1.05] tracking-tight text-fg mb-6">
            JAVA BACKEND <br />
            &amp; SPRING BOOT <br />
            <span className="text-fg-muted/65 font-bold">SYSTEMS DEVELOPER</span>
          </h1>

          <p className="text-xs sm:text-sm text-fg-muted leading-relaxed mb-8 max-w-[44ch]">
            Building robust REST APIs, layered microservices architectures, and high-performance database solutions with PostgreSQL &amp; Spring Data JPA.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="#projects-section"
              onClick={handleScrollToWork}
              className="px-6 py-3.5 bg-fg text-bg rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-accent hover:text-white transition-all shadow-lg active:scale-95"
            >
              <span>View Projects</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <a
              href="/Venkateswarlu_Kaki_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="text-xs font-semibold border-b border-current py-1 flex items-center gap-1.5 hover:text-accent hover:border-accent transition-colors"
            >
              <span>Download Resume</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Sound / Video Controls */}
        <button
          onClick={togglePlay}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-bg-alt/90 border border-theme-border px-4 py-2.5 rounded-full text-fg hover:bg-accent hover:text-white transition-all active:scale-95 shadow-lg cursor-pointer"
        >
          <span className="text-[11px] font-bold tracking-[0.18em] uppercase pr-2">
            {isPlaying ? "PAUSE VIDEO" : "PLAY VIDEO"}
          </span>
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        </button>
      </section>
    </>
  );
}
