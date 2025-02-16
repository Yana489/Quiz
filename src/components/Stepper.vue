<template>
  <div v-if="showBackArrow">
    <BackArrow @onBackArrow="emits('changeBackCurrentPage')"></BackArrow>
    {{ currentPage }}
    <div class="stepper-container">
      <div class="stepper" :style="{ width: loaderWidth }"></div>
    </div>
  </div>
  <slot></slot>
  <CommonButton v-if="currentPage !== 6 && currentPage !== 8"
    :buttonTitle="$t('submitEmail.button')"
    :disabled="disabled"
    @onClickButton="emits('changeNextCurrentPage')"
  ></CommonButton>
</template>

<script setup>
import BackArrow from "@/components/BackArrow.vue";
import CommonButton from "@/components/CommonButton.vue";

import { defineProps, defineEmits, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";
import { useI18n } from "vue-i18n";

const store = useQuizStore();
const { t } = useI18n();

const emits = defineEmits(["changeNextCurrentPage", "changeBackCurrentPage","changeNextPage", "submitEmail"]);

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
