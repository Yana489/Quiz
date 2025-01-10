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
import { reactive, ref, computed, watch } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";
import Languages from "./components/questions/Languages.vue";
import Gender from "./components/questions/Gender.vue";
import Age from "./components/questions/Age.vue";
import Dislikes from "./components/questions/Dislikes.vue";
import Topics from "./components/questions/Topics.vue";

import Stepper from "./components/Stepper.vue";

const store = useQuizStore();

const currentPage = ref(1);

const allComponents = reactive({
  1: Languages,
  2: Gender,
  3: Age,
  4: Dislikes,
  5: Topics,
});

const currentComponent = computed(() => {
  return allComponents[currentPage.value];
});

const changeNextCurrentPage = () => {
  currentPage.value++;
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
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
