<template>
  <div>
    <a-title title="Заметки" @click="clearAll"/>
    <s-notes :cards="notes" />
    <m-popup v-show="popupVisible" @close="closePopup" />
  </div>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';
const store = useTodoStore();

const notes = computed(() => store.notes);

const popupVisible = computed(() => {
  return !!JSON.parse(store.openedCard);
});

const closePopup = (value) => {
  if (value) {
    store.deleteNote(store.openedCard);
  }
  store.setOpenedCard(null);
}

const clearAll = () => {
  localStorage.clear();
}

</script>