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
      "A static analysis tool that audits your web app's testability score — flagging missing selectors, unstable locators, and automation blind spots before they become flaky tests.",
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
