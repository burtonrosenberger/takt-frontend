<script setup></script>
<template>
  <v-app >
    <NuxtPage ></NuxtPage>
  </v-app>
</template>

<style>
@font-face {
    font-family: 'Futura';
    src:  url('@/assets/font/futura light bt.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
h1,h2,h3 { 
  color:#374151;
  font-weight:400 !important;
}
html { 
  overflow: auto;
  font-family: 'Futura';
}
 /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #00000075 #fcb349;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #fcb34975;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #fcb349;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
</style>