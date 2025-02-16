<template>
  <div class="thanks-title">
    <h2>{{ $t("thanks.title") }}</h2>
    <h4>{{ $t("thanks.subtitle") }}</h4>
  </div>
  <img :src="Check" alt="Check" class="thanks-check" />
  <div class="thanks-download">
    <img :src="Download" alt="Download" class="thanks-icon-download" />
    <a href="" @click.prevent="downloadCSV">{{ $t("thanks.download") }}</a>
  </div>
  <CommonButton
    :buttonTitle="$t('thanks.retake')"
    @onClickButton="retakeQuiz"
  ></CommonButton>
</template>

<script setup>
import Check from "/src/assets/icons/check.svg";
import Download from "/src/assets/icons/download.svg";
import CommonButton from "@/components/CommonButton.vue";
import { useQuizStore } from "/src/useQuizStore.js";
import { useI18n } from "vue-i18n";
import { defineEmits, defineProps } from "vue";

const { t } = useI18n();

const emit = defineEmits(["retakeQuiz"]);

const store = useQuizStore();

const downloadCSV = () => {
  const responses = store.questions.map((question, index) => ({
    order: index + 1,
    title: t(question.title),
    type: question.type,
    answer: Array.isArray(question.selectedAnswer)
      ? question.selectedAnswer.join(", ")
      : question.selectedAnswer,
  }));

  const csvContent = convertToCSV(responses);
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "responses.csv");
  link.click();
  URL.revokeObjectURL(url);
};

const convertToCSV = (data) => {
  const headers = Object.keys(data[0]);
  const rows = data.map((obj) => headers.map((header) => obj[header]));
  const headerRow = headers.join(",");
  const csvRows = [headerRow, ...rows.map((row) => row.join(","))];
  return csvRows.join("\n");
};

const retakeQuiz = () => {
  store.questions.forEach((question) => {
    question.selectedAnswer = null;
  });
  emit("retakeQuiz");
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";
.thanks-title {
  color: $color_2;
  margin: 40px;
}

.thanks-check {
  margin-bottom: 60px;
}

.thanks-download {
  display: flex;
  color: $text-color;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
</style>
