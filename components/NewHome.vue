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
        <!-- About Us Section -->
        <v-card class="mb-8" rounded="xl">
                <v-card-text class="px-8">
                <v-row align="center">
                    <v-col cols="12" md="8">
                    <h2 class="text-h4 font-weight-bold mb-4">About us</h2>
                    <p class="mb-4">
                        Aachen aims to become climate neutral — and we all have a role to play.
                        While sustainability is widely discussed, real action often gets overlooked. This interactive display highlights local
                        climate-neutral projects and invites you to explore how you can make a difference. If we lead the way, others will be
                        inspired to follow — and real change becomes possible.
                    </p>
                    <p class="mb-4">
                        Learn more about this prototype, about ADAA and our purpose.
                    </p>
                    <p class="text-right">
                        <v-btn  color="#e3e3e3" variant="flat" >
                            Learn More
                        </v-btn>
                    </p>
                    
                    </v-col>
                    <v-col cols="12" md="4" class="text-center">
                    <div class="pa-6">
                        <!-- Placeholder for illustration -->
                        <v-img
                            src="~/assets/Mobile Marketing-cuate.png"
                        alt="Person with megaphone"
                        class="rounded-lg"
                        />
                    </div>
                    </v-col>
                </v-row>
                </v-card-text>
            </v-card>
    
            <!-- Four Cards Section -->
            <v-row>
                <!-- Proto-Site Card -->
                <v-col cols="12" sm="6" md="3">
                <v-card rounded="xl" >
                    <v-card-text class="pa-6">
                    <h3 class="text-h5 font-weight-bold mb-2">Proto-Site</h3>
                    <p class="mb-4">
                        Festival vibes meet future ideas.
                        This site is a prototype for change
                    </p>
                    <p class="text-right">
                        <v-btn  color="#e3e3e3" variant="flat" >
                            Learn More
                        </v-btn>
                    </p>
                    
                    <div class="text-center mt-6">
                        <v-img
                            src="~/assets/Address-cuate-2.png"
                        alt="Proto-Site illustration"
                        class="rounded-lg"
                        />
                    </div>
                    </v-card-text>
                </v-card>
                </v-col>
    
                <!-- Take Part Card -->
                <v-col cols="12" sm="6" md="3">
                <v-card rounded="xl">
                    <v-card-text class="pa-6">
                    <h3 class="text-h5 font-weight-bold mb-2">Take Part</h3>
                    <p class="mb-4">
                        Get involved in Aachen's journey —
                        and tell us about Kimiko!
                    </p>
                    <p class="text-right">
                        <v-btn  color="#e3e3e3" variant="flat" >
                            Learn More
                        </v-btn>
                    </p>
                    <div class="text-center mt-6">
                        <v-img
                        src="~/assets/Team goals-cuate-2.png"
                        alt="Take Part illustration"
                        class="rounded-lg"
                        />
                    </div>
                    </v-card-text>
                </v-card>
                </v-col>
    
                <!-- Projects Card -->
                <v-col cols="12" sm="6" md="3">
                <v-card rounded="xl">
                    <v-card-text class="pa-6">
                    <h3 class="text-h5 font-weight-bold mb-2">Projects</h3>
                    <p class="mb-4">
                        Aachen is acting on climate —
                        explore the projects leading
                        change.
                    </p>
                    <p class="text-right">
                        <v-btn  color="#e3e3e3" variant="flat" >
                            Learn More
                        </v-btn>
                    </p>
                    <div class="text-center mt-6">
                        <v-img
                        src="~/assets/Organizing projects-cuate-2.png"
                        alt="Projects illustration"
                        class="rounded-lg"
                        />
                    </div>
                    </v-card-text>
                </v-card>
                </v-col>
    
                <!-- Games Card -->
                <v-col cols="12" sm="6" md="3">
                    <v-card rounded="xl">
                        <v-card-text class="pa-6">
                        <h3 class="text-h5 font-weight-bold mb-2">Games <small>(Coming Soon)</small></h3>
                        <p class="mb-4">
                            Level up your knowledge and have
                            fun going green.
                        </p>
                        <p class="text-right">
                            <v-btn  color="#e3e3e3" variant="flat" >
                                Learn More
                            </v-btn>
                        </p>
                        <div class="text-center mt-6">
                            <v-img
                            src="~/assets/Questions-cuate-3.png"
                            alt="Games illustration"
                            class="rounded-lg"
                            />
                        </div>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
</template>