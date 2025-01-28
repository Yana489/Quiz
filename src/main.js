// import './assets/main.css'

import { createI18n } from "vue-i18n";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: {
      gender: {
        title: "What gender do you identify with?",
        subtitle: "Please share how you identify yourself",
        female: "Female",
        male: "Male",
        other: "Other",
      },
      age: {
        title: "What is your age?",
        subtitle: "",
        fromEighteen: "18-29 years",
        fromThirty: "30-39 years",
        fromForty: "40-49 years",
        fromFifty: "50+",
      },
      dislikes: {
        title: "What do you hate the most in a book?",
        subtitle: "",
        logic: "Lack of logic",
        speed: "A slow speed",
        humor: "Lack of humor",
        ending: "Way too generic ending",
      },
      topics: {
        title: "What are your favorite topics?",
        subtitle: "Choose up to 3 topics you like",
        werewolf: "Werewolf",
        action: "Action",
        romance: "Romance",
        youngAdult: "Young Adult",
        badBoy: "Bad Boy",
        royal: "Royal Obsession",
        billionaire: "Billionaire",
      },
    },
    es: {
      gender: {
        title: "¿Con qué género te identificas?",
        subtitle: "",
        female: "Femenino",
        male: "Masculino",
        other: "Otro",
      },
      age: {
        title: "¿Cuál es tu edad?",
        subtitle: "",
        fromEighteen: "18-29 años",
        fromThirty: "30-39 años",
        fromForty: "40-49 años",
        fromFifty: "50+",
      },
      dislikes: {
        title: "¿Qué es lo que más odias en un libro?",
        subtitle: "",
        logic: "Falta de lógica",
        speed: "Ritmo lento",
        humor: "Falta de humor",
        ending: "Final demasiado genérico",
      },
      topics: {
        title: "¿Cuáles son tus temas favoritos?",
        subtitle: "Elige hasta 3 temas que te gusten",
        werewolf: "Hombre lobo",
        action: "Acción",
        romance: "Romance",
        youngAdult: "Jóvenes adultos",
        badBoy: "Chico malo",
        royal: "Obsesión real",
        billionaire: "Multimillonario",
      },
    },
    de: {
      gender: {
        title: "Mit welchem Geschlecht identifizieren Sie sich?",
        subtitle: "Bitte teilen Sie mit, wie Sie sich identifizieren",
        female: "Weiblich",
        male: "Männlich",
        other: "Anderes",
      },
      age: {
        title: "Wie alt sind Sie?",
        subtitle: "",
        fromEighteen: "18-29 Jahre",
        fromThirty: "30-39 Jahre",
        fromForty: "40-49 Jahre",
        fromFifty: "50+",
      },
      dislikes: {
        title: "Was hasst du am meisten in einem Buch?",
        subtitle: "",
        logic: "Mangel an Logik",
        speed: "Langsames Tempo",
        humor: "Mangel an Humor",
        ending: "Viel zu generisches Ende",
      },
      topics: {
        title: "Was sind deine Lieblingsthemen?",
        subtitle: "Wähle bis zu 3 Themen, die dir gefallen",
        werewolf: "Werwolf",
        action: "Action",
        romance: "Romantik",
        youngAdult: "Junge Erwachsene",
        badBoy: "Böser Junge",
        royal: "Königliche Obsession",
        billionaire: "Milliardär",
      },
    },
    fr: {
      gender: {
        title: "Avec quel genre vous identifiez-vous ?",
        subtitle: "Veuillez partager comment vous vous identifiez",
        female: "Féminin",
        male: "Masculin",
        other: "Autre",
      },
      age: {
        title: "Quel est votre âge ?",
        subtitle: "",
        fromEighteen: "18-29 ans",
        fromThirty: "30-39 ans",
        fromForty: "40-49 ans",
        fromFifty: "50+",
      },
      dislikes: {
        title: "Qu'est-ce que vous détestez le plus dans un livre ?",
        subtitle: "",
        logic: "Manque de logique",
        speed: "Rythme lent",
        humor: "Manque d'humour",
        ending: "Fin trop générique",
      },
      topics: {
        title: "Quels sont vos sujets préférés ?",
        subtitle: "Choisissez jusqu'à 3 sujets que vous aimez",
        werewolf: "Loup-garou",
        action: "Action",
        romance: "Romance",
        youngAdult: "Jeunes adultes",
        badBoy: "Mauvais garçon",
        royal: "Obsession royale",
        billionaire: "Milliardaire",
      },
    },
  },
});

createApp(App).use(createPinia()).use(i18n).mount("#app");
