import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://mauromontan.github.io/responsive-canvas",
  plugins: [react()],
})
