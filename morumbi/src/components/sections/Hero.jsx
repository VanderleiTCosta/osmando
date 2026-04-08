import React from 'react';
import { Phone, ArrowRight, Shield, Clock, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const HERO_IMG = '/image/hero.png';

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
                  className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl py-4 transition-colors"
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
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