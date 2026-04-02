import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Who I am</span>
          <h2 className={styles.title}>About</h2>
        </div>
        <div className={styles.card}>
          <p className={styles.text}>
            I've spent over a decade at the intersection of development and quality, evolving from a
            manual tester to a Senior Automation Architect. My work is not just to find bugs but to
            build the systems that prevent them. I'm currently seeking my next challenge as a Lead or
            Senior Quality Engineer, bringing a deep toolkit of automation expertise to help a
            mission-driven company scale with confidence.
          </p>
        </div>
      </div>
    </section>
  )
}
