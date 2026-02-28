import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import About from '../components/About';
import ProjectsTable from '../components/ProjectsTable';
import Experience from '../components/Experience';
import FullTechStack from '../components/FullTechStack';
import ResearchSection from '../components/ProductsGrid';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import MobileBottomNav from '../components/MobileBottomNav';
import Preloader from '../components/Preloader';
import { scrollToSection, clearUrlHash } from '../utils/scroll';

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Skip preloader when returning from a research detail page ("Back to Research" sets sessionStorage)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem('scrollToResearch') === '1') {
      setLoading(false);
    }
  }, []);

  // Scroll to Research only when "Back to Research" was clicked (sessionStorage flag); never on normal load
  useEffect(() => {
    if (loading) return;
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem('scrollToResearch') !== '1') return;
    window.sessionStorage.removeItem('scrollToResearch');
    const t = setTimeout(() => {
      scrollToSection('research');
    }, 100);
    return () => clearTimeout(t);
  }, [loading]);

  // If page loaded with a hash (e.g. /#research), scroll to section then show clean URL (ankitregmi.com only)
  useEffect(() => {
    if (loading) return;
    if (typeof window === 'undefined') return;
    const hash = window.location.hash;
    if (!hash) return;
    const sectionId = hash.slice(1).trim();
    if (!sectionId) return;
    scrollToSection(sectionId);
    clearUrlHash();
  }, [loading]);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading && <Preloader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="min-h-screen pb-16 md:pb-0">
          <Header />
          <main>
            <Hero />
            <Marquee />
            <About />
            <ProjectsTable />
            <Experience />
            <ResearchSection />
            <FullTechStack />
            <Testimonials />
          </main>
          <Footer />
          <MobileBottomNav />
        </div>
      )}
    </>
  );
}
