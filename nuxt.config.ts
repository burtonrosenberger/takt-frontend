

async function getLocations() {
  const response = await fetch("https://armn.takt.city/items/locations?fields=id,title,url",
    {
      headers: new Headers({'Authorization':  "Bearer j04rZ3-gVM-SyJlK-iAE1MH5HDbovh1u"})
    });
    const locations = await response.json()
  // const pattern = /[\p{P}\p{Z}]+/gu;
// console.log(locations.data)
    return locations.data.map(l => `/p/${l.url}`)

  // return response.data.data.map((article) => {
  //   const removePonctuation = article.location
  //     .replace(pattern, "-")
  //     .toLowerCase();
  //   const path = removePonctuation
  //     .normalize("NFD")
  //     .replace(/[\u0300-\u036f]/g, "");
  //   return `/blog/${article.id}/${path}`;
  // });
}


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
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const slugs = await getLocations();

      if (nitroConfig && nitroConfig.prerender && nitroConfig.prerender.routes) {
        console.log(slugs);

        nitroConfig.prerender.routes.push(...slugs);
      }
    },
  },
})