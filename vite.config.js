import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Rishik Portfolio',
        short_name: "Rishik's Portfolio",
        start_url: '/Portfolio/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icons/icon192.jpg',
            sizes: '192x192',
            type: 'image/jpeg'
          },
          {
            src: 'icons/icon512.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
          }
        ]
      }
    })
  ],
  base: '/Portfolio'
})
