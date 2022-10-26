/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(env => {

  const isDevMode = env.mode === 'development';

  return {
    envPrefix: 'IDS_', // like IDentity Service
    esbuild: {
      jsxFactory: '_jsx',
      jsxFragment: '_jsxFragment',
      jsxInject: 'import { createElement as _jsx, Fragment as _jsxFragment } from \'react\';',
    },
    server: {
      proxy: {
        '/': {
          target: 'http://localhost:1880',
          changeOrigin: true
        }
      }
    },
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    define: {
      // specify some special constants that are used by dependencies, mostly InstUI
      'global.PREVENT_CODEMIRROR_RENDER': undefined,
      'process.env.OMIT_INSTUI_DEPRECATION_WARNINGS': undefined,
      'process.env': {},
    },
    plugins: [
      tsconfigPaths(),
      react({
        // classic runtime is required by InstUI library for build
        jsxRuntime: isDevMode ? 'automatic' : 'classic',
      }),

      // Uncomment below if you need some bundle stats.
      // visualizer({
      //   open: true,
      //   filename: require('node:path').join('stat', 'bundle-stat.html')
      // }),
    ]
  };
});
