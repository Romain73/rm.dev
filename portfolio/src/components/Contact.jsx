import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Let's talk</span>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>
            Open to new opportunities, collaborations, and interesting conversations.
          </p>
        </div>

        <div className={styles.card}>
          <form className={styles.form}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label2}>Name</label>
                <input className={styles.input} type="text" placeholder="Your name" />
              </div>
              <div className={styles.field}>
                <label className={styles.label2}>Email</label>
                <input className={styles.input} type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label2}>Message</label>
              <textarea className={styles.textarea} rows={5} placeholder="What's on your mind?" />
            </div>
            <button type="submit" className={styles.btn}>Send Message</button>
          </form>

          <div className={styles.divider} />

          <div className={styles.socials}>
            <a href="https://www.linkedin.com/in/romain-m-7b7040144/" target="_blank" rel="noreferrer" className={styles.social}>
              <span className={styles.socialIcon}>in</span>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className={styles.social}>
              <span className={styles.socialIcon}>gh</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <p>© 2026 Romain Mercer — Built with React</p>
      </footer>
    </section>
  )
}
