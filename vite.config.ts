/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr(),
      istanbul({
        cypress: true,
        requireEnv: false,
      }),
    ],
    build: {
      sourcemap: true,
    },
    test: {
      setupFiles: './src/vitest.setup.ts',
      globals: true,
      environment: 'jsdom',
      include: [
        './src/components/**/*.test.tsx',
        './src/routes/**/*.test.tsx',
        './src/lib/**/*.test.tsx',
      ],
      coverage: {
        reportsDirectory: '.coverage',
        provider: 'c8',
        reporter: ['text', 'json', 'html'],
      },
    },
  };
});
