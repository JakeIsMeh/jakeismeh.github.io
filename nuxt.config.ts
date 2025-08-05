// https://nuxt.com/docs/api/configuration/nuxt-config
import { globby } from "globby";
import fs from 'node:fs';
import { generatePath } from './utils/contentUrl';

export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  site: {
    // production URL
    url: 'https://jakeismeh.github.io',
    name: 'jake\'s cosmic capsule',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      style: [
        ':root{ color-scheme: dark light; }', // prevent white FOUC
      ],
      link: [
        { rel: 'icon', href: 'data:,' }
      ]
    }
  },

  devtools: { enabled: true },

  experimental: {
    componentIslands: {
      // selectiveClient: 'deep',
      selectiveClient: true,
    },
    // componentIslands: true,
    defaults: {
      nuxtLink: {
        prefetch: true,
        prefetchOn: { visibility: false, interaction: true },
      }
    }
  },

  hooks: {
    async 'nitro:build:public-assets'() {
      const cwd = process.cwd();
      const files = await globby(['content/**/*', '!(content/**/*.md)'], { cwd: cwd! });

      for (const file of files) {
        let tmp = file.split('/');
        tmp.shift();
        let final_file = generatePath(tmp.join('/'));
        tmp.pop();
        let folder = generatePath(tmp.join('/'));

        console.log(`Copying ${final_file} to output...`);
        fs.mkdirSync('.output/public' + folder, { recursive: true });
        fs.copyFileSync(file, '.output/public' + final_file);
      }
    },
  },

  modules: [
    "@nuxt/fonts",
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/critters',
    '@nuxt/content',
    'nuxt-og-image',
  ],

  mdc: {
    headings: {
      
    },
  },

  content: {
    experimental: { sqliteConnector: 'native' },
    build: {
      transformers: [
        '~~/transformers/normalize_relative_paths'
      ],
      markdown: {
        remarkPlugins: {
          'remark-math': {},
          'remark-rehype': {
            clobberPrefix: 'fn',
          },
        },
        rehypePlugins: {
          'rehype-katex': {},
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
    },
    renderer: {
      anchorLinks: {
        h1: false,
        h2: true,
        h3: true,
        h4: false,
        h5: false,
        h6: false
      },
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
    serverBundle: 'local',
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
          additionalData: '@use "@/assets/variables.scss" as *;@use "@picocss/pico/scss/colors" as *;',
        },
      },
    },
  },

  compatibilityDate: '2025-08-05'
})