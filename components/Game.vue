<template>
  <v-row class="fill-min-height">
    <v-col cols="12" class="d-flex align-start justify-center">
      <p class="game-description">{{game.description}}</p>
    </v-col>
    <v-col cols="5"  class="d-flex align-start justify-end">
      <draggable :list="getQuestions(game.columns)"  item-key="value" group="game "         @change="log" >
        <template #item="{element: item}">
          <div class="item">
            <div class="title">{{item.value}}</div>
          </div>
        </template>
      </draggable>
    </v-col>  
    <v-col cols="2" class="d-flex align-start w-75  mt-15 justify-center">
      <p>Drag and Drop <br> from left to right</p>
    </v-col>
    <v-col cols="5" class="d-flex align-start justify-start">
    <draggable  :list="getAnswers(game.columns)"  item-key="value"  group="game"        @change="log">
        <template #item="{element: item}" >
          <div class="item">
            <div class="title">{{item.value}}</div>
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
  font-size:20pt;
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
<script setup>
const game = ref({
  description: "Pick and drag each of the Aachen Buildings to the total area of green open space required to compensate for its Carbon Footprint.",
  columns: [
    { id:"1", question: "local 1", answer: "answer 1"},
    { id:"2", question: "local 2", answer: "answer 2"},
    { id:"3", question: "local 3", answer: "answer 3"}
  ]
})

const getQuestions = (columns) => { 
  return columns.map(e => ({ id: e.id, value: e.question}))
}

const getAnswers = (columns) => { 
  return columns.map(e => ({id: e.id, value: e.answer}))
}

const log = (evt) =>  {
  window.console.log(evt);
}
</script>

