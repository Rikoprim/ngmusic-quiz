<script setup lang="ts">
import { ref } from 'vue';
import vbutton from '@/components/base/VButton.vue'
import vinput from '@/components/base/VInput.vue'
import { useRouter } from 'vue-router';
import { usePlaylistStore } from '../stores/playlist'

const store = usePlaylistStore();
const router = useRouter()

const search = ref<string>('')

const handleSearch = async () => {
  await store.fetchPlaylist({ term: search.value, limit: 10 });
  router.push('/playlist')
}
</script>

<template>
  <div class="form-action">
    <vinput type="text" v-model="search" placeholder="Artist / Album / Title" />
    <vbutton v-on:click="handleSearch" :loading="store.isLoading">Search</vbutton>
  </div>
</template>

<style scoped>
.form-action {
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 26px;
  width: auto;
}
</style>