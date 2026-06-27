import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages deployment notes:
 * - Custom domain (e.g. maly-obs.com)  -> base: '/'
 * - username.github.io/repo-name/      -> base: '/repo-name/'
 */
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000, // البورت الجديد للويب سايت
    strictPort: true, // عشان لو البورت ده مشغول بالصدفة، ميروحش يفتح على بورت تاني عشوائي
  }
})