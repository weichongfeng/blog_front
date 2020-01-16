import Vue from 'vue'
import VueRouter from 'vue-router'
import MainList from '@components/MainList.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: MainList
    },
    {
        path: '/blog/:id',
        name: 'blog',
        component: () =>
            import ('@components/MainContent.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router