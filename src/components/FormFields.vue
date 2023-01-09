<template>
    <div class="box form">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Form for task creation">
                <input type="text" class="input" placeholder="Which task you'd like to create" v-model="description"/>
            </div>
            <div class="column">
                <Timer @timerFinished="finishTask"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Timer from './Timer.vue';

export default defineComponent({
    name: 'FormFields',
    emits: ['whenTaskSave'],
    components: {
        Timer
    },
    data () {
        return {
            description: ''
        };
    },
    methods: {
        finishTask(timeElapsed : number) : void {
            this.$emit('whenTaskSave', {
                durationInSeconds: timeElapsed,
                description: this.description
            });
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