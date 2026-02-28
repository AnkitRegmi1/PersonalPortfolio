import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const socials = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/ankit-regmi-4a5013239', username: 'ankit-regmi' },
  { name: 'GitHub', url: 'https://github.com/AnkitRegmi1', username: 'AnkitRegmi1' },
  { name: 'Email', url: 'mailto:ankitregmi700@gmail.com', username: 'ankitregmi700@gmail.com' },
];

export default function Hero() {
  return (
    <section
      className="border-b py-16 md:py-24 relative overflow-hidden bg-pattern-dots-strong"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-stretch relative z-10">
        <div className="w-full md:w-auto shrink-0 pl-4 md:pl-6 lg:pl-8 xl:pl-12">
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight mb-3"
              style={{ color: 'var(--foreground)', lineHeight: 1.05 }}
            >
              Ankit<br />Regmi
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm md:text-base uppercase tracking-wide mb-2 opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Full Stack Developer / Research Assistant
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px', amount: 0.3 }}
          transition={{ duration: 0.4 }}
          className="w-full md:min-w-[240px] lg:min-w-[280px] px-4 md:pr-8 lg:pr-12 md:pl-0"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px', amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest mb-4 opacity-60"
            style={{ color: 'var(--foreground)' }}
          >
            Connect
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-3">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target={social.url.startsWith('http') || social.url.startsWith('mailto') ? '_blank' : undefined}
                rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px', amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group border border-border text-foreground p-4 transition-colors hover:bg-foreground hover:text-background focus:outline-none focus-ring-theme active:bg-foreground active:text-background flex flex-col min-w-0"
              >
                <span className="text-xs uppercase tracking-wider opacity-70">{social.name}</span>
                <span className="text-sm font-medium mt-1 truncate">{social.username}</span>
                <ArrowUpRight className="w-4 h-4 mt-2 self-end opacity-70 group-hover:opacity-100 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
