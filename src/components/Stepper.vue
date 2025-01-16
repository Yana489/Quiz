<template>
  <div v-if="currentPage > 1">
    <BackArrow @onBackArrow="emits('changeBackCurrentPage')"></BackArrow>
  </div>
  {{ currentPage }}/5
  <div class="stepper-container">
    <div class="stepper" :style="{ width: loaderWidth }"></div>
  </div>
  <slot></slot>
  <NextButton @onNextButton="emits('changeNextCurrentPage')"></NextButton>
</template>

<script setup>
import BackArrow from "@/components/BackArrow.vue";
import NextButton from "@/components/NextButton.vue";

import { defineProps, defineEmits, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();

const emits = defineEmits(["changeNextCurrentPage", "changeBackCurrentPage"]);

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

const loaderWidth = computed(() => {
  const totalQuestions = store.questions.length;
  const completedQuestions = props.currentPage;
  return (completedQuestions / totalQuestions) * 100 + "%";
});
</script>

<style scoped>
.stepper-container {
  width: 70%;
  margin: 0 auto;
  background-color: #6d32c6;
  border-radius: 50px;
  overflow: hidden;
}

.stepper {
  height: 10px;
  background-color: #a995e9;
  transition: 0.5s ease;
}
</style>
