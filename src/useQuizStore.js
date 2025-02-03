import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [
      {
        title: "What is your preferred language?",
        subtitle: "Choose language",
        answers: ["English", "French", "German", "Spanish"],
        selectedAnswer: null,
        type: "single-select",
      },
      {
        title: "gender.title",
        subtitle: "gender.subtitle",
        answers: ["gender.female", "gender.male", "gender.other"],
        selectedAnswer: null,
        type: "single-select",
      },
      {
        title: "age.title",
        subtitle: "age.subtitle",
        answers: ["age.fromEighteen", "age.fromThirty", "age.fromForty", "age.fromFifty"],
        selectedAnswer: null,
        type: "single-select",
      },
      {
        title: "dislikes.title",
        subtitle: "dislikes.subtitle",
        answers: [
          "dislikes.logic",
          "dislikes.speed",
          "dislikes.humor",
          "dislikes.ending",
        ],
        selectedAnswer: [],
        type: "multiple-select",
      },
      {
        title: "topics.title",
        subtitle: "topics.subtitle",
        answers: [
          "topics.werewolf",
          "topics.action",
          "topics.romance",
          "topics.youngAdult",
          "topics.badBoy",
          "topics.royal",
          "topics.billionaire",
        ],
        selectedAnswer: [],
        type: "bubble",
      },
    ],
  }),
});
