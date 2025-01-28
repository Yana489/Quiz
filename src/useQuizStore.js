import { defineStore } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    questions: [
      {
        title: "What is your preferred language?",
        subtitle: "Choose language",
        answers: ["English", "French", "German", "Spanish"],
        selectedAnswer: null,
      },
      {
        title: "gender.title",
        subtitle: "gender.subtitle",
        answers: ["gender.female", "gender.male", "gender.other"],
        selectedAnswer: null,
      },
      {
        title: "age.title",
        subtitle: "age.subtitle",
        answers: ["age.fromEighteen", "age.fromThirty", "age.fromForty", "age.fromFifty"],
        selectedAnswer: null,
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
      },
    ],
  }),
});
