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
        title: "What gender do you identify with?",
        subtitle: "Please share how you identify yourself",
        answers: ["Female", "Male", "Other"],
        selectedAnswer: null,
      },
      {
        title: "What is your age?",
        answers: ["18-29 years", "30-39 years", "40-49 years", "50+"],
        selectedAnswer: null,
      },
      {
        title: "What do you hate the most in a book?",
        answers: [
          "Lack of logic",
          "A slow speed",
          "Lack of humor",
          "Way too generic ending",
        ],
        selectedAnswer: [],
      },
      {
        title: "What are your favorite topics?",
        subtitle: "Choose up to 3 topics you like",
        answers: [
          "Werewolf",
          "Action",
          "Romance",
          "Young Adult",
          "Bad Boy",
          "Royal Obsession",
          "Billionaire",
        ],
        selectedAnswer: [],
      },
    ],
  }),
});
