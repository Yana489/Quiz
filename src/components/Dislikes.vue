<template>
  <div>
    <h2 class="main-heading">{{ store.questions[3].title }}</h2>
    <div
      v-for="dislike in dislikes"
      :key="dislike"
      class="dislike-container"
    >
      <form class="dislike-form">
        <input multiple type="checkbox" />
        {{ dislike }}
      </form>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();
const dislikes = store.questions[3].answers;
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
  color: white;
  border-radius: 20px;
  cursor: pointer;
}

.dislike-form:focus {
  background-color: #2d1f5d;
}
</style>
