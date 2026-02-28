import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { researchProjects } from '../data/research';

export default function ResearchSection() {
  return (
    <section
      id="research"
      className="container mx-auto px-4 py-20 border-b"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-2" style={{ color: 'var(--foreground)' }}>
          Research
        </h2>
        <p className="text-sm opacity-60 mb-10" style={{ color: 'var(--foreground)' }}>
          Click a project to read the full case study
        </p>

        {/* Bento grid — desktop: 3 equal cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 md:gap-5">
          {researchProjects.map((item, index) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="border border-border text-foreground transition-colors hover:bg-foreground hover:text-background focus:outline-none focus-ring-theme active:bg-foreground active:text-background group flex flex-col p-6 md:p-8 cursor-pointer min-h-[280px]"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-lg md:text-xl uppercase tracking-tight line-clamp-2">{item.name}</h3>
                <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
              </div>
              <div className="text-sm opacity-80 space-y-1 mb-3">
                <div><span className="opacity-70">Year</span> {item.timeframe}</div>
                <div><span className="opacity-70">Stack</span> {item.discipline}</div>
                <div className="line-clamp-2"><span className="opacity-70">Tools</span> {item.tools.join(' / ')}</div>
              </div>
              {item.excerpt && (
                <p className="text-sm opacity-80 flex-grow line-clamp-2 mt-2">{item.excerpt}</p>
              )}
              <div className="mt-auto pt-4 flex items-center justify-between gap-2">
                <span className="px-2 py-1 border text-xs" style={{ borderColor: 'currentColor' }}>{item.industry}</span>
                <span className="text-xs opacity-60">Read case study →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile cards */}
        <div className="md:hidden mt-4 space-y-4">
          {researchProjects.map((item) => (
            <Link
              key={item.slug}
              href={`/research/${item.slug}`}
              className="block border border-border text-foreground p-6 transition-colors hover:bg-foreground hover:text-background focus:outline-none focus-ring-theme active:bg-foreground active:text-background cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl uppercase tracking-tight">{item.name}</h3>
                <ArrowUpRight className="w-5 h-5 shrink-0" />
              </div>
              <div className="space-y-2 text-sm">
                <div><span className="opacity-60">Year:</span> {item.timeframe}</div>
                <div><span className="opacity-60">Stack:</span> {item.discipline}</div>
                <div><span className="opacity-60">Tools:</span> {item.tools.join(', ')}</div>
                <div className="pt-2 flex items-center gap-2">
                  <span className="px-2 py-1 border text-xs" style={{ borderColor: 'currentColor' }}>{item.industry}</span>
                  <span className="text-xs opacity-70">Click to read more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
