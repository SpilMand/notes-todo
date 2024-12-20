<template>
  <button class="a-button" :class="`a-button-${color}`" @click="emit('action')">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: { type: String, default: '' },
  color: { type: String, default: 'gray' },
})
const emit = defineEmits(['action']);
</script>

<style>
@import './a-button.scss';
</style>