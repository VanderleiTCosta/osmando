import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { REGIONS, slugify } from '@/lib/areas';

export default function ServiceAreas() {
  return (
    <section id="regioes" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Áreas de Atendimento</p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Desentupidora em <span className="text-accent">São Paulo</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Atendemos toda São Paulo e região metropolitana. Se sua região não estiver listada, entre em contato e veremos como podemos atendê-lo.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {Object.entries(REGIONS).map(([region, areas], i) => (
            <motion.div
              key={region}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-accent" />
                <h3 className="font-display font-bold text-sm text-foreground">{region}</h3>
              </div>
              <ul className="space-y-1.5">
                {areas.map((area) => (
                  <li key={area}>
                    <Link
                      to={`/desentupidora-em-${slugify(area)}`}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Desentupidora em {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}