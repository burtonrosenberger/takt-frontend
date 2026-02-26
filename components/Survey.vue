<!--
  RWTH Aachen University
  Copyright (C) 2026 Projekt ADAA

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https://www.gnu.org/licenses/>.
-->

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
                        :key="p.questions_id"
                    >
                        <div class="project my-15 pa-15 pt-0  d-flex align-center justify-center flex-column">
                            <h1 class="text-center mb-15">{{i+1}}. {{ p.question }}  
                                <v-btn variant="text" v-if="p.audio !== null" @click="$emit(`playAudio`, p.audio)" class="px-0" size="sm">
                                    <v-icon color="#374151" size="lg">mdi-volume-high </v-icon>
                                </v-btn>
                            </h1>
                         
                            <div class="text-center mt-5">
                                <v-btn variant="flat" color="#374151" style="border-radius:5px; min-width:200px; margin:15px; color:white; padding:10px" @click="choiceAnswer(a.id)" v-for="a in p.answers">{{ a.answer }}</v-btn>
                            </div>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center fill-height-min flex-column">
            <div>
                <div class="question ">
                    <p>{{ $t('makeYourVote') }}</p>
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
    padding:15px 10px;
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
const props = defineProps(['questions'])


const choiceAnswer = (answer) => { 
    registerVote(answer)
    rotateAachen(90)
    console.log()
    if (model.value == (props.questions.length-1)) model.value = 0
    else model.value++
} 

const registerVote = async (answer) => { 
    await $fetch(
        'https://armn.takt.city/items/votes',
        {
            method: 'POST',
            body: { answer: answer},

            headers: new Headers({'Authorization':  "Bearer j04rZ3-gVM-SyJlK-iAE1MH5HDbovh1u"})
        })
        // console.log(data)
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