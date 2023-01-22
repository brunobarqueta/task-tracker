import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'  
const routes: RouteRecordRaw[] = [{
    path: '/',
    name: 'tasks',
    component: Tasks
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;