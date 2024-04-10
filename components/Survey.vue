<template>
    <v-row class="fill-min-height" >
            <v-col cols="9" class="pa-0">
                <v-carousel
                v-model="model"
                class="pa-4 fill-height d-flex align-center justify-center flex-column"
                :show-arrows="false"
                hide-delimiters
                direction="vertical"
                >
                    <v-carousel-item
                        v-for="(p,i) in questions"
                        :key="p.question"
                    >
                        <div class="project my-15 pa-15  d-flex align-center justify-center flex-column">
                            <h2 class="text-center">{{i+1}}. {{ p.question }}</h2>
                            <div class="text-center">
                                <v-btn variant="flat" color="#374151" style="min-width:200px; margin:15px; color:white; padding:10px" class=" rounded-0 " @click="choiceAnswer" v-for="a in p.answers">{{ a }}</v-btn>
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center fill-height-min flex-column">
            <div>
                <div class="question ">
                    <span>_</span>
                    <p>Make your vote Count!</p>
                </div>
                <img :src="job_offers" width="100%" min-height="300px"  style="border-bottom:1px dashed #00000070;" />
            </div>
            </v-col>
            <v-col cols="9" class="text-center pb-0 mb-0 " style="z-index:3;margin-top:-345px;max-height:350px; overflow: hidden;">
                <img ref="circularAachen" class="mx-auto " style="object-fit: cover; object-position: bottom; width:1200px" cover :src="circularAachenPng" ></img>
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
    width:800px;
    height:800px;
    background-color:white;
}
.question {
    background-color: #374151;
    padding:0px 10px 15px;
    position:relative;
}
.question::before{ 
    content: '';
    position: absolute;
    z-index: 999;
    border-left: 1.3px solid #374151;
    width: 18px;
    height: 18px;
    transform: rotateY(0deg) rotate(-45deg);
    right: 30px;
    background-color: #374151;
    border-bottom: 1.3px solid #374151;
    bottom: -9px;
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

import job_offers from '@/assets/job_offers.gif';
import circularAachenPng from '@/assets/Circular aachen.png';
const model = ref(0)
const startAt = ref(0)
const timer = ref(null)
const circularAachen = ref(null)

const questions = ref([
    {
        question: "Which Aachen city dashboard do you use more often?",
        answers: [ "Mobility Dash", "Covid Dashboard", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    },
    {
        question: "Which Aachen city park do you use more often?",
        answers: [ "Aachen garden", "Aachen park", "Option 3", "None"]
    }
])

const choiceAnswer = () => { 
    rotateAachen(90)
    if (model.value == questions.value.length-1) model.value = 0
    else model.value++
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