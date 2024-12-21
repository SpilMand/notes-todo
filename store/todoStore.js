import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    openedCard: localStorage.getItem('openedCard'),
  }),

  actions: {
    setOpenedCard(value) {
      this.openedCard = value;
      localStorage.setItem('openedCard', value);
    },
    editCard(content) {
      const curNote = this.notes?.find(element => element.id == this.openedCard);
      if (curNote) {
        curNote.title = content.title;
        curNote.items = content.items;
      } else {
        this.notes.push({
          id: this.openedCard,
          title: content.title,
          items: content.items,
        })
      }
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
    deleteNote(id) {
      this.notes = this.notes.filter(element => element.id != id);
      localStorage.setItem('notes', JSON.stringify(this.notes));
    },
  }
})