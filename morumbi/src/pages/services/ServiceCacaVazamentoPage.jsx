import React, { memo, useMemo, lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone, ArrowRight, MapPin, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavbarServices from "../../components/layout/NavbarServices";
import Footer from "../../components/layout/Footer";
import ServiceAreasModal from "../../components/sections/ServiceAreasModal";

const ServiceAreasList = lazy(
  () => import("../../components/sections/ServiceAreasList"),
);

const ServiceCacaVazamentoPage = () => {
  useEffect(() => {
    document.title = "Caça Vazamento no Morumbi e SP | Protec";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Deteção de vazamentos de água com Geofone. Reduza a sua conta de água sem quebrar pisos ou paredes no Morumbi e região.",
      );
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content =
        "Deteção de vazamentos de água com Geofone. Reduza a sua conta de água sem quebrar pisos ou paredes no Morumbi e região.";
      document.head.appendChild(metaDescription);
    }
  }, []);

  const benefits = useMemo(
    () => [
      "Deteção eletrónica exata com Geofone de última geração",
      "Localização de vazamentos de água sem necessidade de quebrar paredes",
      "Redução imediata de surpresas na fatura da SABESP",
      "Laudo técnico detalhado para contestação de contas",
      "Reparo imediato no local após a localização da rutura",
      "Equipe pronta para deslocamento em qualquer zona do Morumbi e SP",
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: "Como funciona a deteção de vazamentos pelo Geofone?",
        answer:
          "O Geofone é um aparelho de ultrassom que capta a frequência exata da água escapando do cano debaixo da terra ou dentro da parede, permitindo apontar o ponto exato da rutura sem danificar a estrutura.",
      },
      {
        question: "Vocês consertam o vazamento após localizá-lo?",
        answer:
          "Sim! Após o nosso técnico identificar a localização precisa, apresentamos o orçamento para o reparo. Se for aprovado, quebramos apenas o estritamente necessário (como um pequeno azulejo) para efetuar o conserto.",
      },
      {
        question: "Posso usar o laudo técnico na SABESP?",
        answer:
          "Absolutamente. Fornecemos um laudo técnico assinado que serve como comprovante de vazamento invisível, o que frequentemente ajuda na renegociação de contas de água excessivas junto à concessionária.",
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
          name: "Serviço de Caça Vazamento no Morumbi",
          provider: {
            "@type": "LocalBusiness",
            name: "Protec Desentupidora",
            telephone: "08005919537",
          },
          description:
            "Deteção de vazamentos de água ocultos com Geofone. Reduza a sua conta de água sem quebrar pisos ou paredes no Morumbi e SP.",
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
            alt="Técnico utilizando Geofone para Caça Vazamento"
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
                  Tecnologia Geofone - Sem Quebra-Quebra
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Caça Vazamento de Água no{" "}
                <span className="text-accent">Morumbi e SP</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-8 leading-relaxed">
                Conta de água alta? Detetamos vazamentos invisíveis com Geofone
                Eletrónico{" "}
                <strong className="text-foreground">
                  sem quebrar a sua casa.
                </strong>
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
                    Solicitar Caça Vazamento
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>

                <ServiceAreasModal
                  serviceName="Caça Vazamento"
                  baseSlug="/caca-vazamento-em"
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
              Conta de água alta sem explicação?
            </h2>
            <p className="text-accent-foreground/80 font-medium mt-1">
              Detectamos o vazamento oculto em minutos.
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
              Pare de pagar por{" "}
              <strong className="text-accent">vazamentos ocultos</strong>
            </h2>
            <p className="text-muted-foreground">
              Vazamentos de água não visíveis (infiltrações em lajes, paredes ou
              debaixo do solo) são os principais causadores de faturas
              exorbitantes. O nosso serviço de{" "}
              <strong>Caça Vazamento no Morumbi e Grande São Paulo</strong>{" "}
              poupa-lhe o transtorno do "quebra-quebra" tradicional.
            </p>
            <h3 className="text-2xl text-foreground mt-8 mb-4">
              Tecnologia de Ponta
            </h3>
            <p className="text-muted-foreground">
              Utilizamos o <strong>Geofone Eletrónico</strong>, um equipamento
              de ultrassom que capta a vibração exata da água escapando do cano,
              apontando o ponto da rutura com precisão cirúrgica.
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
                alt="Técnico com Geofone para detecção de vazamentos"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Deteção Precisa e Reparo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Localização em ponto exato por ultrassom.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Wrench className="w-5 h-5 text-accent" />
                    <p className="text-sm font-medium">
                      Laudo para redução da conta de água (SABESP).
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
                    Chamar Técnico com Geofone
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
          serviceName="Caça Vazamento"
          baseSlug="/caca-vazamento-em"
        />
      </Suspense>

      <section className="py-20 bg-secondary/30 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">
              Perguntas Frequentes sobre <br className="hidden md:block" />{" "}
              <span className="text-accent">Caça Vazamento</span>
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

export default memo(ServiceCacaVazamentoPage);
