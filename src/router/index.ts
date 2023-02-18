import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import Projects from '../views/Projects.vue'
import Form from '../views/Projects/Form.vue'
import List from '../views/Projects/List.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'tasks',
        component: Tasks
    },
    {
        path: '/projects',
        component: Projects,
        children: [
            {
                path: '',
                name: 'projects',
                component: List
            },
            {
                path: 'new',
                name: 'new project',
                component: Form
            },
            {
                path: ':id',
                name: 'edit project',
                component: Form,
                props: true
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router;