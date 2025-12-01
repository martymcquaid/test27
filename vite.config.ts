import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/bd94d62a-043a-468f-9fc8-01ae9c4d86e0/preview',
  plugins: [react()],
  server: {
    port: 5161,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5161,
    },
  },
})
