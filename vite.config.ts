import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'Remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './Header': './src/Header.tsx'
      },
      remotes: {},
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }

})