import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false
  },
  server: {
    port: 3000,
    strictPort: false, // Allow switching ports if 5173 is taken
    host: true, // Listen on all network interfaces
    open: true, // Open browser on server start
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL || 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  logLevel: 'info', // Show more detailed logs
  customLogger: {
    info: (msg) => {
      // Ensure server URL is always logged clearly
      if (msg.includes('Local:') || msg.includes('Network:')) {
        console.log('\x1b[36m%s\x1b[0m', msg); // Cyan color for visibility
      } else {
        console.log(msg);
      }
    },
    warn: (msg) => console.warn(msg),
    error: (msg) => console.error(msg),
  },
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL)
  }
});
