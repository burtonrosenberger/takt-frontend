<template>
    <v-container fluid class="fill-height" :style="{ backgroundImage: `url('https://takt.soultech.solutions/assets/df075b4a-fc7d-425a-85d1-f523cecf8864')` }">
        <v-row class="fill-height">
            <v-col class=" d-flex flex-column fill-height" cols="12" sm="6">
                <div style="height:90%;" class=" d-flex flex-column justify-space-around py-15 align-center">
                    <v-carousel v-model="slide" hide-delimiters cycle :show-arrows="false" style="width:60%">
                        <v-carousel-item v-for="fact in panel.facts">
                            <v-card color="#00000085" class="white">
                                <v-card-title>
                                    Did you know...
                                </v-card-title>
                                <v-card-text>
                                    {{ fact.text }}
                                </v-card-text>
                            </v-card>
                        </v-carousel-item>
                    </v-carousel>
                    
                    <v-card width="30%" color="#00000090" elevation="5" class="white" v-if="panel.about">
                        <v-card-title>
                            About
                        </v-card-title>
                        <v-card-text>
                           {{ panel.about }}
                        </v-card-text>
                    </v-card>
                </div>
                <div class="text-left ">
                    <p class="white">You are at</p>
                    <h1 class="white">{{ panel.title }}</h1>
                </div>
            </v-col>
            <v-col class="fill-height" cols="12" sm="6">
                <div style="height:90%;" class="w-100 align-center d-flex text-center">
                    <p>
                        <v-btn :to="btn.route" v-for="btn in buttons">{{ btn.title }}</v-btn>
                    </p>
                </div>
                <div>
                    <p class=" d-flex justify-end align-center">
                        <v-btn>German</v-btn>
                        <v-btn>Netherlands</v-btn>
                        <v-btn>Ukraine</v-btn>
                        <img :src="logo" class="ml-5" width="100" alt="Der Takt">
                    </p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped>
.v-container { 
    background-position: center;
    background-size: cover;
}
.white { 
    color:white
}
.h-90 {
    height: 90%;
}
</style>
<script setup>
import logo from '@/public/logo.png';
import { onMounted, ref } from 'vue';

const panel = ref({})
const slide = ref(0)

const buttons = ref([
    { title: "Play a short game!", route: "/games" },
    { title: "Learn how to participate!", route: "/how-to-participate" },
    { title: "Check out Aachen`s Green Projects!", route: "/green-projects" },
    { title: "Participate in surveys!", route: "/participate-survey" },
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