<template>
    <v-container fluid  :style="{ backgroundColor: `#fcb34a` }">
        <v-row class="fill-min-height">
            <v-col>
                <div ref="first" class="d-flex flex-row" style="max-width:100vw; overflow-x:scroll" >
                    <v-col class="d-flex flex-column justify-space fill-height" cols="12" sm="7">
                        <img :src="logo" class="" width="100" alt="Der Takt">
                        <h1 class="mb-15">Revolutionizing Public Engagement Services:<br> 
                            Bringing Participation to the People, On the Go.</h1>
                        <v-row class="mt-15 d-flex align-center">
                            <v-col v-for="b in buttons">
                                <div class="question" style="cursor:pointer" @click="scrollToInfo">
                                    <span>Click here to</span>
                                    <p>{{ b.title }}</p>
                                </div>
                                <v-img width="100%" max-height="350px" contain :src="b.img">
                                </v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col class=" d-flex flex-row" cols="12" sm="5">
                        <div class="w-100 align-center d-flex text-center">
                            <v-img :src="landMarks" height="90vh" class="d-flex align-center justify-center"
                                cover>
                                <v-img :src="marker" class="mx-auto" cover width="100px"></v-img>
                            </v-img>
                        </div>
                
                      
                    </v-col>
                    <v-col cols="8">
                        <div>
                            Know More
                        </div>

                    </v-col>
                </div>
            </v-col>
            <v-col cols="12">
                <p class=" d-flex justify-end align-center">
                    <v-btn variant="text" size="small"><v-img width="23px" height="17px" :src="german" alt="German" /></v-btn>
                    <v-btn variant="text" size="small"><v-img  width="23px" height="17px" :src="english" alt="English" /></v-btn>
                </p>
            </v-col>
        </v-row>
        <Participate></Participate>
        <Survey></Survey>
    </v-container>
</template>
<style scoped>
.fill-min-height { 
    min-height:100vh;
}
.project { 
    border-radius: 10000%;
    width:700px;
    height:700px;
    background-color:white;
}
.question {
    background-color: #374151;
    padding: 0px 10px 10px;
}

.question span {
    color: white;
    font-size: 12px;
}

.question p {
    background-color: white;
    padding: 5px;
}
.yellowTakt { 
    color:#fcb34a
}
</style>
<script setup>
import logo from '@/assets/logo.png';
import marker from '@/assets/marker.png';

import german from '@/assets/lang/DE.png';
import english from '@/assets/lang/US.png';


import job_offers from '@/assets/job_offers.gif';
import questions from '@/assets/questions.gif';
import semminar from '@/assets/semminar.gif';
import rollers from '@/assets/rollers.gif';

import landMarks from '@/assets/A3_landmarks.png';
import { onMounted, ref } from 'vue';

const first = ref(null)
const timer = ref(null)
const length = ref(3)
const panel = ref({})


const buttons = ref([
    { title: "How to participate!", img: questions, route: "/how-to-participate" },
    { title: "Play a game!", img: rollers, route: "/games" },
    { title: "Know more about...", img: semminar, route: "/green-projects" },
    { title: "Make your vote count!", img: job_offers, route: "/participate-survey" },
])

const loadLocation = async () => {
    const { data } = await $fetch(
        'https://takt.soultech.solutions/items/locations?filter[url][_eq]=aachner-rathaus&fields=*,facts.text,background_images.directus_files_id', {
    })
    panel.value = data[0]
}

const scrollToInfo = () => { 
    // console.log(first.value)
    scrollLeft(1200)
}

const scrollLeft = (max) => {
    timer.value = setInterval(() => { 
        if(first.value) first.value.scrollLeft +=5
        if (first.value.scrollLeft == max) clearInterval(timer.value)
    },1)
}

onMounted(() => {
    loadLocation()
})
</script>