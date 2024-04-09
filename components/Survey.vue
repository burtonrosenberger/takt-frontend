<template>
    <v-row class="fill-min-height">
            <v-col cols="10" class="pa-0">
                <v-carousel
                v-model="model"
                class="pa-4 fill-height d-flex align-center justify-center flex-column"
                :show-arrows="false"
                hide-delimiters
                >
                    <v-carousel-item
                        v-for="(p,i) in questions"
                        :key="p.question"
                    >
                        <div class="project my-15 pa-15  d-flex align-center justify-center flex-column">
                            <h2 class="text-center">{{i+1}}. {{ p.question }}</h2>
                            <div style="max-width:80%;">
                                <v-btn variant="flat" color="#374151" style="width:200px; margin:15px; color:white; padding:15px" class=" rounded-0 " @click="choiceAnswer" v-for="a in p.answers">{{ a }}</v-btn>
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="2" class="d-flex align-center justify-center fill-height flex-column" style="height:100vh !important;">
                <div class="question">
                    <span>_</span>
                    <p>Make your vote Count!</p>
                </div>
                <img :src="job_offers" width="100%" height="300px" />
            </v-col>
            <v-col cols="10" class="text-center" style="z-index:3;margin-top:-300px;max-height:200px; overflow: hidden;">
                <img ref="circularAachen" class="mx-auto " style="  object-fit: cover; object-position: bottom;" cover :src="circularAachenPng" width="700px"></img>
            </v-col>
        </v-row>
</template>
<style scoped>

.btnAnswer { 
    background-color:#374151;
    color:white !important;
}
.project { 
    border-radius: 10000px;
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
</style>
<script setup>
import logo from '@/assets/logo.png';

import job_offers from '@/assets/job_offers.gif';
import circularAachenPng from '@/assets/Circular aachen.png';
const model = ref(0)
const startAt = ref(0)
const timer = ref(null)
const circularAachen = ref(null)

const questions = ref([{
    question: "Which Aachen city dashboard do you use more often?",
    answers: [ "Mobility Dash", "Covid Dashboard", "Option 3", "None"]
}])

const choiceAnswer = () => { 
    rotateAachen(90)
} 

const rotateAachen = (deg) => {
    const max = deg +startAt.value
    timer.value = setInterval(() => { 
        startAt.value++
        circularAachen.value.style.transform = `rotate(${startAt.value}deg)`
        if (startAt.value == max) clearInterval(timer.value)
    },1)
}


</script>