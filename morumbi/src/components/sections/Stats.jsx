import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente Stats de Alta Conversão
 * Focado em autoridade imediata e SEO Local
 */
export default function Stats() {
  // SEO: Dados estruturados para Rich Snippets no Google
  const ratingSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Desentupidora Grupo Protec",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "8.1",
      "reviewCount": "138",
      "bestRating": "10"
    }
  }), []);

  const stats = [
    { 
      value: '8.1 ★', 
      label: 'Mais de 138 avaliações positivas' 
    },
    { value: '15+', label: 'Anos de Mercado' },
    { value: '8.932', label: 'Atendimentos' },
    { value: '1.153', label: 'Clientes Satisfeitos' },
  ];

  return (
    <section className="relative z-10 -mt-8">
      {/* Injeção de SEO para aparecer estrelas no Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col items-center justify-center border rounded-xl p-6 text-center transition-all duration-300 shadow-sm
                ${stat.isRating 
                  ? 'bg-[#15803d] border-transparent' 
                  : 'bg-card border-border hover:border-primary/30'}`}
            >
              {stat.isRating ? (
                <>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white">
                      {stat.value}
                    </span>
                    <span className="text-[#fbbf24] text-2xl" aria-hidden="true">★</span>
                  </div>
                  <p className="text-[11px] sm:text-xs font-bold text-white uppercase tracking-tight leading-tight">
                    {stat.label}
                  </p>
                </>
              ) : (
                <>
                  <p className="font-display font-extrabold text-3xl sm:text-4xl text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 font-medium">
                    {stat.label}
                  </p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}