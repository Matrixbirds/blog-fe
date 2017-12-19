import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Main from '@/layouts/main'
import Dashboard from '@/views/dashboard'
import Panel from '@/views/dashboard/panel'

Vue.use(Router)

const routes = [
    {
        path: '/',
        meta: {title: '主页'},
        name: 'main',
        component: Main,
        children: [
            {
                path: 'login',
                name: 'login',
                meta: {title: '登录页'},
                component: Login
            }
        ]
    },
    {
        path: '/dashboard',
        meta: {title: '后台'},
        name: 'dashboard',
        component: Dashboard,
        children: [
            {
                path: 'index',
                name: 'index',
                meta: {title: '后台 - 主页'},
                component: Panel
            }
        ]
    }
]

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
