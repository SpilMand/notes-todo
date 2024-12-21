<template>
  <h1 class="a-title">{{ title }}</h1>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
})
</script>

<style>
@import './a-title.scss';
</style>
