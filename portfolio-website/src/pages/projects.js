// pages/projects.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { useEffect, useState } from 'react';
import styles from '../styles/Projects.module.scss';
import AnimatedContainer from '../components/AnimatedContainer';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, name: 'Private Club', description: 'A platform where you can join multiple clubs if you have the access code and then upvote and downvote messages anonymously', link: 'https://github.com/AnkitRegmi1/Private-Club' },
  { id: 2, name: 'Alumni Giving Prediction', description: 'A data science project that predicts alumni donation behaviors.' },
  { id: 3, name: 'Blind Melodies', description: 'Website that teaches blind people how to play guitar.', link: 'https://github.com/ankit-regmi/alumni-giving-prediction' },
  { id: 4, name: 'Personal Blog Website', description: 'My Personal Blog about my life.', link: 'https://github.com/AnkitRegmi1/BlogPersonal' },
  
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className={styles.projectsContainer}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>
        <motion.div
          className={styles.projectsGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {projects.map((project) => (
            <motion.div
              className={styles.projectCard}
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ProjectCard project={project} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </>
  );
}