import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/nba-stats': {
        target: 'https://stats.nba.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/nba-stats/, ''), //remove the /nba-stats prefix
        secure: false,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Accept-Language': 'en-US,en;q=0.9',
      },
    },
  },
},
});