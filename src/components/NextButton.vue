<template>
  <button class="next-button" :disabled="isDisabled" @click="onNextButton">
    Next
  </button>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";

const emits = defineEmits(["onNextButton"]);

const props = defineProps({
  isDisabled: {
    type: Boolean,
    required: true,
  },
});

const onNextButton = () => {
  if (!props.isDisabled) {
    emits("onNextButton");
  }
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

  &:disabled {
    background-color: $color_1;
    cursor: none;
  }
  &:hover {
    background-color: $color_2;
  }
}
</style>
