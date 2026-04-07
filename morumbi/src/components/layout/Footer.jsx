import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const SERVICE_AREAS = [
  'Morumbi', 'Butantã', 'Pinheiros', 'Vila Mariana', 'Moema',
  'Santo Amaro', 'Alphaville', 'Osasco', 'Barueri', 'Itapevi',
];

const SERVICES = [
  'Desentupimento', 'Hidrojateamento', 'Limpa Fossa',
  'Caça Vazamento', 'Vídeo Inspeção', 'Serviços Hidráulicos',
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">GP</span>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-foreground">Grupo Protec</p>
                <p className="text-[10px] text-muted-foreground tracking-wider uppercase">Desentupidora 24h</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Há mais de 15 anos oferecendo serviços de desentupimento com qualidade, tecnologia e atendimento 24 horas em São Paulo e região metropolitana.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Serviços</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Regiões</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((a) => (
                <li key={a}>
                  <span className="text-sm text-muted-foreground">Desentupidora em {a}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm text-foreground mb-4 uppercase tracking-wider">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <div>
                  <p className="font-medium text-foreground">0800 591 9537</p>
                  <p>(11) 94010-3334</p>
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
            <p>© {new Date().getFullYear()} Grupo Protec Desentupidora. Todos os direitos reservados.</p>
            <p>Desentupidora 24h em São Paulo | CNPJ: 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}