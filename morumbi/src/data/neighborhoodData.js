// src/data/neighborhoodData.js
import { serviceDataProtec } from './serviceData';

// Lista oficial de Zonas e Bairros do Protec
const AREAS_DATA = [
  {
    id: 'centro', region: 'Centro de São Paulo',
    neighborhoods: ['Aclimação', 'Anhanguera', 'Avenida Paulista', 'Bela Vista', 'Bom Retiro', 'Brás', 'Cambuci', 'Campos Elíseos', 'Consolação', 'Higienópolis', 'Jardins', 'Liberdade', 'Pacaembu', 'Pari', 'República', 'Santa Cecília', 'Santa Efigênia']
  },
  {
    id: 'zona-oeste', region: 'Zona Oeste',
    neighborhoods: ['Água Branca', 'Alphaville', 'Alto da Lapa', 'Alto de Pinheiros', 'Amador Bueno', 'Barra Funda', 'Barueri', 'Butantã', 'Carapicuiba', 'Caxingui', 'Cotia', 'Embu das Artes', 'Granja Viana', 'Itapevi', 'Jaguaré', 'Jandira', 'Jaraguá']
  },
  {
    id: 'zona-norte', region: 'Zona Norte',
    neighborhoods: ['Água Fria', 'Bairro do Limão', 'Brasilândia', 'Casa Verde', 'Freguesia do Ó', 'Horto Florestal', 'Imirim', 'Jaçanã', 'Jardim Peri Peri', 'José Bonifácio', 'Lauzane Paulista', 'Mandaqui', 'Parada Inglesa', 'Perus', 'Santana', 'Santa Terezinha', 'Tremembé']
  },
  {
    id: 'zona-leste', region: 'Zona Leste',
    neighborhoods: ['Americanópolis', 'Arthur Alvim', 'Belém', 'Cangaiba', 'Cidade Líder', 'Cidade Patriarca', 'Cidade Tiradentes', 'Ermelino Matarazzo', 'Guaianases', 'Iguatemi', 'Itaim Paulista', 'Itaquera']
  },
  {
    id: 'zona-sul', region: 'Zona Sul',
    neighborhoods: ['Água Funda', 'Alto da Boa Vista', 'Bosque da Saúde', 'Brooklin', 'Campo Belo', 'Campo Grande', 'Campo Limpo', 'Capela do Socorro', 'Capão Redondo']
  },
  {
    id: 'outras-regioes', region: 'Outras Regiões',
    neighborhoods: ['ABC Paulista', 'Aeroporto', 'Araçariguama', 'Bauru', 'Bragança Paulista', 'Cajamar', 'Campinas', 'Cumbica', 'Diadema']
  }
];

// Helper idêntico ao do Modal para gerar URLs compatíveis
const createSlug = (text) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
};

const generateAllDynamicPages = () => {
  const allPages = [];

  serviceDataProtec.forEach(service => {
    AREAS_DATA.forEach(group => {
      group.neighborhoods.forEach(neighborhood => {
        // Gera o slug exato: "desentupidora-em-aclimacao"
        const finalSlug = `${service.baseSlug.replace('/', '')}-${createSlug(neighborhood)}`;
        
        let dynamicContent = '';
        
        // Injeta {bairro} e {zona} no HTML Base
        service.contentSections.forEach(section => {
          const processedTitle = section.title
            .replace(/\{bairro\}/g, neighborhood)
            .replace(/\{zona\}/g, group.region);
            
          const processedText = section.text
            .replace(/\{bairro\}/g, neighborhood)
            .replace(/\{zona\}/g, group.region);

          dynamicContent += `
            <h3 style="margin-top: 2rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700; color: hsl(var(--foreground));">${processedTitle}</h3>
            <div style="color: hsl(var(--muted-foreground)); font-size: 1.125rem; line-height: 1.75;">${processedText}</div>
          `;
        });

        // Adiciona links interligados de SEO Local para o mesmo bairro (Link Building Interno)
        dynamicContent += `
          <h3 style="margin-top: 2.5rem; margin-bottom: 1rem; font-size: 1.5rem; font-weight: 700; color: hsl(var(--foreground)); border-bottom: 1px solid hsl(var(--border)); padding-bottom: 0.5rem;">Outros Serviços Protec em ${neighborhood}:</h3>
          <ul style="list-style-type: none; padding-left: 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 1rem;">
            ${serviceDataProtec.map(s => `
              <li>
                <a href="/${s.baseSlug.replace('/', '')}-${createSlug(neighborhood)}" style="color: hsl(var(--accent)); font-weight: 600; text-decoration: none; display: flex; align-items: center;">
                  <span style="color: hsl(var(--accent)); margin-right: 8px;">&rarr;</span> ${s.serviceName} em ${neighborhood}
                </a>
              </li>
            `).join('')}
          </ul>
        `;

        allPages.push({
          slug: finalSlug,
          serviceName: service.serviceName,
          neighborhood: neighborhood,
          region: group.region,
          pageTitle: `${service.serviceName} em ${neighborhood} | Protec Atendimento 24h`,
          metaDescription: `Serviço profissional de ${service.serviceName} em ${neighborhood}. Equipe de plantão na ${group.region}. Orçamento grátis e sem quebra-quebra. Ligue 0800 591 9537.`,
          content: dynamicContent
        });
      });
    });
  });

  return allPages;
};

export const dynamicPagesData = generateAllDynamicPages();