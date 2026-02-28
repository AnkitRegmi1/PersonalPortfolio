import { Home, User, Briefcase, FlaskConical, Mail } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Home', sectionId: null },
  { icon: <User className="w-5 h-5" />, label: 'About', sectionId: 'about' },
  { icon: <Briefcase className="w-5 h-5" />, label: 'Work', sectionId: 'work' },
  { icon: <FlaskConical className="w-5 h-5" />, label: 'Research', sectionId: 'research' },
  { icon: <Mail className="w-5 h-5" />, label: 'Contact', sectionId: 'contact' },
];

export default function MobileBottomNav() {
  const handleClick = (e, sectionId) => {
    if (sectionId != null && typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t" style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}>
      <div className="grid grid-cols-5">
        {navItems.map((item, index) => (
          <a
            key={index}
            href="/"
            onClick={(e) => handleClick(e, item.sectionId)}
            className="flex flex-col items-center justify-center py-3 transition-colors text-foreground hover:bg-foreground hover:text-background"
          >
            {item.icon}
            <span className="text-xs mt-1">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
