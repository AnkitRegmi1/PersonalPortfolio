// pages/about.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/About.module.scss';
import ChatBot from '@/components/ChatBot';
import AnimatedContainer from '../components/AnimatedContainer';

export default function About() {
  return (
    <>
      <Navbar />
     
      <main className={styles.aboutContainer}>
        <h1>About Me</h1>
        <p>Hello! I&apos;m Ankit, a web developer passionate about AI and web development. I love creating projects that make a difference.</p>
        <section className={styles.timelineSection}>
          <h2>My Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContentLeft}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineHeading}>2024</h3>
                  <p>Started learning about neural networks and virtual environment development.</p>
                </div>
              </div>
              <div className={styles.timelineLine}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContentRight}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineHeading}>2023</h3>
                  <p>Focused on machine learning and AI, applying models to real-world data sets.</p>
                </div>
              </div>
              <div className={styles.timelineLine}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContentLeft}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineHeading}>2022</h3>
                  <p>Built my first full-stack project and fell in love with creating solutions that work end-to-end.</p>
                </div>
              </div>
              <div className={styles.timelineLine}></div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineContentRight}>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineHeading}>2021</h3>
                  <p>Started exploring web development with HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div className={styles.timelineLine}></div>
            </div>
          </div>
        </section>
        <section className={styles.funFactsSection}>
  <h2>Fun Facts</h2>
  <p>When I&apos;m not coding, I love hiking, playing sports like Cricket, Soccer, and Table Tennis.</p>
</section>

      </main>
      <Footer />
    </>
  );
}
