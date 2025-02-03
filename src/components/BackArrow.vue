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
  background-color: #7a60ce;
  border-radius: 50px;
  padding: 3px 6px;
  cursor: pointer;
}

.back-arrow:active {
  background-color: #a995e9;
}
</style>
