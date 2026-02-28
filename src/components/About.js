import { motion } from 'framer-motion';
import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: <Lightbulb className="w-8 h-8" />, title: 'Problem Solving', description: 'Debugging, System thinking, Performance, Clean code' },
    { icon: <Code className="w-8 h-8" />, title: 'Development', description: 'TypeScript, React, Node.js, Microsoft Azure' },
    { icon: <Rocket className="w-8 h-8" />, title: 'Research', description: 'Data Science, ML Models, Alumni Giving Prediction' },
    { icon: <Users className="w-8 h-8" />, title: 'Collaboration', description: 'Cross-functional Teams, Agile, Remote Work' },
  ];

  return (
    <section
      id="about"
      className="container mx-auto px-4 py-20 border-b bg-pattern-lines relative"
      style={{ borderColor: 'var(--theme-border)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl uppercase tracking-tight mb-12" style={{ color: 'var(--foreground)' }}>
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-xl" style={{ color: 'var(--foreground)', opacity: 0.95 }}>
              I&apos;m a Full Stack Developer and Research Assistant who bridges the gap between development and data science.
              With experience at FC Consulting and Truman State University, I build digital solutions that users love.
            </p>
            <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              My approach combines strategic thinking with hands-on execution. I believe in creating work that&apos;s not only
              functional but also accessible, performant, and impactful.
            </p>
            <p style={{ color: 'var(--foreground)', opacity: 0.8 }}>
              Based in Kirksville, Missouri. Open to freelance projects, collaborations, and full-time opportunities.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 min-w-0">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-border text-foreground p-4 sm:p-6 transition-colors hover:bg-foreground hover:text-background focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[var(--theme-border)] min-w-0 overflow-hidden"
              >
                <div className="mb-3 sm:mb-4">{skill.icon}</div>
                <h3 className="text-base sm:text-lg uppercase tracking-tight mb-1 sm:mb-2">{skill.title}</h3>
                <p className="text-xs sm:text-sm opacity-80 break-words hyphens-auto">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="border p-8"
          style={{ borderColor: 'var(--theme-border)' }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--foreground)' }}>10+</div>
              <div className="text-sm uppercase tracking-wide opacity-60" style={{ color: 'var(--foreground)' }}>Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--foreground)' }}>3+</div>
              <div className="text-sm uppercase tracking-wide opacity-60" style={{ color: 'var(--foreground)' }}>Years Experience</div>
            </div>
            <div>
              <div className="text-4xl mb-2" style={{ color: 'var(--foreground)' }}>Research</div>
              <div className="text-sm uppercase tracking-wide opacity-60" style={{ color: 'var(--foreground)' }}>Data Science & AI</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
