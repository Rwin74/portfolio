import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' }),
    viteCompression({ algorithm: 'gzip', ext: '.gz' })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        passes: 2
      }
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Three.js and 3D - heaviest, load separately
          if (id.includes('three') || id.includes('@react-three')) {
            return 'vendor-three';
          }
          // Framer Motion
          if (id.includes('framer-motion')) {
            return 'vendor-framer';
          }
          // Icons - small but separate for caching
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          // disable-devtool loads async, separate chunk
          if (id.includes('disable-devtool')) {
            return 'vendor-devtool';
          }
          // Core React - loads first
          if (id.includes('react-dom')) {
            return 'vendor-react-dom';
          }
          if (id.includes('/react/') || id.includes('react/index')) {
            return 'vendor-react';
          }
        }
      }
    }
  }
})

