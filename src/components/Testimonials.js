import { motion } from 'framer-motion';

const voluntaryRoles = [
  {
    role: 'Founder & President',
    org: 'Table Tennis Club',
    location: 'Truman State University',
    timeframe: '2025 – Present',
    description: 'Founded and lead the university table tennis club, organizing practices, tournaments, and on-campus events.',
  },
  {
    role: 'Social Media Manager',
    org: 'Google Developer Student Clubs',
    location: 'Truman State University',
    timeframe: '2023 – 2024',
    description: 'Managed social media presence, created content, and promoted workshops and hackathons for the developer community.',
  },
  {
    role: 'Python Tutor',
    org: 'Center for Academic Excellence',
    location: 'Truman State University',
    timeframe: '2023 – 2025',
    description: 'Provided 1:1 and group tutoring in Python and introductory CS, helping students build confidence with core concepts.',
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section id="voluntary-work" className="container mx-auto px-4 py-20 border-b relative overflow-hidden bg-pattern-dots-strong" style={{ borderColor: 'var(--theme-border)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight" style={{ color: 'var(--foreground)' }}>
            Voluntary Work
          </h2>
          <p className="mt-4 text-sm md:text-base max-w-2xl opacity-70" style={{ color: 'var(--foreground)' }}>
            Roles that let me give back to the communities I care about — on campus, in developer groups, and in the classroom.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {voluntaryRoles.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border p-6 flex flex-col justify-between h-full"
              style={{ borderColor: 'var(--theme-border)', color: 'var(--foreground)' }}
            >
              <div>
                <div className="text-xs uppercase tracking-widest opacity-60 mb-2">
                  {item.timeframe}
                </div>
                <div className="text-lg font-semibold uppercase tracking-tight">
                  {item.role}
                </div>
                <div className="mt-1 text-sm uppercase tracking-tight opacity-80">
                  {item.org}
                </div>
                <div className="mt-1 text-xs opacity-60">
                  {item.location}
                </div>
              </div>
              <p className="mt-4 text-sm opacity-80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
