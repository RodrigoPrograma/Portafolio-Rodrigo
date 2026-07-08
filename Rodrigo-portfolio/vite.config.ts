import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindscss from '@tailwindcss/vite'
import path from 'node:path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindscss(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
