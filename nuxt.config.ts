// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  extends: [
    'node_modules/nuxt-content-assets/cache',
  ],

  site: {
    // production URL
    url: 'https://jakeismeh.github.io',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      }
    }
  },

  contentAssets: {
    debug: true,
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: {
      selectiveClient: true,
    },
    // componentIslands: true,
    buildCache: true,
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { visibility: false, interaction: true },
      }
    }
  },

  modules: [
    "@nuxt/fonts",
    '@nuxt/image',
    '@nuxt/icon',
    "@nuxtjs/critters",
    // "nuxt-og-image",
    "nuxt-content-assets",
    '@nuxt/content',
  ],

  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
      anchorLinks: { depth: 3, exclude: [] }
    },
    highlight: {
      theme: {
        default: 'light-plus',
        d: 'monokai',
      },
      langs: [
        'js', 'jsx', 'json', 'ts', 'tsx', 'vue', 'css', 'html', 'vue', 'bash', 'md', 'mdc', 'yaml',
        'c', 'cpp', 'csharp', 'swift',
      ],
    },
  },

  fonts: {
    priority: ['fontsource', 'bunny', 'google'],
    defaults: {
      subsets: ['latin'],
    }
  },

  icon: {
    // provider: 'iconify',
    size: '1em',
    // class: 'icon',
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
          silenceDeprecations: ['mixed-decls'],
          api: 'modern-compiler',
          additionalData: '@use "@/assets/variables.scss" as *;@use "@picocss/pico/scss/colors" as *;',
        },
      },
    },
  },

  compatibilityDate: '2024-07-05'
})
