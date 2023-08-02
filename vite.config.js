import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
        entry: resolve(__dirname, "src/wordfest.ts"),
        name: "WordFest",
        fileName: "wordfest",
        formats: ['es', 'umd'],
    },
    rollupOptions: {
          input: resolve(__dirname, 'src/wordfest.ts'),
      },
    },
    plugins: [dts()]
  });