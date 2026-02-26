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
  <v-app  class="page-background">
   <!-- Background wrapper -->
      <!-- Top Navigation -->
        <v-app-bar color="amber-lighten-1" flat>
            <v-toolbar-title >
                <h1 class="text-h4 text-dark font-weight-bold " >
                What Could I Do To Help My City Become Climate Neutral?
                </h1>
            </v-toolbar-title>
            <v-btn class="mr-10" >
                <v-img src="~/assets/logo.png" container width="100px"/>
            </v-btn>
        </v-app-bar>
  
      <!-- Main Content -->
        <v-main>

            <v-container>
                <NewHome v-if="active == `home`"></NewHome>
                <Game  v-if="active == `games`" @playAudio="playAudio" :games="games" id="games"></Game>
                <Participate  v-if="active == `take-part`" @playAudio="playAudio" :participations="participate" id="participate"></Participate>
                <Survey  v-if="active == `survey`" @playAudio="playAudio" :questions="questions" id="survey"></Survey>
                <Projects v-if="active == `projects`" @playAudio="(a) => $emit('playAudio', a)" :projects="projects"></Projects>
                
                <!-- Right Navigation -->
        
            </v-container>
            <v-navigation-drawer 
                location="right" 
                permanent 
                color="transparent"
                :width="200"
                class="text-center mt-15"
                style="border:0px"
            >
                <v-list nav density="compact">
                    <v-list-item :class="active == `home` ?  `active`: ``">
                    <v-btn variant="plain" @click="active=`home`">
                        Home
                    </v-btn>
                    </v-list-item>
                    
                    <v-list-item :class="active == `about` ?  `active`: ``">
                    <v-btn  variant="plain" @click="active=`about`">
                        About
                    </v-btn>
                    </v-list-item>
                    
                    <v-list-item :class="active == `proto-site` ?  `active`: ``">
                    <v-btn  variant="plain" @click="active=`proto-site`">
                        Proto-Site
                    </v-btn>
                    </v-list-item>
                    
                    <v-list-item :class="active == `take-part` ?  `active`: ``">
                    <v-btn  variant="plain" @click="active=`take-part`">
                        Take Part
                    </v-btn>
                    </v-list-item>
                    
                    <v-list-item :class="active == `projects` ?  `active`: ``">
                    <v-btn  variant="plain" @click="active=`projects`">
                        Projects
                    </v-btn>
                    </v-list-item>
                    
                    <v-list-item :class="active == `games` ?  `active`: ``"> 
                    <v-btn  variant="plain" @click="active=`games`">
                        Games
                    </v-btn>
                    </v-list-item >
                    
                </v-list>
                <v-spacer></v-spacer>
    
                <v-list class="text-center mx-auto mt-15" style="background-color: white !important; width:40px; border-radius: 150px; padding:0" >
                    <v-list-item class="pa-0 ma-0">
                        <v-img 
                            class="mx-auto"
                            src="~/assets/lang/eng.png"
                            alt="English"
                            width="35px"
                            height="35px"
                        />
                    </v-list-item>
                    <v-list-item class="pa-0 ma-0">
                        <v-img
                            class="mx-auto"
                            src="~/assets/lang/deu.png"
                            alt="Deu"
                            width="35px"
                            height="35px"
                            />
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-main>
    </v-app>
</template>

<script>
export default {
name: 'ClimateActionPage',
data() {
    return {
        active: "home"
    // Add any reactive data here
    }
},
methods: {
    // Add methods here if needed
}
}
</script>
<style>
/* Background styling - matching the exact amber tone from the image */
.page-background {
  min-height: 100vh;
  background: linear-gradient(180deg, #FFC471 0%, #FFC36D 100%);
  background-size: cover;
  background-attachment: fixed;
}

/* Remove texture - the actual design is clean without texture */
.page-background::before {
  display: none;
}

/* Ensure content is above background */
.v-app-bar, .v-main {
  background: transparent !important;
}

/* Fix the navigation button styling */
.nav-button {
  color: #2C2C2C !important;
  font-weight: 600 !important;
  padding: 0 24px !important;
}

.home-button {
  background-color: rgba(255, 255, 255, 0.8) !important;
}

.text-dark {
  color: #2C2C2C !important;
}

.fixed-nav {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
}



.illustration-box {
  background-color: #F9EFD7;
  border-radius: 16px;
}



/* Ensure consistent card heights */
.v-row .v-col {
  display: flex;
  align-items: stretch;
}

.v-card {
  display: flex;
  flex-direction: column;
}

.v-card-text {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.v-card-text .v-btn {
  margin-top: auto;
}

/* Custom buttons and text colors */


/* Remove old amber color styling */


/* Add transitions for smooth interactions */
.v-btn, .v-card {
  transition: all 0.3s ease;
}

.v-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
}

/* Right navigation styling */
.v-list-item .v-btn {
  margin: 25px 0px;
  color:#140d07;
  font-size:25px;
  border:0px;
}

.active { 
    background:white !important;
    border-top-left-radius: 250px !important;
    border-bottom-left-radius: 250px !important;
    font-weight: bolder !important;
}
.v-btn { 
  text-transform: none !important;

}
/* Ensure text in cards is dark and readable */
.v-card-text {
  color: #2C2C2C !important;
}
</style>
