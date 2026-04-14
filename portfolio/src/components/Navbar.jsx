import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a
          href="#hero"
          className={styles.logo}
          onClick={() => setOpen(false)}
          data-testid="Navbar-a-0">
          <span className={styles.logoAccent}>R</span>M
        </a>

        <ul className={styles.links}>
          {links.map(link => (
            <li key={link} data-testid="Navbar-li-0">
              <a
                href={`#${link.toLowerCase()}`}
                className={styles.link}
                data-testid="Navbar-a-1">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-testid="Navbar-button-0">
          <span />
          <span />
          <span />
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {links.map(link => (
              <li key={link} data-testid="Navbar-li-1">
                <a
                  href={`#${link.toLowerCase()}`}
                  className={styles.mobileLink}
                  onClick={() => setOpen(false)}
                  data-testid="Navbar-a-2">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
