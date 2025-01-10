<template>
  <div>
    <h2 class="main-heading">{{ question.title }}</h2>
    <h4 class="sub-heading">{{ question.subtitle }}</h4>
    <button
      v-for="answer in question.answers"
      :key="answer"
      class="answer-button"
      :class="{ selected: isSelectedAnswer(answer) }"
      @click="selectAnswer(answer)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

const question = store.questions[props.currentPage - 1];

const selectAnswer = (answer) => {
  question.selectedAnswer = answer;
};

const isSelectedAnswer = (answer) => {
  return question.selectedAnswer === answer;
};
</script>

<style scoped>
.answer-button {
  font-family: "Delius";
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

.answer-button.selected {
  background-color: #2d1f5d;
}
</style>
