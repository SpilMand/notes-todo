<template>
  <div class="m-popup">
    <div class="m-popup__content">
      <h2 class="m-popup__title">Вы уверены, что хотите удалить заметку?</h2>
      <div class="m-popup__actions">
        <a-button label="Да" color="red" @click="close(true)"/>
        <a-button label="Нет" @click="close(false)"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';
const store = useTodoStore();

const close = (value) => {
  if (value) {
    store.deleteNote(store.openedCard);
  }
  store.setOpenedCard(null);
}
</script>

<style>
@import './m-popup.scss';
</style>
