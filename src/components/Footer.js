import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ankit-regmi-4a5013239' },
  { name: 'GitHub', url: 'https://github.com/AnkitRegmi1' },
  { name: 'Email', url: 'mailto:ankitregmi700@gmail.com' },
];

export default function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <footer id="contact" className="border-t" style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-3xl uppercase tracking-tight mb-4" style={{ color: 'var(--foreground)' }}>Let&apos;s Connect</h3>
            <p className="opacity-80" style={{ color: 'var(--foreground)' }}>Available for freelance projects and collaborations.</p>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wide mb-4 opacity-60" style={{ color: 'var(--foreground)' }}>Location</div>
            <div className="text-lg" style={{ color: 'var(--foreground)' }}>Kirksville, Missouri</div>
            <div className="text-sm mt-2 opacity-80" style={{ color: 'var(--foreground)' }}>Local time — {formatTime(time)}</div>
          </div>
          <div>
            <div className="text-sm uppercase tracking-wide mb-4 opacity-60" style={{ color: 'var(--foreground)' }}>Social</div>
            <div className="space-y-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') || social.url.startsWith('mailto') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between border border-border text-foreground p-2 transition-colors hover:bg-foreground hover:text-background"
                >
                  <span>{social.name}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: 'var(--theme-border)' }}>
          <div className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>© {new Date().getFullYear()} All rights reserved</div>
        </div>
      </div>
    </footer>
  );
}
