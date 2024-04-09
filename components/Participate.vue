<template>
    <v-row  class="fill-min-height">
            <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
                <div>
                    <div class="question">
                        <span>How to</span>
                        <p>Participate?</p>
                    </div>
                    <v-img :src="questions" width="250px" />
                </div>
            </v-col>
            <v-col cols="10" class="d-flex align-center pa-0">
                <v-slide-group
                v-model="model"
                class="pa-4"
                active-class="success"
                show-arrows
                >
                    <v-slide-group-item
                        v-for="n in 15"
                        :key="n"
                    >
                        <div class=" project mx-1 pa-15 d-flex align-start justify-center">
                            <v-col cols="6" class=" text-right">
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
                        </div>
                    </v-slide-group-item>
                </v-slide-group>
            </v-col>
        </v-row>
</template>
<style scoped>
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
</style>
<script setup>
import projectExample from '@/assets/SCR-20240328-rexn.jpeg';
import qrCode from '@/assets/testeQRCode.png';
import questions from '@/assets/questions.gif';
const model = ref(0)
</script>