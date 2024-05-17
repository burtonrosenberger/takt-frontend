// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=0',
    }
  },
  modules: ['vuetify-nuxt-module', "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
   },
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})