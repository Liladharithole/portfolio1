import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimization options
  build: {
    // Enable minification
    minify: 'terser',
    
    // Generate source maps for debugging
    sourcemap: false,
    
    // Configure chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'icons': ['react-icons'],
          'utils': ['@formspree/react', 'react-hot-toast'],
        },
      },
    },
    
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  
  // Development server optimizations
  server: {
    // Enable HMR for faster development
    hmr: true,
    port: 3000,
  },
  
  // CSS optimization
  css: {
    devSourcemap: true,
  },
  
  // Enable dependency pre-bundling for faster cold starts
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-icons/fi',
      'react-icons/ai',
      'react-icons/bi',
      'react-icons/ri',
      'react-icons/md',
      'react-hot-toast',
    ],
  },
});
