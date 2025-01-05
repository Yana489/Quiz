<template>
  <div class="component">
    <BackButton @onBackButton="changeBackCurrentPage"></BackButton>
    <div>{{ currentPage }}</div>
    <KeepAlive><component :is="currentComponent"></component></KeepAlive>
    <NextButton @onNextButton="changeNextCurrentPage"></NextButton>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";
import Languages from "./components/Languages.vue";
import Gender from "./components/Gender.vue";
import Age from "./components/Age.vue";
import Dislikes from "./components/Dislikes.vue";
import Topics from "./components/Topics.vue";
import NextButton from "./components/NextButton.vue";
import BackButton from "./components/BackButton.vue";

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
  max-width: 400px;
  margin: 70px auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
