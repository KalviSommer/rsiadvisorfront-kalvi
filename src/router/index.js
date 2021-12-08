import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/FirstPage',
        name: 'FirstPage',
        component: FirstPage
    },
    {
        path: '/2page',
        name: '2page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/2page.vue')
        }
    },
    {
        path: '/3page',
        name: '3page',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () {
            return import(/* webpackChunkName: "about" */ '../views/3page.vue')
        }
    }
]

const router = new VueRouter({
    routes
})

export default router
