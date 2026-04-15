import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TEAM_IMG = '/image/team.webp';

const POINTS = [
  'Mais de 15 anos de experiência em desentupimento em São Paulo',
  'Equipamentos profissionais de alta performance e tecnologia moderna',
  'Orçamento transparente, sem taxas escondidas ou surpresas',
  'Equipe treinada e certificada para atendimento emergencial 24h',
  'Atendimento em residências, condomínios, comércios e indústrias',
];

export default function About() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-border">
              <img
                src={TEAM_IMG}
                alt="Equipe de profissionais da desentupidora Grupo Protec em São Paulo"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl px-6 py-3 shadow-2xl">
              <p className="font-display font-extrabold text-2xl">15+</p>
              <p className="text-xs font-medium">Anos de experiência</p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Sobre o Grupo Protec</p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground leading-tight">
              Referência em <span className="text-accent">desentupimento</span> em São Paulo
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              A <strong className="text-foreground">Desentupidora Protec</strong> atua com foco em eficiência, rapidez e solução definitiva para qualquer tipo de entupimento. Especializada em desentupimento de esgoto, ralos, pias, vasos sanitários, colunas e redes pluviais, a empresa combina tecnologia moderna com uma equipe qualificada para oferecer a melhor solução em cada atendimento.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Com atendimento ágil e organizado, o Grupo Protec se destaca como <strong className="text-foreground">desentupidora 24 horas</strong>, atendendo emergências no Morumbi, Zona Sul, Zona Oeste e toda região metropolitana de São Paulo.
            </p>

            <ul className="mt-8 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}