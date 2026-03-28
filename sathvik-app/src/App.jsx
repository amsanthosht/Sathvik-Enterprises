import './index.css';
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

export default function App() {
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
