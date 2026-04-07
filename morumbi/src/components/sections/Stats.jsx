import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '15+', label: 'Anos de Mercado', suffix: '' },
  { value: '8.932', label: 'Atendimentos Realizados', suffix: '' },
  { value: '1.153', label: 'Clientes Satisfeitos', suffix: '' },
  { value: '24h', label: 'Atendimento Todos os Dias', suffix: '' },
];

export default function Stats() {
  return (
    <section className="relative z-10 -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
            >
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}