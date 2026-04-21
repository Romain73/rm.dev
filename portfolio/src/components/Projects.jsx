import styles from './Projects.module.css'
import testidImg from '../assets/project-testid-injector.png'
import scannerImg from '../assets/project-testability-scanner.png'
import e2eImg from '../assets/e2etests.png'
import web3SandboxImg from '../assets/Web3sandbox.png'

const projects = [
  {
    id: 1,
    title: 'data-testid Injector',
    description:
      'A CLI tool that automatically injects data-testid attributes into every input and button across your codebase — making your app instantly automation-ready without manual tagging.',
    image: testidImg,
    link: 'https://github.com/Romain73/data-testid-injector',
  },
  {
    id: 2,
    title: 'Testability Scanner',
    description:
      "A static analysis tool that audits your web app's testability score — flagging missing selectors, unstable locators, and automation blind spots before they become flaky tests.",
    image: scannerImg,
    link: 'https://github.com/Romain73/testability-scanner',
  },
  {
    id: 3,
    title: 'End-to-end Tests',
    description:
      'A comprehensive end-to-end test suite covering critical user flows — built to catch regressions early and ship with confidence.',
    image: e2eImg,
    link: 'https://github.com/Romain73/e2e-rmdev',
  },
  {
    id: 4,
    title: 'Web3 E2E Testing Sandbox',
    description:
      'A sandbox environment for running end-to-end tests against Web3 applications — simulating wallet interactions, on-chain transactions, and DeFi flows.',
    image: web3SandboxImg,
    link: '#',
    wip: true,
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
              {project.wip && <span className={styles.badge}>WIP</span>}
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
              <div className={styles.content}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <a
                  href={project.link}
                  className={styles.button}
                  target={project.link !== '#' ? '_blank' : undefined}
                  rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                  data-testid="Projects-a-0">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
