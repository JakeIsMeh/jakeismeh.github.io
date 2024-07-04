// https://nuxt.com/docs/api/configuration/nuxt-config

const katex_tags = [
  'Math',
  'Annotation',
  'Semantics',
  'Mtext',
  'Mn',
  'Mo',
  'Mi',
  'Mspace',
  'Mover',
  'Munder',
  'Munderover',
  'Msup',
  'Msub',
  'Msubsup',
  'Mfrac',
  'Mroot',
  'Msqrt',
  'Mtable',
  'Mtr',
  'Mtd',
  'Mlabeledtr',
  'Mrow',
  'Menclose',
  'Mstyle',
  'Mpadded',
  'Mphantom',
  'Mglyph',
  'Svg',
  'Line',
  'Path'
];

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
      }
    }
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: true,
  },

  modules: [
    '@nuxt/content',
    "@nuxt/fonts",
    'nuxt-build-cache',
    '@nuxt/image',
    '@nuxt/icon',
    "@nuxtjs/critters",
    // "nuxt-og-image",
    "nuxt-content-assets",
  ],

  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
    },
    highlight: {
      theme: {
        default: 'min-light',
        d: 'monokai',
      },
      langs: [
        'js', 'jsx', 'json', 'ts', 'tsx', 'vue', 'css', 'html', 'vue', 'bash', 'md', 'mdc', 'yaml',
        'c', 'cpp', 'csharp',
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
    size: '1em',
    // class: 'icon',
    aliases: {},
  },

  vite: {
    vue: {
      template: {
        compilerOptions: {
          whitespace: 'condense',
          isCustomElement: (tag) => katex_tags.includes(tag),
        },
      },
    },
    plugins: [],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/variables.scss" as *;@use "@picocss/pico/scss/colors" as *;',
        },
      },
    },
  },

  compatibilityDate: '2024-07-05'
})