<template>
  <div class="m-card" :class="content.title ? '' : 'm-card-add'">
    <div v-if="content.title" class="m-card__content">
      <h2 class="m-card__title">
        {{ content.title }}
      </h2>
      <ul class="m-card__list">
        <li
          v-for="(item, index) of content.items"
          :key="index"
          class="m-card__item"
          :class="item.checked ? 'm-card__item-checked' : ''"
        >
          {{ item.label }}
          <img v-if="JSON.parse(item.checked)" src="/public/icons/check.svg" width="26">
        </li>
      </ul>
      <div class="m-card__actions">
        <div class="m-card__edit m-card__action" v-html="editIcon" @click="editCard" />
        <div class="m-card__delete m-card__action" v-html="deleteIcon" @click="deleteCard" />
      </div>
    </div>
    <div v-else class="m-card__add" v-html="plusIcon" />
  </div>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';

const props = defineProps({
  content: { type: Object, default: () => ({}) }
})

const store = useTodoStore();

const editCard = () => {
  store.setOpenedCard(props.content.id);
  navigateTo('/editor');
}

const deleteCard = () => {
  store.setOpenedCard(props.content.id);
}

const plusIcon = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 1H6V6L1 6V10H6V15H10V10H15V6L10 6V1Z" fill="#000000"></path> </g></svg>`;
const editIcon = `<svg width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>`;
const deleteIcon = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
</script>

<style>
@import './m-card.scss';
</style>
