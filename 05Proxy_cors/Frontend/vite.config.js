import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// putting proxy in vite server
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:"http://localhost:3000"
      }
    }
  }
})
