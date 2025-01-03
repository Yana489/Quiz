<template>
  <div class="component">
    <BackButton @onBackButton="changeBackCurrentPage"></BackButton>
    <div>{{ currentPage }}</div>
    <component :is="currentComponent"></component>
    <NextButton @onNextButton="changeNextCurrentPage"></NextButton>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import Languages from "./components/Languages.vue";
import Gender from "./components/Gender.vue";
import Age from "./components/Age.vue";
import Dislikes from "./components/Dislikes.vue";
import Topics from "./components/Topics.vue";
import NextButton from "./components/NextButton.vue";
import BackButton from "./components/BackButton.vue";

const currentPage = ref(1);
const allComponents = reactive({
  1: Languages,
  2: Gender,
  3: Age,
  4: Dislikes,
  5: Topics,
});

const currentComponent = computed(() => {
  return allComponents[currentPage.value];
});

// const currentProps = computed(() => {
//   if (selectedAge.value) {
//     return { dislikesList };
//   } else if (selectedGender.value) {
//     return { ageList, getSelectedAge };
//   } else if (selectedLanguage.value) {
//     return { genderList, getSelectedGender };
//   } else {
//     return { languages, getSelectedLanguage };
//   }
// });

const changeNextCurrentPage = () => {
  currentPage.value++;
};
const changeBackCurrentPage = () => {
  if (currentPage.value == 1) {
    return;
  } else {
    currentPage.value--;
  }
};
// const getSelectedLanguage = (language) => {
//   selectedLanguage.value = language;
// };

// const getSelectedGender = (gender) => {
//   selectedGender.value = gender;
// };

// const getSelectedAge = (age) => {
//   selectedAge.value = age;
// };
</script>

<style scoped>
.component {
  max-width: 400px;
  margin: 70px auto;
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
