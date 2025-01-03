<template>
  <div>
    <h2 class="main-heading">{{ store.questions[2].title }}</h2>
    <button v-for="age in ages" :key="age" class="age-button">
      {{ age }}
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const ages = store.questions[2].answers;
</script>

<style scoped>
.age-button {
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

.age-button:focus {
  background-color: #2d1f5d;
}
</style>
