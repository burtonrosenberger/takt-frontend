<template>
  <v-row class="fill-min-height pa-0">
    <v-col cols="12" class="d-flex align-start justify-center">
      <p class="game-description">{{game.description}} </p>
    </v-col>
    <v-col cols="5"  class="d-flex align-start justify-end">
      <draggable v-model="game.columns"  item-key="ask" >
        <template #item="{element: item}">
          <div class="item">
            <div class="title">{{item.ask}}</div>
          </div>
        </template>
      </draggable>
    </v-col>  
    <v-col cols="2" class="d-flex align-start w-75  mt-15 justify-center">
      <p>Drag and Drop <br> from left to right</p>
    </v-col>
    <v-col cols="5" class="d-flex align-start justify-start">
      <draggable  v-model="game.columns"  item-key="ask">
        <template #item="{element: item}" >
          <div class="item">
            <div class="title">{{item.ask}}</div>
          </div>
        </template>
      </draggable>
    </v-col>  
  </v-row>
</template>
<style scoped>
.game-description { 
  width:50%;
  margin:auto;
  font-size:22px;
  background-color:#374151;
  padding:30px;
  border-radius:15px;
  color:white;
}
.item { 
  background-color:#374151;
  padding:30px;
  width:150px;
  height:150px;
  margin:10px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius:1000%;
  color:white;
}
</style>
<script lang="ts" setup>
const game = ref({
  description: "Pick and drag each of the Aachen Buildings to the total area of green open space required to compensate for its Carbon Footprint.",
  columns: [
    { ask: "local 1", ans: "answ1"},
    { ask: "local 2", ans: "answ2"},
    { ask: "local 3", ans: "answ3"}
  ]
})
</script>

