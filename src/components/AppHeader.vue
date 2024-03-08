<script setup lang="ts">
import mdiSearch from '@/components/icon/mdi-search.vue'
import mdiToggle from '@/components/icon/mdi-toggle.vue'

</script>

<template>
  <div class="main-header">
    <div class="header-content">
      <mdiToggle class="icon" />
      <img src="/ngmusic.svg" alt="ngmusic" width="72.2px" height="auto">
      <mdiSearch v-on:click="$emit('handleOpen', true)" class="icon" />
    </div>
  </div>
</template>

<style scoped>
.main-header {
  width: 100%;
  padding: 19px 15px;
  box-shadow: 0 0 6px 0 rgba(148, 77, 230, 0.75);
  background-image: linear-gradient(100deg, #712bda, #a45deb 100%);
  border-radius: 0 0 500% 500%/0 0 200% 200%;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icon {
  width: 25px;
  cursor: pointer;
}
</style>