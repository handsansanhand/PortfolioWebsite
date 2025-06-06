import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PortfolioWebsite/",
   build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})
