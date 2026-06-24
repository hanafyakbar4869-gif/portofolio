import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import TechStack from '@/components/sections/TechStack';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import BackToTop from '@/components/sections/BackToTop';
import WhatsAppFloat from '@/components/sections/WhatsAppFloat';
import LoadingScreen from '@/components/sections/LoadingScreen';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <LoadingScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
      <WhatsAppFloat />
    </main>
  );
}
