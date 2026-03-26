import styles from './Skills.module.css'

const categories = [
  {
    name: 'Blockchain & Web3',
    icon: '⬡',
    skills: ['Solidity', 'Hardhat', 'Foundry', 'Ethers.js', 'Web3.js', 'The Graph'],
  },
  {
    name: 'Testing & QA',
    icon: '✓',
    skills: ['Cypress', 'Playwright', 'Jest', 'Mocha', 'Chai', 'Selenium'],
  },
  {
    name: 'CI/CD & Tools',
    icon: '⚙',
    skills: ['GitHub Actions', 'Docker', 'Postman', 'JIRA', 'Grafana', 'Datadog'],
  },
  {
    name: 'Languages',
    icon: '</>',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Bash', 'Solidity'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Expertise</span>
          <h2 className={styles.title}>Skills</h2>
        </div>

        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{cat.icon}</span>
                <h3 className={styles.catName}>{cat.name}</h3>
              </div>
              <div className={styles.pills}>
                {cat.skills.map(skill => (
                  <span key={skill} className={styles.pill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
