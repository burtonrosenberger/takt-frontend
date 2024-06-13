<template>
    <v-row  class="fill-min-height">
            <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
                <div>
                    <div class="question">
                        
                        <p>{{ $t('howToParticipate') }}</p>
                    </div>
                    <v-img :src="questions" width="250px"  style="border-bottom:1px dashed #00000070;" />
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
                        v-for="participate_id  in participations"
                        :key="participate_id.participate_id"
                    >
                        <div class="project mx-4 d-flex align-start justify-center">
                            <v-row>
                                <v-col cols="12" class=" text-center" >
                                    <v-img class="mx-auto mt-3 rounded-lg" width="80%" contain height="250px"
                                       :src="`https://armn.takt.city/assets/${participate_id.image}`" />                                
                                </v-col>
                                <v-col cols="12" class="px-10">
                                    <p class="yellowTakt">{{ participate_id.location }}</p>
                                    <p class="yellowTakt">{{ participate_id.location_description }}</p>
                                    <h1>{{participate_id.title}}</h1>
                                    <h4>{{participate_id.subtitle}}</h4>
                                    <p>{{ participate_id.description }}</p>
                                    <v-btn variant="text" class="px-0" size="sm" v-if="participate_id.audio" @click="$emit(`playAudio`, participate_id.audio)">
                                        <v-icon color="black" size="x-large">mdi-volume-high </v-icon>
                                    </v-btn>
                               
                                  
                                    <v-img width="80px" class="mx-auto" :src="`https://armn.takt.city/assets/${participate_id.qrcode}`" />

                                </v-col>
                            </v-row>
                        </div>
                    </v-slide-group-item>
                </v-slide-group>
            </v-col>
        </v-row>
</template>
<style scoped>
.project { 
    border-radius: 45px;
    width:700px;
    height:700px;
    background-color:white;
}
.question {
    background-color: #374151;
    padding:15px 10px ;
    position:relative;
    margin-bottom:25px;
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
import questions from '@/assets/questions.gif';

const props = defineProps(['participations'])
const model = ref(0)

</script>