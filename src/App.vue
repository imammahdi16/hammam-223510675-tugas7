<template>
  <main>
    <!--heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo" />
      <h1>Hammam Task</h1>
    </header>

    <!--New Task form-->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!--filter-->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Fav Tasks</button>
    </nav>

    <!--task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>Your Have {{ taskStore.totalCount }} tasks left to do</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>Your Have {{ taskStore.favCount }} favs left to do</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task" />
      </div>
    </div>
  </main>
</template>

<script>
import TaskDetails from './components/TaskDetails.vue'
import TaskForm from './components/TaskForm.vue'
import { ref, computed } from 'vue'
import { useTaskStore } from './stores/TaskStores'

export default {
  components: { TaskDetails, TaskForm },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref('all');

    const filteredTasks = computed(() => {
      if (filter.value === 'favs') {
        return taskStore.favs;
      }
      return taskStore.tasks;
    });

    return { taskStore, filter, filteredTasks };
  },
};
</script>
