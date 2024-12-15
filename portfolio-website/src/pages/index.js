import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';
import ChatBot from '../components/ChatBot';
import { useState } from 'react';
import CommandLine from '../components/CommandLine';

export default function Home() {
  const [showResume, setShowResume] = useState(false);
  const [useCommandLine, setUseCommandLine] = useState(false);

  return (
    <div className={styles.homeContainer}>
      {!useCommandLine && <Navbar />}
      {!useCommandLine && (
        <div className={styles.viewModeContainer}>
          <button onClick={() => setUseCommandLine(false)} className={`${styles.viewModeButton} ${!useCommandLine ? styles.active : ''}`}>Graphical Mode</button>
          <button onClick={() => setUseCommandLine(true)} className={`${styles.viewModeButton} ${useCommandLine ? styles.active : ''}`}>Command Line Mode</button>
        </div>
      )}
      {!useCommandLine ? (
        <>
          <div className={styles.heroWithImageCentered}>
            <div className={styles.heroSectionContainer}>
              <img src="/profile.jpeg" alt="Profile Picture" className={styles.profileImage} />
              <HeroSection />
            </div>
          </div>
          <div className={styles.resumeLinkContainer}>
            <button onClick={() => setShowResume(true)} className={styles.resumeButton}>View my Resume</button>
          </div>
          {showResume && (
            <div className={styles.resumePopup}>
              <div className={styles.resumePopupContent}>
                <button className={styles.closeButton} onClick={() => setShowResume(false)}>Close</button>
                <iframe src="/resume.pdf" className={styles.resumeIframe}></iframe>
                <a href="/resume.pdf" download>
                  <button className={styles.downloadResumeButton}>Download Resume</button>
                </a>
              </div>
            </div>
          )}
          {/* Social Links Section */}
          <div className={styles.socialLinksContainer}>
            <a
              href="https://www.linkedin.com/in/ankit-regmi-4a5013239/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src="/linkedin-logo.png" alt="LinkedIn Logo" className={styles.socialLogo} />
            </a>
            <a
              href="https://github.com/AnkitRegmi1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <img src="/github-logo.png" alt="GitHub Logo" className={styles.socialLogo} />
            </a>
          </div>
          <main className={styles.homeContent}>
            <section className={styles.introSection}>
              <h2>Why Work With Me?</h2>
              <p>I am passionate about creating impactful projects that leverage modern web technologies and AI to solve real-world problems. I am always learning and eager to make a difference.</p>
            </section>
            <section className={styles.skillsSection}>
              <h2>Skills & Technologies</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>JavaScript (ES6+)</div>
                <div className={styles.skillCard}>React.js</div>
                <div className={styles.skillCard}>Next.js</div>
                <div className={styles.skillCard}>Node.js</div>
                <div className={styles.skillCard}>Python</div>
                <div className={styles.skillCard}>Machine Learning</div>
              </div>
            </section>
          </main>
        </>
      ) : (
        <CommandLine onToggleMode={setUseCommandLine} />
      )}
      <Footer className={styles.footer} />
    </div>
  );
}
