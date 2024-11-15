import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  base:'./',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'esnext', // 支持的JavaScript版本
    outDir: 'dist', // 构建时输出目录
    assetsDir: 'assets', // 放置生成的静态资源的目录
    minify: 'terser', // 压缩方式
    terserOptions: {
      compress: {
        drop_console: true, // 是否删除所有的console语句
      },
    },
    // 是否为生产环境构建生成source map
    sourcemap: false,
    // 构建后是否进行代码分割
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  }
})
