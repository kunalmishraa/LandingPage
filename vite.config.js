import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kunalmishraa.github.io-LandingPage/'  // <-- Add this line
})
