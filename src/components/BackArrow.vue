<template>
  <img
    class="back-arrow"
    :src="BackArrow"
    alt="Back Arrow"
    @click="onBackArrow"
  />
</template>

<script setup>
import BackArrow from "../assets/icons/Back-Arrow.svg";
import { defineEmits } from "vue";
const emits = defineEmits(["onBackArrow"]);
const onBackArrow = () => {
  emits("onBackArrow");
};
</script>
<style scoped>
.back-arrow {
  display: flex;
  background-color: #a995e9;
  border-radius: 50px;
  padding: 3px 6px;
}

.back-arrow:active {
  background-color: #6d32c6;
}
</style>
