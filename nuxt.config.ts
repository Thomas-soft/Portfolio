import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/Portfolio/',
    buildAssetsDir: '_nuxt/'
  },
  nitro: {
    preset: 'github-pages'
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/styles/variables" as *;`
        }
      }
    }
  }
})
