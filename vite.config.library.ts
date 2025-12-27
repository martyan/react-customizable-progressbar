import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      insertTypesEntry: true,
      exclude: ['examples/**/*'],
    }),
  ],
  build: {
    minify: 'esbuild',
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'ReactCustomizableProgressbar',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});
