<script setup lang="ts">
import pageplaylist from '@/components/PagePlaylist.vue'
import { computed } from 'vue'
import { usePlaylistStore } from '../stores/playlist'

const store = usePlaylistStore();

const getPlaylist = computed(() => {
  return store.getPlaylists;
});
</script>

<template>
  <pageplaylist :data-playlist="getPlaylist" />
</template>