import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import * as path from 'path';

const root = path.resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@components': path.resolve(root, './components'),
			'@pages': path.resolve(root, './pages'),
			'@routes': path.resolve(root, './routes'),
			'@services': path.resolve(root, './services'),
      '@assets': path.resolve(root, './assets'),
      '@api': path.resolve(root, './api'),
    }
  }
})
