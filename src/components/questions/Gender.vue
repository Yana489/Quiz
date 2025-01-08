<template>
  <div>
    <h2 class="main-heading">{{ store.questions[1].title }}</h2>
    <h4 class="sub-heading">{{ store.questions[1].subtitle }}</h4>
    <button
      v-for="gender in genders"
      :key="gender"
      class="gender-button"
      :class="{ selected: store.questions[1].selectedAnswer === gender }"
      @click="selectGender(gender)"
    >
      {{ gender }}
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const genders = store.questions[1].answers;

const selectGender = (gender) => {
  store.questions[1].selectedAnswer = gender;
};
</script>

<style scoped>
.gender-button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #6d32c6;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;
}

.gender-button.selected {
  background-color: #2d1f5d;
}
</style>
