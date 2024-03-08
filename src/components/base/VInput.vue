<script setup lang="ts">
import { toRefs, defineEmits } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
})

const { type, placeholder, modelValue } = toRefs(props)

</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="input"
  >
</template>

<style scoped>
.input {
  margin: 15px 0px;
  padding: 13px 25px;
  border-radius: 20px;
  background-color: #fff;
  color: var(--c-blue-grey);
  border: none;
  width: 100%;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.43px;
}
.input::placeholder {
  text-align: center;
}
.input:focus {
  outline-color: var(--c-primary); /* Change the outline color to blue */
}
</style>