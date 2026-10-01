import { useSpring, a } from "@react-spring/web";
import React, { useEffect, useRef, useState } from "react";

const EMAIL = "venkateswarlukaki16@gmail.com";
const WHATSAPP_URL = "https://wa.me/916281537725";
const TELEGRAM_URL = "https://t.me/+916281537725";
const LINKEDIN_URL = "https://www.linkedin.com/in/venkateswarlu-kaki";
const GITHUB_URL = "https://github.com/venkateswarlukaki";

const scrollToSection = (id) => {
  if (typeof window === "undefined") return;
  const target = id === "top" ? 0 : document.getElementById(id);
  if (target == null) return;
  const lenis = window.__lenis;
  if (lenis && typeof lenis.scrollTo === "function") {
    lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    return;
  }
  if (target === 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Menu = ({ open, onOutsideClick, onClose }) => {
  const ref = useRef();
  const handleChildClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) onOutsideClick(event);
  };

  useEffect(() => {
    document.addEventListener("click", handleChildClick);
    return () => document.removeEventListener("click", handleChildClick);
  }, []);

  const [contents, contentsApi] = useSpring(() => ({ from: { y: 100, opacity: 0, transform: "rotate(20deg)" } }));
  const [news, newsApi] = useSpring(() => ({ from: { y: 100, opacity: 0, transform: "rotate(-20deg)" } }));
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (open === false) {
      setTimeout(() => setHidden(false), 500);
    } else {
      setHidden(true);
    }
    contentsApi.start({ y: open ? 0 : 100, opacity: open ? 1 : 0, transform: open ? `rotate(0deg)` : `rotate(20deg)` });
    newsApi.start({ y: open ? 0 : 100, opacity: open ? 1 : 0, transform: open ? `rotate(0deg)` : `rotate(-20deg)` });
  }, [open]);

  const navItems = [
    { label: "HOME", target: "top" },
    { label: "ABOUT", target: "about" },
    { label: "PROJECTS", target: "projects-section" },
    { label: "EDUCATION", target: "education-section" },
    { label: "CERTIFICATIONS", target: "certifications-section" },
    { label: "CONTACT", target: "contact-section" },
  ];

  const handleNavClick = (e, target) => {
    e.preventDefault();
    scrollToSection(target);
    if (onClose) onClose();
  };

  return (
    <>
      {hidden && (
        <div className="absolute top-[4rem] right-0 w-[20rem] z-[100005]" ref={ref}>
          <a.div className="rounded-xl bg-bg-alt text-fg flex flex-col font-Aeonik text-3xl p-8 shadow-2xl border border-theme-border" style={contents}>
            {navItems.map((item, i) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className={`flex items-center justify-between transition-colors hover:text-brblue cursor-pointer ${
                  i === 0 ? "pb-3" : i === navItems.length - 1 ? "pt-3" : "py-3"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-fg-muted">•</span>
              </a>
            ))}
          </a.div>
          <a.div className="rounded-xl bg-bg-alt text-fg flex flex-col p-8 my-2 shadow-2xl border border-theme-border" style={news}>
            <div className="font-Aeonik text-3xl leading-tight">Got an opportunity?<br />Let's connect.</div>
            <div className="flex flex-col gap-2 mt-5">
              <a
                href="#contact-section"
                onClick={() => onClose && onClose()}
                className="flex items-center justify-between bg-btn-dark-bg text-btn-dark-text border border-theme-border rounded-xl px-4 py-3 text-sm tracking-widest font-semibold transition-transform hover:-translate-y-0.5"
              >
                <span>GET IN TOUCH</span><span>↗</span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                onClick={() => onClose && onClose()}
                className="flex items-center justify-between border border-theme-border bg-bg text-fg rounded-xl px-4 py-3 text-sm tracking-widest font-semibold hover:bg-accent-soft"
              >
                <span>EMAIL ME</span><span>↗</span>
              </a>
            </div>
          </a.div>
        </div>
      )}
    </>
  );
};

export default Menu;
