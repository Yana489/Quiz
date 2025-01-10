<template>
  <div>
    <h2 class="main-heading">{{ store.questions[4].title }}</h2>
    <h4 class="sub-heading">{{ store.questions[4].subtitle }}</h4>
    <button
      v-for="topic in topics"
      :key="topic"
      class="topic-button"
      :class="{ selected: isSelectedTopic(topic)}"
      @click="selectTopic(topic)"
    >
      {{ topic }}
    </button>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const topics = store.questions[4].answers;

const selectTopic = (topic) => {
  if (isSelectedTopic(topic)) {
    store.questions[4].selectedAnswer = store.questions[4].selectedAnswer.filter((item) => item != topic);
  } else if (store.questions[4].selectedAnswer.length < 3) {
    store.questions[4].selectedAnswer.push(topic);
  }
};

const isSelectedTopic = (topic) => {
  return store.questions[4].selectedAnswer.includes(topic);
};
</script>

<style scoped>
.topic-button {
  font-family: "Delius";
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

.topic-button.selected {
  background-color: #2d1f5d;
}
</style>
