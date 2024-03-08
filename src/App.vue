<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="container">
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
.container {
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}
</style>
