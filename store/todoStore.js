import { defineStore } from "pinia";

export const useTodoStore = defineStore('todo', {
  state: () => ({
    notes: [
      {
        id: 1,
        title: 'Тестовая заметка',
        items: [
          {
            id: 1,
            label: 'Первая задача',
            checked: false
          },
          {
            id: 2,
            label: 'Вторая задача',
            checked: false
          },
          {
            id: 3,
            label: 'Третья задача',
            checked: true
          },
        ]
      }
    ],
    openedCard: null,
  }),

  actions: {
    setOpenedCard(value) {
      this.openedCard = value;
    },
    deleteNote(id) {
      console.log(id);
    },
  }
})