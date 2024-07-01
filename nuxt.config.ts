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
    "nuxt-purgecss",
    "@nuxtjs/critters",
    // "nuxt-og-image"
    "nuxt-content-assets",
    "@nuxtjs/color-mode"
  ],
  content: {
    markdown: {
      remarkPlugins: ['remark-math'],
      rehypePlugins: ['rehype-katex'],
    },
    highlight: {
      theme: {
        default: 'monokai',
        "light-mode": 'github-light',
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
  purgecss: {
    safelist: ['iconify', 'blockquote'],
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
})