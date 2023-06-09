import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteEslint from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), viteEslint()]
});
