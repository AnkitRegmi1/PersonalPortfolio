import { Home, User, Briefcase, FlaskConical, Mail } from 'lucide-react';

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: 'Home', href: '/' },
  { icon: <User className="w-5 h-5" />, label: 'About', href: '/#about' },
  { icon: <Briefcase className="w-5 h-5" />, label: 'Work', href: '/#work' },
  { icon: <FlaskConical className="w-5 h-5" />, label: 'Research', href: '/#research' },
  { icon: <Mail className="w-5 h-5" />, label: 'Contact', href: '/#contact' },
];

export default function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t" style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}>
      <div className="grid grid-cols-5">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
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
