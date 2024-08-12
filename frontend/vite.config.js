// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins:[react()],
  server: {
    proxy: {
      // Proxy all requests starting with /api to the GitHub API
      '/api': {
        target: 'https://github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
