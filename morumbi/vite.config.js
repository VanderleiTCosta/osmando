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
  // Remove logs e debuggers nativamente em produção
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Fragmentação extrema mantida para garantir os 100% no PageSpeed (apenas afeta o build de produção)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react/') || id.includes('react-dom/')) return 'vendor-react';
            if (id.includes('react-router') || id.includes('@remix-run')) return 'vendor-router';
            if (id.includes('framer-motion')) return 'vendor-framer-motion';
            if (id.includes('lucide-react')) return 'vendor-lucide';
            if (id.includes('@radix-ui') || id.includes('@tanstack')) return 'vendor-ui';
            if (id.includes('tailwind') || id.includes('clsx') || id.includes('tailwind-merge')) return 'vendor-utils';
            return 'vendor-core';
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
});