import styles from "./Skills.module.css";

const categories = [
  {
    name: "Blockchain & Web3",
    icon: "⬡",
    skills: [
      "Smart Contracts",
      "DeFi Vaults",
      "viem",
      "Foundry",
      "On-chain Data Reconciliation",
      "Staking Infrastructure",
    ],
  },
  {
    name: "Testing & QA",
    icon: "✓",
    skills: [
      "Cypress",
      "Cucumber (BDD)",
      "WebdriverIO",
      "Selenium",
      "E2E Testing",
      "Transaction Lifecycle Testing",
    ],
  },
  {
    name: "CI/CD & Operations",
    icon: "⚙",
    skills: [
      "GitHub",
      "GitLab",
      "Cypress Cloud",
      "incident.io",
      "Docker",
      "Incident Response",
      "Performance Optimization",
      "Test Parallelization",
    ],
  },
  {
    name: "Languages",
    icon: "</>",
    skills: ["JavaScript", "TypeScript"],
  },
];

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
                {cat.skills.map((skill) => (
                  <span key={skill} className={styles.pill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
