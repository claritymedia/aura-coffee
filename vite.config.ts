import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000,
      host: '0.0.0.0'
    },
    envDir: '.',
    define: {
        ...Object.fromEntries(env).reduce((acc, [key, value]) => ({ ...acc, [`process.env.${key}`]: JSON.stringify(value) }), {})
    }
  };
});
