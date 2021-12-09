import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
import ThirdPage from '../views/ThirdPage.vue'


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
        path: '/SecondPage',
        name: 'SecondPage',
        component: SecondPage
    },
    {
        path: '/SecondPage/:id',
        name: 'SecondPage',
        component: SecondPage
    },
    {
        path: '/ThirdPage',
        name: 'ThirdPage',
        component: ThirdPage
    },
]

const router = new VueRouter({
    routes
})

export default router
