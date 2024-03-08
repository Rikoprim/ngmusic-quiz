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

<style scoped>
.card {
  padding: 12px 10px;
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  margin: 20px 0px;
}
.card-title {
  display: flex;
}
.card-content {
  display: flex;
  justify-content: space-between;
  align-items: end;
}
.card-text {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}
.card-img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
}
.card-images {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.play {
  position: absolute;
}
.badge {
  margin-left: 12px;
  height: 20px;
  max-width: 100%;
  display: inline-flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  font-size: 10px;
  font-weight: 500;
  color: white;
  padding: 3px 10px;
  border-radius: 10px;
  letter-spacing: 0.36px;
  background-color: var(--c-green);
  text-transform: capitalize;
}
.badge .badge-content {
  align-items: center;
  display: inline-flex;
  height: 100%;
  max-width: 100%;
}
.title {
  margin-left: 12px;
  text-align: left;
}
.title p {
  font-size: 10px;
  font-weight: 500;
  color: var(--text-dark);
  margin-bottom: 5px;
  letter-spacing: 0.36px;
}
.title h3 {
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: var(--text-dark);
  max-width: 125px;
}
.price {
  display: flex;
  gap: 6px;
  align-items: center;
}
.price p {
  font-size: 12px;
  font-weight: bold;
  color: #f5b014;
  letter-spacing: 0.43px;
}
</style>