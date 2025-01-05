<template>
  <div>
    <h2 class="main-heading">{{ store.questions[4].title }}</h2>
    <h4 class="sub-heading">{{ store.questions[4].subtitle }}</h4>
    <button
      v-for="topic in topics"
      :key="topic"
      class="topic-button"
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
  store.selectAnswer(topic);
};
</script>

<style scoped>
.topic-button {
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

.topic-button:focus {
  background-color: #2d1f5d;
}
</style>
