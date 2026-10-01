<!-- ═══════════════════════════ HEADER ═══════════════════════════ -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=240&section=header&text=Venkatesh%20Portfolio&fontSize=58&fontAlignY=38&desc=Next.js%20%E2%80%A2%20Framer%20Motion%20%E2%80%A2%20GSAP%20%E2%80%A2%20Tailwind%20CSS&descAlignY=60&animation=fadeIn" alt="Venkatesh Portfolio banner" width="100%"/>

<a href="https://github.com/ashrithBalaji456/Venkatesh_portfolio">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3000&pause=900&color=A78BFA&center=true&vCenter=true&multiline=false&width=720&height=50&lines=Hi%2C+I'm+Venkatesh+%F0%9F%91%8B;Developer+%7C+Designer+%7C+Problem+Solver;Building+smooth%2C+animated+web+experiences;Welcome+to+my+developer+portfolio+%F0%9F%9A%80" alt="Typing animation" />
</a>

<br/>

[![Live Demo](https://img.shields.io/badge/%F0%9F%8C%90%20Live%20Demo-Visit%20Site-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://venkateshportfolio-chi.vercel.app)
[![Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashrithBalaji456/Venkatesh_portfolio)

![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-22C55E?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-FF69B4?style=flat-square)

</div>

---

## 📑 Table of Contents

| # | Section | # | Section |
|:-:|---------|:-:|---------|
| 1 | [About](#-about) | 8 | [Data Charts](#-data-charts) |
| 2 | [Features](#-features) | 9 | [Installation](#-installation--setup) |
| 3 | [Tech Stack](#-tech-stack) | 10 | [Scripts](#-available-scripts) |
| 4 | [Architecture & Workflows](#-architecture--workflow-charts) | 11 | [Deployment](#-deployment) |
| 5 | [Project Structure](#-project-structure) | 12 | [Customization](#-customization-guide) |
| 6 | [Page Journey](#-user-journey) | 13 | [Roadmap](#-roadmap) |
| 7 | [Animation Pipeline](#-animation-pipeline) | 14 | [Contributing & Contact](#-contributing) |

---

## 🧑‍💻 About

A modern, **fully animated developer portfolio** built with **Next.js 14 (App Router)** and **React 18**. It combines smooth scrolling, scroll-triggered reveals, spring physics, and 3D-flavoured Tailwind utilities to present projects, skills, and contact details in a polished, responsive interface.

> 🔗 **Live site:** [venkateshportfolio-chi.vercel.app](https://venkateshportfolio-chi.vercel.app)

<div align="center">

```text
┌──────────────────────────────────────────────────────────┐
│   Design  ──►  Build  ──►  Animate  ──►  Ship on Vercel  │
└──────────────────────────────────────────────────────────┘
```

</div>

---

## ✨ Features

<div align="center">

| 🎨 Design | ⚡ Performance | 🎬 Motion | 📱 Responsive |
|:---------:|:-------------:|:---------:|:-------------:|
| Tailwind CSS utility styling | Next.js App Router | Framer Motion transitions | Mobile-first layout |
| Inter font via Fontsource | Optimised builds | GSAP timelines | Fluid typography & grids |
| Lucide icon set | Static + dynamic rendering | React Spring physics | Works on all screen sizes |
| 3D utilities (`tailwindcss-3d`) | Vercel edge delivery | Lenis smooth scroll | Touch-friendly interactions |

</div>

- 🌀 **Smooth scrolling** powered by Lenis
- 👀 **Scroll-triggered reveal animations** via `react-intersection-observer`
- 🧲 **Spring-based micro-interactions** via `@react-spring/web`
- 🎞️ **Timeline animations** via GSAP
- 🧩 **Reusable component architecture** in `/components`
- 🚀 **One-click deploy** to Vercel

---

## 🛠 Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=nextjs,react,tailwind,js,html,css,vercel,git,github,vscode,npm,postcss&perline=12" alt="Tech stack icons" />

</div>

| Layer | Technology | Version | Purpose |
|-------|-----------|:-------:|---------|
| **Framework** | Next.js | `14.2.35` | Routing, SSR/SSG, build tooling |
| **UI Library** | React / React DOM | `^18.3.1` | Component model |
| **Styling** | Tailwind CSS | `^3.3.0` | Utility-first CSS |
| **Styling** | tailwindcss-3d | `^1.1.0` | 3D transform utilities |
| **Styling** | PostCSS + Autoprefixer | `^8.4.38` / `^10.0.1` | CSS processing |
| **Animation** | Framer Motion | `^11.0.3` | Declarative animations & gestures |
| **Animation** | GSAP | `^3.12.5` | Timeline & scroll animation |
| **Animation** | @react-spring/web | `^9.7.3` | Physics-based motion |
| **Scroll** | Lenis | `^1.3.23` | Buttery smooth scrolling |
| **Utility** | react-intersection-observer | `^9.5.3` | Detect elements entering viewport |
| **Icons** | lucide-react | `^1.14.0` | SVG icon set |
| **Font** | @fontsource/inter | `^5.2.5` | Self-hosted Inter font |

---

## 🧭 Architecture & Workflow Charts

### 1️⃣ High-Level System Architecture

```mermaid
flowchart TB
    subgraph Client["🖥️ Browser / Client"]
        U([👤 Visitor])
        UI[React UI Components]
        ANIM[Animation Layer<br/>Framer Motion · GSAP · React Spring]
        SCROLL[Lenis Smooth Scroll]
    end

    subgraph App["⚙️ Next.js 14 App Router"]
        LAYOUT[app/layout.js<br/>Global layout and fonts]
        PAGE[app/page.js<br/>Home page]
        COMP[components/*<br/>Sections]
    end

    subgraph Style["🎨 Styling Pipeline"]
        TW[Tailwind CSS]
        PCSS[PostCSS + Autoprefixer]
        T3D[tailwindcss-3d]
    end

    subgraph Host["☁️ Hosting"]
        GH[(GitHub Repo)]
        VC[Vercel Build and CDN]
    end

    U --> UI
    UI --> ANIM
    UI --> SCROLL
    LAYOUT --> PAGE --> COMP
    COMP --> UI
    TW --> PCSS
    T3D --> TW
    PCSS --> App
    GH -- push to main --> VC
    VC -- serves --> U

    classDef client fill:#312e81,stroke:#a78bfa,color:#fff
    classDef app fill:#0f172a,stroke:#38bdf8,color:#fff
    classDef style fill:#064e3b,stroke:#34d399,color:#fff
    classDef host fill:#4c1d95,stroke:#f472b6,color:#fff
    class U,UI,ANIM,SCROLL client
    class LAYOUT,PAGE,COMP app
    class TW,PCSS,T3D style
    class GH,VC host
```

### 2️⃣ Development → Deployment Workflow

```mermaid
flowchart LR
    A([💡 Idea / Feature]) --> B[📝 Code in VS Code]
    B --> C{🧪 Works locally?<br/>npm run dev}
    C -- No --> B
    C -- Yes --> D[🔍 npm run lint]
    D --> E{Lint passes?}
    E -- No --> B
    E -- Yes --> F[📦 git commit]
    F --> G[⬆️ git push origin main]
    G --> H[🔗 Vercel detects push]
    H --> I[🏗️ next build]
    I --> J{Build OK?}
    J -- No --> K[❌ Fix errors] --> B
    J -- Yes --> L[🚀 Deploy to Production]
    L --> M([🌐 Live Site Updated])

    style A fill:#7c3aed,color:#fff,stroke:#c4b5fd
    style M fill:#16a34a,color:#fff,stroke:#86efac
    style K fill:#dc2626,color:#fff,stroke:#fca5a5
    style L fill:#0ea5e9,color:#fff,stroke:#7dd3fc
```

### 3️⃣ Request / Render Sequence

```mermaid
sequenceDiagram
    autonumber
    actor V as 👤 Visitor
    participant CDN as ☁️ Vercel CDN
    participant N as ⚙️ Next.js
    participant R as ⚛️ React Hydration
    participant A as 🎬 Animation Engines

    V->>CDN: GET venkateshportfolio-chi.vercel.app
    CDN->>N: Serve pre-rendered HTML + JS chunks
    N-->>V: HTML, CSS, fonts (Inter)
    V->>R: Browser hydrates components
    R->>A: Init Lenis, GSAP, Framer Motion
    A-->>V: Smooth scroll enabled
    loop On scroll
        V->>A: Scroll event
        A->>R: Element enters viewport
        R-->>V: Trigger reveal animation
    end
```

### 4️⃣ Git Branching Workflow

```mermaid
gitGraph
    commit id: "init"
    commit id: "setup next + tailwind"
    branch feature/hero
    checkout feature/hero
    commit id: "hero section"
    commit id: "framer animations"
    checkout main
    merge feature/hero
    branch feature/projects
    checkout feature/projects
    commit id: "projects grid"
    commit id: "3d cards"
    checkout main
    merge feature/projects tag: "v0.1.0"
    commit id: "deploy to vercel"
```

### 5️⃣ Component State Machine (Scroll Reveal)

```mermaid
stateDiagram-v2
    [*] --> Hidden
    Hidden --> Observing: Component mounts
    Observing --> Visible: Enters viewport
    Visible --> Animating: Trigger animation
    Animating --> Revealed: Animation complete
    Revealed --> Revealed: Stays visible
    Revealed --> [*]
```

---

## 📂 Project Structure

```text
Venkatesh_portfolio/
├── 📁 app/                  # Next.js App Router (layout, pages, global styles)
├── 📁 components/           # Reusable UI sections & animated components
├── 📁 public/               # Static assets (images, icons, favicon, resume)
├── 📄 .gitignore            # Ignored files
├── 📄 jsconfig.json         # Path aliases (e.g. @/components)
├── 📄 package.json          # Dependencies & scripts
├── 📄 package-lock.json     # Locked dependency tree
├── 📄 postcss.config.js     # PostCSS plugins
└── 📄 tailwind.config.js    # Tailwind theme & plugins
```

```mermaid
mindmap
  root((Portfolio))
    app
      layout
      page
      globals.css
    components
      Hero
      About
      Skills
      Projects
      Contact
      Navbar
      Footer
    public
      images
      icons
      resume
    config
      tailwind.config.js
      postcss.config.js
      jsconfig.json
      package.json
```

> ℹ️ The `app/`, `components/`, and `public/` contents above are typical examples. Adjust the names to match your actual files.

---

## 🚶 User Journey

```mermaid
journey
    title Visitor Experience on the Portfolio
    section Landing
      Open the site: 5: Visitor
      Watch hero animation: 5: Visitor
    section Exploring
      Scroll smoothly through sections: 5: Visitor
      Read About and Skills: 4: Visitor
      Browse Projects: 5: Visitor
    section Engaging
      Click project links: 4: Visitor
      Open GitHub profile: 4: Visitor
    section Converting
      Use Contact section: 5: Visitor
      Reach out for opportunities: 5: Visitor
```

```mermaid
flowchart LR
    L([Landing]) --> H[Hero]
    H --> A[About]
    A --> S[Skills]
    S --> P[Projects]
    P --> C[Contact]
    C --> E([Get in touch 📬])

    style L fill:#7c3aed,color:#fff
    style E fill:#16a34a,color:#fff
```

---

## 🎬 Animation Pipeline

```mermaid
flowchart TD
    START([Page Load]) --> LENIS[Lenis initialises<br/>smooth scroll]
    LENIS --> OBS[react-intersection-observer<br/>watches sections]
    OBS --> Q{Which effect?}
    Q -->|Enter / exit / hover| FM[Framer Motion]
    Q -->|Complex sequence| GS[GSAP Timeline]
    Q -->|Natural physics| RS[React Spring]
    Q -->|3D transforms| T3[tailwindcss-3d]
    FM --> OUT([🎞️ Smooth 60fps UI])
    GS --> OUT
    RS --> OUT
    T3 --> OUT

    style START fill:#7c3aed,color:#fff
    style OUT fill:#16a34a,color:#fff
```

| Library | Best used for | Trigger |
|---------|---------------|---------|
| **Framer Motion** | Page and component transitions, hover and tap | Mount / viewport / gesture |
| **GSAP** | Multi-step timelines, text and scroll effects | Scroll / load |
| **React Spring** | Springy cards, counters, parallax | State change |
| **Lenis** | Inertia scrolling | Wheel / touch |
| **Intersection Observer** | Reveal on scroll | Element visibility |

---

## 📊 Data Charts

> 📌 **Note:** The first chart is based on the real dependencies in `package.json`. The other charts use **illustrative placeholder values**. Replace them with your real numbers (Lighthouse scores, skill levels, etc.).

### 🥧 Dependency Breakdown (from `package.json`)

```mermaid
pie showData
    title Dependencies by Purpose (14 packages)
    "Core Framework (next, react, react-dom)" : 3
    "Animation (framer-motion, gsap, react-spring, lenis)" : 4
    "Styling (tailwind, tailwindcss-3d, postcss, autoprefixer, inter font)" : 5
    "Icons (lucide-react)" : 1
    "Viewport Utility (intersection-observer)" : 1
```

### 📶 Skill Proficiency (illustrative)

```mermaid
xychart-beta
    title "Skill Proficiency (%)"
    x-axis [React, Next.js, JavaScript, Tailwind, Framer, GSAP, Git]
    y-axis "Proficiency" 0 --> 100
    bar [85, 80, 88, 90, 75, 70, 82]
    line [85, 80, 88, 90, 75, 70, 82]
```

### 🚦 Lighthouse Targets (illustrative)

```mermaid
xychart-beta
    title "Lighthouse Score Targets"
    x-axis [Performance, Accessibility, Best Practices, SEO]
    y-axis "Score" 0 --> 100
    bar [92, 96, 95, 98]
```

### 📈 Learning & Growth Over Time (illustrative)

```mermaid
xychart-beta
    title "Technology Experience Growth"
    x-axis [Q1, Q2, Q3, Q4]
    y-axis "Experience Level" 0 --> 100
    line [25, 45, 70, 90]
    line [15, 30, 55, 75]
```

### 🎯 Priority Matrix: Effort vs Impact

```mermaid
quadrantChart
    title Feature Priority Matrix
    x-axis Low Effort --> High Effort
    y-axis Low Impact --> High Impact
    quadrant-1 Plan carefully
    quadrant-2 Do first
    quadrant-3 Maybe later
    quadrant-4 Avoid
    Hero Animation: [0.35, 0.85]
    Projects Showcase: [0.45, 0.9]
    Contact Form: [0.3, 0.75]
    Dark Mode: [0.4, 0.55]
    Blog Section: [0.8, 0.6]
    3D Scene: [0.9, 0.5]
    Easter Eggs: [0.25, 0.2]
```

### 🗓 Project Timeline (Gantt)

```mermaid
gantt
    title Portfolio Development Timeline
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d
    section Planning
    Wireframes & Design        :done,    p1, 2026-01-01, 7d
    section Build
    Project Setup (Next + TW)  :done,    b1, after p1, 3d
    Core Components            :done,    b2, after b1, 10d
    Animations (FM, GSAP)      :done,    b3, after b2, 8d
    section Launch
    Testing & Polish           :active,  l1, after b3, 5d
    Deploy to Vercel           :         l2, after l1, 2d
```

### 🧮 Tech Usage Radar (table view)

| Category | Level | Visual |
|----------|:-----:|--------|
| Frontend Framework | 90% | ![](https://geps.dev/progress/90) |
| Styling / UI | 90% | ![](https://geps.dev/progress/90) |
| Animation | 80% | ![](https://geps.dev/progress/80) |
| Performance | 85% | ![](https://geps.dev/progress/85) |
| Deployment / DevOps | 75% | ![](https://geps.dev/progress/75) |

### 📉 Live GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=ashrithBalaji456&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub stats" height="170"/>
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ashrithBalaji456&layout=compact&theme=tokyonight&hide_border=true" alt="Top languages" height="170"/>

<br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=ashrithBalaji456&theme=tokyonight&hide_border=true" alt="GitHub streak"/>

<br/>

<img src="https://github-readme-activity-graph.vercel.app/graph?username=ashrithBalaji456&theme=tokyo-night&hide_border=true&area=true" alt="Activity graph" width="95%"/>

</div>

### 🧬 Database-Style Relationship (Content Model)

```mermaid
erDiagram
    PORTFOLIO ||--o{ SECTION : contains
    SECTION ||--o{ COMPONENT : renders
    PORTFOLIO ||--o{ PROJECT : showcases
    PROJECT }o--o{ TECHNOLOGY : "built with"
    PORTFOLIO ||--|| CONTACT : has

    PROJECT {
        string title
        string description
        string liveUrl
        string repoUrl
    }
    TECHNOLOGY {
        string name
        string category
    }
    SECTION {
        string name
        int order
    }
    CONTACT {
        string email
        string linkedin
        string github
    }
```

---

## ⚙️ Installation & Setup

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-%E2%89%A5%2018-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![npm](https://img.shields.io/badge/npm-%E2%89%A5%209-CB3837?style=flat-square&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-latest-F05032?style=flat-square&logo=git&logoColor=white)

### Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/ashrithBalaji456/Venkatesh_portfolio.git

# 2️⃣ Move into the project
cd Venkatesh_portfolio

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the dev server
npm run dev
```

Open **http://localhost:3000** in your browser. 🎉

```mermaid
flowchart LR
    A[git clone] --> B[cd project] --> C[npm install] --> D[npm run dev] --> E([localhost:3000 ✅])
    style E fill:#16a34a,color:#fff
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm run start` | Run the production server (after build) |
| `npm run lint` | Run Next.js ESLint checks |

---

## ☁️ Deployment

This project is deployed on **Vercel**: [venkateshportfolio-chi.vercel.app](https://venkateshportfolio-chi.vercel.app)

```mermaid
flowchart LR
    DEV[👨‍💻 Local Dev] -->|git push| GH[(GitHub main)]
    GH -->|webhook| VC[Vercel]
    VC --> B[next build]
    B --> P{Pass?}
    P -- Yes --> PROD([🌐 Production])
    P -- No --> LOG[📋 Build logs] --> DEV
    style PROD fill:#16a34a,color:#fff
```

**Deploy your own copy:**

1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new) and import your fork
3. Keep the default Next.js settings and click **Deploy**

---

## 🎨 Customization Guide

| What to change | Where |
|----------------|-------|
| Personal info, text, links | Files in `components/` |
| Colours, fonts, themes | `tailwind.config.js` |
| Images, resume, favicon | `public/` |
| Global styles & layout | `app/` |
| Import aliases | `jsconfig.json` |

---

## 🗺 Roadmap

- [x] Next.js 14 + Tailwind setup
- [x] Animated hero and sections
- [x] Smooth scrolling (Lenis)
- [x] Deploy on Vercel
- [ ] Dark / light theme toggle
- [ ] Blog / articles section
- [ ] Contact form integration
- [ ] SEO & Open Graph improvements
- [ ] Accessibility audit (WCAG AA)

---

## 🤝 Contributing

Contributions, issues, and suggestions are welcome!

```mermaid
flowchart LR
    F[🍴 Fork] --> BR[🌿 Create branch] --> CM[💾 Commit] --> PU[⬆️ Push] --> PR([🔀 Open Pull Request])
    style PR fill:#7c3aed,color:#fff
```

```bash
git checkout -b feature/amazing-feature
git commit -m "feat: add amazing feature"
git push origin feature/amazing-feature
```

---

## 📬 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-venkateshportfolio--chi.vercel.app-8B5CF6?style=for-the-badge&logo=vercel&logoColor=white)](https://venkateshportfolio-chi.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-ashrithBalaji456-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashrithBalaji456)

<!-- Add your own links below -->
<!-- [![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](YOUR_LINKEDIN_URL) -->
<!-- [![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:YOUR_EMAIL) -->

<br/>

<img src="https://komarev.com/ghpvc/?username=ashrithBalaji456&label=Profile%20Views&color=8b5cf6&style=for-the-badge" alt="Profile views"/>

<br/><br/>

⭐ **If you like this project, give it a star!** ⭐

</div>

---

## 📄 License

Distributed under the **MIT License**. Add a `LICENSE` file to the repo if you haven't already.

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&duration=2500&pause=1000&color=A78BFA&center=true&vCenter=true&width=500&lines=Thanks+for+visiting!+%F0%9F%92%9C;Made+with+Next.js+%26+lots+of+animation+%E2%9C%A8" alt="Footer typing" />

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=140&section=footer&animation=twinkling" alt="Footer wave" width="100%"/>

</div>
