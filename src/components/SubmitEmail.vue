<template>
  <div>
    <h2>{{ $t("submitEmail.title") }}</h2>
    <h4>{{ $t("submitEmail.subtitle") }}</h4>
    <EmailInput
      :modelValue="email"
      @update:modelValue="updateNewValue"
    ></EmailInput>
    <p class="error-message">{{ error }}</p>
    <p class="email-agree" v-html="$t('submitEmail.agree')"></p>
  </div>
</template>

<script setup>
import { ref, defineEmits, computed } from "vue";
import { useI18n } from "vue-i18n";
import EmailInput from "@/components/EmailInput.vue";

const emits = defineEmits(["submitEmail"]);

const { t } = useI18n();

const email = ref("");
const error = ref("");

const clearEmail = () => {
  email.value = "";
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const showError = () => {
  if (email.value === "") {
    error.value = t("submitEmail.errorEmpty");
  } else if (!validateEmail(email.value)) {
    error.value = t("submitEmail.errorInvalid");
  } else {
    error.value = "";
    emits("submitEmail");
    console.log("11")
  }
};

const updateNewValue = (newValue) => {
  email.value = newValue;
  showError();
};

</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.error-message {
  color: red;
}

.email-agree {
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 50px;
}

.email-agree span {
  color: $color_1;
  cursor: pointer;
}
</style>
