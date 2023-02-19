<template>
    <Box>
        <div class="columns">
            <div class="column is-4">
                {{ task.description || 'Task without description' }}
            </div>
            <div class="column is-3">
                {{ task.project?.name || 'N/D'}}
            </div>
            <div class="column">
                <Cronometer :timeInSeconds="task.durationInSeconds" />
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Cronometer from './Cronometer.vue'
import Box from './Box.vue'
import ITask from '../interfaces/ITask'

export default defineComponent({
    name: 'Task',
    props: {
        task: {
            type: Object as PropType<ITask>,
            required: true
        }
    },
    components: {
        Cronometer,
        Box
    }
});
</script>

<style scoped>

</style>