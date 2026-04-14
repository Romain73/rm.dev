import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('https://formspree.io/f/xzdkavpd', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(e.target),
    })
    if (res.ok) {
      setStatus('sent')
      e.target.reset()
    } else {
      setStatus('error')
    }
  }

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
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            data-testid="Contact-form-0">
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label2}>Name</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  data-testid="Contact-input-0" />
              </div>
              <div className={styles.field}>
                <label className={styles.label2}>Email</label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  data-testid="Contact-input-1" />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label2}>Message</label>
              <textarea
                className={styles.textarea}
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                required
                data-testid="Contact-textarea-0" />
            </div>
            <button
              type="submit"
              className={styles.btn}
              disabled={status === 'sending'}
              data-testid="Contact-button-0">
              {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message Sent!' : status === 'error' ? 'Error — try again' : 'Send Message'}
            </button>
          </form>

          <div className={styles.divider} />

          <div className={styles.socials}>
            <a
              href="https://www.linkedin.com/in/romain-m-7b7040144/"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
              data-testid="Contact-a-0">
              <span className={styles.socialIcon}>in</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Romain73"
              target="_blank"
              rel="noreferrer"
              className={styles.social}
              data-testid="Contact-a-1">
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
  );
}
