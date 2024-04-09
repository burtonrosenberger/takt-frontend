<template>
    <v-row class="fill-min-height pa-0">
        <v-col class="pa-0">
            <div  ref="first" class="d-flex flex-row hide-scroll" style="max-width:100vw; overflow-x:hidden;">
                <v-col cols="12">
                    <Projects></Projects>
                 </v-col>
                <v-col id="home"  class="d-flex flex-column fill-height" cols="12" sm="9">
                    <h1 class="mb-15 mt-15 font-weight-thin">Revolutionizing Public Engagement Services:<br>
                        Bringing Participation to the People, On the Go.</h1>
                    <v-row class="d-flex align-center" style="margin-top:210px; border-bottom:1px dashed #00000070; ">
                        <v-col v-for="b in buttons" class="pb-0"    >
                            <div class="question mx-auto mb-5" @click="scrollInto(b.dest)" style="cursor:pointer; width:210px">
                                <span>Click here to</span>
                                <p>{{ b.title }}</p>
                            </div>
                            <v-img width="100%"  contain :src="b.img">
                            </v-img>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class=" d-flex flex-row" cols="12" sm="6">
                    <div class="w-100 align-center d-flex text-center">
                        <v-img :src="landMarks" height="90vh" class="d-flex align-center justify-center" contain>
                            <v-img :src="marker" class="mx-auto" cover width="100px"></v-img>
                        </v-img>
                    </div>
                </v-col>
                <v-col  cols="2" class=" d-flex  flex-column justify-end align-start " style="border-bottom:1px dashed #00000070;">
                    <div class="question  text-left"  >
                                <span>_</span>
                                <p>Know more about..</p>
                            </div>
                            <v-img :src="semminar" width="290px" max-height="450px" class="d-flex align-center justify-center" cover>
                    </v-img>    
                </v-col>
                <v-col id="location" cols="12" sm="8" class="d-flex align-center justify-center ">
                    <p>Use this space to give info (to be provided)</p>
                </v-col>
                <v-btn @click="scrollToHome" v-if="view===`#location`" style="position:fixed; top:50%;" variant="text" size="x-large" class="pa-0"><v-icon size="x-large">mdi-chevron-left</v-icon></v-btn>
            </div>
        </v-col>
    </v-row>
</template>
<style>
.project {
    border-radius: 10000%;
    width: 700px;
    height: 700px;
    background-color: white;
}
.hide-scroll{
    scrollbar-color: #fcb349 #fcb349;
}
.hide-scroll::-webkit-scrollbar-track {
    background: #fcb349;
    border:0px;
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
import marker from '@/assets/marker.png';
import landMarks from '@/assets/A3_landmarks.png';

import job_offers from '@/assets/job_offers.gif';
import questions from '@/assets/questions.gif';
import semminar from '@/assets/semminar.gif';
import rollers from '@/assets/rollers.gif';

const first = ref(null)
const timer = ref(null)
const view = ref('home')

const buttons = ref([
    { title: "How to participate!", img: questions, dest: "#participate" },
    { title: "Play a game!", img: rollers, dest: "#games" },
    { title: "Know more about...", img: semminar, dest: "#location" },
    { title: "Make your vote count!", img: job_offers, dest: "#survey" },
])

const scrollToHome = () => { 
    // scrollLeft(1200)
    scrollInto("#home")
}

const scrollInto = (id) => { 
    document.querySelector(id).scrollIntoView({ behavior: "smooth", inline: "start"})
    // if(id === `#home`) window.scrollY=0
    view.value = id
}

// const scrollLeft = (max) => {
//     timer.value = setInterval(() => {
//         if (first.value) first.value.scrollLeft += 5
//         if (first.value.scrollLeft == max) clearInterval(timer.value)
//     }, 1)
// }


// const scrollRight = (max) => {
//     timer.value = setInterval(() => {
//         if (first.value) first.value.scrollLeft -= 5
//         if (first.value.scrollLeft == max) clearInterval(timer.value)
//     }, 1)
// }
onMounted(() => { 
   setTimeout(() => {scrollToHome()},1500)
}) 

defineExpose( { scrollInto })
</script>