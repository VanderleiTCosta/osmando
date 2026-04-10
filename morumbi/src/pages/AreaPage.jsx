import React, { useEffect, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Phone, ArrowRight, Shield, Clock, Wrench, CheckCircle,
  MapPin, Star, Quote, CreditCard, Banknote, QrCode, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhatsAppFloat from '../components/layout/WhatsAppFloat';
// Importação da nossa nova base de dados de SEO Local
import { dynamicPagesData } from '../data/neighborhoodData';

const SERVICES = [
  'Desentupimento de Esgoto',
  'Desentupimento de Pia',
  'Desentupimento de Vaso Sanitário',
  'Desentupimento de Ralo',
  'Hidrojateamento',
  'Limpa Fossa',
  'Vídeo Inspeção',
  'Caça Vazamento',
  'Serviços Hidráulicos',
  'Limpeza de Caixa de Gordura',
];

const TESTIMONIALS = [
  { name: 'Helena Cecília', text: 'Chegaram muito rápido e resolveram meu problema de verdade. Recomendo!' },
  { name: 'João Antonio', text: 'Cobraram muito mais barato do que imaginava e resolveram tudo rapidamente.' },
  { name: 'Laura Alice', text: 'Atendimento ótimo e meus problemas foram solucionados. Empresa profissional!' },
];

const FAQS = [
  {
    q: 'Quanto tempo demora o atendimento após o contato?',
    a: 'Chegamos em até 30 minutos após o contato. Atendemos 24 horas por dia, todos os dias da semana, incluindo feriados.',
  },
  {
    q: 'A visita tem algum custo?',
    a: 'Não. A visita é totalmente gratuita e sem compromisso. Só executamos o serviço após você aprovar o orçamento.',
  },
  {
    q: 'Vocês precisam quebrar piso ou paredes?',
    a: 'Na maioria dos casos, não. Utilizamos equipamentos modernos que permitem resolver o problema sem quebra-quebra desnecessário.',
  },
  {
    q: 'Quais formas de pagamento vocês aceitam?',
    a: 'Aceitamos Pix, dinheiro, cartões de crédito e débito (parcelamos), boleto e PagSeguro.',
  },
];

export default function AreaPage() {
  const { slug } = useParams();
  
  // Busca a página exata gerada dinamicamente (ex: desentupidora-em-freguesia-do-o)
  const pageData = useMemo(() => {
    return dynamicPagesData.find(page => page.slug === slug);
  }, [slug]);

  // Aplicação do SEO no Head do documento e Scroll to Top
  useEffect(() => {
    if (pageData) {
      document.title = pageData.pageTitle;
      
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", pageData.metaDescription);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = pageData.metaDescription;
        document.head.appendChild(metaDescription);
      }
      
      window.scrollTo(0, 0);
    }
  }, [pageData]);

  // Se a URL estiver errada ou bairro não existir, redireciona para a Home
  if (!pageData) {
    return <Navigate to="/" replace />;
  }

  // Schema Markup para o Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${pageData.serviceName} em ${pageData.neighborhood}`,
    "provider": { "@type": "LocalBusiness", "name": "Protec Desentupidora", "telephone": "08005919537" },
    "areaServed": { "@type": "Neighborhood", "name": pageData.neighborhood },
    "description": pageData.metaDescription
  };

  // Bairros próximos da mesma região e do mesmo serviço
  const nearbyAreas = dynamicPagesData
    .filter(p => p.region === pageData.region && p.serviceName === pageData.serviceName && p.slug !== slug)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
              <ChevronRight className="w-3 h-3" />
              <span>{pageData.region}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-foreground">{pageData.neighborhood}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Copy */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-medium text-primary">Equipe em {pageData.neighborhood}</span>
                </div>

                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-foreground">
                  {pageData.serviceName} em
                  <br />
                  <span className="text-accent">{pageData.neighborhood}</span>
                  <br />
                  <span className="text-3xl sm:text-4xl text-muted-foreground">24 Horas</span>
                </h1>

                <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Serviço de <strong className="text-foreground">{pageData.serviceName.toLowerCase()}</strong> em <strong className="text-foreground">{pageData.neighborhood}</strong> com visita gratuita e chegada em até <strong className="text-foreground">30 minutos</strong>. Grupo Protec — mais de 15 anos de experiência.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a
                    href={`https://wa.me/5511940103334?text=Olá! Preciso de orçamento para ${pageData.serviceName} em ${pageData.neighborhood}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 h-14 w-full sm:w-auto">
                      Chamar no WhatsApp
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="tel:08005919537">
                    <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 h-14 w-full sm:w-auto hover:bg-secondary">
                      <Phone className="w-5 h-5 mr-2 text-accent" />
                      0800 591 9537
                    </Button>
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {[
                    { icon: Clock, text: 'Atendimento 24h' },
                    { icon: Shield, text: 'Garantia de Serviço' },
                    { icon: Wrench, text: 'Visita Gratuita' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <h2 className="font-display font-bold text-xl text-foreground">Orçamento em {pageData.neighborhood}</h2>
                    <p className="text-sm text-muted-foreground mt-1">Resposta em menos de 5 minutos</p>
                  </div>
                  <div className="space-y-4">
                    <a
                      href="tel:08005919537"
                      className="flex items-center justify-center gap-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl py-4 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      Ligar Grátis — 0800 591 9537
                    </a>
                    <a
                      href={`https://wa.me/5511940103334?text=Olá! Preciso de orçamento para ${pageData.serviceName} em ${pageData.neighborhood}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl py-4 transition-colors"
                    >
                      WhatsApp — (11) 94010-3334
                    </a>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="font-display font-extrabold text-2xl text-foreground">15+</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Anos</p>
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-2xl text-foreground">30min</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Chegamos</p>
                    </div>
                    <div>
                      <p className="font-display font-extrabold text-2xl text-foreground">24h</p>
                      <p className="text-xs text-muted-foreground mt-0.5">Disponível</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border text-center">
                    <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-green-500" />
                      Visita gratuita · Sem compromisso · Parcelamos
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">O que fazemos</p>
              <h2 className="font-display font-extrabold text-3xl text-foreground">
                Serviços disponíveis em <span className="text-accent">{pageData.neighborhood}</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {SERVICES.map((service, i) => (
                <motion.a
                  key={service}
                  href={`https://wa.me/5511940103334?text=Olá! Preciso de ${service} em ${pageData.neighborhood}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-xl p-4 hover:border-primary/30 hover:bg-secondary/50 transition-all group"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{service}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* About local - AGORA 100% DINÂMICO BASEADO NO SERVIÇO E BAIRRO */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Atendimento local</p>
              <h2 className="font-display font-extrabold text-3xl text-foreground mb-6">
                {pageData.serviceName} de confiança em <span className="text-accent">{pageData.neighborhood}</span>
              </h2>
              
              {/* HTML Dinâmico injetado diretamente da base de SEO */}
              <div 
                className="prose prose-invert max-w-none text-muted-foreground leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: pageData.content }}
              />

            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <h2 className="font-display font-extrabold text-3xl text-foreground">
                Clientes que <span className="text-accent">confiam</span>
              </h2>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <Quote className="w-7 h-7 text-primary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display font-bold text-sm text-primary">{t.name[0]}</span>
                    </div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display font-extrabold text-3xl text-foreground">
                Dúvidas frequentes — <span className="text-accent">{pageData.neighborhood}</span>
              </h2>
            </motion.div>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline text-left py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Nearby areas dinâmico baseado na mesma Região e Serviço */}
        {nearbyAreas.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-10"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Regiões próximas</p>
                <h2 className="font-display font-extrabold text-2xl text-foreground">
                  Também atendemos na {pageData.region}
                </h2>
              </motion.div>
              <div className="flex flex-wrap justify-center gap-3">
                {nearbyAreas.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    to={`/${nearby.slug}`}
                    className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {nearby.serviceName} em {nearby.neighborhood}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20 rounded-3xl p-8 sm:p-12 text-center"
            >
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground">
                {pageData.serviceName} em <span className="text-accent">{pageData.neighborhood}</span> agora?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                Não espere o problema piorar. Ligue ou chame no WhatsApp e receba atendimento imediato com visita gratuita.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <a
                  href={`https://wa.me/5511940103334?text=Olá! Preciso de ${pageData.serviceName} em ${pageData.neighborhood}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base px-8 h-14">
                    Chamar no WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
                <a href="tel:08005919537">
                  <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 h-14 hover:bg-secondary">
                    0800 591 9537
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
                {[
                  { icon: CreditCard, label: 'Cartões' },
                  { icon: QrCode, label: 'PIX' },
                  { icon: Banknote, label: 'Dinheiro' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="w-4 h-4 text-accent" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}