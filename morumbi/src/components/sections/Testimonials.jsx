import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Helena Cecília',
    location: 'Morumbi, SP',
    text: 'Estava buscando uma empresa desentupidora e encontrei o Grupo Protec. Chegaram muito rápido e resolveram meu problema de verdade. Recomendo!',
  },
  {
    name: 'João Antonio',
    location: 'Osasco, SP',
    text: 'O esgoto da minha casa estava entupido há dias. A Protec cobrou muito mais barato do que imaginava e resolveram tudo rapidamente. Excelente!',
  },
  {
    name: 'Francisco Junior',
    location: 'Alphaville, SP',
    text: 'Precisei de um serviço profissional na empresa. Fiquei muito satisfeito com o atendimento da Protec. Empresa séria e competente.',
  },
  {
    name: 'Laura Alice',
    location: 'Santo André, SP',
    text: 'Atendimento ótimo e meus problemas foram solucionados. Recomendarei a todos os meus amigos. Empresa profissional e preço muito justo!',
  },
  {
    name: 'André Carvalho',
    location: 'Butantã, SP',
    text: 'Precisei desentupir o ralo do banheiro e a equipe foi muito rápida no atendimento. Serviço profissional e bem feito. Super indico!',
  },
  {
    name: 'Juliana Ribeiro',
    location: 'Pinheiros, SP',
    text: 'Tive entupimento urgente no escritório, liguei e foram super prestativos desde o primeiro contato. Chegaram no horário e resolveram tudo rápido.',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            O que dizem nossos <span className="text-accent">clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
            ))}
            <span className="text-sm text-muted-foreground ml-2">8.1★ — Mais de 138 avaliações</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-colors"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-bold text-sm text-primary">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}