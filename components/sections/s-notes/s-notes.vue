<template>
  <section class="s-notes">
    <div class="s-notes__content">
      <m-card v-for="(item, index) of cards" :key="index" :content="item" />
      <m-card @click="addNote" />
    </div>
  </section>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';
const store = useTodoStore();

const props = defineProps({
  cards: { type: Object, default: () => ({}) },
})

const addNote = () => {
  try {
    const lastIndex = props.cards[props.cards.length - 1]?.id || 0;
    store.setOpenedCard(lastIndex + 1);
  } catch {
    
  }
  navigateTo('/editor');
}

</script>

<style>
@import './s-notes.scss';
</style>
