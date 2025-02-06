import './assets/main.css'

import { createI18n } from "vue-i18n";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import en from "./locales/en.js";
import es from "./locales/es.js";
import de from "./locales/de.js";
import fr from "./locales/fr.js";

const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    es,
    de,
    fr,
  },
});

createApp(App).use(createPinia()).use(i18n).mount("#app");
