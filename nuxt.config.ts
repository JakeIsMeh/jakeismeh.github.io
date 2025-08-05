// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  site: {
    // production URL
    url: 'https://jakeismeh.github.io',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      style: [
        ':root{ color-scheme: dark light; }' // prevent white FOUC
      ],
      link: [
        {rel: 'icon', href: 'data:,'}
      ]
    }
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: {
      selectiveClient: true,
    },
    // componentIslands: true,
    buildCache: !process.env.GITHUB_ACTIONS, // nuxt-content-assets caching bug
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

  mdc: {
    headings: {
      anchorLinks: {
        h1: true,
        h2: true,
        h3: true,
        h4: false,
        h5: false,
        h6: false
      }
    },
  },

  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
      rehypeOptions: {
        clobberPrefix: '',
      },
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
    priority: ['google', 'fontsource', 'bunny'],
    defaults: {
      weights: [400, 700],
      subsets: ['latin'],
    }
  },

  icon: {
    // provider: 'iconify',
    size: '1em',
    // class: 'icon',
    aliases: {},
    clientBundle: {
      scan: true,
    },
  },

  vite: {
    vue: {
      features: {
        optionsAPI: false,
      },
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
