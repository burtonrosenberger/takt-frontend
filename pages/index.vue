<template>
    <v-container fluid class="fill-height" :style="{ backgroundColor: `#fcb34a` }">
        <v-row class="fill-height">
            <v-col class=" d-flex flex-column fill-height" cols="12" sm="7">
                <img :src="logo" class="" width="100" alt="Der Takt">
                <h1>Revolutionizing Public Engagement Services:<br> Bringing Participation to the People, On the Go.</h1>


                <v-row class="d-flex align-center">
                    <v-col v-for="b in buttons">
                        <div class="question">
                            <span>Click here to</span>
                            <p>{{b.title}}</p>
                        </div>
                        <v-img width="100%" max-height="350px" contain   :src="b.img">
                        </v-img>
                    </v-col>
                </v-row>
               
            </v-col>
            <v-col class="fill-height" cols="12" sm="5">
                <div class="w-100 align-center d-flex text-center">
                    <v-img :src="landMarks" height="90vh" class="d-flex align-center justify-center" cover>
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
    </v-container>
</template>
<style scoped>
.question { 
    background-color:#374151;
    padding:0px 10px 10px;
}
.question span { 
    color: white;
    font-size:12px;
}
.question p { 
    background-color:white;
    padding:5px;
}
</style>
<script setup>
import logo from '@/assets/logo.png';
import marker from '@/assets/marker.png';

import job_offers from '@/assets/job_offers.gif';
import questions from '@/assets/questions.gif';
import semminar from '@/assets/semminar.gif';
import rollers from '@/assets/rollers.gif';

import landMarks from '@/assets/A3_landmarks.png';
import { onMounted, ref } from 'vue';

const panel = ref({})
const slide = ref(0)

const buttons = ref([
    { title: "How to participate!", img: questions, route: "/how-to-participate" },
    { title: "Play a game!", img: rollers, route: "/games" },
    { title: "Know more about...", img:semminar, route: "/green-projects" },
    { title: "Make your vote count!", img:job_offers, route: "/participate-survey" },
])

const loadLocation = async () => { 
    const { data } = await $fetch(
        'https://takt.soultech.solutions/items/locations?filter[url][_eq]=aachner-rathaus&fields=*,facts.text,background_images.directus_files_id',{
    })
    panel.value = data[0]
}

onMounted(() => { 
    loadLocation()
})
</script>