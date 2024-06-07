import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play call of duty", isFav: true }
    ]    
  }),
  getters: {
    favs: (state) => state.tasks.filter(t => t.isFav),
    favCount: (state) => state.tasks.reduce((p, c) => c.isFav ? p + 1 : p, 0),
    totalCount: (state) => state.tasks.length
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    },
    toggleFav(id) {
      const index = this.tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        this.tasks[index].isFav = !this.tasks[index].isFav;
      }
    }
  }
});
