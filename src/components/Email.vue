<template>
  <h2 class="email-title">E-mail</h2>
  <h4 class="email-subtitle">Enter your email to get full access</h4>
  <div class="email-wrapper">
    <p class="error-message">{{ error }}</p>
    <input
      type="email"
      v-model="email"
      placeholder="Your email"
      class="email-input"
    />
  </div>
  <p class="email-agree">
    By continuing I agree with <span> Privacy policy </span> and
    <span>Terms of use.</span>
  </p>
  <button class="next-button" @click="submit">Next</button>
</template>

<script setup>
import { ref } from "vue";

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
</script>

<style scoped>
.email-input {
  font-family: "Delius";
  width: 93%;
  padding: 15px;
  font-size: 18px;
  background-color: #7a60ce;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
.email-wrapper {
  margin: 50px 0;
}
::placeholder {
  color: white;
}

.error-message {
  color: red;
}

.email-agree {
  font-size: 13px;
  width: 300px;
  margin: 0 auto;
  padding-bottom: 50px;
}

span {
  color: #7a60ce;
  cursor: pointer;
}

.next-button {
  font-family: "Delius";
  width: 50%;
  margin-top: 20px;
  padding: 15px;
  font-size: 18px;
  background-color: #7a60ce;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

.next-button:hover {
  background-color: #2d1f5d;
}
</style>
