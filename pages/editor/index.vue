<template>
  <div class="editor">
    <a-title title="Редактор заметок" />
    <input class="editor__input editor__input-large" v-model="curNoteTitle" placeholder="Введите название заметки">
    <a-checkbox
      v-for="(item, index) of curNote?.items"
      :key="index"
      :content="item"
      @change="editItem"
      @delete="deleteItem"
    />
    <input class="editor__input editor__input-medium" placeholder="Добавить пункт" v-model="newItem" @change="addItem(newItem)" >
    <div class="editor__actions">
      <div class="editor__save editor__action" v-html="saveIcon" @click="edit" />
      <div class="editor__arrow-left editor__action" v-html="arrowIcon" @click="undoChange" />
      <div class="editor__arrow-right editor__action" v-html="arrowIcon" @click="undoChange" />
      <div class="editor__delete editor__action" v-html="deleteIcon" @click="popupVisible = true" />
    </div>
    <m-popup v-show="popupVisible" @close="closePopup" />
  </div>
</template>

<script setup>
import { useTodoStore } from '~/store/todoStore';
const store = useTodoStore();

const curNote = ref();

const curNoteTitle = ref();

const newItem = ref('');

const popupVisible = ref(false);

const addItem = (value) => {
  if (value) {
    curNote.value.items.push({
      id: curNote.value.items[curNote.value.items.length - 1]?.id + 1 || 1,
      label: value,
      checked: false,
    })
  }

  newItem.value = '';
}

const edit = () => {
  if (curNoteTitle.value) {
    store.editCard({
      title: curNoteTitle.value,
      items: curNote.value.items,
    })
    navigateTo('/')
  }
}

const closePopup = (value) => {
  if (value) {
    store.deleteNote(store.openedCard);
    navigateTo('/');
  }
  popupVisible.value = false;
}

const editItem = ({id, label, checked}) => {
  const curItem = curNote.value.items.find(element => element.id == id);
  if (label) {
    curItem.label = label;
  }
  if (checked) {
    curItem.checked = checked;
  }
}

const deleteItem = (id) => {
  curNote.value.items = curNote.value.items.filter(element => element.id != id);
}

const undoChange = () => {

}

onMounted(() => {
  if (store.notes?.find(element => element.id == store.openedCard)) {
    curNote.value = JSON.parse(JSON.stringify(store.notes.find(element => element.id == store.openedCard)));
    curNoteTitle.value = curNote.value.title;
  } else {
    curNote.value = {
      title: null,
      items: [],
    };
  }
  console.log(curNote.value);
  
})

onBeforeUnmount(() => {
  store.setOpenedCard(null);
})

const saveIcon = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1716 1C18.702 1 19.2107 1.21071 19.5858 1.58579L22.4142 4.41421C22.7893 4.78929 23 5.29799 23 5.82843V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H18.1716ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21L5 21L5 15C5 13.3431 6.34315 12 8 12L16 12C17.6569 12 19 13.3431 19 15V21H20C20.5523 21 21 20.5523 21 20V6.82843C21 6.29799 20.7893 5.78929 20.4142 5.41421L18.5858 3.58579C18.2107 3.21071 17.702 3 17.1716 3H17V5C17 6.65685 15.6569 8 14 8H10C8.34315 8 7 6.65685 7 5V3H4ZM17 21V15C17 14.4477 16.5523 14 16 14L8 14C7.44772 14 7 14.4477 7 15L7 21L17 21ZM9 3H15V5C15 5.55228 14.5523 6 14 6H10C9.44772 6 9 5.55228 9 5V3Z" fill="#0F0F0F"></path> </g></svg>`;

const arrowIcon = `<svg width="64px" height="64px" viewBox="-1.6 -1.6 19.20 19.20" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00016"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.096"></g><g id="SVGRepo_iconCarrier"> <path d="M5 1H4L0 5L4 9H5V6H11C12.6569 6 14 7.34315 14 9C14 10.6569 12.6569 12 11 12H4V14H11C13.7614 14 16 11.7614 16 9C16 6.23858 13.7614 4 11 4H5V1Z" fill="#000000"></path> </g></svg>`;

const deleteIcon = `<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
</script>

<style>
@import './editor.scss';
</style>
