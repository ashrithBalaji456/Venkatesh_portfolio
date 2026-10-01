"use client";
import React from "react";

const Icon = ({ children }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

export default function SiteFooter() {
  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = "venkateswarlukaki16@gmail.com";
    const isMobile = typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <footer id="main-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h1 className="f-logo">VENKATESH</h1>
          <p className="f-desc">
            Java Backend Developer &amp; Systems Engineer. <br />
            Building robust REST APIs and scalable enterprise systems with Spring Boot and PostgreSQL.
          </p>
          <div className="f-socials">
            {/* GitHub */}
            <a
              href="https://github.com/venkateswarlu-maker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub Profile"
            >
              <Icon>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
              </Icon>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/venkateswarlu16/?isSelfProfile=false"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Icon>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </Icon>
            </a>
            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=venkateswarlukaki16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleEmailClick}
              aria-label="Send Email"
              title="Send email"
            >
              <Icon>
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </Icon>
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/916281537725"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Chat"
              title="WhatsApp Chat"
            >
              <Icon>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </Icon>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="f-col">
            <h3>BACKEND PROJECTS</h3>
            <a href="https://github.com/venkateswarlu-maker" target="_blank" rel="noopener noreferrer">
              Event Booking Engine
            </a>
            <a href="https://github.com/venkateswarlu-maker" target="_blank" rel="noopener noreferrer">
              Hospital Management ERP
            </a>
            <a href="https://github.com/venkateswarlu-maker" target="_blank" rel="noopener noreferrer">
              Salesforce CRM Sync
            </a>
            <a href="https://github.com/venkateswarlu-maker" target="_blank" rel="noopener noreferrer">
              Layered CRUD Architecture
            </a>
          </div>
          <div className="f-col">
            <h3>CONNECT &amp; CREDENTIALS</h3>
            <a href="https://www.linkedin.com/in/venkateswarlu16/?isSelfProfile=false" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
            <a href="https://github.com/venkateswarlu-maker" target="_blank" rel="noopener noreferrer">
              GitHub Repositories
            </a>
            <a href="/Venkateswarlu_Kaki_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
              Download Resume
            </a>
            <a href="#contact-section">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Venkateswarlu Kaki. All rights reserved.</p>
        <p>Hyderabad, India • Java &amp; Spring Boot Developer</p>
      </div>
    </footer>
  );
}
