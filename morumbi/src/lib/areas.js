export const REGIONS = {
  'Centro de São Paulo': [
    'Aclimação', 'Avenida Paulista', 'Bela Vista', 'Bom Retiro', 'Brás',
    'Cambuci', 'Consolação', 'Higienópolis', 'Jardins', 'Liberdade',
    'Pacaembu', 'República', 'Santa Cecília',
  ],
  'Zona Oeste': [
    'Água Branca', 'Alphaville', 'Alto de Pinheiros', 'Barra Funda',
    'Barueri', 'Butantã', 'Carapicuíba', 'Cotia', 'Embu das Artes',
    'Jaguaré', 'Jandira', 'Jaraguá', 'Lapa', 'Morumbi', 'Osasco', 'Pinheiros',
  ],
  'Zona Sul': [
    'Campo Belo', 'Campo Grande', 'Campo Limpo', 'Capela do Socorro',
    'Cidade Ademar', 'Grajaú', 'Interlagos', 'Ipiranga', 'Itaim Bibi',
    'Jabaquara', 'Moema', 'Santo Amaro', 'Vila Mariana', 'Vila Olímpia',
  ],
  'Zona Norte': [
    'Casa Verde', 'Freguesia do Ó', 'Horto Florestal', 'Mandaqui',
    'Parada Inglesa', 'Santana', 'Tremembé', 'Tucuruvi', 'Vila Guilherme',
  ],
  'Zona Leste': [
    'Anália Franco', 'Aricanduva', 'Belém', 'Ermelino Matarazzo',
    'Itaquera', 'Mooca', 'Penha', 'São Mateus', 'Tatuapé', 'Vila Matilde',
  ],
};

export function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function findAreaBySlug(slug) {
  for (const [region, areas] of Object.entries(REGIONS)) {
    for (const area of areas) {
      if (slugify(area) === slug) return { area, region };
    }
  }
  return null;
}

export const ALL_AREAS = Object.values(REGIONS).flat();