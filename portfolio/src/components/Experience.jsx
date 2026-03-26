import styles from './Experience.module.css'

const experiences = [
  {
    title: 'Senior QA Engineer',
    company: 'Blockchain Corp',
    period: '2022 – Present',
    tags: ['Solidity', 'Hardhat', 'Foundry', 'Cypress'],
    description:
      'Led quality assurance for a DeFi protocol handling $200M+ TVL. Designed end-to-end test suites for smart contracts and web interfaces. Caught critical vulnerabilities before mainnet deployments.',
  },
  {
    title: 'QA Engineer – Web3',
    company: 'CryptoStudio',
    period: '2020 – 2022',
    tags: ['Ethers.js', 'Mocha', 'Chai', 'Postman'],
    description:
      'Built testing frameworks for NFT marketplaces and token bridges. Coordinated with auditors to validate security assumptions. Automated regression pipelines reducing release cycles by 40%.',
  },
  {
    title: 'Software QA Engineer',
    company: 'TechAgency',
    period: '2018 – 2020',
    tags: ['Selenium', 'Jest', 'CI/CD', 'Python'],
    description:
      'Performed functional, regression, and performance testing for SaaS products. Introduced BDD practices and increased test coverage from 30% to 85% across core modules.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Career</span>
          <h2 className={styles.title}>Experience</h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.jobTitle}>{exp.title}</h3>
                    <span className={styles.company}>{exp.company}</span>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.tags}>
                  {exp.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
