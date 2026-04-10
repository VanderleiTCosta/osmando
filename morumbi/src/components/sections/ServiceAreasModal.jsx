import React, { useState, useMemo, useCallback } from 'react';
import { MapPin, Search, Map, AlertCircle, ChevronLeft, Compass } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AREAS_DATA = [
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

const ServiceAreasModal = ({ serviceName = "Desentupidora", baseSlug = "/desentupidora-em" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState(null);

  const createSlug = useCallback((text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value) {
      setSelectedRegion(null);
    }
  };

  // NOVA LÓGICA DE PESQUISA: Em vez de devolver grupos/caixas, devolve uma lista plana e limpa de bairros
  const flatSearchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const lowerSearch = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const results = [];
    AREAS_DATA.forEach(group => {
      group.neighborhoods.forEach(neighborhood => {
        if (neighborhood.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(lowerSearch)) {
          results.push({ neighborhood, region: group.region });
        }
      });
    });
    
    return results;
  }, [searchTerm]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-background/80 backdrop-blur-md border-2 border-accent text-foreground hover:bg-accent hover:text-white shadow-lg hover:scale-105 transition-all group"
        >
          <Map className="w-5 h-5 mr-2 text-accent group-hover:text-white transition-colors" />
          Áreas Atendidas
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl w-[95vw] max-h-[85vh] p-0 flex flex-col overflow-hidden bg-background border-border sm:rounded-3xl shadow-2xl">
        
        {/* Cabeçalho do Modal */}
        <DialogHeader className="p-6 pb-6 border-b border-border bg-secondary/30 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-display font-extrabold text-foreground flex items-center gap-3">
            Onde você precisa de {serviceName}?
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-2">
            Selecione a sua região ou pesquise o seu bairro para atendimento imediato.
          </DialogDescription>
          
          <div className="relative mt-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Pesquise o seu bairro (Ex: Morumbi, Pinheiros...)" 
              className="pl-12 h-14 text-lg bg-card border-2 border-border focus-visible:ring-0 focus-visible:border-accent rounded-xl shadow-inner transition-colors"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground hover:text-foreground text-sm font-medium"
              >
                Limpar
              </button>
            )}
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto p-6 flex-1 scroll-smooth">
          
          {/* ESTADO 1: ESCOLHER A ZONA */}
          {!searchTerm && !selectedRegion && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-center justify-center mb-6">
                <span className="bg-secondary text-muted-foreground text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Selecione uma Região
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {AREAS_DATA.map((group) => (
                  <button
                    key={group.id}
                    onClick={() => setSelectedRegion(group)}
                    className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl hover:border-accent hover:shadow-lg transition-all duration-300 group gap-4"
                  >
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Compass className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                    <div className="text-center">
                      <h4 className="font-extrabold text-foreground text-lg group-hover:text-accent transition-colors">
                        {group.region}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {group.neighborhoods.length} bairros mapeados
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ESTADO 2: MOSTRAR BAIRROS DA ZONA ESCOLHIDA */}
          {!searchTerm && selectedRegion && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-border/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">{selectedRegion.region}</h3>
                    <p className="text-sm text-muted-foreground">Selecione o seu bairro abaixo</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedRegion(null)}
                  className="text-muted-foreground hover:text-foreground shrink-0 rounded-full border-border"
                >
                  <ChevronLeft className="w-4 h-4 mr-1.5" />
                  Voltar às Regiões
                </Button>
              </div>

              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                {selectedRegion.neighborhoods.map((neighborhood) => {
                  const urlSlug = `${baseSlug}-${createSlug(neighborhood)}`;
                  return (
                    <li key={neighborhood}>
                      <a 
                        href={urlSlug}
                        className="flex items-center py-2.5 px-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors cursor-pointer group"
                      >
                        <span className="w-1.5 h-1.5 bg-accent/60 rounded-full mr-3 group-hover:bg-accent group-hover:scale-125 transition-all shrink-0"></span>
                        <span className="font-medium text-sm md:text-base">
                          {serviceName} em <strong className="font-bold text-foreground">{neighborhood}</strong>
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* ESTADO 3: RESULTADOS DA PESQUISA DIRETA (Agora também em lista limpa!) */}
          {searchTerm && (
            <div className="animate-in fade-in duration-300">
              {flatSearchResults.length === 0 ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-xl font-bold text-foreground">Bairro não encontrado</p>
                  <p className="text-muted-foreground mt-2 max-w-md mx-auto">Nenhum resultado para "{searchTerm}". Tente procurar por um termo semelhante.</p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-6 border-b border-border/50 pb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                      <Search className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-foreground">Resultados da Pesquisa</h3>
                      <p className="text-sm text-muted-foreground">{flatSearchResults.length} bairros encontrados</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {flatSearchResults.map((item) => {
                      const urlSlug = `${baseSlug}-${createSlug(item.neighborhood)}`;
                      return (
                        <li key={item.neighborhood}>
                          <a 
                            href={urlSlug}
                            className="flex flex-col py-2.5 px-3 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-accent/60 rounded-full mr-3 group-hover:bg-accent group-hover:scale-125 transition-all shrink-0"></span>
                              <span className="font-medium text-sm md:text-base">
                                {serviceName} em <strong className="font-bold text-foreground">{item.neighborhood}</strong>
                              </span>
                            </div>
                            {/* Mostra a região subtilmente por baixo do bairro para facilitar a navegação */}
                            <span className="text-[11px] ml-5 pl-0.5 text-muted-foreground/60 mt-0.5 font-medium uppercase tracking-wider">
                              {item.region}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ServiceAreasModal);