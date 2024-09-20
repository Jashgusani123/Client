import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'mock-aws-s3',
        'aws-sdk',
        'nock',
        '@mapbox/node-pre-gyp',
        '@mui/icons-material' // Keep Material-UI icons as external
      ],
    },
    outDir: 'build', // Specify your output directory
  },
  resolve: {
    alias: {
      'node-pre-gyp': false,
    },
  },
  optimizeDeps: {
    include: [
      '@mui/icons-material', // Ensure Material-UI icons are included in dependencies
    ],
  },
  plugins: [react()],
});
