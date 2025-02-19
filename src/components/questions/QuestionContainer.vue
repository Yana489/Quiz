<template>
  <div>
    <h2>{{ $t(question.title) }}</h2>
    <h4>{{ $t(question.subtitle) }}</h4>
    <div class="answer-container">
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
import { defineProps } from "vue";

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
    handleSingleSelect(answer);
    return;
  }

  handleMultiSelect(answer);
};

const handleSingleSelect = (answer) => {
  question.selectedAnswer = answer;

  if (props.currentPage === 1) {
    const languages = {
      English: "en",
      French: "fr",
      German: "de",
      Spanish: "es",
    };
    SetLocale(languages[answer]);
  }
};

const handleMultiSelect = (answer) => {
  if (isSelectedAnswer(answer)) {
    removeAnswer(answer);
    return;
  }

  const maxAnswers = props.currentPage === 4 ? Infinity : 3;
  if (question.selectedAnswer.length < maxAnswers) {
    question.selectedAnswer.push(answer);
  }
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

<style lang="scss" scoped>
@import "@/assets/style.scss";

.answer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

  .answer-button {
    font-family: $font-family;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 15px;
    font-size: $font-size;
    background-color: $color_1;
    color: $text-color;
    border: none;
    accent-color: #737aa8;
    border-radius: 20px;
    cursor: pointer;
    transition: $transition;

    &.selected {
      background-color: $color_2;
    }

    &.bubble {
      border-radius: $border-radius;
      width: 100px;
      height: 100px;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
