<!--
  RWTH Aachen University
  Copyright (C) 2026 Projekt ADAA

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <https://www.gnu.org/licenses/>.
-->

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