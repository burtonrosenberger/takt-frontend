<template>
    <v-container fluid :style="{ backgroundColor: `#fcb34a` }">
        <v-app-bar color="#fcb34a" elevation="0">
            <v-app-bar-title>
                <v-img style="cursor:pointer" @click="homeRef.scrollInto(`#home`)" :src="logo" contain max-width="100px" height="30px"  alt="Der Takt" />

            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text v-for="i in menu" @click="scrollInto(i.link)">{{ i.title }}</v-btn>
            <!-- <v-btn><v-icon color="#374151" size="x-large">mdi-volume-high </v-icon></v-btn> -->
            <v-btn variant="text" size="small"><v-img width="23px" height="25px" :src="german"
                alt="German" /></v-btn>
            <v-btn variant="text" size="small"><v-img width="25px" height="25px" :src="english"
                alt="English" /></v-btn>
        </v-app-bar>
        <v-main>
            <v-container class="pa-0" fluid>
                <Game :games="panel.games" id="games"></Game>
                <Home :projects="panel.projects" :desc="panel.description" :location="{x: panel.marker_x, y:panel.marker_y}" ref="homeRef"></Home>
                <Participate :projects="panel.participations" id="participate"></Participate>
                <Survey :questions="panel.questions" id="survey"></Survey>
            </v-container>
        </v-main>
    </v-container>
</template>
<style scoped>

</style>
<script setup>
import logo from '@/assets/logo.png';
import german from '@/assets/lang/deu.png';
import english from '@/assets/lang/eng.png';
import { onMounted, ref } from 'vue';

const homeRef = ref( null)
const panel = ref({title:"", projects:[], games:[], participations:[]})
const route= useRoute()
const menu = [
{ title:"Home", link:"#home" },
{ title:"Participation", link:"#participate" },
{ title:"Survey", link:"#survey" },
{ title:"Games", link:"#games" },
{ title:"Location", link:"#location" },
{ title:"Projects", link:"#projects" }
]
const scrollInto = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth", inline: "start" })
    // if(id === `#home`) window.scrollY=0
}

const loadLocation = async () => {
    let url = "aachner-rathaus"
    if(route.params.url) { 
        url = route.params.url
    }
    const { data } = await $fetch(
        'https://armn.takt.city/items/locations?fields=*,projects.projects_id.*&filter[url][_eq]='+ url,
        {
            headers: new Headers({'Authorization':  "Bearer j04rZ3-gVM-SyJlK-iAE1MH5HDbovh1u"})
        })
    panel.value = data[0]
    console.log(panel.value)

}


onMounted(() => {
    loadLocation()
})


useHead({
  title: panel.value.title+ ' - Takt City',
  meta: [
    { name: 'description', content: 'Takt City location.' }
  ],
  bodyAttrs: {
    // class: 'test'
  },
 
})

</script>