// components/AnimatedContainer.js
import { motion } from 'framer-motion';
import styles from '../styles/AnimatedContainer.module.scss';

export default function AnimatedContainer({ children }) {
  return (
    <motion.div
      className={styles.animatedContainer}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
