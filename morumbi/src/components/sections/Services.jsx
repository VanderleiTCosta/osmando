import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

export default function Services() {
  // Memoizando o array para evitar recriação a cada renderização da página
  // Substituição total de links externos (base44) por assets locais em WebP
  const servicesList = useMemo(() => [
    {
      title: 'Desentupimento',
      description: 'Desentupimento profissional de pias, ralos, vasos sanitários e tubulações em geral. Atendimento 24h com equipamentos modernos e sem quebra-quebra.',
      image: '/image/desentupimento.webp',
      href: '/servicos/desentupimento'
    },
    {
      title: 'Hidrojateamento',
      description: 'Limpeza profunda de tubulações com água em alta pressão. Tecnologia avançada para desobstrução total e remoção de incrustações em qualquer encanamento.',
      image: '/image/hidrojateamento.webp',
      href: '/servicos/hidrojateamento'
    },
    {
      title: 'Limpa Fossa',
      description: 'Limpeza e manutenção de fossas sépticas com caminhão especializado. Remoção de resíduos e tratamento adequado seguindo normas ambientais.',
      image: '/image/limpa-fossa.webp',
      href: '/servicos/limpeza-de-fossa'
    },
    {
      title: 'Vídeo Inspeção',
      description: 'Inspeção detalhada de tubulações com câmera especializada. Diagnóstico preciso sem necessidade de quebrar paredes ou pisos.',
      image: '/image/video-inspecao.webp',
      href: '/servicos/video-inspecao'
    },
    {
      title: 'Caça Vazamento',
      description: 'Detecção precisa de vazamentos ocultos com equipamentos eletrônicos de última geração. Localização exata sem quebrar pisos ou paredes.',
      image: '/image/caca-vazamento.webp',
      href: '/servicos/caca-vazamento'
    },
    {
      title: 'Serviços Hidráulicos',
      description: 'Instalação e manutenção completa de sistemas hidráulicos. Reparos, substituições e instalações de tubulações, torneiras e registros.',
      image: '/image/hidraulica.webp',
      href: '/servicos/servicos-hidraulicos'
    },
  ], []);

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
          {servicesList.map((service, i) => (
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