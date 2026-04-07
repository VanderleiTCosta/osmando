import React from 'react';
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
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