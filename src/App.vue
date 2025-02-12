<template>
  <div class="component">
    <Stepper
      :currentPage="currentPage"
      :disabled="isDisabled"
      @changeNextCurrentPage="changeNextCurrentPage"
      @changeBackCurrentPage="changeBackCurrentPage"
      @submitEmail="updateEmail"
      ><component :is="currentComponent"></component
    ></Stepper>
  </div>
</template>

<script setup>
import { reactive, ref, computed, defineEmits } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";
import { allComponents } from "./constants/constants.js";

import Stepper from "./components/Stepper.vue";

const store = useQuizStore();

const currentPage = ref(1);
const isValidateEmail = ref();

const currentComponent = computed(() => {
  return allComponents[currentPage.value];
});

const isDisabled = computed(() => {
  if (currentPage.value === 7) {
    return !isValidateEmail.value;
  } else if (currentPage.value < 6) {
    return (
      !store.questions[currentPage.value - 1].selectedAnswer ||
      store.questions[currentPage.value - 1].selectedAnswer.length === 0
    );
  }
});

const changeNextCurrentPage = () => {
  if (currentPage.value < 6) {
    if (
      store.questions[currentPage.value - 1].selectedAnswer &&
      store.questions[currentPage.value - 1].selectedAnswer.length > 0
    ) {
      currentPage.value++;
    }
  } else {
    currentPage.value++;
  }
};

const changeBackCurrentPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const updateEmail = () => {
  isValidateEmail.value = true;
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.component {
  font-family: $font-family;
  max-width: 400px;
  margin: 70px auto;
  padding: 20px;
  text-align: center;
  background-color: $color_3;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
