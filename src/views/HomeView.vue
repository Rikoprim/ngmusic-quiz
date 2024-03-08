<script setup lang="ts">
import search from '@/components/FormSearch.vue'
</script>

<template>
  <div class="landing-screen">
    <div class="logo">
      <img src="/logo.svg" alt="logo" width="72.2px" height="auto">
    </div>
    <search />
  </div>
</template>

<style scoped>
.landing-screen {
  background-image: linear-gradient(153deg, #712bda, #a45deb 100%);
  padding: 0px 30px 26px;
  position: relative;
  height: 100vh;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
