<template>
  <img
    class="back-arrow"
    :src="BackArrow"
    alt="Back Arrow"
    @click="onBackArrow"
  />
</template>

<script setup>
import BackArrow from "../assets/icons/backArrow.svg";

const emits = defineEmits(["onBackArrow"]);

const onBackArrow = () => {
  emits("onBackArrow");
};
</script>

<style lang="scss" scoped>
@use "@/assets/style.scss" as *;

.back-arrow {
  display: flex;
  background-color: $color_1;
  border-radius: $border-radius;
  padding: 3px 6px;
  cursor: pointer;

  &:active {
    background-color: $color_4;
  }
}
</style>
