// components/Navbar.js
import Link from 'next/link';
import styles from '../styles/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
