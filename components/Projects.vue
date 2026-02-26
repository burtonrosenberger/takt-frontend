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
    <v-row class="fill-min-height">
        <v-col id="projects" cols="10" class="d-flex align-center pa-0">
            <v-slide-group v-model="model" class="mt-10"  active-class="success" show-arrows>
                <v-slide-group-item v-for="projects_id  in projects" :key="projects_id.projects_id">
                    <div class=" project mx-4   d-flex align-start justify-center">
                        <v-row>
                            <v-col cols="12" class="text-center">
                                <v-img class="mx-auto mt-3" width="80%" contain height="250px"
                                    style="border-top-left-radius:0px" :src="`https://armn.takt.city/assets/${projects_id.image}`" />                                
                            </v-col>
                            <v-col cols="12" class="px-10">
                                <p class="yellowTakt">{{ projects_id.location }}</p>
                                <p class="yellowTakt">{{ projects_id.location_description }}</p>
                                <h1 class="white">{{ projects_id.title }}</h1>
                                <h4>{{ projects_id.subtitle }}</h4>
                                <p> {{ projects_id.description }} </p>
                                <v-btn variant="text" v-if="projects_id.audio" @click="$emit(`playAudio`, projects_id.audio)" class="px-0 mt-5" size="sm">
                                    <v-icon color="white" size="x-large">mdi-volume-high </v-icon>
                                </v-btn>
                               
                                <v-img width="80px" class="mx-auto" :src="`https://armn.takt.city/assets/${projects_id.qrcode}`" />
                            </v-col>
                        </v-row>
                    </div>
                </v-slide-group-item>
            </v-slide-group>
        </v-col>
        <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
            <div class="w-100">
                <div class="question mx-auto">
                    <p>{{$t(`knowMoreAbout`)}}</p>
                </div>
                <v-img :src="semminar" width="350px" cover style="border-bottom:1px dashed #00000070;" />
            </div>
        </v-col>
    </v-row>
</template>
<style scoped>
h1 {
    color: white;
}

.project {
    border-radius: 45px;
    width: 700px;
    height: 700px;
    background-color: #374151;
    color: white
}

.question {
    background-color: #374151;
    padding: 15px 10px;
    position: relative;
}

.question::before {
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
import semminar from '@/assets/semminar.gif';
const model = ref(0)
const props = defineProps(['projects'])

</script>