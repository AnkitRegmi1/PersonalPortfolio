// components/CustomCursor.js
import React, { useEffect } from 'react';
import styles from '../styles/CustomCursor.module.scss';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector(`.${styles.cursor}`);
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.pageX + 'px';
      cursor.style.top = e.pageY + 'px';
    });
  }, []);

  return <div className={styles.cursor}></div>;
}
