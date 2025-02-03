<template>
  <button class="next-button" @click="onNextButton">Next</button>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["onNextButton"]);
const onNextButton = () => {
  emits("onNextButton");
};
</script>

<style scoped>
.next-button {
  font-family: "Delius";
  width: 50%;
  margin-top: 20px;
  padding: 15px;
  font-size: 18px;
  background-color: #7a60ce;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

.next-button:hover {
  background-color: #2d1f5d;
}
</style>
