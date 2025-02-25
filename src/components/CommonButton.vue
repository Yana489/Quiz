<template>
  <button class="common-button" :disabled="disabled" @click="onClickButton">
    {{ buttonTitle }}
  </button>
</template>

<script setup>
const emits = defineEmits(["onClickButton"]);

const props = defineProps({
  disabled: {
    type: Boolean,
    required: true,
  },
  buttonTitle: {
    type: String,
    required: true,
  },
});

const onClickButton = () => {
  emits("onClickButton");
};
</script>

<style lang="scss" scoped>
@use "@/assets/style.scss" as *;

.common-button {
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
    background-color: $color_4;
  }
}
</style>
