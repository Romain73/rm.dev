# Projects Section — Implementation Plan

**Spec:** `2026-04-03-projects-section-design.md`  
**Date:** 2026-04-03

---

## Step 1 — Add placeholder images to `src/assets/`

Add two placeholder PNG files (solid color or simple screenshot mockups):
- `src/assets/project-testid-injector.png`
- `src/assets/project-testability-scanner.png`

These will be imported by `Projects.jsx` and displayed as card images. Replace with real screenshots once the projects are built.

---

## Step 2 — Create `src/components/Projects.jsx`

Create the component following the same data-driven pattern as `Skills.jsx`.

```jsx
import styles from './Projects.module.css'
import testidImg from '../assets/project-testid-injector.png'
import scannerImg from '../assets/project-testability-scanner.png'

const projects = [
  {
    id: 1,
    title: 'data-testid Injector',
    description:
      'A CLI tool that automatically injects data-testid attributes into every input and button across your codebase — making your app instantly automation-ready without manual tagging.',
    image: testidImg,
    link: '#',
  },
  {
    id: 2,
    title: 'Testability Scanner',
    description:
      'A static analysis tool that audits your web app\'s testability score — flagging missing selectors, unstable locators, and automation blind spots before they become flaky tests.',
    image: scannerImg,
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Open Source</span>
          <h2 className={styles.title}>Projects</h2>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <a href={project.link} className={styles.button}>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

## Step 3 — Create `src/components/Projects.module.css`

Follow the same CSS variable conventions and glassmorphism patterns as `Skills.module.css`.

```css
.section {
  padding: 6rem 0;
  background: linear-gradient(180deg, transparent, rgba(0, 198, 255, 0.02) 50%, transparent);
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.title {
  font-family: var(--font-main);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  color: #fff;
  letter-spacing: -0.02em;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  background: var(--glass);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  border-color: rgba(0, 198, 255, 0.35);
  transform: translateY(-4px);
  box-shadow: 0 0 24px rgba(0, 198, 255, 0.08);
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.content {
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.projectTitle {
  font-family: var(--font-main);
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.75rem;
}

.description {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.65;
  flex: 1;
  margin-bottom: 1.5rem;
}

.button {
  display: inline-block;
  padding: 0.55rem 1.25rem;
  border: 1px solid var(--accent);
  border-radius: 6px;
  color: var(--accent);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  align-self: flex-start;
  transition: background 0.2s, color 0.2s;
}

.button:hover {
  background: var(--accent);
  color: #070b14;
}
```

---

## Step 4 — Update `src/App.jsx`

Import and render `<Projects />` between `<Skills />` and `<Contact />`.

```jsx
// Add import:
import Projects from './components/Projects'

// Add to JSX between Skills and Contact:
<Skills />
<Projects />   // ← insert here
<Contact />
```

---

## Step 5 — Update `src/components/Navbar.jsx`

Add `'Projects'` to the `links` array between `'Skills'` and `'Contact'`.

```js
// Before:
const links = ['About', 'Experience', 'Skills', 'Contact']

// After:
const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']
```

The anchor `href="#projects"` will be auto-generated by the existing `.toLowerCase()` logic.

---

## Completion Checklist

- [ ] Placeholder images added to `src/assets/`
- [ ] `Projects.jsx` created
- [ ] `Projects.module.css` created
- [ ] `App.jsx` updated with `<Projects />`
- [ ] `Navbar.jsx` updated with `'Projects'` link
- [ ] Section renders correctly on desktop (2 columns) and mobile (1 column)
- [ ] "View Project" button hover works
- [ ] Card hover lift + glow works
- [ ] Nav link scrolls to section
