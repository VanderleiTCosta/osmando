import React, { useMemo, useCallback } from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

// Tipagem estrita para garantir a integridade dos dados (se usar .tsx, se for .jsx pode remover a interface)
interface AreaGroup {
  id: string;
  region: string;
  neighborhoods: string[];
}

interface ServiceAreasListProps {
  serviceName?: string;
  baseSlug?: string;
}

// Dados estáticos fora do componente para não recriar na memória a cada re-render (Performance 100%)
const AREAS_DATA: AreaGroup[] = [
  {
    id: 'centro',
    region: 'Centro de São Paulo',
    neighborhoods: [
      'Aclimação', 'Anhanguera', 'Avenida Paulista', 'Bela Vista', 'Bom Retiro',
      'Brás', 'Cambuci', 'Campos Elíseos', 'Consolação', 'Higienópolis',
      'Jardins', 'Liberdade', 'Pacaembu', 'Pari', 'República',
      'Santa Cecília', 'Santa Efigênia'
    ]
  },
  {
    id: 'zona-oeste',
    region: 'Zona Oeste',
    neighborhoods: [
      'Água Branca', 'Alphaville', 'Alto da Lapa', 'Alto de Pinheiros', 'Amador Bueno',
      'Barra Funda', 'Barueri', 'Butantã', 'Carapicuiba', 'Caxingui',
      'Cotia', 'Embu das Artes', 'Granja Viana', 'Itapevi', 'Jaguaré',
      'Jandira', 'Jaraguá'
    ]
  },
  {
    id: 'zona-norte',
    region: 'Zona Norte',
    neighborhoods: [
      'Água Fria', 'Bairro do Limão', 'Brasilândia', 'Casa Verde', 'Freguesia do Ó',
      'Horto Florestal', 'Imirim', 'Jaçanã', 'Jardim Peri Peri', 'José Bonifácio',
      'Lauzane Paulista', 'Mandaqui', 'Parada Inglesa', 'Perus', 'Santana',
      'Santa Terezinha', 'Tremembé'
    ]
  },
  {
    id: 'zona-leste',
    region: 'Zona Leste',
    neighborhoods: [
      'Americanópolis', 'Arthur Alvim', 'Belém', 'Cangaiba', 'Cidade Líder',
      'Cidade Patriarca', 'Cidade Tiradentes', 'Ermelino Matarazzo', 'Guaianases',
      'Iguatemi', 'Itaim Paulista', 'Itaquera'
    ]
  },
  {
    id: 'zona-sul',
    region: 'Zona Sul',
    neighborhoods: [
      'Água Funda', 'Alto da Boa Vista', 'Bosque da Saúde', 'Brooklin', 'Campo Belo',
      'Campo Grande', 'Campo Limpo', 'Capela do Socorro', 'Capão Redondo'
    ]
  },
  {
    id: 'outras-regioes',
    region: 'Outras Regiões',
    neighborhoods: [
      'ABC Paulista', 'Aeroporto', 'Araçariguama', 'Bauru', 'Bragança Paulista',
      'Cajamar', 'Campinas', 'Cumbica', 'Diadema'
    ]
  }
];

const ServiceAreasList: React.FC<ServiceAreasListProps> = ({
  serviceName = "Desentupidora",
  baseSlug = "/desentupidora-em"
}) => {
  
  // Função de alta performance para conversão de slugs
  const createSlug = useCallback((text: string): string => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }, []);

  // Estruturação SEO Schema.org Local 
  const schemaOrgData = useMemo(() => {
    const allAreas = AREAS_DATA.flatMap(group => group.neighborhoods);
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${serviceName} Profissional`,
      "areaServed": allAreas.map(area => ({
        "@type": "City", 
        "name": area
      }))
    };
  }, [serviceName]);

  return (
    // Utilizando os tokens globais: bg-secondary/30 e border-border (Padrão da página)
    <section className="py-20 bg-secondary/30 border-t border-border" aria-labelledby="areas-atendimento-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }} />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          {/* Classes alinhadas com as headings da sua página */}
          <h2 id="areas-atendimento-title" className="font-display font-extrabold text-3xl md:text-4xl text-foreground mb-4">
            Áreas de Atendimento: <span className="text-accent">{serviceName}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Equipes de prontidão espalhadas estrategicamente. Selecione seu bairro abaixo para atendimento imediato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AREAS_DATA.map((group) => (
            // Cards seguindo o design system do resto do site: bg-card, border-border, rounded-2xl
            <article 
              key={group.id} 
              className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <header className="flex items-center mb-5 pb-3 border-b border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  <MapPin className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{group.region}</h3>
              </header>

              <nav aria-label={`Bairros atendidos na ${group.region}`}>
                <ul className="space-y-2.5">
                  {group.neighborhoods.map((neighborhood) => {
                    const urlSlug = `${baseSlug}-${createSlug(neighborhood)}`;
                    
                    return (
                      <li key={neighborhood}>
                        <a 
                          href={urlSlug}
                          className="flex items-center text-muted-foreground hover:text-accent transition-colors group py-1"
                          title={`${serviceName} em ${neighborhood}`}
                        >
                          <ChevronRight 
                            className="w-4 h-4 text-accent opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-1" 
                            aria-hidden="true"
                          />
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 group-hover:scale-125 transition-transform shrink-0" aria-hidden="true"></span>
                          <span className="font-medium text-sm md:text-base">
                            {serviceName} em <strong className="font-semibold text-foreground group-hover:text-accent transition-colors">{neighborhood}</strong>
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ServiceAreasList);