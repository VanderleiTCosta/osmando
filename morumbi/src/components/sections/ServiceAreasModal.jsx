import React, { useState, useMemo, useCallback } from 'react';
import { MapPin, ChevronRight, Search, Map } from 'lucide-react';
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

// Centralização dos dados estruturados
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

  // Função de alta performance para converter "Freguesia do Ó" em "freguesia-do-o"
  const createSlug = useCallback((text) => {
    return text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }, []);

  // Filtro em tempo real memoizado para evitar lag na digitação
  const filteredAreas = useMemo(() => {
    if (!searchTerm.trim()) return AREAS_DATA;
    
    const lowerSearch = searchTerm.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    return AREAS_DATA.map(group => {
      const filteredNeighborhoods = group.neighborhoods.filter(neighborhood => 
        neighborhood.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(lowerSearch)
      );
      
      return {
        ...group,
        neighborhoods: filteredNeighborhoods
      };
    }).filter(group => group.neighborhoods.length > 0);
  }, [searchTerm]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full sm:w-auto h-14 px-8 text-base font-bold bg-background/80 backdrop-blur-md border-2 border-accent text-foreground hover:bg-accent hover:text-accent-foreground shadow-lg hover:scale-105 transition-all group"
        >
          <Map className="w-5 h-5 mr-2 text-accent group-hover:text-accent-foreground transition-colors" />
          Áreas Atendidas
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl w-[95vw] max-h-[85vh] p-0 flex flex-col overflow-hidden bg-background border-border sm:rounded-2xl">
        <DialogHeader className="p-6 pb-4 border-b border-border bg-secondary/30 shrink-0">
          <DialogTitle className="text-2xl md:text-3xl font-display font-extrabold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
              <MapPin className="text-accent w-6 h-6" />
            </div>
            Onde você precisa de {serviceName}?
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground mt-2">
            Digite seu bairro abaixo para verificar nossa disponibilidade imediata.
          </DialogDescription>
          
          <div className="relative mt-5">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Ex: Freguesia do Ó, Morumbi, Pinheiros..." 
              className="pl-12 h-14 text-lg bg-background border-2 border-border focus-visible:ring-accent rounded-xl shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </DialogHeader>
        
        <div className="overflow-y-auto p-6 flex-1 scroll-smooth">
          {filteredAreas.length === 0 ? (
            <div className="py-16 text-center flex flex-col items-center justify-center">
              <MapPin className="w-16 h-16 text-border mb-4" />
              <p className="text-xl font-bold text-foreground">Bairro não encontrado</p>
              <p className="text-muted-foreground mt-2">Tente buscar por um termo semelhante ou entre em contato pelo plantão 24h.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAreas.map((group) => (
                <div key={group.id} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground mb-4 pb-2 border-b border-border">
                    {group.region}
                  </h3>
                  <ul className="space-y-2">
                    {group.neighborhoods.map((neighborhood) => {
                      const urlSlug = `${baseSlug}-${createSlug(neighborhood)}`;
                      
                      return (
                        <li key={neighborhood}>
                          <a 
                            href={urlSlug}
                            className="flex items-center justify-between text-muted-foreground hover:text-accent hover:bg-accent/5 p-2 rounded-lg transition-colors group"
                          >
                            <span className="font-medium text-sm">
                              {serviceName} em <strong className="font-semibold text-foreground group-hover:text-accent transition-colors">{neighborhood}</strong>
                            </span>
                            <ChevronRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(ServiceAreasModal);