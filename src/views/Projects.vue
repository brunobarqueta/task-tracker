<template>
    <section class="projects">
        <h1 class="title">Projects</h1>
        <form @submit.prevent="save">
            <div class="field">
                <label for="projectName" class="label">
                    Project Name
                </label>
                <input type="text" class="input" v-model="projectName" id="projectName" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Save
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IProject from '../interfaces/IProject'

export default defineComponent({
    name: 'Projects',
    data () {
        return {
            projectName: ''
        };
    },
    methods: {
        save () {
            const project: IProject = {
                name: this.projectName
            }
        }
    }
})
</script>