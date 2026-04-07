import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'Como pode ser feito o desentupimento sem quebrar equipamentos?',
    a: 'Utilizamos técnicas e equipamentos de ponta especializados que permitem desentupir sem risco de danificar o encanamento ou equipamento. Nossos profissionais são treinados para avaliar cada situação e aplicar a solução mais adequada, preservando toda a estrutura.',
  },
  {
    q: 'Vocês precisam quebrar pisos ou paredes?',
    a: 'Na maioria dos casos, NÃO. Utilizamos métodos modernos como hidrojateamento e vídeo inspeção que permitem resolver o problema sem quebra-quebra. Só em casos extremos e com sua aprovação prévia é que seria necessário.',
  },
  {
    q: 'É possível a máquina de desentupimento furar a tubulação?',
    a: 'Não. Nossos equipamentos são projetados especificamente para desentupimento e são operados por profissionais experientes que sabem exatamente como utilizá-los sem causar danos às tubulações.',
  },
  {
    q: 'Quanto tempo demora o desentupimento?',
    a: 'O tempo varia de acordo com a complexidade do problema. Entupimentos simples geralmente são resolvidos em 30 minutos a 1 hora. Casos mais complexos podem levar algumas horas. Sempre informamos a previsão antes de iniciar.',
  },
  {
    q: 'Existe garantia após a execução do serviço?',
    a: 'Sim! Todos os nossos serviços possuem garantia. Caso o problema retorne dentro do período de garantia, voltamos sem custo adicional para resolver definitivamente.',
  },
  {
    q: 'Qual o preço do desentupimento?',
    a: 'O preço varia conforme o tipo e complexidade do entupimento. Oferecemos visita gratuita para avaliação e orçamento sem compromisso. Aceitamos Pix, cartões, boleto e parcelamento.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Dúvidas Frequentes</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline text-left py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}