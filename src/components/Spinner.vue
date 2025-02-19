<template>
  <div class="spinner-container">
    <VueSpinner class="spinner"></VueSpinner>
    <p>{{ loader }}%</p>
    <p>{{ $t("spinner.message") }}</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { VueSpinner } from "vue3-spinners";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["changeNextPage"]);

const loader = ref(0);
let interval;

interval = setInterval(() => {
  if (loader.value < 100) {
    loader.value += 1;
  } else {
    clearInterval(interval);
    emit("changeNextPage");
  }
}, 50);
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.spinner-container {
  color: $color_2;
  font-family: $font-family;
  max-width: 400px;
  margin: 170px auto;
  text-align: center;

  .spinner {
    font-size: 100px;
    color: $color_1;
  }
}
</style>
