import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Work', href: '/#work' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Research', href: '/#research' },
    { name: 'Tech Stack', href: '/#tech-stack' },
    { name: 'Voluntary Work', href: '/#voluntary-work' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-64 z-50 p-6 border-l"
              style={{ backgroundColor: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 border border-border text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <X className="w-5 h-5" />
              </button>
              <nav className="mt-16 space-y-2">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block p-4 border border-border text-foreground uppercase tracking-tight transition-colors hover:bg-foreground hover:text-background"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
