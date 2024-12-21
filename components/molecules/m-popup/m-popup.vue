<template>
  <div class="m-popup">
    <div class="m-popup__content">
      <h2 class="m-popup__title">Вы уверены, что хотите удалить заметку?</h2>
      <div class="m-popup__actions">
        <a-button label="Да" color="red" @click="emit('close', true)"/>
        <a-button label="Нет" @click="emit('close', false)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['close']);
</script>

<style>
@import './m-popup.scss';
</style>
