import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={`${title} - Serviço profissional de desentupimento em São Paulo`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
        <a
          href="https://wa.me/5511940103334?text=Olá! Gostaria de um orçamento para o serviço de desentupimento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-4 group-hover:gap-2.5 transition-all"
        >
          Solicitar orçamento
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}