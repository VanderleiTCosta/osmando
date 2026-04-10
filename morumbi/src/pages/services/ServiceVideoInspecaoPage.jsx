import React, { memo, useMemo, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Video, FileCheck, Phone, ArrowRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../../components/layout/Footer";
import NavbarServices from "../../components/layout/NavbarServices";

// Code Splitting: Carregamento sob demanda
const ServiceAreasList = lazy(() => import('../../components/sections/ServiceAreasList'));

const ServiceVideoInspecaoPage = () => {
  const benefits = useMemo(
    () => [
      "Mapeamento completo e diagnóstico preciso do encanamento",
      "Câmeras de alta resolução (robóticas e manuais)",
      "Identificação de rachaduras, raízes, ferrugem e desvios",
      "Localização exata do problema sem quebrar azulejos ou pisos",
      "Geração de vídeo e laudo técnico para condomínios e seguradoras",
      "Ideal para validação pós-obra e manutenções preventivas",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "O que é a Vídeo Inspeção de Tubulações?",
        answer:
          "Consiste na introdução de uma microcâmera de alta resolução dentro dos canos. A imagem é transmitida em tempo real para um monitor, permitindo ao técnico ver exatamente onde e qual é a causa do entupimento ou vazamento.",
      },
      {
        question: "Recebo a gravação do serviço?",
        answer:
          "Sim! Fornecemos a gravação digital da inspeção acompanhada de um laudo técnico assinado. Isso é fundamental para prestação de contas em condomínios ou acionamento de seguros residenciais.",
      },
      {
        question: "A câmera entra em qualquer tipo de cano?",
        answer:
          "Possuímos diferentes sondas e câmeras que se adaptam a diversos diâmetros de tubulações, desde ramais de pia até grandes galerias de esgoto pluvial.",
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
          name: "Vídeo Inspeção de Tubulações em SP",
          provider: {
            "@type": "LocalBusiness",
            name: "Protec Desentupidora",
            telephone: "08005919537",
          },
          description:
            "Inspeção detalhada de tubulações com câmera especializada. Diagnóstico preciso sem necessidade de quebrar paredes ou pisos.",
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
            alt="Técnico operando equipamento de vídeo inspeção"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/70" aria-hidden="true" />
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
                <span className="text-xs font-bold text-accent tracking-wider uppercase">Diagnóstico por Imagem - Tecnologia 4K</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Vídeo Inspeção de Tubulação no{" "}
                <span className="text-accent">Morumbi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Diagnóstico 100% preciso com câmera de alta resolução. Veja o
                problema por dentro{" "}
                <strong className="text-foreground">
                  sem destruir o piso.
                </strong>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511940103334"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:scale-105 transition-all"
                  >
                    Agendar Inspeção
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-accent py-8 border-y border-accent/20 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-accent-foreground">Não sabe onde está o problema?</h2>
            <p className="text-accent-foreground/80 font-medium mt-1">Encontramos com precisão cirúrgica.</p>
          </div>
          <a href="tel:08005919537" className="flex items-center gap-3 bg-white text-accent px-8 py-4 rounded-xl font-black text-2xl shadow-lg hover:scale-105 transition-transform">
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
              Pare de adivinhar onde está o{" "}
              <strong className="text-accent">problema</strong>
            </h2>
            <p className="text-muted-foreground">
              O serviço de{" "}
              <strong>Vídeo Inspeção de Esgotos e Tubulações</strong>{" "}
              revolucionou o mercado. Com ele, mapeamos todo o encanamento e
              detetamos falhas estruturais, amassamentos, raízes intrusas e
              entupimentos crónicos com exatidão cirúrgica, poupando tempo e
              dinheiro com obras desnecessárias.
            </p>
            <h3 className="text-2xl text-foreground mt-8 mb-4">
              Ideal para Condomínios e Seguros
            </h3>
            <p className="text-muted-foreground">
              O <strong>laudo técnico</strong> gerado após a inspeção é aceito por seguradoras e administradoras de condomínios, servindo como prova para acionamento de garantias e coberturas.
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
                alt="Câmera de vídeo inspeção em ação" 
                className="w-full h-80 object-cover" 
                loading="lazy" 
              />
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Laudo Técnico e Filmagem
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Camera className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Equipamento de última geração com imagem nítida.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Video className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Gravação digital em alta resolução.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <FileCheck className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Documentação válida para condomínios e perícias.
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
                    Solicitar Orçamento
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Componente de Áreas de Atendimento com Lazy Loading */}
      <Suspense fallback={<div className="py-16 flex justify-center text-muted-foreground">A carregar áreas de atendimento...</div>}>
        <ServiceAreasList 
          serviceName="Vídeo Inspeção" 
          baseSlug="/video-inspecao-em" 
        />
      </Suspense>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              Perguntas sobre{" "}
              <span className="text-accent">Vídeo Inspeção</span>
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
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

export default memo(ServiceVideoInspecaoPage);