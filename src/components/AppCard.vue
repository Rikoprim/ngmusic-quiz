<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
  artist: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  genre: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: 0
  },
  images: {
    type: String,
    default: ''
  },
})

const { artist, title, genre, price } = toRefs(props)

</script>

<template>
  <div class="card">
    <div class="card-content">
      <div class="card-title">
        <div class="card-images">
          <img class="play" src="/play.svg" alt="play" width="32px" height="32px">
          <img class="card-img" :src="images" alt="image">
        </div>
        <div class="card-text">
          <div class="title">
            <p>{{ artist || '-' }}</p>
            <h3>{{ title || '-' }}</h3>
          </div>
          <div class="badge">
            <div class="badge-content">{{ genre }}</div>
          </div>
        </div>
      </div>
      <div class="price">
        <img src="/dollar.svg" alt="dollar" width="16px" height="16px">
        <p>{{ price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>