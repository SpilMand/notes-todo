<template>
  <div>
    <s-notes :cards="notes" />
    <m-popup v-show="popupVisible" />
  </div>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';
const store = useTodoStore();

const notes = ref(store.notes);

const popupVisible = computed(() => {
  return !!store.openedCard;
});

</script>