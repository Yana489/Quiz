<template>
  <div>
    <h2>{{ $t(question.title) }}</h2>
    <h4>{{ $t(question.subtitle) }}</h4>
    <div>
      <button
        v-for="(answer, index) in question.answers"
        :key="answer"
        class="answer-button"
        :class="{
          selected: isSelectedAnswer(answer),
          bubble: question.type === 'bubble',
        }"
        @click="selectAnswer(answer)"
      >
        <template v-if="question.type === 'multiple-select'">
          <input type="checkbox" :checked="isSelectedAnswer(answer)" />
        </template>
        <template v-if="question.type === 'bubble'">
          <img :src="currentIcon(index)" alt="Icon" />
        </template>
        {{ $t(answer) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useQuizStore } from "/src/useQuizStore.js";
import { allIcons } from "/src/constants/constants.js";
import { defineProps, computed, ref, reactive } from "vue";

const i18n = useI18n({ useScope: "global" });

function SetLocale(locale) {
  i18n.locale.value = locale;
}

const store = useQuizStore();
const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
});

const currentIcon = (index) => {
  return allIcons[index];
};

const question = store.questions[props.currentPage - 1];

const selectAnswer = (answer) => {
  const { currentPage } = props;
  const isMultiSelectPage = currentPage === 4 || currentPage === 5;

  if (!isMultiSelectPage) {
    question.selectedAnswer = answer;

    if (currentPage === 1) {
      const languages = {
        English: "en",
        French: "fr",
        German: "de",
        Spanish: "es",
      };
      SetLocale(languages[answer]);
    }
    return;
  }

  if (isSelectedAnswer(answer)) {
    removeAnswer(answer);
    console.log(question.selectedAnswer);
    return;
  }

  const maxAnswers = currentPage === 4 ? Infinity : 3;
  if (question.selectedAnswer.length < maxAnswers) {
    question.selectedAnswer.push(answer);
  }
  // if (props.currentPage === 4 || props.currentPage === 5) {
  //   if (isSelectedAnswer(answer)) {
  //     removeAnswer(answer);
  //   } else if (
  //     props.currentPage === 4 ||
  //     (props.currentPage === 5 && question.selectedAnswer.length < 3)
  //   ) {
  //     question.selectedAnswer.push(answer);
  //   }
  // } else {
  //   question.selectedAnswer = answer;
  // }
};

const removeAnswer = (answer) => {
  question.selectedAnswer = question.selectedAnswer.filter(
    (item) => item !== answer
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
  background-color: #7a60ce;
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

.answer-button.bubble {
  border-radius: 50px;
  width: 100px;
  height: 100px;
  font-size: 13px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}
</style>
