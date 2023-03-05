/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/rick-and-morty-app',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/styles',
        'src/utils/test',
        'src/**/*.spec.tsx',
        'src/**/*.spec.ts',
        'src/mocks',
      ],
    },
  },
  plugins: [react(), tsconfigPaths()],
})
