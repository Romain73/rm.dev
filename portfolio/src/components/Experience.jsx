import styles from './Experience.module.css'

const experiences = [
  {
    title: 'Senior QA – Smart Contract Engineer',
    company: 'Kiln',
    period: 'Oct. 2024 – Present',
    tags: ['Cypress', 'Foundry', 'viem', 'Cucumber', 'TypeScript', 'GitHub Actions', 'incident.io'],
    description:
      'Ensuring on-chain data integrity and protocol security for Web3 ecosystems (Kiln Connect). Designing automation frameworks to reconcile on-chain vs. API data for DeFi Vaults, full E2E transaction lifecycle testing, BDD architecture with Cypress Cloud, and DevOps/incident management via GitHub Actions and incident.io.',
  },
  {
    title: 'QA Engineer',
    company: 'Dashlane',
    period: 'Nov. 2017 – Aug. 2024',
    tags: ['JavaScript', 'Selenium', 'Cucumber', 'WebdriverIO', 'Bamboo', 'Docker', 'JIRA', 'Confluence', 'Xray'],
    description:
      'Led E2E automation for web extensions: set up the automation framework and CI pipeline, and expanded end-to-end test coverage. In parallel, embedded as QA analyst within product teams — established QA processes, bug management, Agile/Scrum ceremonies, and managed external testers for structured test plans.',
  },
  {
    title: 'QA Engineer – Team Leader',
    company: 'Oodrive',
    period: 'May 2015 – Oct. 2017',
    tags: ['Ranorex', 'C#', 'Java', 'Jenkins', 'JIRA', 'Zephyr', 'Git'],
    description:
      'Within a cloud computing company, worked across desktop, mobile, and web client teams: designed and executed test plans based on technical specs and customer bugs, performed manual and automated testing with Ranorex (C# & Java scripts), and reported defects to the R&D team. From April 2016, led a QA team of 4 — coordinating priorities, relaying information, and acting as the liaison between technical leadership, project managers, and the team.',
  },
  {
    title: 'Verification Engineer',
    company: 'Bull',
    period: 'Nov. 2012 – May 2015',
    tags: ['C++', 'C', 'SystemC', 'Verilog', 'VSIM', 'DVE', 'Unix/Linux'],
    description:
      'Functional verification and quality assurance of a Crossbar block in an ASIC designed for a supercomputer. Built the automated verification environment in C++, C, and SystemC — including transmitters, monitors, test function calls, predictions, and assertions. Wrote the test plan, executed verification scenarios (including non-random), measured RTL coverage in BPSL, and performed fault injection (bit flips, invalid security codes, etc.).',
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
