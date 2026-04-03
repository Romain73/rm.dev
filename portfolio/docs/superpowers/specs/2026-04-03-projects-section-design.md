# Projects Section — Design Spec

**Date:** 2026-04-03  
**Status:** Approved

---

## Overview

Add a Projects section to the portfolio showcasing two hypothetical QA tooling projects. Projects are presented as real (no "coming soon" or "in development" badges). The section is placed between Skills and Contact in the page flow.

---

## Architecture

- **New files:** `src/components/Projects.jsx`, `src/components/Projects.module.css`
- **Modified files:**
  - `src/App.jsx` — import and render `<Projects />` between `<Skills />` and `<Contact />`
  - `src/components/Navbar.jsx` — add "Projects" nav link between Skills and Contact
- **Data:** hardcoded `projects` array inside `Projects.jsx` (consistent with how Experience and Skills handle their data)
- **Images:** add two placeholder images (e.g. solid-color PNGs or a generic screenshot) to `src/assets/` as `project-testid-injector.png` and `project-testability-scanner.png` — to be replaced with real screenshots later

---

## Project Data

```js
const projects = [
  {
    id: 1,
    title: "data-testid Injector",
    description:
      "A CLI tool that automatically injects data-testid attributes into every input and button across your codebase — making your app instantly automation-ready without manual tagging.",
    image: projectTestidImg, // import from src/assets/project-testid-injector.png
    link: "#",
  },
  {
    id: 2,
    title: "Testability Scanner",
    description:
      "A static analysis tool that audits your web app's testability score — flagging missing selectors, unstable locators, and automation blind spots before they become flaky tests.",
    image: projectScannerImg, // import from src/assets/project-testability-scanner.png
    link: "#",
  },
];
```

---

## Layout

- **Desktop:** 2-column CSS Grid (`gap: 2rem`)
- **Mobile:** single column (via media query)
- **Section heading:** centered, matching existing section title style with cyan accent underline

---

## Card Design

Each card is a vertical glass panel:

| Element | Spec |
|---|---|
| Background | `rgba` dark + `backdrop-filter: blur` (matches navbar glassmorphism) |
| Image | Full-width at top, fixed height ~200px, `object-fit: cover` |
| Title | Space Grotesk, white |
| Description | Inter, muted grey |
| Button | Cyan outline (`border: 1px solid #00c6ff`), transparent bg, hover fills cyan |
| Hover effect | `transform: translateY(-4px)` + subtle cyan border glow |

The "View Project" button links to `#` for now on both cards.

---

## Content

**Card 1 — data-testid Injector**  
A CLI tool that automatically injects `data-testid` attributes into every input and button across your codebase — making your app instantly automation-ready without manual tagging.

**Card 2 — Testability Scanner**  
A static analysis tool that audits your web app's testability score — flagging missing selectors, unstable locators, and automation blind spots before they become flaky tests.

---

## Out of Scope

- Real GitHub repo links (both projects are planned, not yet built)
- Tech stack tags on cards (not requested)
- Live demo links
- More than 2 projects
