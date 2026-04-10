import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// Ajuste o caminho se a sua estrutura for diferente
import { dynamicPagesData } from './src/data/neighborhoodData.js'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.protecdesentupidora.com.br'; // Substitua pelo domínio real

function generateSitemap() {
  console.log('A gerar Sitemap para SEO Local...');

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Adicionar a Home e páginas estáticas principais
  const staticPages = [
    '', '/desentupimento', '/hidrojateamento', '/limpa-fossa', 
    '/caca-vazamento', '/video-inspecao', '/encanador'
  ];

  staticPages.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}${page}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>${page === '' ? '1.0' : '0.9'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Injetar as 400+ páginas dinâmicas de bairros
  dynamicPagesData.forEach(page => {
    xml += `  <url>\n`;
    xml += `    <loc>${DOMAIN}/${page.slug}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  // Guardar diretamente na pasta public do Vite
  const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');
  
  console.log(`✅ Sitemap gerado com sucesso em: ${outputPath}`);
  console.log(`🚀 Total de URLs indexáveis: ${staticPages.length + dynamicPagesData.length}`);
}

generateSitemap();