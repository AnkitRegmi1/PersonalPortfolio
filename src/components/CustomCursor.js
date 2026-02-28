import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target?.tagName === 'A' || target?.tagName === 'BUTTON' || target?.closest?.('a') || target?.closest?.('button');
      setIsHovering(!!isInteractive);
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
        animate={{ scale: isHovering ? 1.5 : 1, x: -12, y: -12 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-6 h-6 border" style={{ borderColor: 'var(--foreground)', mixBlendMode: 'difference' }} />
      </motion.div>
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
        animate={{ scale: isHovering ? 0 : 1, x: -2, y: -2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-1 h-1" style={{ backgroundColor: 'var(--foreground)', mixBlendMode: 'difference' }} />
      </motion.div>
    </>
  );
}
