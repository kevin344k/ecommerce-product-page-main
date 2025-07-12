import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [react(), tailwindcss()],
    server: {
    proxy: {
      '/api': {
        target: 'https://kr49kcnp-3000.use.devtunnels.ms/', // Tu backend
        changeOrigin: true,
        secure: false
      }
    }
  }
  
})
