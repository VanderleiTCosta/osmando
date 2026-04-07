import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Cpu, ShieldCheck, CreditCard, Sparkles } from 'lucide-react';

const ITEMS = [
  {
    icon: Clock,
    title: 'Chegamos em 30 min',
    description: 'Atendimento emergencial 24 horas. Marcou, chegou — respeitamos o horário em todos os atendimentos.',
  },
  {
    icon: Users,
    title: 'Profissionais Certificados',
    description: 'Equipe altamente qualificada com treinamento contínuo e certificações para atender qualquer demanda.',
  },
  {
    icon: Cpu,
    title: 'Equipamentos Modernos',
    description: 'Tecnologia de ponta para diagnóstico preciso e resolução eficiente, sem quebra-quebra desnecessário.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia nos Serviços',
    description: 'Compromisso verdadeiro com a qualidade e acompanhamento pós-serviço para sua total tranquilidade.',
  },
  {
    icon: CreditCard,
    title: 'Preço Justo e Facilitado',
    description: 'Orçamento claro e transparente. Aceitamos Pix, cartões, boleto e parcelamento sem juros.',
  },
  {
    icon: Sparkles,
    title: 'Sem Sujeira',
    description: 'Execução precisa com técnicas modernas que preservam o ambiente limpo e organizado após o serviço.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Por que nos escolher</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Diferenciais do <span className="text-accent">Grupo Protec</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}