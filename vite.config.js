import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    origin: 'http://localhost:3000/frontend/',
    host: '0.0.0.0',
    fs: {
      strict: true,
    }
  },
});
