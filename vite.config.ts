import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["lib/**/*"],
      outDir: "dist/types",
      rollupTypes: true
    }),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'lib/index.ts'),
        core: resolve(__dirname, 'lib/core/index.ts'),
        components: resolve(__dirname, 'lib/components/index.ts')
      },
      name: 'JzxSdk',
      fileName: (format, entryName) => {
        if (entryName === 'main') {
          return `jzx-sdk.${format}.js`
        }
        return `${entryName}/index.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})