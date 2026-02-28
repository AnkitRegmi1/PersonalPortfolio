import { Code, Database, Cloud, Cpu, Brain, Box, FileCode, Globe, Coffee } from 'lucide-react';

const techStack = [
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: FileCode },
  { name: 'React', icon: Box },
  { name: 'Java', icon: Coffee },
  { name: 'Python', icon: Code },
  { name: 'Microsoft Azure', icon: Cloud },
  { name: 'AWS', icon: Cloud },
  { name: 'PostgreSQL', icon: Database },
  { name: 'Node.js', icon: Cpu },
  { name: 'Machine Learning', icon: Brain },
  { name: 'Deep Learning', icon: Brain },
  { name: 'Web Services API', icon: Globe },
  { name: 'XGBoost', icon: Cpu },
  { name: 'Computer Vision', icon: Cpu },
  { name: 'HTML / CSS', icon: FileCode },
];

export default function Marquee() {
  const items = [...techStack, ...techStack];

  return (
    <div
      className="border-y py-6 overflow-hidden"
      style={{ borderColor: 'var(--theme-border)', backgroundColor: 'var(--foreground)', color: 'var(--theme-bg)' }}
    >
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {items.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
              <Icon className="w-8 h-8 md:w-10 md:h-10" />
              <span className="text-xl md:text-3xl uppercase tracking-tight font-medium">{tech.name}</span>
            </div>
          );
        })}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}} />
    </div>
  );
}
