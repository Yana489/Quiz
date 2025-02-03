<template>
  <div class="component">
    <Stepper
      :currentPage="currentPage"
      @changeNextCurrentPage="changeNextCurrentPage"
      @changeBackCurrentPage="changeBackCurrentPage"
      ><component :is="currentComponent"></component
    ></Stepper>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";
import { allComponents } from "./constants/constants.js";

import Stepper from "./components/Stepper.vue";

const store = useQuizStore();

const currentPage = ref(1);

const currentComponent = computed(() => {
  return allComponents[currentPage.value];
});

const changeNextCurrentPage = () => {
  if (
    store.questions[currentPage.value - 1].selectedAnswer &&
    store.questions[currentPage.value - 1].selectedAnswer.length > 0
  ) {
    currentPage.value++;
  }
};
const changeBackCurrentPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>

<style scoped>
.component {
  font-family: "Delius";
  max-width: 400px;
  margin: 70px auto;
  padding: 20px;
  text-align: center;
  background-color: #c2cff6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
