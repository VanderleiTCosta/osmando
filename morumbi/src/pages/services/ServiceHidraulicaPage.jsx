import React, { memo, useMemo, lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Wrench,
  Droplets,
  Phone,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "../../components/layout/Footer";
import NavbarServices from "../../components/layout/NavbarServices";
import ServiceAreasModal from "../../components/sections/ServiceAreasModal";

const ServiceAreasList = lazy(
  () => import("../../components/sections/ServiceAreasList"),
);

const ServiceHidraulicaPage = () => {
  useEffect(() => {
    document.title = "Encanador e Serviços Hidráulicos no Morumbi | Protec";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Instalação e manutenção hidráulica completa. Reparos e substituições de tubulações, torneiras e registos com encanadores certificados.",
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Instalação e manutenção hidráulica completa. Reparos e substituições de tubulações, torneiras e registos com encanadores certificados.";
      document.head.appendChild(metaDescription);
    }
  }, []);

  const benefits = useMemo(
    () => [
      "Instalação e reparo completo de tubulações de água fria e quente",
      "Conserto de vazamentos em torneiras, registos e chuveiros",
      "Instalação de louças sanitárias, pias e metais",
      "Substituição de sifões, válvulas de descarga e boias de caixa d'água",
      "Adequação e modernização de rede hidráulica",
      "Atendimento rápido por encanadores certificados",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "A minha torneira ou registo está a pingar, vocês consertam?",
        answer:
          "Sim! Fazemos a substituição do reparo (carrapeta/borracha) ou a troca completa do registo ou torneira, estancando o vazamento e reduzindo a sua conta de água.",
      },
      {
        question: "Fazem instalação de louças e metais novos?",
        answer:
          "Com certeza. Instalamos pias, vasos sanitários, misturadores, chuveiros e bidés com acabamento impecável, seguindo todas as normas de segurança.",
      },
      {
        question: "E se um cano estourar de madrugada?",
        answer:
          "A nossa equipa de plantão 24 horas está pronta para fechar o abastecimento e reparar o cano estourado de imediato, minimizando os danos causados pela água no seu imóvel.",
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
          name: "Encanador e Serviços Hidráulicos no Morumbi",
          provider: {
            "@type": "LocalBusiness",
            name: "Protec Desentupidora",
            telephone: "08005919537",
          },
          description:
            "Instalação e manutenção completa de sistemas hidráulicos. Reparos, substituições e instalações de tubulações, torneiras e registros.",
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
            src="/image/hero.webp"
            alt="Encanador realizando reparos hidráulicos"
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
                  Encanadores Certificados - Atendimento 24h
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Encanador e Serviços Hidráulicos no{" "}
                <span className="text-accent">Morumbi</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Reparos, instalações e manutenção de rede hidráulica com
                garantia de quem entende do assunto.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5511937724242"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-xl hover:scale-105 transition-all"
                  >
                    Solicitar Encanador
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>

                <ServiceAreasModal
                  serviceName="Encanador"
                  baseSlug="/encanador-em"
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
              Cano estourado ou torneira a pingar?
            </h2>
            <p className="text-accent-foreground/80 font-medium mt-1">
              Resolvemos hoje mesmo o seu problema.
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
              Manutenção <strong className="text-accent">Hidráulica</strong>{" "}
              Especializada
            </h2>
            <p className="text-muted-foreground">
              Evite amadorismos que resultam em vazamentos graves no futuro. Os
              nossos encanadores são capacitados para resolver desde um simples
              registo a pingar até à substituição completa de prumadas e redes
              de esgoto e água no <strong>Morumbi e Grande São Paulo</strong>.
            </p>
            <h3 className="text-2xl text-foreground mt-8 mb-4">
              Profissionais Certificados
            </h3>
            <p className="text-muted-foreground">
              Todos os nossos encanadores possuem{" "}
              <strong>certificação e experiência comprovada</strong>, garantindo
              um serviço de qualidade com materiais de primeira linha e
              acabamento impecável.
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
                src="/image/hero.webp"
                alt="Encanador realizando reparo hidráulico"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Reparos Rápidos e Limpos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Wrench className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Ferramentas adequadas para não danificar metais.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Droplets className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Soluções definitivas para gotejamentos.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Garantia de 1 ano no serviço realizado.
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
                    Chamar Equipe Técnica
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
        <ServiceAreasList serviceName="Encanador" baseSlug="/encanador-em" />
      </Suspense>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              Dúvidas Frequentes:{" "}
              <span className="text-accent">Hidráulica</span>
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

export default memo(ServiceHidraulicaPage);
