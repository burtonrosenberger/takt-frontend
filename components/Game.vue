<template>
  <v-row class="fill-min-height" >
    <v-col cols="12" class="d-flex align-start mt-5 justify-center">
      <p class="game-description mt-9 text-center">{{game.description}}
      <v-btn variant="text" @click="$emit(`playAudio`, game.audio)" v-if="game.audio" class="px-0" size="sm">
          <v-icon color="white" size="sm">mdi-volume-high </v-icon>
      </v-btn>

    </p>
    </v-col>
    <v-col cols="5"  class="d-flex align-start justify-end">
      <v-list style="background-color:transparent">
        <v-list-item  v-for=" item in getQuestions(game.columns)">
          <div class="d-flex flex-row align-center" v-show="!success[item.id]">
            <h3 class="mr-5">{{ item.text }}</h3>
            <div class="item"  draggable="true" @dragstart="dragStart" :id="item.id">
              <div class="title">
                <v-img :id="item.id" :src="`https://armn.takt.city/assets/${item.image}`" cover width="150px" height="150px" style="border-radius:100%"></v-img>
              </div>
            </div>
          </div>
        </v-list-item>
      </v-list>
    </v-col>  
    <v-col cols="2" class="d-flex flex-column align-start w-75  mt-15 align-center justify-center">
      <p>{{  $t('dragAndDropLine1') }}<br>{{  $t('dragAndDropLine2') }}</p>
      <p style="color:red; font-weight:bold" class=" mt-5" v-if="error">{{$t('wrongAnswer')}}</p>
      
      <v-spacer></v-spacer>
      
      <p v-if="allCorrects">
        <v-btn @click="resetGame" class=" mr-3">{{$t(`Reset`)}}</v-btn>
        <v-btn @click="nextGame" class="btn primary" >{{$t(`Next`)}}</v-btn>    
      </p>

    </v-col>
    <v-col cols="5" class="d-flex align-start justify-start">
      <v-list style="background-color:transparent">


        <v-list-item v-for="item in getAnswers(game.columns)">
          <div class="d-flex flex-row align-center">
          
          <div :id="item.id"  @drop="handleDrop" @dragleave="handleDragOut" @dragover="handleDragOver" >
            <v-img
           class="item1" :class="[hover[item.id] ?  `grey` : ``, success[item.id] ? `green` : ``]"
            :id="item.id" :src="`https://armn.takt.city/assets/${item.image}`" cover width="150px" height="150px" 
            >
            <div :id="item.id" class="dropZone">_ </div>
          </v-img>
          </div>
          <h3 class="mr-5">{{ item.text }}</h3>
          </div>
        </v-list-item>
      </v-list>
    </v-col>  
  </v-row>
</template>
<style scoped>
h3 { 
  font-weight: bolder !important;
}
.dropZone { 
  width:150px;
  height:150px;
}
.grey { border:3px solid #374151;}
.green { border:3px solid green;}
.btn { 
  background-color:#374151;
  padding:5px;

  color:white;
}
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
const props = defineProps(['games'])
const actualGame = ref(0)
const game = computed(() => (props.games.length > 0 ? props.games[actualGame.value] : {description:"", columns:[]}));
// const game = computed(() => (props.games ? {description:"", columns:[]} : {description:"", columns:[]}));
const hover = ref([])
const success = ref([])
const error = ref(false)
const allCorrects = computed(() => { 
  let a = game.value.columns.map((e) => success.value[e.id]).every(Boolean)
  return a
})

const getQuestions = (columns) => { 
  return columns.map(e => ({ id: e.id, text: e.left_text, image: e.left}))
}

const getAnswers = (columns) => { 
  return columns.map(e => ({id: e.id, text: e.right_text, image: e.right}))
}

const handleDrop = (e) => {
  e.preventDefault();

  const draggedItemId = e.dataTransfer.getData("draggedItem");
  const dropZoneId = e.target.id;
  hover.value[dropZoneId] = false

  if (draggedItemId == dropZoneId) success.value[dropZoneId] = true
  else { 
    error.value = true
    setTimeout(() => error.value = false, 3000)
  }
  console.log({dropZoneId, draggedItemId})
}
const dragStart = (e) => { 
  e.dataTransfer.setData("draggedItem", e.target.parentElement.id);
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

const resetGame = () => { 
 success.value = []
}
const nextGame = () => { 
  success.value = []
  actualGame.value = actualGame.value === props.games.length ? 0 : actualGame.value++
}

const playAudio = (idAudio) => { 
    document.getElementById(idAudio).play()
}
</script>

