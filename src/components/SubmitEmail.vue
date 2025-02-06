<template>
  <div class="email-container">
    <h2 class="email-title">E-mail</h2>
    <h4 class="email-subtitle">Enter your email to get full access</h4>
    <EmailInput
      :modelValue="email"
      @update:modalValue="updateNewValue"
    ></EmailInput>
    <p class="error-message">{{ error }}</p>
    <p class="email-agree">
      By continuing I agree with <span> Privacy policy </span> and
      <span>Terms of use.</span>
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import EmailInput from "@/components/EmailInput.vue";

const email = ref("");
const error = ref("");

const clearEmail = () => {
  email.value = "";
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const submit = () => {
  error.value = "";
  if (email.value === "") {
    error.value = "You need to provide an email.";
  } else if (!validateEmail(email.value)) {
    error.value = "Please enter a valid email address.";
  } else {
    clearEmail();
  }
};

const updateNewValue = (newValue) => {
  email.value = newValue;
  if (newValue && validateEmail(newValue)) {
    submit();
  }
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

  &span {
    color: $color_1;
    cursor: pointer;
  }
}
</style>
