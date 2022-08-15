import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ignite-reactjs-projeto-01/',
  plugins: [react()]
})
