<template>
  <v-row class="fill-min-height">
    <v-col cols="12" class="d-flex align-start justify-center">
      <p class="game-description">{{game.description}}</p>
    </v-col>
    <v-col cols="5"  class="d-flex align-start justify-end">
      <v-list style="background-color:transparent">
        <v-list-item v-for=" item in getQuestions(game.columns)">
          <div class="item" v-show="!success[item.id]" draggable="true" @dragstart="dragStart" :id="item.id">
            <div class="title">{{item.value}}</div>
          </div>
        </v-list-item>
      </v-list>

    </v-col>  
    <v-col cols="2" class="d-flex flex-column align-start w-75  mt-15 align-center justify-center">
      <p>Drag and Drop <br> from left to right</p>
      <v-spacer></v-spacer>
      <p>
        <v-btn class="btn">Reset</v-btn>
        {{ success }}
        <v-btn class="btn primary" v-if="success.length === 3">Next</v-btn>    
      </p>

    </v-col>
    <v-col cols="5" class="d-flex align-start justify-start">
      <v-list style="background-color:transparent">
        <v-list-item v-for=" item in getAnswers(game.columns)"  >
          <div :id="item.id" @drop="handleDrop" @dragleave="handleDragOut" @dragover="handleDragOver" class="item1" :class="[hover[item.id] ?  `grey` : ``, success[item.id] ? `green` : ``]"  >
            <div class="title" :id="item.id">{{item.value}}</div>
          </div>
        </v-list-item>
      </v-list>
    </v-col>  
  </v-row>
</template>
<style scoped>
.grey { border:3px solid #374151;}
.green { border:3px solid green;}
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
.item1 { 
  background-color:white;
  padding:30px;
  width:150px;
  height:150px;
  margin:10px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius:1000%;
  color:#374151;
}
.btn { 
  border-radius:5px;

}
.btn-primary { 
  background-color:#374151;

  color:white;
}
</style>
<script setup>
const game = ref({
  description: "Pick and drag each of the Aachen Buildings to the total area of green open space required to compensate for its Carbon Footprint.",
  columns: [
    { id:"1dsa123", question: "local 1", answer: "answer 1"},
    { id:"12fa12b", question: "local 2", answer: "answer 2"},
    { id:"353vj0c", question: "local 3", answer: "answer 3"}
  ]
})
const hover = ref([])
const success = ref([])
const getQuestions = (columns) => { 
  return columns.map(e => ({ id: e.id, value: e.question}))
}

const getAnswers = (columns) => { 
  return columns.map(e => ({id: e.id, value: e.answer}))
}

const handleDrop = (e) => {
  e.preventDefault();

  const draggedItemId = e.dataTransfer.getData("draggedItem");
  const dropZoneId = e.target.id;
  hover.value[dropZoneId] = false

  if (draggedItemId == dropZoneId) success.value[dropZoneId] = true
  
  console.log({dropZoneId})
}
const dragStart = (e) => { 
  e.dataTransfer.setData("draggedItem", e.target.id);
}

const handleDragOver = (e) => {
  e.preventDefault();
  // console.log(event.target.id)
  hover.value[e.target.id] = true
}

const handleDragOut = (e) => { 
  event.preventDefault()
  // console.log(e.target.id)

  hover.value[e.target.id] = false
}
</script>

