// components/ProjectCard.js
import styles from '../styles/Projects.module.scss';

export default function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
}
