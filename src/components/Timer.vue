<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometer :timeInSeconds="timeInSeconds" />
        <button class="button" @click="start" :disabled="cronometerIsRunning">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="stop" :disabled="!cronometerIsRunning">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import Cronometer from './Cronometer.vue';

export default defineComponent({
    name: 'FormFields',
    emits: ['timerFinished'],
    components: {
        Cronometer
    },
    data () {
        return {
            timeInSeconds: 0,
            cronometer: 0,
            cronometerIsRunning: false
        }
    },
    methods: {
        start() {
            this.cronometerIsRunning = true;
            this.cronometer = setInterval(() => {
                this.timeInSeconds += 1;
            }, 1000);
        },
        stop() {
            this.cronometerIsRunning = false;
            clearInterval(this.cronometer);
            this.$emit('timerFinished', this.timeInSeconds);
            this.timeInSeconds = 0;
        }
    }
});
</script>
