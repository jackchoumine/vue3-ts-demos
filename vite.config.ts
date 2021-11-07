import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const webComponent = {
  template: {
    compilerOptions: {
      // treat all tags with a dash as custom elements
      isCustomElement: (tag) => tag.includes('-'),
    },
  },
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(webComponent)],
  server: {
    host: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@com': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    },
  },
})
