import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Testimonials from './components/Comments';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-gray-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Plans />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
