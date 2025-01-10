<template>
  <div>
    <h2 class="main-heading">{{ store.questions[3].title }}</h2>
    <div v-for="dislike in dislikes" :key="dislike" class="dislike-container">
      <form
        class="dislike-form"
        :class="{ selected: isSelectedDislike(dislike) }"
        @click="selectDislike(dislike)"
      >
        <input type="checkbox" :checked="isSelectedDislike(dislike)" />
        {{ dislike }}
      </form>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const dislikes = store.questions[3].answers;

const selectDislike = (dislike) => {
  if (isSelectedDislike(dislike)) {
    store.questions[3].selectedAnswer =
      store.questions[3].selectedAnswer.filter((item) => item !== dislike);
  } else {
    store.questions[3].selectedAnswer.push(dislike);
  }
};

const isSelectedDislike = (dislike) => {
  return store.questions[3].selectedAnswer.includes(dislike);
};
</script>

<style scoped>
.dislike-container {
  margin: 10px 0;
}

.dislike-form {
  width: 90%;
  padding: 15px;
  font-size: 18px;
  background-color: #6d32c6;
  accent-color: #737aa8;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.dislike-form.selected {
  background-color: #2d1f5d;
}
</style>
