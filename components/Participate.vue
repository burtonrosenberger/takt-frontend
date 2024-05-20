<template>
    <v-row  class="fill-min-height">
            <v-col cols="2" class="d-flex align-center justify-center flex-column pa-0">
                <div>
                    <div class="question">
                        <span>_</span>
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
                        v-for="{ participate_id } in participations"
                        :key="participate_id.id"
                    >
                        <div class="project mx-1  d-flex align-start justify-center">
                            <v-col cols="6" class="pa-0 text-right" >
                                <v-img class="mx-auto mr-0" width="100%" cover height="350px"
                                style="border-top-left-radius:1000%" :src="`https://armn.takt.city/assets/${participate_id.image}`" />                                <p class="yellowTakt text-right">Location</p>
                                <p class="yellowTakt text-right">{{ participate_id.location }}</p>
                                <p class="yellowTakt text-right">{{ participate_id.location_description }}</p>
                            </v-col>
                            <v-col cols="6 pt-15">
                                <h1>{{participate_id.title}}</h1>
                                <h4>{{participate_id.subtitle}}</h4>
                                <v-img width="80px" :src="`https://armn.takt.city/assets/${participate_id.qrcode}`" />
                                <p>
                                    {{ participate_id.description }}
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
    padding:0px 10px 15px;
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