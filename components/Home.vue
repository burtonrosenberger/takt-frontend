<template>
    <v-row class="" style="overflow: hidden;">
        <v-col class="d-flex flex-row" style="max-width:100vw; overflow:hidden;">
            <v-col cols="12">
                <Projects @playAudio="(a) => $emit('playAudio', a)" :projects="projects"></Projects>
            </v-col>
            <v-col id="home" class="d-flex flex-column pl-10 " cols="12" sm="9">
                <h1 class="mb-0 font-weight-thin" style="margin-top:140px;">
                    {{ $t('taktDescriptionLine1' )}}<br>
                    {{ $t('taktDescriptionLine2') }}
                </h1>

                <v-row class="d-flex align-end" style=" border-bottom:1px dashed #00000070; ">
                    <v-col v-for="b in buttons" class="pb-0">
                        <div class="question  mb-5"
                            :class="b.dest === `#games` ? `question2` : ``"
                            @click="b.dest !== `#location` ? scrollInto(b.dest) : undefined"
                            style="cursor:pointer; width:auto">
                            <!-- <span>Click here to</span> -->
                            <p>{{ $t(b.title) }}</p>
                            <div v-if="b.dest === `#location`" class="mt-2 text-center">
                                <v-btn @click="scrollInto(`#projects`)" variant="outlined" size="small"
                                    style="border-color:white !important;">{{$t('Projects')}}</v-btn>
                                <v-btn @click="scrollInto(`#location`)" variant="outlined" size="small"
                                    style="border-color:white !important; margin-left:5px;">{{$t('Location')}}</v-btn>
                            </div>
                        </div>
                        <v-img :min-width="[`#location`,`#survey`].indexOf(b.dest) > -1  ? `110%` : `100%`" contain :src="b.img" >
                        </v-img>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="d-flex flex-row" cols="12" sm="5">
                <div class="w-100 align-center d-flex text-center">
                    <v-img :src="landMarks" height="90vh" class="d-flex align-center justify-center" contain>
                        <v-img :src="marker" class="mx-auto" :style="{position:`relative`, left:`${location.x}px`, top:`${location.y}px`}" cover width="100px">
                        </v-img>
                        <v-row
                            class="question question3" 
                            :style="{position:`relative`,width:`250px`, left:`-70px`, top:`150px`}">
                            <v-col cols="6">
                                <v-img :src="qrcodeArApplication" cover width="120px" min-height="100px"></v-img>
                            </v-col>
                            <v-col cols="6">
                                <p style="font-size:16px">Scan this code to check out our AR experience!</p>                                
                            </v-col>
                        </v-row>
                    </v-img>
                </div>
            </v-col>
            <v-col cols="2" class=" d-flex  flex-column justify-end align-end">
                <div class="">
                <div class="mx-auto question text-left">
                   
                    <p>{{ $t('knowMoreLocation')}}</p>
                </div>
                <img :src="semminar" width="150%" height="75%" style="border-bottom:1px dashed #00000070;" />
                    </div>
            </v-col>
            <v-col id="location" cols="12" sm="8" class="d-flex align-center justify-center flex-column ">
                <p class="w-75 mx-auto" style="font-size:18pt; max-height:75vh; overflow-y: auto;" v-html="desc"></p>
                <v-btn variant="text" class="px-0 mt-3" size="lg"  v-if="audio" @click="$emit('playAudio', audio)">
                    <v-icon color="black" size="x-large">mdi-volume-high </v-icon>
                </v-btn>
      
            </v-col>
            <v-btn @click="scrollToHome" v-if="view === `#location`" style="position:fixed; top:50%;" variant="text"
                size="x-large" class="pa-0"><v-icon size="x-large">mdi-chevron-left</v-icon></v-btn>
            <v-btn @click="scrollToHome" v-if="view === `#projects`" style="position:fixed; right:5px; top:50%;" variant="text"
            size="x-large"  class="pa-0"><v-icon size="x-large">mdi-chevron-right</v-icon></v-btn>
           
        </v-col>
    </v-row>
</template>
<style>
#home { 
    max-height:91vh;
}
.hide-scroll {
    scrollbar-color: #fcb349 #fcb349;
}

.hide-scroll::-webkit-scrollbar-track {
    background: #fcb349;
    border: 0px;
}

.question {
    background-color: #374151;
    padding: 15px 10px;
    border-radius:15px;
    padding-top:10px;
    position:relative;
    max-width:fit-content;
    margin:auto;
}
.question::before{ 
    content: '';
    position: absolute;
    border-left: 1.3px solid #374151;
    width: 18px;
    height: 18px;
    transform: rotateY(0deg) rotate(-45deg);
    right: 30px;
    background-color: #374151;
    border-bottom: 1.3px solid #374151;
    bottom: -9px;
}
.question2::before{ 
    content: '';
    position: absolute;
    border-left: 1.3px solid #374151;
    width: 18px;
    height: 18px;
    transform: rotateY(0deg) rotate(-45deg);
    left: 60px;
    background-color: #374151;
    border-bottom: 1.3px solid #374151;
    bottom: -9px;
}
.question3 { 
    padding-top:13px
}
.question3::before{ 
    content: '';
    position: absolute;
    border-left: 1.3px solid #374151;
    width: 18px;
    height: 18px;
    transform: rotateY(0deg) rotate(-45deg);
    right: 30px;
    background-color: #374151;
    border-bottom: 1.3px solid #374151;
    top: -9px;
    
}

.question span {
    color: white;
    font-size: 12px;
}

.question p {
    background-color: white;
    font-size:18pt;
    border-radius:8px;
    padding: 5px;
}

.question3 .v-col { 
    background-color: white;
    font-size:18pt;
    padding: 5px;
}

.question3 div:first-child { 
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.question3 div:last-child { 
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>
<script setup>
import marker from '@/assets/marker.png';
import qrcodeArApplication from '@/assets/qr_for_ar.png';
import landMarks from '@/assets/A3_landmarks.png';

import job_offers from '@/assets/job_offers.gif';
import questions from '@/assets/questions.gif';
import semminar from '@/assets/semminar.gif';
import rollers from '@/assets/rollers.gif';

const props = defineProps(['desc', 'location', 'projects', 'audio'])
const view = ref('home')

const buttons = ref([
    { title: "howToParticipate", img: questions, dest: "#participate" },
    { title: "playGame", img: rollers, dest: "#games" },
    { title: "knowMoreAbout", img: semminar, dest: "#location" },
    { title: "makeYourVote", img: job_offers, dest: "#survey" },
])

const scrollToHome = () => {
    // scrollLeft(1200)
    scrollInto("#home")
}

const scrollInto = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: "smooth", inline: "start" })
    // if(id === `#home`) window.scrollY=0
    view.value = id
}

onMounted(() => {
    setTimeout(() => { scrollToHome() }, 1500)
})



defineExpose({ scrollInto })
</script>