import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'examples'),
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      'react-customizable-progressbar': resolve(__dirname, 'src/index.tsx'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  build: {
    outDir: resolve(__dirname, 'examples/dist'),
    emptyOutDir: true,
  },
});
