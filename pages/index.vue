<template>
    <v-container fluid  :style="{ backgroundColor: `#fcb34a` }">
        <v-row class="fill-min-height">
            <v-col>
                <v-window  touch v-model="slide" direction="vertical" show-arrows>
                    <v-window-item v-for="n in length" :key="`card-${n}`" >
                        <v-row class="fill-height">
                            <v-col class="d-flex flex-column justify-space fill-height" cols="12" sm="7">
                                <img :src="logo" class="" width="100" alt="Der Takt">
                                <h1 class="mb-15">Revolutionizing Public Engagement Services:<br> 
                                    Bringing Participation to the People, On the Go.</h1>
                                <v-row class="mt-15 d-flex align-center">
                                    <v-col v-for="b in buttons">
                                        <div class="question">
                                            <span>Click here to</span>
                                            <p>{{ b.title }}</p>
                                        </div>
                                        <v-img width="100%" max-height="350px" contain :src="b.img">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col class="fill-height" cols="12" sm="5">
                                <div class="w-100 align-center d-flex text-center">
                                    <v-img :src="landMarks" height="90vh" class="d-flex align-center justify-center"
                                        cover>
                                        <v-img :src="marker" class="mx-auto" cover width="100px"></v-img>
                                    </v-img>
                                </div>
                                <div>
                                    <p class=" d-flex justify-end align-center">
                                        <v-btn>German</v-btn>
                                        <v-btn>English</v-btn>
                                    </p>
                                </div>
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-col>
        </v-row>
        <v-row  class="fill-min-height">
            <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
                <div>
                    <div class="question">
                        <span>Click here to</span>
                        <p>How to Participate?</p>
                    </div>
                    <v-img :src="questions" width="250px" />
                </div>
            </v-col>
            <v-col cols="10" class="pa-0">
                <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
                style="height:100%"
                >
                    <v-slide-item
                        v-for="n in 15"
                        :key="n"
                        class="d-flex align-center"
                    >
                        <v-row class="project mx-1 pa-15">
                            <v-col cols="6" class="text-right">
                                <v-img class="mx-auto mr-0" width="75%"  :src="projectExample" />
                                <p class="yellowTakt text-right">Location</p>
                                <p class="yellowTakt text-right">Location Description</p>
                            </v-col>
                            <v-col cols="6 pt-1">
                                <h1>Título</h1>
                                <h4>Subtitulo</h4>
                                <v-img width="80px" :src="qrCode" />
                                <p>
                                    The open consultation Hours of the Citizens’ Dialogue and Administrative Management Department as well as other consultation hours take place in the citizens’ meeting in…
                                </p>
                            </v-col>
                        </v-row>
                    </v-slide-item>
                </v-slide-group>
            </v-col>
        </v-row>
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
import qrCode from '@/assets/testeQRCode.png';
import projectExample from '@/assets/SCR-20240328-rexn.jpeg';

import job_offers from '@/assets/job_offers.gif';
import questions from '@/assets/questions.gif';
import semminar from '@/assets/semminar.gif';
import rollers from '@/assets/rollers.gif';

import landMarks from '@/assets/A3_landmarks.png';
import { onMounted, ref } from 'vue';
const length = ref(3)
const panel = ref({})
const model = ref(0)
const slide = ref(0)

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

onMounted(() => {
    loadLocation()
})
</script>