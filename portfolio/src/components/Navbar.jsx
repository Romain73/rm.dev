import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>R</span>M
        </a>
        <ul className={styles.links}>
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.link}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
