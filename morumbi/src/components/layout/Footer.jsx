import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICE_AREAS = [
  "Centro",
  "Zona Oeste",
  "Zona Sul",
  "Zona Norte",
  "Zona Leste",
];

// Array de serviços atualizado com os caminhos corretos (rotas)
const SERVICES = [
  { name: "Desentupimento", path: "/servicos/desentupimento" },
  { name: "Hidrojateamento", path: "/servicos/hidrojateamento" },
  { name: "Limpa Fossa", path: "/servicos/limpeza-de-fossa" },
  { name: "Caça Vazamento", path: "/servicos/caca-vazamento" },
  { name: "Vídeo Inspeção", path: "/servicos/video-inspecao" },
  { name: "Serviços Hidráulicos", path: "/servicos/servicos-hidraulicos" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Substituído <a> por <Link> para garantir o retorno à Home a partir de qualquer página */}
              <Link to="/" className="flex items-center gap-2">
                <img
                  src="/image/logo-protec.png"
                  alt="Logo"
                  className="w-36 h-auto"
                />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Há mais de 15 anos oferecendo serviços de desentupimento com
              qualidade, tecnologia e atendimento 24 horas em São Paulo e região
              metropolitana.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Serviços
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.name}>
                  {/* Componente <Link> permite navegação instantânea para a rota do serviço */}
                  <Link
                    to={s.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Regiões
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a}>
                  <span className="text-sm text-muted-foreground">
                    Desentupidora {a}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <p className="font-medium text-foreground">0800 591 9537</p>
                  <p>(11) 93772-4242</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>24 horas — Todos os dias</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>São Paulo e Região Metropolitana</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Grupo Protec Desentupidora. Todos os
              direitos reservados.
            </p>
            <p>Desentupidora 24h em São Paulo | CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
