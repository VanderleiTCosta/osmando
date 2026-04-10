import React, { memo, useMemo, lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../../components/layout/Footer";
import NavbarServices from "../../components/layout/NavbarServices";
import ServiceAreasModal from "../../components/sections/ServiceAreasModal";

const ServiceAreasList = lazy(
  () => import("../../components/sections/ServiceAreasList"),
);

const ServiceHidrojateamentoPage = () => {
  useEffect(() => {
    document.title = "Serviço de Hidrojateamento no Morumbi e SP | Protec";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Limpeza profunda de tubulações com hidrojateamento de alta pressão. Remoção de incrustações em indústrias, comércios e condomínios.",
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Limpeza profunda de tubulações com hidrojateamento de alta pressão. Remoção de incrustações em indústrias, comércios e condomínios.";
      document.head.appendChild(metaDescription);
    }
  }, []);

  const benefits = useMemo(
    () => [
      "Tecnologia de alta pressão que não danifica a tubulação",
      "Ideal para limpeza de galerias, prumadas e redes industriais",
      "Remoção total de gordura, raízes e incrustações",
      "Equipa técnica especializada com EPIs completos",
      "Frota própria equipada com bombas de ultra pressão",
      "Atendimento emergencial 24h no Morumbi e Grande SP",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "O que é o hidrojateamento e para que serve?",
        answer:
          "O hidrojateamento é uma técnica que utiliza água em altíssima pressão para limpar e desobstruir tubulações. É a solução mais eficaz para remover gordura petrificada, cimento, raízes e resíduos industriais sem danificar os canos.",
      },
      {
        question: "O hidrojateamento pode danificar os meus canos?",
        answer:
          "Não. Os nossos técnicos regulam a pressão da água de acordo com o diâmetro e o material da tubulação, garantindo uma limpeza profunda a 100% sem qualquer risco de rutura estrutural.",
      },
      {
        question: "Fazem hidrojateamento preventivo em condomínios?",
        answer:
          "Sim, oferecemos contratos de manutenção preventiva para condomínios e empresas no Morumbi, realizando o hidrojateamento de prumadas e colunas para evitar entupimentos futuros.",
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
          name: "Serviço de Hidrojateamento no Morumbi e SP",
          provider: {
            "@type": "LocalBusiness",
            name: "Protec Desentupidora",
            telephone: "08005919537",
          },
          areaServed: [
            { "@type": "City", name: "São Paulo" },
            { "@type": "Neighborhood", name: "Morumbi" },
          ],
          description:
            "Limpeza profunda de tubulações com hidrojateamento de alta pressão. Remoção de incrustações em indústrias, condomínios e residências.",
        },
        {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
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
            alt="Camião de Hidrojateamento da Protec Desentupidora em operação"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/70"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                <span className="text-xs font-bold text-accent tracking-wider uppercase">
                  Alta Pressão - Residencial e Industrial
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Hidrojateamento no{" "}
                <span className="text-accent">Morumbi e Grande SP</span>
              </h1>

              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Limpeza extrema e desobstrução de tubulações com jatos de água
                em alta pressão.{" "}
                <strong className="text-foreground">
                  Remoção de 100% das impurezas.
                </strong>
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511937724242?text=Olá! Preciso de orçamento para hidrojateamento."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:scale-105 transition-all"
                  >
                    Agendar Hidrojateamento
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>

                <ServiceAreasModal
                  serviceName="Hidrojateamento"
                  baseSlug="/hidrojateamento-em"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-8 border-y border-accent/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground">
              Tubulações pesadas entupidas?
            </h2>
            <p className="text-accent-foreground/80 font-medium mt-1">
              A força da água resolve o que as máquinas comuns não conseguem.
            </p>
          </div>
          <a
            href="tel:08005919537"
            className="flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-xl font-black text-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <Phone className="w-8 h-8 fill-current" />
            0800 591 9537
          </a>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-a:text-accent max-w-none"
          >
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">
              A Potência do{" "}
              <strong className="text-accent">Hidrojateamento</strong>
            </h2>
            <p className="text-muted-foreground">
              O <strong>hidrojateamento</strong> é a solução de ponta para
              entupimentos severos. Como especialista no{" "}
              <strong>Morumbi e Grande São Paulo</strong>, a Protec utiliza
              camiões equipados com bombas de alta e ultra pressão que disparam
              jatos de água capazes de cortar raízes e pulverizar cimento no
              interior dos canos.
            </p>
            <h3 className="text-2xl text-foreground mt-8 mb-4">
              Manutenção de Condomínios e Indústrias
            </h3>
            <p className="text-muted-foreground">
              Trabalhamos com redes de águas pluviais, galerias de esgoto,
              caixas de gordura industriais e colunas de prédios. A limpeza com{" "}
              <strong>alta pressão</strong> restaura o diâmetro original da
              tubulação, prevenindo inundações e paralisações operacionais.
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
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-border bg-card">
              <img
                src="/image/hero.png"
                alt="Técnico com mangueira de hidrojateamento"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Serviço Técnico Especializado
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Equipas prontas em SP e Interior.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Wrench className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Ajuste milimétrico de pressão de água.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Laudo técnico após conclusão.
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5511937724242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-8"
                >
                  <Button className="w-full h-12 text-base font-bold bg-green-500 hover:bg-green-600 text-white">
                    Solicitar Orçamento Grátis
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Suspense
        fallback={
          <div className="py-16 flex justify-center text-muted-foreground">
            A carregar áreas de atendimento...
          </div>
        }
      >
        <ServiceAreasList
          serviceName="Hidrojateamento"
          baseSlug="/hidrojateamento-em"
        />
      </Suspense>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              Perguntas Frequentes sobre <br />{" "}
              <span className="text-accent">Hidrojateamento</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-start gap-3">
                  <span className="text-accent mt-1">Q.</span> {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default memo(ServiceHidrojateamentoPage);
