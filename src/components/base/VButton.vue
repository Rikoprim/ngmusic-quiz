<script setup lang="ts">
import { computed, toRefs } from 'vue'

const props = defineProps({
  hasBackgroundImage: {
    type: Boolean,
    default: false
  },
  bgColor: {
    type: String,
    default: 'rgba(255, 255, 255, 0.2)'
  },
  backgroundImage: {
    type: String,
    default: ''
  },
  textColor: {
    type: String,
    default: 'white'
  },
  loading: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md'
  },
  block: {
    type: String,
    default: '100%'
  }
})

const { bgColor, textColor, block, size, hasBackgroundImage, backgroundImage, loading } = toRefs(props)

const buttonStyle = computed(() => {
  return {
    backgroundColor: hasBackgroundImage.value ? 'transparent' : bgColor.value,
    backgroundImage: hasBackgroundImage.value
      ? `linear-gradient(${backgroundImage.value})`
      : 'none',
    padding: size.value === 'md' ? '13px 29px' : '10px 29px',
    color: textColor.value,
    width: block.value
  }
})
</script>

<template>
  <button :style="buttonStyle" class="btn" @click="$emit('click')">
    <div v-if="loading" class="loading">
      <svg viewBox="0 0 800 800" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <circle
          class="spin2"
          cx="400"
          cy="400"
          fill="none"
          r="330"
          stroke-width="90"
          stroke="#ffff"
          stroke-dasharray="697 1400"
          stroke-linecap="round"
        />
      </svg>
      Loading...
    </div>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.btn {
  width: 100%;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 13px 29px;
  border-radius: 20px;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.35);
}
.loading {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

/* Loading */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    stroke-dasharray: 1, 800;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -200px;
  }
  100% {
    stroke-dasharray: 800, 1;
    stroke-dashoffset: -800px;
  }
}

.spin2 {
  transform-origin: center;
  animation:
    spin2 2.3s ease-in-out infinite,
    spin 2s linear infinite;
  animation-direction: alternate;
}
</style>
