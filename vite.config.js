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
        // Remove @mui/icons-material from here
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
      // Keep @mui/icons-material here to ensure it gets bundled
      '@mui/icons-material',
    ],
  },
  plugins: [react()],
});
