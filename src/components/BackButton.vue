<template>
  <button class="back-button" @click="onBackButton">Back</button>
</template>

<script setup>
import { defineEmits } from "vue";
const emits = defineEmits(["onBackButton"]);
const onBackButton = () => {
  emits("onBackButton");
};
</script>
