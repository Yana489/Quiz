<template>
  <div class="spinner-container">
    <VueSpinner class="spinner"></VueSpinner>{{ loader }}%
    <p>Finding collections for you...</p>
  </div>
</template>

<script setup>
import { VueSpinner } from "vue3-spinners";
import { ref } from "vue";

const loader = ref(0);
let interval;

interval = setInterval(() => {
  if (loader.value < 100) {
    loader.value += 1;
  } else {
    clearInterval(interval);
  }
}, 50);
</script>

<style scoped>
.spinner-container {
  color: #6d32c6;
  font-family: "Delius";
  max-width: 400px;
  margin: 170px auto;
  text-align: center;
}

.spinner {
  font-size: 100px;
}
</style>
