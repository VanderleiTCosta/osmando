import React from 'react';
import { Phone, ArrowRight, Shield, Clock, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HERO_IMG = 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/5296093cc_generated_2d075ead.png';

const BADGES = [
  { icon: Clock, text: 'Atendimento 24h' },
  { icon: Shield, text: 'Garantia de Serviço' },
  { icon: Wrench, text: 'Equipamentos Modernos' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Desentupidora profissional 24h em São Paulo - Grupo Protec"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-primary">Disponível agora — São Paulo e região</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground">
              Desentupidora
              <br />
              <span className="text-accent">24 Horas</span> no Morumbi
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Solução imediata para entupimentos. Visita gratuita, orçamento sem compromisso e chegamos em até <strong className="text-foreground">30 minutos</strong>. Mais de 15 anos de experiência em São Paulo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="https://wa.me/5511940103334?text=Olá! Preciso de um orçamento para desentupimento." target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 h-14 w-full sm:w-auto">
                  Chamar no WhatsApp
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="tel:08005919537">
                <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 h-14 w-full sm:w-auto hover:bg-secondary">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  0800 591 9537
                </Button>
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {BADGES.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <h2 className="font-display font-bold text-xl text-foreground">Solicite um Orçamento</h2>
                <p className="text-sm text-muted-foreground mt-1">Resposta em menos de 5 minutos</p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:08005919537"
                  className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl py-4 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Ligar Grátis — 0800 591 9537
                </a>

                <a
                  href="https://wa.me/5511940103334?text=Olá! Preciso de um orçamento para desentupimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-4 transition-colors"
                >
                  WhatsApp — (11) 94010-3334
                </a>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-display font-extrabold text-2xl text-foreground">15+</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Anos</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl text-foreground">8.9k</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Atendimentos</p>
                </div>
                <div>
                  <p className="font-display font-extrabold text-2xl text-foreground">1.1k</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Clientes</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3.5 h-3.5 text-green-500" />
                  Visita gratuita • Sem compromisso • Parcelamos no cartão
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}