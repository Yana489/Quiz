<template>
  <button class="next-button" :disabled="disabled" @click="onNextButton">
    Next
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["onNextButton"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
  },
});

const onNextButton = () => {
    emits("onNextButton");
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.next-button {
  font-family: $font-family;
  width: 50%;
  margin-top: 20px;
  padding: 15px;
  font-size: $font-size;
  background-color: $color_1;
  color: $text-color;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: $transition;

  &:hover {
    background-color: $color_2;
  }
  &:disabled {
    background-color: $color_1;
  }
}
</style>
