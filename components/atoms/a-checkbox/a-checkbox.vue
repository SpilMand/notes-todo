<template>
  <div class="a-checkbox">
    <input
      type="checkbox"
      class="a-checkbox__box"
      v-model="isChecked"
      :id="content.id"
      @change="emit('change', { id: content.id, checked: JSON.stringify(isChecked) })"
    >
    <input
      class="a-checkbox__label"
      :value="content.label"
      @change="changeLabel($event.target.value)"
    >
    <div class="a-checkbox__cross" v-html="crossIcon" @click="emit('delete', content.id)" />
  </div>
</template>

<script setup>
const props = defineProps({
  content: { type: Object, default: () => ({}) },
});
const emit = defineEmits(['change', 'delete']);

const isChecked = ref(props.content.checked);

const changeLabel = (value) => {
  if (value) {
    emit('change', { id: props.content.id, label: value });
  } else {
    emit('delete', props.content.id)
  }
}

const crossIcon = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>`;
</script>

<style>
@import './a-checkbox.scss';
</style>
