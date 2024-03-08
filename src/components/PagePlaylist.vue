<script setup lang="ts">
import appheader from '@/components/AppHeader.vue'
import vbutton from '@/components/base/VButton.vue'
import appcard from '@/components/AppCard.vue'
import screensearch from '@/components/ScreenSearch.vue'
import { ref, type PropType, toRefs } from 'vue'
import type { PlaylistResponse } from '../types/playlist'
import { usePlaylistStore } from '../stores/playlist'

const store = usePlaylistStore()

const props = defineProps({
  dataPlaylist: {
    type: Array as PropType<PlaylistResponse['results']>,
    default: () => []
  }
})

const { dataPlaylist } = toRefs(props)
const popupSearch = ref<boolean>(false)

const handleOpenSearch = (value: boolean) => {
  popupSearch.value = value
}
const handleCloseSearch = (value: boolean) => {
  popupSearch.value = value
}
const handleLoadMore = async () => {
  const currentLimit = store.limit
  await store.fetchPlaylist({ term: store.getSearch, limit: currentLimit + 10 })
}
</script>

<template>
  <screensearch @handleClose="handleCloseSearch" v-if="popupSearch" />
  <appheader @handleOpen="handleOpenSearch" />
  <div class="main-content">
    <div v-if="dataPlaylist.length === 0" class="no-data">
      <p>No results for playlist. Please try again.</p>
    </div>
    <div v-else class="card-list">
      <h3>
        Search result for : <span>{{ store.getSearch }}</span>
      </h3>

      <div v-for="item in dataPlaylist" :key="item.trackId">
        <appcard
          :artist="item.artistName"
          :title="item.trackCensoredName"
          :genre="item.primaryGenreName"
          :price="item.trackPrice"
          :images="item.artworkUrl60"
        />
      </div>
      <div class="btn-load">
        <vbutton
          size="sm"
          block="auto"
          @click="handleLoadMore"
          bg-color="#e2e8f0"
          text-color="#64748b"
          >Load More</vbutton
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content {
  padding: 0px 15px 0px;
  margin-top: 42px;
  text-align: center;
}
.card-list h3 {
  font-size: 14px;
  font-weight: normal;
  color: #334155;
  margin-bottom: 28px;
  letter-spacing: 0.5px;
}
h3 span {
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.64px;
  color: var(--text-primary);
}
.no-data {
  text-align: center;
  margin-top: 60px;
}
.no-data p {
  font-size: 14px;
  font-weight: bold;
  color: #334155;
}
.card-list {
  height: 90vh;
  overflow-y: auto;
  padding-bottom: 50px;
}
.btn-load {
  margin-top: 20px;
}
</style>
../stores/playlist