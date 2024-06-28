// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      }
    }
  },
  devtools: { enabled: true },
  experimental: {
    componentIslands: true
  },
  modules: [
    '@nuxt/content',
    "@nuxt/fonts",
    "nuxt-build-cache",
    "@nuxt/image",
    '@nuxt/icon',
  ],
  content: {
    // ... options
  },
  fonts: {
    priority: ['fontsource', 'bunny', 'google'],
  },
  icon: {
    size: '1em',
    class: 'icon',
    aliases: {},
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    },
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/variables.scss" as *;',
        },
      },
    },
  },
})