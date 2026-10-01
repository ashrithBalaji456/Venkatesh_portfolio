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

  const [isMuted, setIsMuted] = useState(false);
  const userManuallyMutedRef = useRef(false);

  // Unmute function to enable audio with browser autoplay compliance
  const unmuteAudio = () => {
    if (userManuallyMutedRef.current || !videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.volume = 1.0;
    const playPromise = videoRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser strictly requires user gesture, keep video playing and wait for first tap/click
          if (videoRef.current && !userManuallyMutedRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
            setIsMuted(true);
          }
        });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
    gsap.set(videoContainerRef.current, { autoAlpha: 0, scale: 1.05 });

    const tl = gsap.timeline({
      onComplete: () => {
        setLoaderDone(true);
        document.body.style.overflow = "";
        // Unmute audio when loader completes
        if (!userManuallyMutedRef.current && videoRef.current) {
          unmuteAudio();
        }
      },
    });

    tl.to(loaderRef.current, { y: "-100%", duration: 1.1, ease: "power3.out" }, "start+=2.6");
    tl.to(videoContainerRef.current, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power2.out" }, "start+=2.8");

    const t1 = setTimeout(() => setCurrentText("वेंकटेश्वर पोर्टफोलियो"), 900);
    const t2 = setTimeout(() => setCurrentText("VENKATESWARLU PORTFOLIO"), 1800);

    // Sync play/pause state with HTML video element events
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setIsPlaying(true);
        setIsMuted(false);
      }).catch(() => {
        // Fallback to muted playback if browser restricts sound before gesture
        if (video && !userManuallyMutedRef.current) {
          video.muted = true;
          video.play().then(() => setIsPlaying(true)).catch(() => {});
          setIsMuted(true);
        }
      });

      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);

      // Listen for any user gesture anywhere to immediately unmute
      const handleFirstInteraction = () => {
        if (userManuallyMutedRef.current) return;
        if (videoRef.current) {
          videoRef.current.muted = false;
          videoRef.current.volume = 1.0;
          videoRef.current.play().catch(() => {});
          setIsMuted(false);
        }
        removeInteractionListeners();
      };

      const interactionEvents = ["click", "touchstart", "pointerdown", "keydown", "wheel", "scroll"];
      const removeInteractionListeners = () => {
        interactionEvents.forEach((evt) => window.removeEventListener(evt, handleFirstInteraction));
      };
      interactionEvents.forEach((evt) =>
        window.addEventListener(evt, handleFirstInteraction, { once: true, passive: true })
      );

      return () => {
        tl.kill();
        clearTimeout(t1);
        clearTimeout(t2);
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
        removeInteractionListeners();
        document.body.style.overflow = "";
      };
    }

    return () => {
      tl.kill();
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  const handleLoaderClick = () => {
    unmuteAudio();
  };

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
    if (videoRef.current.paused) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  };

  const toggleSound = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    if (nextMuted) {
      userManuallyMutedRef.current = true;
    } else {
      userManuallyMutedRef.current = false;
    }
    videoRef.current.muted = nextMuted;
    videoRef.current.volume = nextMuted ? 0 : 1.0;
    setIsMuted(nextMuted);
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Intro Loader */}
      <div
        id="loader"
        ref={loaderRef}
        onClick={handleLoaderClick}
        style={{
          background: "linear-gradient(115deg, #c0c1c4 0%, #b0b1b5 30%, #9e9fa3 55%, #8f9092 100%)",
          zIndex: 100002,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center px-4"
        >
          <img
            src="/avatar-logo.png"
            alt="Venkateswarlu Kaki"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-theme-border mb-6 object-cover object-top shadow-2xl"
          />
          <div className="h-12 flex items-center justify-center overflow-hidden">
            <motion.div
              key={currentText}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
              className="text-fg text-2xl sm:text-4xl font-extrabold tracking-widest uppercase"
            >
              {currentText}
            </motion.div>
          </div>
          <div className="mt-4 px-3.5 py-1.5 rounded-full bg-black/25 text-fg text-xs font-semibold flex items-center gap-2 border border-theme-border/50 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
            </svg>
            <span>Tap anywhere to start with sound</span>
          </div>
        </motion.div>
      </div>

      {/* Hero Section */}
      <section id="hero-section" ref={sectionRef} className="relative w-full h-screen min-h-[600px] overflow-hidden select-none bg-transparent">
        {/* Dynamic Background with Rich Video Presence & Seamless Blend */}
        <div ref={videoContainerRef} className="absolute inset-0 w-full h-full bg-transparent overflow-hidden">
          <video
            ref={videoRef}
            src="/hero-bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-85 transition-opacity duration-700 pointer-events-none"
          />
          {/* Subtle Ambient Side Gradient & Crisp Bottom Seam without Milky Blur */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#c0c1c4]/75 via-transparent to-[#8f9092]/25 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#9e9fa3] to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate={loaderDone ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-20 z-10 max-w-[560px] p-6 rounded-2xl bg-bg/85 lg:bg-transparent lg:p-0 backdrop-blur-md lg:backdrop-blur-none"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-xs font-bold tracking-[0.25em] text-fg uppercase">
              HELLO, I'M VENKATESWARLU
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </motion.div>

          <div className="w-12 h-[1.5px] bg-fg/30 mb-6" />

          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black uppercase leading-[1.05] tracking-tight text-fg mb-6">
            JAVA BACKEND <br />
            &amp; SPRING BOOT <br />
            <span className="text-fg-muted font-bold">SYSTEMS DEVELOPER</span>
          </h1>

          <p className="text-sm sm:text-base text-fg font-medium leading-relaxed mb-8 max-w-[46ch]">
            Building robust REST APIs, layered microservices architectures, and high-performance database solutions with PostgreSQL &amp; Spring Data JPA.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <a
              href="#projects-section"
              onClick={handleScrollToWork}
              className="px-6 py-3.5 bg-btn-dark-bg text-btn-dark-text border border-theme-border rounded-full text-xs font-semibold flex items-center gap-2 hover:bg-accent hover:text-fg transition-all shadow-lg active:scale-95"
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
              className="text-xs font-semibold border-b border-theme-border text-fg-muted py-1 flex items-center gap-1.5 hover:text-fg hover:border-fg transition-colors"
            >
              <span>Download Resume</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Floating Sound & Video Controls - positioned directly over bottom-right logo */}
        <div className="absolute bottom-11 sm:bottom-14 right-5 sm:right-8 z-20 flex items-center gap-2 p-1.5 sm:p-2 rounded-full bg-[#121619]/92 backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.65)]">
          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={toggleSound}
            aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all shadow-md active:scale-95 cursor-pointer backdrop-blur-md border ${
              isMuted
                ? "bg-bg-alt/90 border-theme-border text-fg hover:bg-accent hover:text-fg"
                : "bg-[#18392b] border-emerald-500/50 text-[#86efac]"
            }`}
          >
            {isMuted ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
                <span>UNMUTE AUDIO</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
                <span>MUTE AUDIO</span>
                <span className="flex items-center gap-0.5 ml-0.5">
                  <span className="w-1 h-3 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-4 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </span>
              </>
            )}
          </button>

          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="flex items-center gap-1.5 bg-bg-alt/90 border border-theme-border px-3.5 py-2 rounded-full text-fg hover:bg-accent hover:text-fg transition-all active:scale-95 shadow-md cursor-pointer backdrop-blur-md"
          >
            {isPlaying ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase">PAUSE</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase">PLAY</span>
              </>
            )}
          </button>
        </div>
      </section>
    </>
  );
}
