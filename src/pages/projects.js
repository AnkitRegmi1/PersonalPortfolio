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
  { id: 3, name: 'TruSwap', description: 'A full stackplatform to sell rent and buy items for Truman State University', link: 'https://github.com/AnkitRegmi1/TruSwap' },
  { id: 4, name: 'Personal Blog Website', description: 'My Personal Blog about my life.', link: 'https://github.com/AnkitRegmi1/BlogPersonal' },
  { id: 5, name: 'AI Image Detector', description: 'A chrome browser extension that detects AI generated images', link: 'https://github.com/AnkitRegmi1/ai_image_detector' },
  { id: 6, name: 'BookStore', description: 'A full stack platform to buy and sell books with payment integration', link: 'https://github.com/AnkitRegmi1/BookStore' },
  { id: 7, name: 'Personal Portfolio Website', description: 'Code for this website', link: 'https://github.com/AnkitRegmi1/PersonalPortfolio' },
  
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