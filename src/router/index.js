import Vue from 'vue'
import VueRouter from 'vue-router'
import MainList from '@components/MainList.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home ',
        component: MainList
    },
    {
        path: '/content',
        name: 'content',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
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