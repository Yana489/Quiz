<template>
  <div class="thanks-title">
    <h2>Thank you</h2>
    <h4>for supporting us and passing quiz</h4>
  </div>
  <img :src="Check" alt="Check" class="thanks-check" />
  <div class="thanks-download">
    <img :src="Download" alt="Download" class="thanks-icon-download" />
    <p href="">Download my answers</p>
  </div>
  <button class="thanks-button">Retake quiz</button>
</template>

<script setup>
import Check from "/src/assets/icons/Check.svg";
import Download from "/src/assets/icons/Download.svg";
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

.thanks-button {
  font-family: $font-family;
  width: 50%;
  margin-top: 20px;
  padding: 15px;
  font-size: $font-size;
  background-color: $color_1;
  color: $text-color;
  border: none;
  border-radius: $border-radius;
  cursor: pointer;
  transition: $transition;

  &:hover {
    background-color: $color_2;
  }
}
</style>
