<template>
    <header>
        <h1><img src="../assets/logo.png"></h1>
        <button class="button" @click="toggleMode">{{ buttonText }}</button>
    </header>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "SideBar",
    emits: ['whenToggleMode'],
    data () {
        return {
            darkModeActive: false
        }
    },
    computed: {
        buttonText() {
            return this.darkModeActive ? 'Light Mode' : 'Dark Mode';
        }
    },
    methods: {
        toggleMode() {
            this.darkModeActive = !this.darkModeActive
            this.$emit('whenToggleMode', this.darkModeActive)
        }
    }
})
</script>

<style scoped>
header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>
