<template>
  <BackButton @onBackButton="emits('changeBackCurrentPage')"></BackButton>
  <div>{{ currentPage }}</div>
  <slot></slot>
  <NextButton @onNextButton="emits('changeNextCurrentPage')"></NextButton>
</template>

<script setup>
import BackButton from "@/components/BackButton.vue";
import NextButton from "@/components/NextButton.vue";

import { defineProps, defineEmits } from "vue";

const emits = defineEmits(["changeNextCurrentPage", "changeBackCurrentPage"]);

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});
</script>
