<template>
    <form @submit.prevent="handleSubmit">
      <input 
        type="text" 
        placeholder="I need to..."
        v-model="newTask"
      >
      <button type="submit">Add</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useTaskStore } from '../stores/TaskStores';
  
  export default {
    setup() {
      const taskStore = useTaskStore();
      const newTask = ref('');
  
      const handleSubmit = () => {
        if (newTask.value.trim()) {
          taskStore.addTask({
            title: newTask.value,
            isFav: false,
            id: Math.floor(Math.random() * 10000)
          });
          newTask.value = ''; // Clear the input after adding the task
        }
      };
  
      return { newTask, handleSubmit };
    }
  }
  </script>
  