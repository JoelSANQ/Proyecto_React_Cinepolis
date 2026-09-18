import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Proyecto_React_Cinepolis/',
  plugins: [react()],
})
