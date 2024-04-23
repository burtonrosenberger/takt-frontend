<template>
  <v-row  class="fill-min-height">
    <v-col id="projects" cols="10" class="d-flex align-center pa-0">
        <v-slide-group
        v-model="model"
        class=""
        active-class="success"
        show-arrows
        >
            <v-slide-group-item
                v-for="n in 15"
                :key="n"
            >
                <div class=" project mx-4  d-flex align-start justify-center">
                    <v-col cols="6" class="pa-0 text-right">
                        <v-img class="mx-auto mr-0" width="100%"  cover height="350px" style="border-top-left-radius:1000%"   :src="projectExample" />
                        <p class="yellowTakt text-right">Location</p>
                        <p class="yellowTakt text-right">Location Description</p>
                    </v-col>
                    <v-col cols="6 pt-15">
                        <h1 class="white">Title</h1>
                        <h4>SubTitle</h4>
                        <v-img width="80px" :src="qrCode" />
                        <p>
                            The open consultation Hours of the Citizens’ Dialogue and Administrative Management Department as well as other consultation hours take place in the citizens’ meeting in…
                        </p>
                    </v-col>
                </div>
            </v-slide-group-item>
        </v-slide-group>
    </v-col>
    <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
        <div class="w-100">
            <div class="question mx-auto">
                <span>_</span>
                <p>Know more about projects</p>
            </div>
            <v-img :src="semminar" width="350px" cover  style="border-bottom:1px dashed #00000070;" />
        </div>
    </v-col>
  </v-row>
</template>
<style scoped>
h1 { color:white;}

.project { 
  border-radius: 10000px;
  width:700px;
  height:700px;
  background-color:#374151;
  color:white
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
import projectExample from '@/assets/SCR-20240328-rexn.jpeg';
import qrCode from '@/assets/testeQRCode.png';
import semminar from '@/assets/semminar.gif';
const model = ref(14)
</script>