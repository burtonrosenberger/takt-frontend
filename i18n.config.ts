/*
 * RWTH Aachen University
 * Copyright (C) 2026 Projekt ADAA
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        //MENU
        Home: 'Home',
        Participation: "Participation",
        Survey: "Survey",
        Games: "Games",
        Location: "Location",
        Projects: "Projects",

        //HOME 
        taktDescriptionLine1: "Revolutionizing Public Engagement Services:",
        taktDescriptionLine2: "Bringing Participation to the People, On the Go.",

        //HOME - BUTTONS
        howToParticipate: "How to participate?",
        playGame: "Play a game!",
        knowMoreAbout: "Know more about...",
        makeYourVote: "Make your vote count!",

        //LOCATION
        knowMoreLocation: "Know more about the location",

        //GAME 
        dragAndDropLine1: "Drag and Drop",
        dragAndDropLine2: "from left to right",
        wrongAnswer: "Ops wrong answer, please try again!",
        Reset: "Reset",
        Next: "Next"
      },
      de: {
        //MENU
        Home: 'Home',
        Participation: "Beteiligung",
        Survey: "Umfrage",
        Games: "Spiele",
        Location: "Standort",
        Projects: "Projekte",

        //HOME 
        // taktDescriptionLine1: "Revolutionierung Öffentlichkeit Beteiligungsdienste:",
        // taktDescriptionLine2: "Partizipation zu den Menschen bringen, auch unterwegs.",
        taktDescriptionLine1: "Revolution öffentlicher Beteiligungsformate:",
        taktDescriptionLine2: "Beteiligung der Bürgerschaft, auch von unterwegs!",

        //HOME - BUTTONS
        howToParticipate: "Wie kann ich mich beteiligen?",
        playGame: "Jetzt spielen!",
        knowMoreAbout: "Erfahren Sie mehr über...",
        makeYourVote: "Ihre Stimme zählt!",

        //LOCATION
        knowMoreLocation: "Erfahren Sie mehr über den Standort",
        
        //GAME 
        dragAndDropLine1: "Ziehen und Ablegen",
        dragAndDropLine2: "Von links nach rechts",
        wrongAnswer: "Falsche Antwort, bitte versuchen Sie es erneut!",
        Reset: "Zurücksetzen",
        Next: "Weiter"
      }
    }
  }))
  