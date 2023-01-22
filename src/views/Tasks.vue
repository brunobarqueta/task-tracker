<template>
        <FormFields @whenTaskSave="saveTask"/>
        <div class="list">
          <Task v-for="(task, index) in tasks" :key="index" :task="task"/>
          <Box v-if="listIsEmpty">
            You are not so productive today :(
          </Box>
        </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FormFields from '../components/FormFields.vue'
  import Task from '../components/Task.vue'
  import Box from '../components/Box.vue'
  import ITask from '../interfaces/ITask'
  
  export default defineComponent({
    name: 'App',
    components: {
      FormFields,
      Task,
      Box
    },
    methods: {
      saveTask (task: ITask) {
        this.tasks.push(task);
      }
    },
    data () {
      return {
        tasks: [] as ITask[]
      }
    },
    computed: {
      listIsEmpty () : boolean {
        return this.tasks.length === 0;
      }
    },
  });
  </script>
  