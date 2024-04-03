// https://nuxt.com/docs/api/configuration/nuxt-config
import Icons from 'unplugin-icons/vite';

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true
  },
  modules: ['unplugin-icons/nuxt', '@nuxt/content', "@nuxt/fonts", "nuxt-build-cache"],
  content: {
    // ... options
  },
  fonts: {
    priority: ['fontsource', 'bunny', 'google'],
  },
  vite: {
    vue: {
      template: {
        compilerOptions: {
          whitespace: 'condense',
        },
      },
    },
    plugins: [
      Icons({
        compiler: 'vue3',
        scale: 1.0,
        defaultClass: 'icon',
        iconCustomizer(collection, icon, props) {
          if (collection === 'ph' && icon === 'arrow-up-right-bold') {
            props.class = "icon link-icon"
          }
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/variables.scss" as *;',
        },
      },
    },
  },
})