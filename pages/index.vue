<template>
    <v-container fluid :style="{ backgroundColor: `#fcb34a` }">
        <v-app-bar color="#fcb34a" elevation="0">
            <v-img style="cursor:pointer" @click="scrollInto(`#home`)" :src="logo"  contain max-width="170px" alt="Der Takt" />
            <v-spacer></v-spacer>
            <v-btn><v-icon color="#374151" size="x-large">mdi-volume-high </v-icon></v-btn>
            <v-btn variant="text" size="small"><v-img width="23px" height="17px" :src="german"
                        alt="German" /></v-btn>
                <v-btn variant="text" size="small"><v-img width="23px" height="17px" :src="english"
                        alt="English" /></v-btn>
        </v-app-bar>

        <Home></Home>
        <Participate id="participate"></Participate>
        <Survey id="survey"></Survey>
    </v-container>
</template>
<style scoped>
.fill-min-height {
    min-height: 100vh;
}

.yellowTakt {
    color: #fcb34a
}
</style>
<script setup>
import logo from '@/assets/logo.png';

import german from '@/assets/lang/deu.png';
import english from '@/assets/lang/eng.png';
import { onMounted, ref } from 'vue';

const lastScrollTop = ref(0)
const last = ref(0)
const panel = ref({})
const positions = [`home`, `participate`, `survey`]
const actualView = ref(0)

const scrollInto = (id) => { 
    let el = document.querySelector(id)
    el.scrollIntoView({ behavior: "smooth"})
    // view.value = id
}
const handleScroll = (e) => {
    var st = window.scrollY || document.documentElement.scrollTop;


    // if ((e.timeStamp - last.value) > 1000) {
    //     // console.log((e.timeStamp - last.value ))
    //     console.log(st)
    //     console.log(lastScrollTop.value)
    //     last.value = e.timeStamp

    //     if (st > lastScrollTop.value) {
    //         actualView.value = actualView.value == positions.length-1 ? 0 : actualView.value + 1
    //         console.log(`pra baixo ${positions[actualView.value]}`)
    //         document.getElementById(positions[actualView.value]).scrollIntoView({ behavior: "smooth" });
    //     } else {
    //         actualView.value = actualView.value == 0 ? actualView.value : actualView.value - 1
    //         console.log(`pra cima ${positions[actualView.value]}`)
    //         document.getElementById(positions[actualView.value]).scrollIntoView({ behavior: "smooth" });
    //     }
    // }
    lastScrollTop.value = st

}

const loadLocation = async () => {
    const { data } = await $fetch(
        'https://takt.soultech.solutions/items/locations?filter[url][_eq]=aachner-rathaus&fields=*,facts.text,background_images.directus_files_id', {
    })
    panel.value = data[0]
}


onMounted(() => {
    loadLocation()
    window.addEventListener('scroll', handleScroll);
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})
</script>