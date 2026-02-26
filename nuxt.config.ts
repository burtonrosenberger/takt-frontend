/*
 * RWTH Aachen University
 * Copyright (C) 2026 Projekt ADAA
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

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