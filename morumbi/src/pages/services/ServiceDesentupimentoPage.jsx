import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Wrench, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '../../components/layout/Footer';
import NavbarServices from '../../components/layout/NavbarServices';

const ServiceDesentupimentoPage = () => {
  const benefits = useMemo(() => [
    'Desentupimento de pias, ralos, vasos sanitários e tanques',
    'Utilização de máquinas rotativas (K-50/K-500) sem quebrar o piso',
    'Atendimento emergencial 24 horas em todo o Morumbi',
    'Desobstrução completa de ramais e redes coletoras',
    'Técnicos fardados, com EPIs e frota própria',
    'Garantia por escrito de até 1 ano no serviço executado',
  ], []);

  const faqs = useMemo(() => [
    {
      question: 'Preciso quebrar o piso para desentupir o ralo ou vaso?',
      answer: 'Na imensa maioria dos casos, não! A nossa tecnologia de cabos em espiral entra na tubulação e tritura a obstrução (cabelos, gordura, plásticos) restaurando o fluxo sem danificar a estrutura da sua casa.'
    },
    {
      question: 'Qual o tempo de chegada para uma emergência?',
      answer: 'Temos unidades móveis espalhadas estrategicamente pela zona sul e Morumbi, garantindo a chegada da equipa técnica em até 30 minutos após a sua chamada.'
    },
    {
      question: 'Cobram a visita técnica para avaliar o entupimento?',
      answer: 'A visita técnica é 100% gratuita. O técnico avalia o local, identifica o problema e passa o orçamento sem qualquer compromisso.'
    }
  ], []);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Desentupidora Profissional no Morumbi",
        "provider": { "@type": "LocalBusiness", "name": "Protec Desentupidora", "telephone": "08005919537" },
        "description": "Desentupimento profissional de pias, ralos, vasos sanitários e tubulações em geral. Atendimento 24h com equipamentos modernos e sem quebra-quebra."
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
      }
    ]
  }), [faqs]);

  return (
    <main className="bg-background min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <NavbarServices/>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/image/hero.png" alt="Técnico realizando desentupimento de pia" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Desentupimento Rápido no <span className="text-accent">Morumbi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Pia, ralo ou vaso entupido? Resolvemos agora com equipamentos modernos e <strong className="text-foreground">sem quebra-quebra.</strong>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/5511940103334" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl transition-all">Plantão 24 Horas</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">A Solução para o <strong className="text-accent">Entupimento</strong></h2>
            <p className="text-muted-foreground">Não tente usar produtos químicos agressivos que derretem o encanamento. A nossa equipa de <strong>desentupimento profissional</strong> resolve problemas em pias, ralos de banheiro, vasos sanitários e tubulações principais de forma mecânica e segura.</p>
            <ul className="mt-8 space-y-4 not-prose">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground font-medium">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-32">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-card p-8">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">Eficiência e Garantia</h3>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <Wrench className="w-5 h-5 text-accent" />
                  <p className="text-sm font-medium">Equipamentos rotativos de ponta.</p>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <p className="text-sm font-medium">Garantia total do serviço prestado.</p>
                </div>
              </div>
              <a href="https://wa.me/5511940103334" target="_blank" rel="noopener noreferrer" className="block mt-8">
                <Button className="w-full h-12 text-base font-bold bg-green-500 hover:bg-green-600 text-white">Chamar Técnico Agora</Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">Dúvidas sobre o <span className="text-accent">Serviço</span></h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-start gap-3"><span className="text-accent mt-1">Q.</span> {faq.question}</h3>
                <p className="text-muted-foreground leading-relaxed pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default memo(ServiceDesentupimentoPage);