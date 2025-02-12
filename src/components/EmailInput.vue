<template>
  <div class="email-input-container">
    <input
      type="email"
      :value="modelValue"
      @input="updateInput"
      placeholder="Your email"
      class="email-input"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["modelValue"]);

const emit = defineEmits(["update:modelValue"]);

const updateInput = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.email-input {
  font-family: $font-family;
  width: 93%;
  padding: 15px;
  font-size: 18px;
  background-color: $color_1;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  outline: none;

  &::placeholder {
    color: white;
  }

  &:focus {
    border: 2px solid $color_2;
  }
}
</style>
