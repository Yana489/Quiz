<template>
  <div>
    <h2 class="main-heading">{{ store.questions[0].title }}</h2>
    <h4 class="sub-heading">{{ store.questions[0].subtitle }}</h4>
    <button
      v-for="language in languages"
      :key="language"
      class="language-button"
      @click="selectLanguage(language)"
    >
      {{ language }}
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const languages = store.questions[0].answers;

const selectLanguage = (language) => {
  store.selectAnswer(language);
};
</script>

<style scoped>
.language-button {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  background-color: #6d32c6;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.language-button:focus {
  background-color: #2d1f5d;
}
</style>
