<script setup lang="ts">
import mdiClose from '@/components/icon/mdi-close.vue'
import vbutton from '@/components/base/VButton.vue'
import vinput from '@/components/base/VInput.vue'
import { usePlaylistStore } from '../stores/playlist'
import { ref } from 'vue';

const store = usePlaylistStore();
const search = ref<string>('')
const emit = defineEmits(['handleClose'])

const handleSearch = async () => {
  const res = await store.fetchPlaylist({ term: search.value, limit: 10 });
  if (res as any) {
    emit('handleClose', false)
  }
}
</script>

<template>
  <div class="main-screen">
    <div class="close">
      <mdiClose v-on:click="$emit('handleClose', false)" class="icon" />
    </div>
    <div class="form-action">
      <h4>Search</h4>
      <vinput type="text" v-model="search" placeholder="Artist / Album / Title" />
      <vbutton v-on:click="handleSearch" :loading="store.isLoading" :has-background-image="true" background-image="98deg, #712bda, #a45deb">Search</vbutton>
    </div>
  </div>
</template>

<style scoped>
.main-screen {
  height: 100%;
  background-color: rgba(28, 28, 45, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.close {
  display: flex;
  justify-content: end;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
}
.icon {
  width: 20px;
}
.form-action {
  position: absolute;
  text-align: center;
  top: 50%;
  right: 30px;
  left: 30px;
}
.form-action h4 {
  font-size: 20px;
  font-weight: bold;
  color: var(--color-text);
}
</style>../stores/playlist