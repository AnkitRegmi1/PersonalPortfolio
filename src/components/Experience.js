import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section
      id="experience"
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
          Experience
        </h2>

        <div className="border" style={{ borderColor: 'var(--theme-border)' }}>
          <div className="p-6 md:p-10">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl uppercase tracking-tight" style={{ color: 'var(--foreground)' }}>
                FC Consulting
              </h3>
              <p className="text-sm uppercase tracking-wide mt-1 opacity-70" style={{ color: 'var(--foreground)' }}>
                Full Stack Developer
              </p>
            </div>
            <div className="space-y-4 text-sm md:text-base" style={{ color: 'var(--foreground)', opacity: 0.9 }}>
              <p>
                I build and maintain full-stack applications for FC Consulting, delivering reliable web solutions for clients. My work includes developing responsive frontends, designing and integrating APIs, and working with cloud and database systems to ship features on time.
              </p>
              <p>
                I collaborate with stakeholders to gather requirements, translate them into technical tasks, and implement solutions using TypeScript, React, Node.js, and Microsoft Azure. I also help improve code quality, performance, and documentation across projects.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
