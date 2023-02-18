<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Form for task creation">
                <input type="text" class="input" placeholder="Which task you'd like to create" v-model="description" />
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProject">
                        <option value="">Selecione o projeto</option>
                        <option :value="project.id" v-for="project in projects" :key="project.id">
                            {{ project.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Timer @timerFinished="finishTask" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent, computed } from 'vue';
import Timer from './Timer.vue';
import { useStore } from 'vuex';
import { key } from '@/store'

export default defineComponent({
    name: 'FormFields',
    emits: ['whenTaskSave'],
    components: {
        Timer
    },
    data() {
        return {
            description: '',
            idProject: ''
        };
    },
    methods: {
        finishTask(timeElapsed: number): void {
            this.$emit('whenTaskSave', {
                durationInSeconds: timeElapsed,
                description: this.description,
                project: this.projects.find(project => project.id == this.idProject)
            });
        }
    },
    setup() {
        const store = useStore(key);
        return {
            projects: computed(() => store.state.projects)
        }
    }
});
</script>

<style>
.form {
    color: var(--text-primary);
    background-color: var(--bg-primary);
}
</style>