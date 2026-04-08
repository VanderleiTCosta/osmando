import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarServices from "../../components/layout/NavbarServices";
import Footer from "../../components/layout/Footer";

const ServiceLimpaFossaPage = () => {
  const benefits = useMemo(
    () => [
      "Esgotamento de fossas séticas, negras e secas",
      "Camiões limpa-fossa de alta capacidade de sucção",
      "Descarte ecológico em estações de tratamento autorizadas",
      "Prevenção de transbordamentos e mau cheiro",
      "Emissão de certificado de destinação de resíduos",
      "Atendimento de urgência no Morumbi e região metropolitana",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "Quando devo limpar a minha fossa sética?",
        answer:
          "A recomendação é realizar a limpeza preventiva a cada 1 ou 2 anos, dependendo da capacidade e do número de utilizadores. Sinais de alerta incluem ralos lentos e odores fortes no quintal.",
      },
      {
        question: "Como é feito o descarte dos resíduos?",
        answer:
          "Todo o material sugado pelos nossos camiões é transportado de forma segura e descartado em Estações de Tratamento de Esgoto (ETE) certificadas pela SABESP, cumprindo todas as normas ambientais.",
      },
      {
        question: "Realizam a limpeza de caixa de gordura em restaurantes?",
        answer:
          "Sim, fazemos a sucção a vácuo de caixas de gordura comerciais e industriais, garantindo a higiene e evitando multas sanitárias.",
      },
    ],
    [],
  );

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          name: "Serviço de Limpa Fossa no Morumbi e SP",
          provider: {
            "@type": "LocalBusiness",
            name: "Protec Desentupidora",
            telephone: "08005919537",
          },
          areaServed: [{ "@type": "City", name: "São Paulo" }],
          description:
            "Limpeza, esgotamento e higienização de fossas séticas com camião de auto vácuo. Descarte ecológico com certificado.",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
      ],
    }),
    [faqs],
  );

  return (
    <main className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NavbarServices />
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/image/hero.png"
            alt="Limpeza de Fossa Séptica em São Paulo"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
                <span className="text-xs font-bold text-accent tracking-wider uppercase">
                  Certificação Ambiental e Laudo
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Limpa Fossa no{" "}
                <span className="text-accent">Morumbi e Grande SP</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Esgotamento de fossas séticas, caixas de gordura e sumidouros
                com camiões de auto vácuo potentes.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511940103334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl transition-all"
                  >
                    Solicitar Caminhão Auto Vácuo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">
              Esgotamento Seguro e{" "}
              <strong className="text-accent">Ecológico</strong>
            </h2>
            <p className="text-muted-foreground">
              A <strong>limpeza de fossa</strong> é crucial para a saúde pública
              e higiene do seu imóvel. A Protec atua no{" "}
              <strong>Morumbi e Grande SP</strong> removendo efluentes líquidos
              e pastosos de fossas séticas, garantindo que não haja contaminação
              do solo ou odores desagradáveis no ambiente.
            </p>
            <h3 className="text-2xl text-foreground mt-8 mb-4">
              Caixas de Gordura Comerciais
            </h3>
            <p className="text-muted-foreground">
              Restaurantes e condomínios necessitam de manutenção constante. O
              nosso sistema de sucção a vácuo higieniza profundamente{" "}
              <strong>caixas de gordura</strong> e estações de tratamento,
              evitando entupimentos graves na rede matriz.
            </p>
            <ul className="mt-8 space-y-4 not-prose">
              {benefits.map((benefit, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-muted-foreground font-medium"
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Serviço com Certificação
                </h3>
                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Droplets className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Sucção de alta potência.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Destinação aprovada pelos órgãos ambientais.
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5511940103334"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8"
                >
                  <Button className="w-full h-12 text-base font-bold bg-green-500 hover:bg-green-600 text-white">
                    Agendar Limpeza
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default memo(ServiceLimpaFossaPage);
