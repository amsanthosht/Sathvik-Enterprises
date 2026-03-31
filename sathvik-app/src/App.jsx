import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import Services        from './components/Services';
import Collage         from './components/Collage';
import WhyUs           from './components/WhyUs';
import Clients         from './components/Clients';
import About           from './components/About';
import Contact         from './components/Contact';
import FinalCTA        from './components/FinalCTA';
import Footer          from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { useEffect }   from 'react';

export default function App() {
  // Global scroll reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll('.reveal');
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <FloatingButtons />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Collage />
        <WhyUs />
        <Clients />
        <About />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
