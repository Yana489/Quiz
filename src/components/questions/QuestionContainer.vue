<template>
  <div>
    <h2 class="main-heading">{{ question.title }}</h2>
    <h4 class="sub-heading">{{ question.subtitle }}</h4>
    <div>
      <button
        v-for="answer in question.answers"
        :key="answer"
        class="answer-button"
        :class="{ selected: isSelectedAnswer(answer) }"
        @click="selectAnswer(answer)"
      >
        <div v-if="currentPage === 4">
          <div class="dislike-container">
            <input type="checkbox" :checked="isSelectedAnswer(answer)" />
          </div>
        </div>
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
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
      question.selectedAnswer = question.selectedAnswer.filter(
        (item) => item != answer
      );
    } else if (question.selectedAnswer.length < 3) {
      question.selectedAnswer.push(answer);
    }
  } else {
    question.selectedAnswer = answer;
  }

  // if (question.selectedAnswer) {
  //   if (isSelectedAnswer(answer)) {
  //     question.selectedAnswer = question.selectedAnswer.filter(
  //       (item) => item != answer
  //     );
  //   } else if(question.selectedAnswer.length < 3) {
  //     question.selectedAnswer.push(answer);
  //   }
  // } else {
  //   question.selectedAnswer = answer;
  // }
};

const isSelectedAnswer = (answer) => {
  if (question.selectedAnswer && question.selectedAnswer.length > 1) {
    return question.selectedAnswer.includes(answer);
  } else {
    return question.selectedAnswer === answer;
  }
};
</script>

<style scoped>
.answer-button {
  font-family: "Delius";
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  background-color: #6d32c6;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answer-button.selected {
  background-color: #2d1f5d;
}
.dislike-container {
  width: 92%;
  accent-color: #737aa8;
}
</style>
