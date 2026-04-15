import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  logLevel: 'error',
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true, // Força a divisão do CSS para matar o erro "CSS não usado" do PageSpeed
    sourcemap: false, // Garante que mapas de código não vazem para produção
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
    },
    rollupOptions: {
      output: {
        // FRAGMENTAÇÃO EXTREMA: Resolve as Tarefas Longas e o JS Não Usado
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Core do React (Prioridade Máxima)
            if (id.includes('react/') || id.includes('react-dom/')) {
              return 'vendor-react';
            }
            // Roteamento
            if (id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            // Animações pesadas (Causa comum de Tarefas Longas)
            if (id.includes('framer-motion')) {
              return 'vendor-framer-motion';
            }
            // Ícones (Muitos SVGs causam lentidão de processamento)
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            // Componentes UI e Utilitários
            if (id.includes('@radix-ui') || id.includes('@tanstack')) {
              return 'vendor-ui';
            }
            if (id.includes('tailwind') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'vendor-utils';
            }
            // Qualquer outra dependência externa
            return 'vendor-core';
          }
        },
        // Remove os hashes gigantes para melhorar o cache e a leitura dos ficheiros
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
});