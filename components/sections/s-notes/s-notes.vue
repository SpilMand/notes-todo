<template>
  <section class="s-notes">
    <h1 class="s-notes__title">Заметки</h1>
    <div class="s-notes__content">
      <m-card v-for="(item, index) of cards" :key="index" :content="item" />
      <m-card @click="addNote" />
    </div>
  </section>
</template>

<script setup>
const cards = ref([
  {
    title: 'note 1',
    items: [
      'item 1',
      'item 2',
      'item 3'
    ]
  },
  {
    title: 'note 2',
    items: [
      'item 1'
    ]
  }
])

const addNote = () => {

}

</script>

<style>
@import './s-notes.scss';
</style>
