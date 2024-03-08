<template>
  <div class="card">
    <div class="card-content">
      <div class="card-title">
        <div class="card-images">
        </div>
        <div class="card-text">
          <div class="title">
            <p></p>
            <h3></h3>
          </div>
          <div class="badge">
          </div>
        </div>
      </div>
      <div class="price">
        <p></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-images {
  border-radius: 10px;
  background-color: #ddd;
  width: 100px;
  height: 100px;
  animation: pulse-bg 1s infinite;
}
.title p {
  width: 100px;
  height: 15px;
  border-radius: 10px;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
.title h3 {
  width: 200px;
  height: 20px;
  border-radius: 10px;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
.badge {
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
.price p {
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: #ddd;
  animation: pulse-bg 1s infinite;
}
@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>