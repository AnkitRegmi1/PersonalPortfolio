import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CustomCursor from '../../components/CustomCursor';
import ScrollToTop from '../../components/ScrollToTop';
import { researchProjects } from '../../data/research';

export async function getStaticPaths() {
  const paths = researchProjects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = researchProjects.find((p) => p.slug === params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default function ResearchDetail({ project }) {
  const hasLinks = project.links && project.links.some((l) => l.url && l.url.trim());
  const hasBody = project.body && Array.isArray(project.body) && project.body.length > 0;

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <Head>
        <title>{project.name} | Research | Ankit Regmi</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <Link
            href="/"
            onClick={() => typeof window !== 'undefined' && window.sessionStorage.setItem('scrollToResearch', '1')}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wide opacity-70 hover:opacity-100 mb-12 transition-opacity"
            style={{ color: 'var(--foreground)' }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Back to Research
          </Link>

          <article>
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest opacity-60" style={{ color: 'var(--foreground)' }}>
                {project.timeframe} · {project.discipline}
              </span>
              <h1
                className="text-4xl md:text-6xl uppercase tracking-tight mt-2 mb-6"
                style={{ color: 'var(--foreground)', lineHeight: 1.1 }}
              >
                {project.name}
              </h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 border text-xs" style={{ borderColor: 'var(--theme-border)', color: 'var(--foreground)' }}>
                  {project.industry}
                </span>
                <span className="text-sm opacity-60" style={{ color: 'var(--foreground)' }}>
                  {project.tools.join(' · ')}
                </span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none border-t pt-10 pb-10"
              style={{ borderColor: 'var(--theme-border)', color: 'var(--foreground)' }}
            >
              {hasBody ? (
                <div className="space-y-6">
                  {project.body.map((block, i) => {
                    if (typeof block === 'string') {
                      return (
                        <p key={i} className="text-lg md:text-xl leading-relaxed opacity-90">
                          {block}
                        </p>
                      );
                    }
                    if (block && typeof block === 'object' && block.type === 'heading') {
                      return (
                        <h2
                          key={i}
                          className="text-xl md:text-2xl uppercase tracking-tight mt-10 mb-4 opacity-90 font-semibold"
                          style={{ color: 'var(--foreground)' }}
                        >
                          {block.text}
                        </h2>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p className="text-lg md:text-xl leading-relaxed opacity-90">{project.description}</p>
              )}
            </div>

            {hasLinks && (
              <div className="border-t pt-10" style={{ borderColor: 'var(--theme-border)' }}>
                <h2 className="text-sm uppercase tracking-widest mb-6 opacity-60" style={{ color: 'var(--foreground)' }}>
                  Links
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
                  {project.links
                    .filter((l) => l.url && l.url.trim())
                    .map((link) => {
                      const isPdf = /\.pdf$/i.test(link.url);
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...(isPdf && { download: true })}
                          className="group flex items-center justify-between border p-4 transition-colors text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--theme-bg)] active:bg-[var(--foreground)] active:text-[var(--theme-bg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--theme-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--theme-bg)]"
                          style={{ borderColor: 'var(--theme-border)' }}
                        >
                          <span className="uppercase tracking-tight">{link.label}</span>
                          <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      );
                    })}
                </div>
              </div>
            )}

          </article>
        </main>
        <Footer />
      </div>
    </>
  );
}
