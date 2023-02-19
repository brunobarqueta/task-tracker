<template>
    <section>
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
import { useStore } from '@/store';
import { ADD_PROJECT, EDIT_PROJECT } from '@/store/mutation-types';
import { NotificationType } from '@/interfaces/INotification';
import useNotificator from '@/hooks/notificator'

export default defineComponent({
    name: 'Form',
    props: {
        id: {
            type: String
        }
    },
    mounted() {
        if (this.id) {
            const project = this.store.state.projects.find(project => project.id == this.id);
            this.projectName = project?.name || '';
        }
    },
    data() {
        return {
            projectName: '',
        };
    },
    methods: {
        save() {
            if (this.id) {
                this.store.commit(EDIT_PROJECT, {
                    id: this.id,
                    name: this.projectName
                });
                this.$router.push('/projects');
            } else {
                this.store.commit(ADD_PROJECT, this.projectName);
                this.projectName = '';
                this.notificate(NotificationType.success, 'New project added', 'Your project is already available.')
                this.$router.push('/projects');
            }
        },
    },
    setup() {
        const store = useStore();
        const { notificate } = useNotificator();
        return {
            store,
            notificate
        }
    }
})
</script>