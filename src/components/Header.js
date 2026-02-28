import { useTheme } from '../context/ThemeContext';
import MobileMenu from './MobileMenu';
import { Leaf, Moon, Sun } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

function NavLink({ sectionId, children }) {
  const handleClick = (e) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };
  return (
    <a href="/" onClick={handleClick} className="transition-opacity hover:opacity-60" style={{ color: 'var(--foreground)' }}>
      {children}
    </a>
  );
}

export default function Header() {
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: 'jungle', Icon: Leaf, label: 'Jungle' },
    { name: 'moon', Icon: Moon, label: 'Moon' },
    { name: 'light', Icon: Sun, label: 'Light' },
  ];

  return (
    <header
      className="sticky top-0 z-40 border-b py-4"
      style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold uppercase tracking-tight" style={{ color: 'var(--foreground)' }}>
          AR
        </a>

        <div className="hidden md:flex items-center gap-8">
          <NavLink sectionId="about">About</NavLink>
          <NavLink sectionId="work">Work</NavLink>
          <NavLink sectionId="experience">Experience</NavLink>
          <NavLink sectionId="research">Research</NavLink>
          <NavLink sectionId="tech-stack">Tech Stack</NavLink>
          <NavLink sectionId="voluntary-work">Voluntary Work</NavLink>
          <NavLink sectionId="contact">Contact</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border p-1" style={{ borderColor: 'var(--theme-border)' }}>
            {themes.map(({ name, Icon, label }) => (
              <button
                key={name}
                onClick={() => setTheme(name)}
                className={`p-2 transition-colors ${
                  theme === name ? '' : 'hover:opacity-80'
                }`}
                style={
                  theme === name
                    ? { backgroundColor: 'var(--foreground)', color: 'var(--theme-bg)', borderColor: 'var(--theme-border)' }
                    : { color: 'var(--foreground)' }
                }
                title={label}
              >
                <Icon size={18} strokeWidth={2} />
              </button>
            ))}
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
