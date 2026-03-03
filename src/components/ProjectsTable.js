import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'TruSwap',
    timeframe: '2025',
    discipline: 'Full Stack / Dev',
    tools: ['React', 'Node.js', 'Database'],
    industry: 'E-Commerce',
    url: 'https://github.com/AnkitRegmi1/TruSwap',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080',
    excerpt: 'E-commerce platform for campus buying and selling.',
    previewType: 'image',
  },
  {
    name: 'AI Image Detector',
    timeframe: '2024',
    discipline: 'Dev / AI',
    tools: ['Chrome Extension', 'AI', 'JavaScript'],
    industry: 'AI',
    url: 'https://github.com/AnkitRegmi1/ai_image_detector',
    image: 'https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?w=1080',
    excerpt: 'Browser extension to detect AI-generated images.',
    previewType: 'custom',
  },
  {
    name: 'TecBlog AI',
    timeframe: '2026',
    discipline: 'Full Stack / AI Agents',
    tools: ['Next.js', 'CrewAI', 'Groq', 'GitHub Actions', 'GitHub API'],
    industry: 'Developer Tools',
    url: 'https://github.com/AnkitRegmi1/TecBlogAI',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1080',
    excerpt:
      'Automated blog that turns GitHub-backed content into step-by-step technical posts with AI agents.',
    previewType: 'image',
  },
  {
    name: 'BookStore',
    timeframe: '2025',
    discipline: 'Full Stack',
    tools: ['PHP', 'HTML', 'CSS', 'JavaScript'],
    industry: 'Retail',
    url: 'https://github.com/AnkitRegmi1/BookStore',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1080',
    excerpt: 'Full-stack bookstore with PHP, HTML, CSS and JavaScript.',
    previewType: 'image',
  },
];

function PreviewMagnifyingGlass() {
  return (
    <svg viewBox="0 0 320 208" fill="none" className="w-full h-full" style={{ color: 'var(--foreground)' }}>
      <rect width="320" height="208" fill="var(--theme-bg)" />
      <g opacity="0.4" stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) =>
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((j) => (
            <rect key={`${i}-${j}`} x={24 + j * 28} y={16 + i * 22} width="26" height="20" fill="none" />
          ))
        )}
      </g>
      <circle cx="180" cy="100" r="44" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="180" cy="100" r="36" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />
      <line x1="214" y1="134" x2="260" y2="180" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M 165 85 A 8 8 0 0 1 173 85" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.6" />
    </svg>
  );
}

export default function ProjectsTable() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [startIndex, setStartIndex] = useState(0);

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + 3 < projects.length;

  const visibleProjects = projects
    .map((project, index) => ({ project, index }))
    .slice(startIndex, startIndex + 3);

  return (
    <section
      id="work"
      className="container mx-auto px-4 py-20 border-b"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-between mb-12 gap-4">
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight" style={{ color: 'var(--foreground)' }}>
            Selected Work
          </h2>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              onClick={() => canGoPrev && setStartIndex((prev) => Math.max(0, prev - 1))}
              disabled={!canGoPrev}
              className="w-9 h-9 border flex items-center justify-center text-sm uppercase tracking-tight disabled:opacity-30 focus-ring-theme"
              style={{ borderColor: 'var(--theme-border)', color: 'var(--foreground)' }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => canGoNext && setStartIndex((prev) => Math.min(projects.length - 3, prev + 1))}
              disabled={!canGoNext}
              className="w-9 h-9 border flex items-center justify-center text-sm uppercase tracking-tight disabled:opacity-30 focus-ring-theme"
              style={{ borderColor: 'var(--theme-border)', color: 'var(--foreground)' }}
            >
              ›
            </button>
          </div>
        </div>

        {/* Bento grid — desktop: 3 equal cards with slider */}
        <div
          className="hidden md:grid md:grid-cols-3 gap-4 md:gap-5"
          onMouseMove={handleMouseMove}
        >
          {visibleProjects.map(({ project, index }) => (
            <a
              key={project.name}
              href={project.url}
              target={project.url.startsWith('http') ? '_blank' : undefined}
              rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="border border-border text-foreground transition-colors hover:bg-foreground hover:text-background focus-ring-theme group flex flex-col p-6 md:p-8 cursor-pointer min-h-[280px]"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl md:text-2xl uppercase tracking-tight">{project.name}</h3>
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="text-sm opacity-80 space-y-1 mb-3">
                <div><span className="opacity-70">Year</span> {project.timeframe}</div>
                <div><span className="opacity-70">Discipline</span> {project.discipline}</div>
                <div className="line-clamp-2"><span className="opacity-70">Tools</span> {project.tools.join(' / ')}</div>
              </div>
              {project.excerpt && (
                <p className="text-sm opacity-80 mb-4 line-clamp-2 flex-shrink-0">{project.excerpt}</p>
              )}
              <div className="mt-auto">
                <span className="px-2 py-1 border text-xs" style={{ borderColor: 'currentColor' }}>{project.industry}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target={project.url.startsWith('http') ? '_blank' : undefined}
              rel={project.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block border border-border text-foreground p-6 transition-colors hover:bg-foreground hover:text-background"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl uppercase tracking-tight">{project.name}</h3>
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="opacity-60">Year:</span> {project.timeframe}</div>
                <div><span className="opacity-60">Discipline:</span> {project.discipline}</div>
                <div><span className="opacity-60">Tools:</span> {project.tools.join(', ')}</div>
                <div className="pt-2">
                  <span className="px-2 py-1 border text-xs" style={{ borderColor: 'currentColor' }}>{project.industry}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {hoveredProject !== null && projects[hoveredProject] && (
        <motion.div
          className="hidden md:block fixed pointer-events-none z-50 w-80 h-52 border overflow-hidden flex items-center justify-center"
          style={{ left: mousePosition.x + 20, top: mousePosition.y + 20, borderColor: 'var(--theme-border)', backgroundColor: 'var(--theme-bg)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {projects[hoveredProject].previewType === 'custom' ? (
            <PreviewMagnifyingGlass />
          ) : (
            <img src={projects[hoveredProject].image} alt={projects[hoveredProject].name} className="w-full h-full object-cover" />
          )}
        </motion.div>
      )}
    </section>
  );
}
