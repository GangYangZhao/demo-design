import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteEslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [viteEslint(), react()]
});
