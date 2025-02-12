<template>
  <div v-if="showBackArrow">
    <BackArrow @onBackArrow="emits('changeBackCurrentPage')"></BackArrow>
  </div>
  <template v-if="showStepper"
    >{{ currentPage }}/5
    <div class="stepper-container">
      <div class="stepper" :style="{ width: loaderWidth }"></div>
    </div>
    <slot></slot
  ></template>
  <Spinner
    v-if="currentPage === 6"
    @changeNextPage="emits('changeNextCurrentPage')"
  ></Spinner>
  <SubmitEmail
    v-if="currentPage === 7"
    @submitEmail="emits('submitEmail')"
  ></SubmitEmail>
  <!-- <Thanks v-if="currentPage === 8"></Thanks> -->
  <NextButton
    :disabled="disabled"
    v-if="currentPage !== 6 && currentPage !== 8"
    @onNextButton="emits('changeNextCurrentPage')"
  ></NextButton>
</template>

<script setup>
import BackArrow from "@/components/BackArrow.vue";
import NextButton from "@/components/NextButton.vue";
import SubmitEmail from "@/components/SubmitEmail.vue";
import Spinner from "@/components/Spinner.vue";
// import Thanks from "@/components/Thanks.vue"

import { defineProps, defineEmits, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();

const emits = defineEmits(["changeNextCurrentPage", "changeBackCurrentPage","submitEmail"]);

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
});

const showBackArrow = computed(() => {
  return props.currentPage > 1 && props.currentPage < 6;
});

const showStepper = computed(() => {
  return props.currentPage < 6;
});

const loaderWidth = computed(() => {
  const totalQuestions = store.questions.length;
  const completedQuestions = props.currentPage;
  return (completedQuestions / totalQuestions) * 100 + "%";
});
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.stepper-container {
  width: 70%;
  margin: 0 auto;
  background-color: $color_1;
  border-radius: $border-radius;
  overflow: hidden;

  .stepper {
    height: 10px;
    background-color: $color_4;
    transition: 0.5s ease;
  }
}
</style>
