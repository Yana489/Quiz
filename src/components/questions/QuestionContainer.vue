<template>
  <div>
    <h2 class="main-heading">{{ $t(question.title) }}</h2>
    <h4 class="sub-heading">{{ $t(question.subtitle) }}</h4>
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
        <div v-if="currentPage === 5">
          <component :is="currentIcon(index)" />
        </div>
        {{ $t(answer) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import Werewolf from "@/components/icons-images/Werewolf.vue";
import Action from "@/components/icons-images/Action.vue";
import Romance from "@/components/icons-images/Romance.vue";
import Adult from "@/components/icons-images/Adult.vue";
import BadBoy from "@/components/icons-images/BadBoy.vue";
import Royal from "@/components/icons-images/Royal.vue";
import Billionaire from "@/components/icons-images/Billionaire.vue";

import { useI18n } from "vue-i18n";
import { defineProps, computed, ref, reactive } from "vue";
import { useQuizStore } from "/src/useQuizStore.js";

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

const allIcons = reactive({
  0: Werewolf,
  1: Action,
  2: Romance,
  3: Adult,
  4: BadBoy,
  5: Royal,
  6: Billionaire,
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
        "English": "en",
        "French": "fr",
        "German": "de",
        "Spanish": "es"
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
