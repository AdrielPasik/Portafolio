import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portafolio/', // 👈 nombre EXACTO de tu repositorio
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
