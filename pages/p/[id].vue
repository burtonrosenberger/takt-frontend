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
                <Game @playAudio="playAudio" :games="games" id="games"></Game>
                <Home @playAudio="playAudio" :projects="projects" :desc="description" :audio="audio" :location="{x: panel.marker_x, y:panel.marker_y}" ref="homeRef"></Home>
                <Participate @playAudio="playAudio" :participations="participate" id="participate"></Participate>
                <Survey @playAudio="playAudio" :questions="questions" id="survey"></Survey>
            </v-container>
            <div v-if="audioFile.id" style="position:fixed; bottom:15px;" class="text-center w-100">
              <p class="text-center mb-0  mx-auto pl-3" style="color:white;  background-color: #374151; border-radius:100px; width:120px;">{{ audioFile.duration - audioFile.currentTime }}s 
                <v-btn :icon="audioFile.playing ?   `mdi-pause` : `mdi-play` " dark @click="audioFile.playing ?  pauseAudio() :  startAudio() " :loading="audioFile.id && audioFile.loading" variant="text" classs="mx-0"> 
                    
                </v-btn>
            </p> 
            <audio  id="audioPlayer" @ended="completeAudio" @canplay="audioLoaded" @timeupdate="timeUpdate">
            <source :src="`https://armn.takt.city/assets/${audioFile.id}`" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    </div>
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
//{ title:"Games", link:"#games" },
{ title:"Location", link:"#location" },
{ title:"Projects", link:"#projects" }
]
const audioFile = ref({id:null, duration: 0, currentTime: 0})
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
    const games = panel.value.games.map((el) =>   {
        let columns = el.games_id.columns.map(c =>  { 
            return {...c.translations.find(a => a.languages_code === locale.value)}
        })
        return { ...el.games_id.translations.find(e => e.languages_code === locale.value), columns }
    })
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
    let fields = "*,translations.*,"
    fields += "projects.projects_id.*,projects.projects_id.translations.*,"
    fields += "participate.participate_id.*,participate.participate_id.translations.*,"
    fields += "questions.questions_id.*,questions.questions_id.translations.*,questions.questions_id.answers.*,questions.questions_id.answers.translations.*,"
    fields += "games.games_id.*,games.games_id.translations.*,games.games_id.columns.*,games.games_id.columns.translations.*"
    const { data } = await $fetch(
        'https://armn.takt.city/items/locations?fields='+ fields +'&filter[url][_eq]='+ url,
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

const playAudio = (idAsset) => {
    console.log("load "+idAsset)
    // console.log(audioFile)
    if (audioFile.value.playing) {
        document.getElementById("audioPlayer").pause()
        audioFile.value.currentTime = 0
        audioFile.value.duration = 0
        audioFile.value.playing=false
        audioFile.value.id = null
    }
    audioFile.value.loading=true
    setTimeout(() => { 
        audioFile.value.id = idAsset
    },300)
}
const audioLoaded = () => { 
    audioFile.value.loading=false

    audioFile.value.playing=true
    document.getElementById("audioPlayer").play()
}

const timeUpdate = () => { 
    let player = document.getElementById("audioPlayer")
    audioFile.value.currentTime = parseInt(player.currentTime);
    audioFile.value.duration = parseInt(player.duration);
}
 const completeAudio = () => { 
    audioFile.value.currentTime = 0
    audioFile.value.duration = 0
    audioFile.value.playing=false
    audioFile.value.id = null
 }

 const pauseAudio = () => { 
    document.getElementById("audioPlayer").pause()
    audioFile.value.playing=false

 }
 const startAudio = () => { 
    document.getElementById("audioPlayer").play()
    audioFile.value.playing=true

 }
</script>