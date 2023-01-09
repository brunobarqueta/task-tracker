<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': darkModeActive }">
    <div class="column is-one-quarter">
      <SideBar @whenToggleMode="toggleMode"/>
    </div>
    <div class="column is-three-quarter content">
      <FormFields @whenTaskSave="saveTask"/>
      <div class="list">
        <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
        <Box v-if="listIsEmpty">
          You are not so productive today :(
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from './components/SideBar.vue'
import FormFields from './components/FormFields.vue'
import Task from './components/Task.vue'
import Box from './components/Box.vue'
import ITask from './interfaces/ITask'

export default defineComponent({
  name: 'App',
  components: {
    SideBar,
    FormFields,
    Task,
    Box
  },
  methods: {
    saveTask (task: ITask) {
      this.tasks.push(task);
    },
    toggleMode (darkModeActive: boolean) {
      this.darkModeActive = darkModeActive;
    }
  },
  data () {
    return {
      tasks: [] as ITask[],
      darkModeActive: false
    }
  },
  computed: {
    listIsEmpty () : boolean {
      return this.tasks.length === 0;
    }
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}

main {
  --bg-primary: #fff;
  --text-primary: #000;
}

main.dark-mode {
  --bg-primary: #2b2d42;
  --text-primary: #ddd;
}

.content {
  background-color: var(--bg-primary);
}
</style>
