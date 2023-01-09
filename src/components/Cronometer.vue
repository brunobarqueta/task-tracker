<template>
    <section>
        <strong class="display">{{ timeElapsed }}</strong>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Cronometer",
    props: {
        timeInSeconds: {
            type: Number,
            default: 0,
        }
    },
    computed: {
        timeElapsed () : string {
            return new Date(this.timeInSeconds * 1000).toISOString().substr(11,8);
        }
    },
});
</script>

<style>
.display {
    color: var(--text-primary);
}
</style>
