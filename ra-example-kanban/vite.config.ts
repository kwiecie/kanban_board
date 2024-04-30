import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
    optimizeDeps: {
        exclude: ['js-big-decimal']
    },
    build: {
        rollupOptions: {
          external: ['ra-data-local-storage', '@hello-pangea/dnd'],
        }
    }
});


    