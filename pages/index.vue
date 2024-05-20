<template>
    <v-container fluid :class="route.path === `/p/` ? `fill-min-height`: `fill-height`" :style="{ backgroundColor: `#fcb34a` }">
        <v-row>
            <v-col cols="12" >
                <v-img height="350px" class="mx-auto" :src="logo" alt="Der Takt" contain width="400px"/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>
import logo from '@/assets/logo.png';
const route = useRoute()
useHead({
  title: 'Takt City',
  meta: [
    { name: 'description', content: 'Takt City.' }
  ],
  bodyAttrs: {
    // class: 'test'
  },
 
})
</script>