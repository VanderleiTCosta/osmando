import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, FileCheck, ThumbsUp } from 'lucide-react';

const STEPS = [
  {
    icon: MessageCircle,
    num: '01',
    title: 'Entre em Contato',
    description: 'Chame pelo WhatsApp ou telefone e nos conte qual é o problema de entupimento que está enfrentando.',
  },
  {
    icon: Users,
    num: '02',
    title: 'Visita Gratuita',
    description: 'A equipe vai até o local para avaliar o problema de perto e informar a solução adequada. Sem compromisso.',
  },
  {
    icon: FileCheck,
    num: '03',
    title: 'Aprovação do Orçamento',
    description: 'Você recebe um orçamento claro e só executamos o serviço após sua autorização. Simples e transparente.',
  },
  {
    icon: ThumbsUp,
    num: '04',
    title: 'Serviço com Garantia',
    description: 'O desentupimento é feito com qualidade, agilidade e garantia. Seu problema resolvido de verdade.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Como Funciona</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Simples e fácil de <span className="text-accent">contratar</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative bg-card border border-border rounded-2xl p-6 text-center"
            >
              <span className="font-display font-extrabold text-5xl text-border">{step.num}</span>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mt-2 mb-4">
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}