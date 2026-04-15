import React, { useState, useEffect, memo, useCallback } from "react";
import { Phone, Menu, X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NavbarServices = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Otimização de performance: listener de scroll passivo para não bloquear a thread principal
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar de Alta Conversão (Gatilho de Urgência) */}
      <div className="bg-accent text-accent-foreground text-xs md:text-sm font-bold py-2 text-center tracking-wide uppercase flex items-center justify-center gap-2 shadow-sm">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
        Plantão 24 Horas - Equipes de Prontidão Imediata
      </div>

      <nav
        aria-label="Navegação de Serviços"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Lado Esquerdo: Botão Voltar + Logo */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/"
              className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-foreground/80 hover:text-foreground"
              }`}
              aria-label="Voltar à página inicial"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  scrolled
                    ? "bg-secondary hover:bg-accent/10"
                    : "bg-background/50 hover:bg-background/80 backdrop-blur-sm"
                }`}
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="hidden sm:block">Voltar ao Início</span>
            </Link>

            <div
              className={`w-px h-6 hidden sm:block ${scrolled ? "bg-border" : "bg-border/50"}`}
              aria-hidden="true"
            ></div>

            {/* Logo Protec simplificado com proteção CLS */}
            <Link
              to="/"
              className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
              aria-label="Página Inicial Protec"
            >
              <img
                src="/image/logo-protec.webp"
                alt="Logotipo da Protec Desentupidora"
                className="h-12 w-auto"
                width="144"
                height="48"
              />
            </Link>
          </div>

          {/* Lado Direito: CTAs Principais (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:08005919537"
              className={`font-extrabold text-lg flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md ${
                scrolled
                  ? "text-foreground hover:text-accent"
                  : "text-foreground/90 hover:text-foreground"
              }`}
              aria-label="Ligar para a central gratuita no número 0800 591 9537"
            >
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              0800 591 9537
            </a>

            <a
              href="https://wa.me/5511937724242"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chamar equipa de prontidão no WhatsApp"
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white font-bold h-11 px-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                Chamar no WhatsApp
              </Button>
            </a>
          </div>

          {/* Lado Direito: Ações Rápidas (Mobile) */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="tel:08005919537"
              className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent animate-pulse focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Ligar agora para a nossa central"
            >
              <Phone className="w-5 h-5 fill-current" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                scrolled
                  ? "bg-secondary text-foreground"
                  : "bg-background/50 text-foreground backdrop-blur-sm"
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-services-menu"
              aria-label={
                mobileOpen
                  ? "Fechar opções de contacto"
                  : "Abrir opções de contacto"
              }
            >
              {mobileOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Dropdown Mobile (Apenas CTAs focados) */}
      <div
        id="mobile-services-menu"
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-2xl transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 flex flex-col gap-3">
          <a
            href="tel:08005919537"
            className="flex items-center justify-center gap-3 w-full bg-secondary hover:bg-secondary/80 text-foreground font-extrabold rounded-xl py-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Ligar Grátis para 0800 591 9537"
          >
            <Phone className="w-5 h-5 text-accent" aria-hidden="true" />
            Ligar Grátis: 0800 591 9537
          </a>
          <a
            href="https://wa.me/5511937724242"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-extrabold rounded-xl py-4 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Contactar via WhatsApp no número 11 93772 4242"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-1.558.09c-.298.049-.768.124-1.066.818-.298.694-1.14 2.8-1.239 2.998-.099.198-.198.446-.496.595-.298.15-1.338.52-2.553-1.487-1.215-2.007-1.364-2.354-1.513-2.652-.149-.297-.015-.458.134-.606.149-.149.347-.347.496-.545.149-.198.198-.346.298-.594.099-.248.05-.446-.025-.595-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.84.498 3.565 1.374 5.05L2 22l5.12-1.336A9.954 9.954 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.626 0-3.155-.417-4.464-1.15l-.32-.18-3.14.818.835-3.06-.198-.315A8.204 8.204 0 0 1 3.75 12c0-4.55 3.7-8.25 8.25-8.25 4.55 0 8.25 3.7 8.25 8.25 0 4.55-3.7 8.25-8.25 8.25z" />
            </svg>
            WhatsApp (11) 93772-4242
          </a>
        </div>
      </div>
    </header>
  );
};

NavbarServices.displayName = "NavbarServices";

export default memo(NavbarServices);