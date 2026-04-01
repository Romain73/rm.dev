import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = [
  'Senior QA Engineer',
  'Smart Contract Engineer',
  'Web3 Quality Lead',
  'DeFi Test Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I'm</p>
        <h1 className={styles.name}>Romain Mercer</h1>
        <div className={styles.roleWrapper}>
          <span className={styles.role}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </div>
        <p className={styles.subtitle}>
          Software · Blockchain · Smart Contracts
        </p>
        <div className={styles.actions}>
          <a href="#experience" className={styles.btnPrimary}>View Experience</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>12+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4</span>
            <span className={styles.statLabel}>Companies</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>Web3</span>
            <span className={styles.statLabel}>Current Focus</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span />
      </div>
    </section>
  )
}
