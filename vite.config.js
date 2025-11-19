import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/razorpay/",   // ⚠️ MUST for GitHub pages
})
