import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, Banknote, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PAYMENTS = [
  { icon: CreditCard, label: 'Cartões de Crédito e Débito' },
  { icon: QrCode, label: 'PIX' },
  { icon: Banknote, label: 'Dinheiro e Boleto' },
];

export default function PaymentCTA() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Precisa de uma <span className="text-accent">desentupidora agora</span>?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Não espere o problema piorar. Ligue agora ou chame no WhatsApp e receba atendimento imediato com visita gratuita e orçamento sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <a href="https://wa.me/5511940103334?text=Olá! Preciso de um orçamento urgente para desentupimento." target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 h-14">
                Chamar no WhatsApp
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="tel:08005919537">
              <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 h-14 hover:bg-secondary">
                Ligar Grátis — 0800 591 9537
              </Button>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {PAYMENTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon className="w-5 h-5 text-accent" />
                {label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}