import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Globe,
  Cpu,
  Brain,
  Layers,
  BarChart2,
  ScanEye,
  LineChart,
  Puzzle,
  CalendarCheck,
  GitBranch,
  Sparkles,
  Cloud,
} from 'lucide-react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const LUCIDE_ICONS = {
  Database,
  Globe,
  Cpu,
  Brain,
  Layers,
  BarChart2,
  ScanEye,
  LineChart,
  Puzzle,
  CalendarCheck,
  GitBranch,
  Sparkles,
  Cloud,
};

const categories = [
  {
    title: 'Languages',
    items: [
      { name: 'TypeScript', icon: 'typescript/typescript-original' },
      { name: 'JavaScript', icon: 'javascript/javascript-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'Python', icon: 'python/python-original' },
      { name: 'HTML', icon: 'html5/html5-original' },
      { name: 'CSS', icon: 'css3/css3-original' },
      { name: 'SQL', icon: null, lucideIcon: 'Database' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'react/react-original' },
      { name: 'Next.js', icon: 'nextjs/nextjs-original' },
      { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original' },
      { name: 'Framer Motion', icon: null, lucideIcon: 'Sparkles' },
      { name: 'SASS', icon: 'sass/sass-original' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Spring Boot', icon: 'spring/spring-original' },
      { name: 'REST APIs', icon: null, lucideIcon: 'Globe' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'Databases', icon: null, lucideIcon: 'Database' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Microsoft Azure', icon: 'azure/azure-original' },
      { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original', iconUrlOverride: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg', iconFallback: 'Cloud' },
      { name: 'Git', icon: 'git/git-original' },
      { name: 'CI/CD', icon: null, lucideIcon: 'GitBranch' },
    ],
  },
  {
    title: 'Data & AI',
    items: [
      { name: 'Machine Learning', icon: null, lucideIcon: 'Brain' },
      { name: 'Deep Learning', icon: null, lucideIcon: 'Layers' },
      { name: 'XGBoost', icon: null, lucideIcon: 'BarChart2' },
      { name: 'Pandas', icon: 'pandas/pandas-original' },
      { name: 'Computer Vision', icon: null, lucideIcon: 'ScanEye' },
      { name: 'Data Science', icon: null, lucideIcon: 'LineChart' },
    ],
  },
  {
    title: 'Tools & Other',
    items: [
      { name: 'Chrome Extensions', icon: null, lucideIcon: 'Puzzle' },
      { name: 'Agile', icon: null, lucideIcon: 'CalendarCheck' },
      { name: 'Figma', icon: 'figma/figma-original' },
      { name: 'VS Code', icon: 'vscode/vscode-original' },
    ],
  },
];

function TechItem({ item }) {
  const [imgError, setImgError] = useState(false);
  const iconUrl = item.icon && !imgError
    ? (item.iconUrlOverride || `${CDN}/${item.icon}.svg`)
    : null;
  const useFallback = imgError && item.iconFallback;
  const FallbackIcon = useFallback && LUCIDE_ICONS[item.iconFallback] ? LUCIDE_ICONS[item.iconFallback] : null;
  const LucideIcon = item.lucideIcon ? LUCIDE_ICONS[item.lucideIcon] : null;
  const showIcon = iconUrl || FallbackIcon || LucideIcon;

  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-lg min-w-0 shrink-0"
      style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
    >
      {iconUrl ? (
        <img
          src={iconUrl}
          alt=""
          className="w-6 h-6 shrink-0"
          width={24}
          height={24}
          onError={() => setImgError(true)}
        />
      ) : FallbackIcon ? (
        <FallbackIcon className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} />
      ) : LucideIcon ? (
        <LucideIcon className="w-5 h-5 shrink-0 opacity-80" strokeWidth={1.5} />
      ) : (
        <span className="w-6 h-6 shrink-0" aria-hidden />
      )}
      <span className="text-sm truncate">{item.name}</span>
    </div>
  );
}

export default function FullTechStack() {
  return (
    <section
      id="tech-stack"
      className="container mx-auto px-4 py-20 border-b"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-12" style={{ color: 'var(--foreground)' }}>
          Full Tech Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="border p-6 rounded-lg"
              style={{
                borderColor: 'var(--theme-border)',
                color: 'var(--foreground)',
                boxShadow: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)',
              }}
            >
              <h3 className="text-xs uppercase tracking-widest mb-6 opacity-60 font-medium">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <TechItem key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
