"use client";
import React, { useEffect, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import LetsTalk from "./LetsTalk";
import MenuButton from "./MenuButton";
import Link from "next/link";

const EMAIL = "venkateswarlukaki16@gmail.com";
const WHATSAPP_URL = "https://wa.me/916281537725";
const TELEGRAM_URL = "https://t.me/+916281537725";

const MOBILE_NAV_ITEMS = [
  { label: "HOME", target: "top" },
  { label: "ABOUT", target: "about" },
  { label: "PROJECTS", target: "projects-section" },
  { label: "CONTACT", target: "contact-section" },
];

export default function Navbar() {
  const [rotate, setRotate] = useSpring(() => ({ transform: `rotate(0deg)` }));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, set] = useState(false);

  useEffect(() => { set(true); }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = ""; };
    }
  }, [mobileOpen]);

  const handleMobileNav = (e, target) => {
    e.preventDefault();
    setMobileOpen(false);
    setRotate({ transform: "rotate(0deg)" });
    const section = target === "top" ? 0 : document.getElementById(target);
    const lenis = window.__lenis;
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(section, { duration: 1.4 });
      } else if (section === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      {/* Mobile Top Header */}
      <div className="fixed top-0 left-0 z-[100001] w-full py-5 lg:hidden px-5 backdrop-blur-md bg-bg/80 border-b border-theme-border/40">
        <div className="flex items-center justify-between w-full font-extrabold">
          <Link href="/" onClick={(e) => handleMobileNav(e, "top")} className="flex items-center gap-2.5 cursor-pointer">
            <img
              src="/avatar-logo.png"
              alt="Venkatesh"
              className="w-8 h-8 rounded-full object-cover object-top border border-accent/40 shadow-sm"
            />
            <span className="tracking-wider font-semibold text-lg text-fg">VENKATESH</span>
          </Link>
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="nav_btn_sm flex items-center justify-center cursor-pointer"
            onClick={() => {
              const next = !mobileOpen;
              setMobileOpen(next);
              setRotate({ transform: next ? "rotate(45deg)" : "rotate(0deg)" });
            }}
          >
            <animated.div className="text-[0.55rem] leading-none" style={rotate}>
              {mobileOpen ? "✕" : "⬤ ⬤"}
            </animated.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[100000] lg:hidden transition-opacity duration-300 ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="absolute inset-0 bg-bg" onClick={() => { setMobileOpen(false); setRotate({ transform: "rotate(0deg)" }); }} />
        <div className="relative z-10 h-full w-full flex flex-col pt-24 pb-8 px-6">
          <nav className="flex flex-col gap-1">
            {MOBILE_NAV_ITEMS.map((item, i) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleMobileNav(e, item.target)}
                className="flex items-center justify-between py-4 border-b border-theme-border text-fg text-3xl font-semibold"
              >
                <span>{item.label}</span>
                <span className="text-fg-muted text-base">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-3">
            <p className="text-fg-muted text-xs tracking-[0.2em] uppercase font-semibold">Get in touch</p>
            <a href={`mailto:${EMAIL}`} onClick={() => setMobileOpen(false)} className="flex items-center justify-between bg-fg text-bg rounded-full px-5 py-4 text-sm font-semibold">
              <span>EMAIL DIRECTLY</span><span>↗</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-2 border-fg text-fg rounded-full px-5 py-4 text-sm font-semibold">
              <span>WHATSAPP CHAT</span><span>↗</span>
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-2 border-fg text-fg rounded-full px-5 py-4 text-sm font-semibold">
              <span>TELEGRAM</span><span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed top-0 left-0 w-full px-6 lg:px-20 z-[100001] hidden lg:block">
        <div className="items-start justify-between flex pt-10 pb-8">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/avatar-logo.png"
              alt="Venkatesh"
              className="w-10 h-10 rounded-full object-cover object-top border border-accent/40 shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className="font-AeonikMedium text-2xl tracking-wider text-fg uppercase">VENKATESH.</span>
          </Link>
          <div className="hidden lg:flex items-center justify-around font-AeonikMedium">
            <Trail open={open} className="flex">
              <LetsTalk />
              <MenuButton />
            </Trail>
          </div>
        </div>
      </div>
    </>
  );
}
