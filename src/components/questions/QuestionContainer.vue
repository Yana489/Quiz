<template>
  <div>
    <h2 class="main-heading">{{ question.title }}</h2>
    <h4 class="sub-heading">{{ question.subtitle }}</h4>
    <div>
      <button
        v-for="(answer, index) in question.answers"
        :key="answer"
        class="answer-button"
        :class="{ selected: isSelectedAnswer(answer) }"
        @click="selectAnswer(answer)"
      >
          <div v-if="currentPage === 4">
            <input type="checkbox" :checked="isSelectedAnswer(answer)" />
          </div>
          <div v-else-if="currentPage === 5 && index === 0">
            <img :src="Werewolf" alt="Werewolf" />
          </div>
          <div v-else-if="currentPage === 5 && index === 1">
            <img :src="Action" alt="Action" />
          </div>
          <div v-else-if="currentPage === 5 && index === 2">
            <img :src="Romance" alt="Romance" />
          </div>
          <div v-else-if="currentPage === 5 && index === 3">
            <img :src="Adult" alt="Young Adult" />
          </div>
          <div v-else-if="currentPage === 5 && index === 4">
            <img :src="BadBoy" alt="Bad Boy" />
          </div>
          <div v-else-if="currentPage === 5 && index === 5">
            <img :src="Royal" alt="Royal Obsession" />
          </div>
          <div v-else-if="currentPage === 5 && index === 6">
            <img :src="Billionaire" alt="Billionaire" />
          </div>
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
import Werewolf from "/src/assets/icons/Werewolf.svg";
import Action from "/src/assets/icons/Action.svg";
import Romance from "/src/assets/icons/Romance.svg";
import Adult from "/src/assets/icons/Adult.svg";
import BadBoy from "/src/assets/icons/BadBoy.svg";
import Royal from "/src/assets/icons/Royal.svg";
import Billionaire from "/src/assets/icons/Billionaire.svg";

import { defineProps, computed } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";

const store = useQuizStore();

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

const question = store.questions[props.currentPage - 1];

const selectAnswer = (answer) => {
  if (props.currentPage === 4 || props.currentPage === 5) {
    if (isSelectedAnswer(answer)) {
      removeAnswer(answer);
    } else if (
      props.currentPage === 4 ||
      (props.currentPage === 5 && question.selectedAnswer.length < 3)
    ) {
      question.selectedAnswer.push(answer);
    }
  } else {
    question.selectedAnswer = answer;
  }
};

const removeAnswer = (answer) => {
  question.selectedAnswer = question.selectedAnswer.filter(
    (item) => item != answer
  );
};

const isSelectedAnswer = (answer) => {
  if (question.selectedAnswer && question.selectedAnswer.length > 0) {
    return question.selectedAnswer.includes(answer);
  } else {
    return question.selectedAnswer === answer;
  }
};
</script>

<style scoped>
.answer-button {
  font-family: "Delius";
  display: flex;
  justify-content: center;
  gap: 5px;
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  background-color: #6d32c6;
  color: white;
  border: none;
  accent-color: #737aa8;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answer-button.selected {
  background-color: #2d1f5d;
}
</style>
