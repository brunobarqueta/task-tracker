<template>
    <div class="notifications">
        <article class="message" :class="context[notification.type]" v-for="notification in notifications" :key="notification.id">
            <div class="message-header">
                {{ notification.title }}
            </div>
            <div class="message-body">
                {{ notification.text }}
            </div>
        </article>
    </div>
</template>

<script lang="ts">

import { NotificationType } from '@/interfaces/INotification';
import { useStore } from '@/store';
import { defineComponent, computed } from 'vue';

export default defineComponent({
    name: 'Notification',
    data () {
        return {
            context: {
                [NotificationType.success] : 'is-success',
                [NotificationType.warning] : 'is-warning',
                [NotificationType.danger] : 'is-danger'
            }
        }
    },
    setup() {
        const store = useStore();
        return {
            notifications: computed(() => store.state.notifications)
        }
    }
})
</script>

<style scoped>
.notifications {
    margin-top: 5px;
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8x;
    z-index: 105;
}
</style>