import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/projects',
        name: 'projects',
        component: Projects
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;