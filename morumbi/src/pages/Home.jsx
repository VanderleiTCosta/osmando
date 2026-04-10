import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
import Hero from '../components/sections/Hero';
import Stats from '../components/sections/Stats';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Differentials from '../components/sections/Differentials';
import HowItWorks from '../components/sections/HowItWorks';
import Testimonials from '../components/sections/Testimonials';
import FAQ from '../components/sections/FAQ';
import ServiceAreas from '../components/sections/ServiceAreas';
import PaymentCTA from '../components/sections/PaymentCTA';
import Partners from '../components/sections/Partners';

export default function Home() {
  
  // ADICIONADO: Força o título e a descrição originais a voltarem quando acede à Home
  useEffect(() => {
    document.title = "Protec Desentupidora | Atendimento 24h no Morumbi e SP";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "A melhor Desentupidora do Morumbi e região. Atendimento 24 horas, visita grátis e soluções sem quebra-quebra para pias, ralos, esgotos e vazamentos.");
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = "A melhor Desentupidora do Morumbi e região. Atendimento 24 horas, visita grátis e soluções sem quebra-quebra para pias, ralos, esgotos e vazamentos.";
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Partners />
        <Services />
        <Differentials />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <ServiceAreas />
        <PaymentCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}