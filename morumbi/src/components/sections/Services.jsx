import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const SERVICES = [
  {
    title: 'Desentupimento',
    description: 'Desentupimento profissional de pias, ralos, vasos sanitários e tubulações em geral. Atendimento 24h com equipamentos modernos e sem quebra-quebra.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/16c0cd8ba_generated_6399d1ed.png',
  },
  {
    title: 'Hidrojateamento',
    description: 'Limpeza profunda de tubulações com água em alta pressão. Tecnologia avançada para desobstrução total e remoção de incrustações em qualquer encanamento.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/c4ce57887_generated_86760e08.png',
  },
  {
    title: 'Limpa Fossa',
    description: 'Limpeza e manutenção de fossas sépticas com caminhão especializado. Remoção de resíduos e tratamento adequado seguindo normas ambientais.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/bb7b2ec29_generated_3e3eff3b.png',
  },
  {
    title: 'Vídeo Inspeção',
    description: 'Inspeção detalhada de tubulações com câmera especializada. Diagnóstico preciso sem necessidade de quebrar paredes ou pisos.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/a7ccab128_generated_c57dcd62.png',
  },
  {
    title: 'Caça Vazamento',
    description: 'Detecção precisa de vazamentos ocultos com equipamentos eletrônicos de última geração. Localização exata sem quebrar pisos ou paredes.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/14ba56328_generated_151169bb.png',
  },
  {
    title: 'Serviços Hidráulicos',
    description: 'Instalação e manutenção completa de sistemas hidráulicos. Reparos, substituições e instalações de tubulações, torneiras e registros.',
    image: 'https://media.base44.com/images/public/69d3f828d4cb90b11cd23df0/248234b42_generated_b773e82b.png',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">A Solução Certa</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Seja qual for o seu problema com entupimentos, o Grupo Protec está preparado para oferecer a solução ideal com equipamentos de ponta e profissionais certificados.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}