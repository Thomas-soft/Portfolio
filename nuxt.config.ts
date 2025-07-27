import { defineNuxtConfig } from 'nuxt/config'
import projects from './data/projects.json'

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/Portfolio/',
    buildAssetsDir: '_nuxt/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/Portfolio/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      crawlLinks: true,  // suit tous les liens internes
      routes: projects.map(p => `/projects/${p.slug}`)  // génère /projects/mon-slug/index.html
    }
  },
  css: ['~/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "sass:color";
            @use "@/assets/styles/variables" as *;
          `
        }
      }
    }
  }
})
