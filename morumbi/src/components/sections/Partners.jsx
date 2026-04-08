import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  {
    id: 'avon-empresa',
    name: 'Avon - Atendimento Corporativo',
    logo: '/image/avon.webp',
    alt: 'Avon - Parceria em desentupimento e manutenção preventiva para unidades corporativas',
  },
  {
    id: 'banco-brasil',
    name: 'Banco do Brasil - Gestão de Condomínios',
    logo: '/image/bb.webp',
    alt: 'Banco do Brasil - Parceria em gestão de condomínios e manutenção preventiva',
  },
  {
    id: 'bradesco-empresa',
    name: 'Banco Bradesco - Gestão de Condomínios',
    logo: '/image/bradesco.webp',
    alt: 'Banco Bradesco - Parceria em gestão de condomínios e manutenção preventiva',
  },
  {
    id: 'itau-empresa',
    name: 'Banco Itaú - Gestão de Condomínios',
    logo: '/image/itau.webp',
    alt: 'Banco Itaú - Parceria em gestão de condomínios e manutenção preventiva',
  },
  {
    id: 'petrobras-empresa',
    name: 'Petrobras - Gestão de Condomínios',
    logo: '/image/petrobras.webp',
    alt: 'Petrobras - Parceria em gestão de condomínios e manutenção preventiva',
  },
  {
    id: 'votorantim-empresa',
    name: 'Votorantim - Gestão de Condomínios',
    logo: '/image/votoramtim.webp',
    alt: 'Votorantim - Parceria em gestão de condomínios e manutenção preventiva',
  },
];

const PartnersSection = () => {
  // Duplicação para o efeito de Marquee infinito (alta performance, sem JS no scroll)
  const infinitePartners = useMemo(() => [...PARTNERS, ...PARTNERS], []);

  // Schema.org focado em B2B e SEO Local
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Parceiros e Empresas Homologadas da Protec Desentupidora em São Paulo",
    "description": "Lista de imobiliárias, administradoras de condomínios e empresas que possuem contrato de manutenção e desentupimento.",
    "itemListElement": PARTNERS.map((partner, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Organization",
        "name": partner.name,
        "image": `https://suadesentupidora.com.br${partner.logo}`
      }
    }))
  }), []);

  return (
    <section 
      id="parceiros" 
      className="py-24 bg-background border-y border-border/40 overflow-hidden"
    >
      {/* Injeção de JSON-LD para dominação de SERP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho seguindo o exato padrão do componente de Serviços */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            Rede de Confiança
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
            Nossos <span className="text-accent">Parceiros</span> e <span className="text-accent">Clientes</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Imobiliárias, condomínios e grandes empresas que confiam na nossa engenharia de desentupimento e manutenção preventiva contínua.
          </p>
        </motion.div>

        {/* Marquee de Alta Performance */}
        <div className="relative flex overflow-x-hidden group mt-8">
          {/* Fades laterais para design premium (adaptados para as cores do tema) */}
          <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-background to-transparent" aria-hidden="true" />
          <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-background to-transparent" aria-hidden="true" />

          <div 
            className="flex items-center gap-6 sm:gap-10 py-4 w-max animate-marquee hover:[animation-play-state:paused]"
            role="list"
          >
            {infinitePartners.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`}
                className="flex items-center justify-center min-w-[180px] sm:min-w-[220px] h-28 bg-card border border-border rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md grayscale-0 opacity-100"
                role="listitem"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  title={`Parceiro Oficial: ${partner.name}`}
                  width={180}
                  height={80}
                  loading="lazy"
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Estilos inline para a animação do Marquee garantindo funcionamento independente */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
};

export default memo(PartnersSection);