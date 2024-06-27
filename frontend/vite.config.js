import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'frontend', // Set the root directory to 'frontend'
  base: '/chat-app-mern/', // Set the base path for the deployed site
  build: {
    outDir: 'dist', // Set the output directory to 'dist' within the 'frontend' directory
  },
});
