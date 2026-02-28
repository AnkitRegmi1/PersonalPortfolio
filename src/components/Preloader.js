import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        return prev + 20;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="text-center">
        <div className="text-6xl mb-8 uppercase tracking-tight font-bold" style={{ color: 'var(--foreground)' }}>
          Loading
        </div>
        <div className="w-64 h-1 border border-current" style={{ borderColor: 'var(--theme-border)' }}>
          <motion.div
            className="h-full"
            style={{ backgroundColor: 'var(--foreground)' }}
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <div className="mt-4 text-sm" style={{ color: 'var(--foreground)' }}>{progress}%</div>
      </div>
    </motion.div>
  );
}
