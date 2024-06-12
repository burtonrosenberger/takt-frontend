<template>
    <v-container fluid :style="{ backgroundColor: `#fcb34a` }">
        <v-app-bar color="#fcb34a" elevation="0">
            <v-app-bar-title>
                <v-img style="cursor:pointer" @click="homeRef.scrollInto(`#home`)" :src="logo" contain max-width="100px" height="30px"  alt="Der Takt" />
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text v-for="i in menu" @click="scrollInto(i.link)">{{ $t(i.title) }}</v-btn>
            <!-- <v-btn><v-icon color="#374151" size="x-large">mdi-volume-high </v-icon></v-btn> -->
            <v-btn variant="text" size="small" @click="setLocale(`de`)"><v-img width="23px" height="25px" :src="german"
                alt="German" /></v-btn>
            <v-btn variant="text" size="small" @click="setLocale(`en`)"><v-img width="25px" height="25px" :src="english"
                alt="English" /></v-btn>
        </v-app-bar>
        <v-main>
            <v-container class="pa-0" fluid>
                <Game :games="games" id="games"></Game>
                <Home :projects="projects" :desc="description" :audio="audio" :location="{x: panel.marker_x, y:panel.marker_y}" ref="homeRef"></Home>
                <Participate :participations="participate" id="participate"></Participate>
                <Survey :questions="questions" id="survey"></Survey>
            </v-container>
        </v-main>
        <v-row v-if="loading" class="loading">
            <v-col cols="12" class="fill-height d-flex align-center justify-center">
                <p>
                    <v-img class="ct-animate-blink" :src="logo" cover max-width="350px" height="30px"  alt="Der Takt" />
                    <br>loading....
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.loading { 
    position:fixed;
    top:0;
    left:0;
    min-width:101vw;
    height:101vh;
    background:#fcb34a;
    color:#374151;
    z-index:9999;
}
.ct-animate-blink {
   animation: blink 1.5s infinite;
   animation-fill-mode: both;
}

@keyframes blink {
   0% { opacity: 0 }
   50% { opacity: 1 }
   100% { opacity: 0 }
}
</style>
<script setup>
const {  setLocale, locale } = useI18n()
import logo from '@/assets/logo.png';
import german from '@/assets/lang/deu.png';
import english from '@/assets/lang/eng.png';
import { onMounted, ref } from 'vue';

const loading = ref(true)
const homeRef = ref(null)
const panel = ref({title:"", projects:[], games:[], participate:[],questions: [], translations: []})
const route = useRoute()
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

const audio = computed(() => { 
    const lang = panel.value.translations?.find((el) => el.languages_code === locale.value)
    return lang?.audio

})
const description = computed(() => { 
    const lang = panel.value.translations?.find((el) => el.languages_code === locale.value)
    return lang?.description
})

const games = computed(() => { 
    const games = panel.value.games.map((el) =>   { return { ...el.games_id.translations.find(e => e.languages_code === locale.value), columns: el.games_id.columns }})
    return games
})

const projects = computed(() => { 
    const projects = panel.value.projects.map((el) =>  {
        return { ...el.projects_id.translations.find(e => e.languages_code === locale.value), image: el.projects_id.image, qrcode: el.projects_id.qrcode, image: el.projects_id.image }})
    return projects
})

const participate = computed(() => { 
    const participate = panel.value.participate.map((el) =>  {
        return { ...el.participate_id.translations.find(e => e.languages_code === locale.value), image: el.participate_id.image, qrcode: el.participate_id.qrcode, image: el.participate_id.image }})
    return participate
})

const questions = computed(() => { 
    const questions = panel.value.questions.map((el) => { 
        return { 
            ...el.questions_id.translations.find(e => e.languages_code === locale.value), 
            answers: el.questions_id.answers.map(a => { return {...a.translations.find(t => t.languages_code === locale.value)}})
        }
    })
    return questions
})

const loadLocation = async () => {
    let url = route.params.id ? route.params.id : "current-location"

    const { data } = await $fetch(
        'https://armn.takt.city/items/locations?fields=*,translations.*,projects.projects_id.*,projects.projects_id.translations.*,participate.participate_id.*,participate.participate_id.translations.*,questions.questions_id.*,questions.questions_id.translations.*,questions.questions_id.answers.*,questions.questions_id.answers.translations.*,games.games_id.*,games.games_id.translations.*,games.games_id.columns.left,games.games_id.columns.right,games.games_id.columns.id&filter[url][_eq]='+ url,
        {
            headers: new Headers({'Authorization':  "Bearer j04rZ3-gVM-SyJlK-iAE1MH5HDbovh1u"})
        })
    if (data[0]) panel.value = data[0]
    
    setTimeout(() => { loading.value = false} , 3000)
}


onMounted(() => {
    loadLocation()
})


useHead({
  title: panel.value.title+ ' Takt City',
  meta: [
    { name: 'Takt City', content: 'Takt City .' }
  ],
  bodyAttrs: {
    // class: 'test'
  }
})

</script>